import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

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


export default function HomeScreen() {

    const { uid, userDetail } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if(uid.length > 0) {
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

    console.log(userDetail)
    console.log(DONOR[userDetail.bloodType])

    return (
        <View style={{
            flex: 1,
        }}>
            <BloodType bloodType={ userDetail.bloodType } />
            <Donate donateType={ DONOR[userDetail.bloodType] } />
            <Receive receiveType={ DONOR[userDetail.bloodType] } />
        </View>
    )
}
