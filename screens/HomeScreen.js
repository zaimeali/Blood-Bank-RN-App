import React, { useEffect, useState, Fragment } from 'react'
import { View, Text, SafeAreaView, Modal, ActivityIndicator, ScrollView } from 'react-native'

import { homeScreenStyles as styles } from '../styles/style'

// Firebase
import firebase from 'firebase'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setDonation, setReceiver, setUserDetail, setUserPoints } from '../redux/userReducer'

// Static Data
import { DONOR, RECEIVER } from './../static/bloodTypes'

// Components
import BloodType from '../components/BloodType'
import Donate from '../components/Donate'
import Receive from '../components/Receive'
import Header from '../components/Header'
import ModalHeader from '../components/ModalHeader'
import YourPoints from '../components/YourPoints'
import History from '../components/History'


export default function HomeScreen({ navigation }) {

    const [isModal, setIsModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const { uid, userDetail, user } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        const subscriber = firebase.auth().onAuthStateChanged((authUser) => {
            if(authUser?.uid) {
                const userRef = firebase.firestore()
                    .collection("users")
                    .doc(authUser.uid)
                    .get()
                    .then(doc => {
                        if(doc.exists) {
                            dispatch(setUserDetail(doc.data()))
                        }
                        else {
                            console.log("No Data Found for such user")
                        }
                    })
                    .catch(err => console.error(err.message))

                const pointRef = firebase.firestore()
                    .collection("points")
                    .doc(authUser.uid)
                    .get()
                    .then(doc => {
                        if(doc.exists) {
                            dispatch(setUserPoints(doc.data().point))
                        }
                        else {
                            console.log("No Points Found for such user")
                        }
                    })
                    .catch(err => console.error(err.message))

                const donatedRef = firebase.firestore()
                    .collection("donated")
                    .doc(authUser.uid)
                    .get()
                    .then(doc => {
                        if(doc.exists) {
                            dispatch(setDonation(doc.data().donated))
                        }
                        else {
                            console.log("No Donation Found for such user")
                        }
                    })
                    .catch(err => console.error(err.message))

                const receiverRef = firebase.firestore()
                    .collection("receiver")
                    .doc(authUser.uid)
                    .get()
                    .then(doc => {
                        if(doc.exists) {
                            dispatch(setReceiver(doc.data().receiver))
                        }
                        else {
                            console.log("No Received Blood Found for such user")
                        }
                    })
                    .catch(err => console.error(err.message))

                setLoading(false) 
            }
        })
        
        return subscriber
    }, [])

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            {
                loading ? (
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <ActivityIndicator size="large" color="#da2f47"  />
                    </View>
                ) : (
                    <Fragment>
                        <Header isModal={ isModal } setIsModal={ setIsModal } userName={ user.length > 0 ? user : "E" } />
                        <ScrollView style={{
                            opacity: isModal ? 0.3 : 1,
                        }}>
                            <YourPoints userID={ uid } />
                            <BloodType bloodType={ userDetail.bloodType } />
                            <Donate donateType={ DONOR[userDetail.bloodType] } navigation={ navigation } />
                            <Receive receiveType={ RECEIVER[userDetail.bloodType] } navigation={ navigation } />
                            <History userID={ uid } />
                        </ScrollView>

                        {
                            isModal && (
                                <ModalHeader isModal={ isModal } setIsModal={ setIsModal } />
                            )
                        }
                    </Fragment>
                )
            }

        </SafeAreaView>
    )
}
