import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Modal } from 'react-native'

import { homeScreenStyles as styles } from '../styles/style'

// Firebase
import firebase from 'firebase'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setUserDetail } from '../redux/userReducer'

// Static Data
import { DONOR } from './../static/bloodTypes'

// Components
import BloodType from '../components/BloodType'
import Donate from '../components/Donate'
import Receive from '../components/Receive'
import Header from '../components/Header'
import ModalHeader from '../components/ModalHeader'


export default function HomeScreen() {

    const [isModal, setIsModal] = useState(false)

    const { uid, userDetail, user } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if(uid?.length > 0) {
            const docRef = firebase.firestore()
            .collection("users")
            .doc(uid)
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
        } 
    }, [])

    // console.log(userDetail)
    // console.log(DONOR[userDetail.bloodType])

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <Header isModal={ isModal } setIsModal={ setIsModal } userName={ user.length > 0 ? user : "E" } />
            <View style={{
                opacity: isModal ? 0.3 : 1,
            }}>
                <BloodType bloodType={ userDetail.bloodType } />
                <Donate donateType={ DONOR[userDetail.bloodType] } />
                <Receive receiveType={ DONOR[userDetail.bloodType] } />
            </View>

            {
                isModal && (
                    <ModalHeader isModal={ isModal } setIsModal={ setIsModal } />
                )
            }

        </SafeAreaView>
    )
}
