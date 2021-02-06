import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, Pressable, Dimensions, Alert } from 'react-native'
import { Container } from 'native-base'

// Styles
import { authScreenStyles as styles } from '../styles/style'

// Data
import { BLOOD_TYPE, BLOOD_LEVEL } from '../static/bloodTypes'

// Firebase
import firebase from 'firebase'

// Redux
import { useDispatch } from 'react-redux'
import { registerSuccess, setUID } from './../redux/userReducer'


export default function MoreDetails({ navigation }) {

    const [bloodType, setBloodType] = useState("")
    const [bloodLevel, setBloodLevel] = useState("")

    const [errBloodType, setErrBloodType] = useState("")
    const [errBloodLevel, setErrBloodLevel] = useState("")

    const [user, setUser] = useState({})

    useEffect(() => { 
        const subscriber = firebase.auth().onAuthStateChanged((authUser) => {
          setUser(authUser)
        })
        return subscriber
    }, [])

    const dispatch = useDispatch()


    const registerUser = async () => {

        if(bloodType.length === 0) {
            setErrBloodType("You didn't select the blood type 🤦")
        }
        if(bloodLevel.length === 0) {
            setErrBloodLevel("You didn't select the Rh 🤦")
        }

        if(bloodLevel.length > 0 && bloodType.length > 0) {
            
            await firebase.firestore()
                .collection("users")
                .doc(user.uid)
                .set({
                    email: user.email,
                    name: user.displayName,
                    uid: user.uid,
                    bloodType: `${bloodType}${bloodLevel}`,
                })
                .then(() => {
                    firebase.firestore()
                        .collection("points")
                        .doc(user.uid)
                        .set({
                            point: 0,
                        })
                        .then(() => {
                            console.log("Successfully Point Created")
                        })
                        .catch(err => console.error(err.message))

                    firebase.firestore()
                        .collection("donated")
                        .doc(user.uid)
                        .set({
                            donated: []
                        })
                        .then(() => {
                            console.log("Successfully Donated Created")
                        })
                        .catch(err => console.error(err.message))
                        
                    firebase.firestore()
                        .collection("receiver")
                        .doc(user.uid)
                        .set({
                            receiver: []
                        })
                        .then(() => {
                            console.log("Successfully Received Created")
                        })
                        .catch(err => console.error(err.message))

                    dispatch(registerSuccess(user.displayName))
                    dispatch(setUID(user.uid))
                })
                .catch(err => Alert.alert(
                    "",
                    `${ err.message }`
                ))

        }

    }

    return (
        <Container style={ {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            flexDirection: "column",
        }}>
            <View style={{ 
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                flex: 1.5,
            }}>
                <Image 
                    source={ require('./../assets/icon_rm.png') }
                    style={ styles.logoSize }
                />
                <Text style={ styles.logoText }>
                    Pick your blood type
                </Text>
                <Text style={{
                    padding: 15,
                }}>
                    Setting up your profile
                </Text>
            </View>
                <View style={{
                    flex: 1.5,
                    // backgroundColor: "black"
                }}>
                    <FlatList 
                        data={ BLOOD_TYPE }
                        numColumns={ 2 }
                        columnWrapperStyle={{
                            justifyContent: "space-around",
                        }}
                        keyExtractor={({  }, index) => `type-${index}`}
                        renderItem={(item) => (
                            <Pressable 
                                style={{
                                    backgroundColor: bloodType === item.item ? "#d80032" : "#f2f2f2",
                                    padding: 20,
                                    margin: 10,
                                    width: "40%",
                                    borderRadius: 10,
                                }}
                                onPress={() => {
                                    setErrBloodType("")
                                    setBloodType(item.item)
                                }}
                            >
                                <Text style={{
                                    textAlign: "center",
                                    color: bloodType === item.item ? "white" : "black",
                                    fontWeight: "700",
                                    fontSize: 16,
                                }}>{ item.item }</Text>
                            </Pressable>
                        )}
                    />
                    {
                        (errBloodType.length > 0) && (
                            <Text style={{
                                textAlign: "center",
                                color: "red",
                                padding: 10,
                            }}>
                                { errBloodType }
                            </Text>
                        )
                    }
                    <FlatList 
                        data={ BLOOD_LEVEL }
                        keyExtractor={({ }, index) => `level-${index}`}
                        columnWrapperStyle={{
                            justifyContent: "center",
                        }}
                        numColumns={ 2 }
                        renderItem={({ item }) => (
                            <Pressable
                                style={{
                                    backgroundColor: bloodLevel === item ? "#d80032" : "#f2f2f2",
                                    marginHorizontal: 10,
                                    padding: 20,
                                    borderRadius: 10,
                                }}
                                onPress={() => {
                                    setErrBloodLevel("")
                                    setBloodLevel(item)
                                }}
                            >
                                <Text style={{
                                    color: bloodLevel === item ? "white" : "black",
                                    fontSize: 17,
                                }}>{ item }</Text>
                            </Pressable>
                        )}
                    />
                    {
                        (errBloodLevel.length > 0) && (
                            <Text style={{
                                textAlign: "center",
                                color: "red",
                                padding: 10,
                            }}>
                                { errBloodLevel }
                            </Text>
                        )
                    }
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                }}>
                    <TouchableOpacity
                        style={ {
                            backgroundColor: "#da2f47",
                            paddingHorizontal: 25,
                            paddingVertical: 10,
                            borderRadius: 5,
                            marginVertical: 10,
                            width: Dimensions.get('window').width * 0.9,
                        }}
                        onPress={() => registerUser()}
                    >
                        <Text style={ {
                            color: "#fff",
                            fontWeight: "700",
                            fontSize: 17,
                            textAlign: "center",
                        }}>Save Details</Text>
                    </TouchableOpacity>   
                </View>
        </Container>
    )
}
