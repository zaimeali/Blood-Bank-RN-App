import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Pressable, Image, Alert } from 'react-native'

// Components
import HR from './HR'

// Firebase
import firebase from 'firebase'


export default function History({ userID }) {

    const BLOOD_TYPE_ICON = {
        "O+": require("./../assets/blood_icons/Opos.png"),
        "O-": require("./../assets/blood_icons/Oneg.png"),
        "A+": require("./../assets/blood_icons/Apos.png"),
        "A-": require("./../assets/blood_icons/Aneg.png"),
        "B+": require("./../assets/blood_icons/Bpos.png"),
        "B-": require("./../assets/blood_icons/Bneg.png"),
        "AB+": require("./../assets/blood_icons/ABpos.png"),
        "AB-": require("./../assets/blood_icons/ABneg.png")
    }

    const [donated, setDonated] = useState([])
    const [received, setReceived] = useState([])

    useEffect(() => {
        if(userID?.length) {
            const docRef1 = firebase.firestore()
                .collection('donated')
                .doc(userID)
                .get()
                .then(doc => {
                    if(doc.exists) {
                        setDonated(doc.data().donated)
                    }
                })
                .catch(err => console.error(err.message)) 
            const docRef2 = firebase.firestore()
                    .collection('received')
                    .doc(userID)
                    .get()
                    .then(doc => {
                        if(doc.exists) {
                            setReceived(doc.data().received)
                        }
                    })
                    .catch(err => console.error(err.message)) 
        }
    }, [])

    //     const registerPoints = async () => {
    //         await firebase.firestore()
    //             .collection("donated")
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
    //             })
    //             .then(() => {
    //                 console.log("nice")
    //             })
    //             .catch(err => Alert.alert(
    //                 "",
    //                 `${ err.message }`
    //             )) 
    //         await firebase.firestore()
    //             .collection("received")
    //             .doc(userID)
    //             .set({
    //                 received: [
    //                     {
    //                         "bloodType": "",
    //                         "time": "",
    //                         "date": "",
    //                         "to_person": "",
    //                         "amount_of_blood": "",
    //                     }
    //                 ],
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
                }}>Blood you have donated to 🩸</Text>
                {
                    // Object.keys(donated).length 
                    donated.length ? (   
                        <FlatList 
                            data={ donated }
                            keyExtractor={({  }, index) => `donated-${index}`}
                            horizontal={ true }
                            style={{
                                paddingVertical: 10,
                            }}
                            renderItem={({ item }) => {
                                return (
                                    <Pressable
                                        style={{
                                            padding: 10,
                                            shadowColor: '#000',
                                            shadowOffset: { width: 0, height: 1 },
                                            shadowOpacity: 0.8,
                                            shadowRadius: 2,  
                                            elevation: 5,
                                            backgroundColor: "#fff",
                                            marginRight: 10,
                                            borderRadius: 5,
                                        }}
                                        onPress={ () => Alert.alert(
                                            "Blood Donate Detail",
                                            `Blood Type: ${ item.bloodType }\nAmount: ${ item.amount_of_blood } Litre\nFrom: ${ item.to_person }\nDate: ${ item.date }\nTime: ${item.time}`
                                        ) }
                                    >
                                        <Image 
                                            source={ BLOOD_TYPE_ICON[`${item.bloodType}`] }
                                            style={{
                                                width: 40,
                                                height: 40,
                                            }}
                                        />
                                    </Pressable>
                                )
                            }}
                        />
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
                }}>Blood you have received from 🩸</Text>
                {
                    // Object.keys(received).length 
                    received.length ? (
                        <FlatList 
                            data={ received }
                            keyExtractor={({  }, index) => `received-${index}`}
                            horizontal={ true }
                            style={{
                                paddingVertical: 10,
                            }}
                            renderItem={({ item }) => {
                                return (
                                    <Pressable
                                        style={{
                                            padding: 10,
                                            shadowColor: '#000',
                                            shadowOffset: { width: 0, height: 1 },
                                            shadowOpacity: 0.8,
                                            shadowRadius: 2,  
                                            elevation: 5,
                                            backgroundColor: "#fff",
                                            marginRight: 10,
                                            borderRadius: 5,
                                        }}
                                        onPress={ () => Alert.alert(
                                            "Blood Receive Detail",
                                            `Blood Type: ${ item.bloodType }\nAmount: ${ item.amount_of_blood } Litre\nFrom: ${ item.to_person }\nDate: ${ item.date }\nTime: ${item.time}`
                                        ) }
                                    >
                                        <Image 
                                            source={ BLOOD_TYPE_ICON[`${item.bloodType}`] }
                                            style={{
                                                width: 40,
                                                height: 40,
                                            }}
                                        />
                                    </Pressable>
                                )
                            }}
                        />
                    ) : (
                        <Text>You haven't receive any blood 😀</Text>
                    )
                }
            </View>
        </View>
    )
}
