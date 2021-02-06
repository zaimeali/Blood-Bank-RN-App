import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

// Components
import HR from './HR'

// Firebase
import firebase from 'firebase'


export default function History({ userID }) {

    const [donated, setDonated] = useState([])
    const [received, setReceived] = useState([])

    useEffect(() => {
        if(userID?.length) {
            const docRef = firebase.firestore()
                .collection('history')
                .doc(userID)
                .get()
                .then(doc => {
                    if(doc.exists) {
                        console.log(doc.data().donated)
                        console.log(doc.data().received)
                        // setDonated(doc.data().donated)
                        // setReceived(doc.data().received)
                    }
                })
                .catch(err => console.error(err.message)) 
        } 
    }, [])

    //     const registerPoints = async () => {
    //         await firebase.firestore()
    //             .collection("history")
    //             .doc(userID)
    //             .set({
    //                 donated: [
    //                     {
    //                         "bloodType": "",
    //                         "time": "",
    //                         "date": "",
    //                         "to_person": "",
    //                         "amount_of_blood": "",
    //                     }
    //                 ],
    //                 received: [
    //                     {
    //                         "bloodType": "",
    //                         "time": "",
    //                         "date": "",
    //                         "to_person": "",
    //                         "amount_of_blood": "",
    //                     }
    //                 ]
    //             })
    //             .then(() => {
    //                 console.log("nice")
    //             })
    //             .catch(err => Alert.alert(
    //                 "",
    //                 `${ err.message }`
    //             )) 
    // }
    // registerPoints()

    return (
        <View style={{
            padding: 15,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fcecee",
            margin: 25,
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,  
            elevation: 3,
        }}>
            <View style={{
                width: "100%"
            }}>
                <Text style={{    
                    fontSize: 17,
                    fontWeight: "700",
                    color: "#da2f47",
                    textAlign: "center",
                }}>Your History</Text>
            </View>
            <HR />
            <View style={{
                width: "100%"
            }}>
                <Text style={{    
                    fontSize: 15,
                    fontWeight: "700",
                    color: "#da2f47",
                    textAlign: "center",
                }}>Blood you have donated 🩸</Text>
                {
                    // Object.keys(donated).length 
                    donated.length ? (
                        <Text>Woaah</Text>
                    ) : (
                        <Text>You haven't donate any blood 😟</Text>
                    )
                }
            </View>
            <HR />
            <View style={{
                width: "100%"
            }}>
                <Text style={{    
                    fontSize: 15,
                    fontWeight: "700",
                    color: "#da2f47",
                    textAlign: "center",
                }}>Blood you have received 🩸</Text>
                {
                    // Object.keys(received).length 
                    received.length ? (
                        <Text>Woajdbaj</Text>
                    ) : (
                        <Text>You haven't receive any blood 😀</Text>
                    )
                }
            </View>
        </View>
    )
}
