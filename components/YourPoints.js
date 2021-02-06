import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, Alert } from 'react-native'

// Firebase
import firebase from 'firebase'


export default function YourPoints({ userID }) {

    const [totalPoints, setTotalPoints] = useState(0)


    useEffect(() => {
        if(userID?.length) {
            const docRef = firebase.firestore()
                .collection('points')
                .doc(userID)
                .get()
                .then(doc => {
                    if(doc.exists) {
                        setTotalPoints(doc.data().point)
                    }
                })
                .catch(err => console.error(err.message)) 
        } 
    }, [])

    const infoPoints = () => {
        Alert.alert(
            "Points Information",
            "- When User Donate the Blood the Point of the User will increase 💗.\n- If User receive the Blood the point will decrease 🙁.",
            [
                { text: "OK! Got it" }
            ]
        )
    }


    return (
        <View style={{
            padding: 15,
            flexDirection: "row",
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
            <Text style={{
                fontSize: 17,
                fontWeight: "700",
                color: "#da2f47",
            }}>Your Total Points: { totalPoints }</Text>
            <Pressable 
                style={{
                    position: "absolute",
                    top: 5,
                    right: 15,
                    backgroundColor: "#2bacee",
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onPress={ infoPoints }
            >
                <Text style={{
                    textAlign: "center",
                    fontWeight: "700",
                    color: "#fff",
                    fontSize: 12,
                    fontStyle: "italic",
                }}>
                    i
                </Text>
            </Pressable>
        </View>
    )
}
