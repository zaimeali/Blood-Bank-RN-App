import React, { useEffect, useState, Fragment } from 'react'
import { View, Text, SafeAreaView, Modal, ActivityIndicator } from 'react-native'

import { homeScreenStyles as styles } from '../styles/style'

// Firebase
import firebase from 'firebase'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setUserDetail } from '../redux/userReducer'

// Static Data
import { DONOR, RECEIVER } from './../static/bloodTypes'

// Components
import BloodType from '../components/BloodType'
import Donate from '../components/Donate'
import Receive from '../components/Receive'
import Header from '../components/Header'
import ModalHeader from '../components/ModalHeader'


export default function HomeScreen() {

    const [isModal, setIsModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const { uid, userDetail, user } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        const subscriber = firebase.auth().onAuthStateChanged((authUser) => {
            if(authUser?.uid) {
                const docRef = firebase.firestore()
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
                        <View style={{
                            opacity: isModal ? 0.3 : 1,
                        }}>
                            <BloodType bloodType={ userDetail.bloodType } />
                            <Donate donateType={ DONOR[userDetail.bloodType] } />
                            <Receive receiveType={ RECEIVER[userDetail.bloodType] } />
                        </View>

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
