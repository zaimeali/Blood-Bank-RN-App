import React, { useState } from 'react'
import { View, Text, SafeAreaView, Alert } from 'react-native'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { setUserPoints, updateDonation } from '../redux/userReducer'

// Component
import ModalHeader from '../components/ModalHeader'
import Header from '../components/Header'

// Firebase
import firebase from 'firebase'

// Native Base
import { Button, Form, Input, Item, Label } from 'native-base'

// Moment
import moment from 'moment'


export default function Donate({ navigation, route }) {

    const [isModal, setIsModal] = useState(false)
    
    const [amount, setAmount] = useState(0)
    const [donatingTo, setDonatingTo] = useState("")
    
    const { user, uid, points } = useSelector(state => state.user)

    const { bloodType } = route.params

    const dispatch = useDispatch()
    const { donated } = useSelector(state => state.user)

    const submitValue = async () => {
        if(donatingTo.length <= 0) {
            Alert.alert("Error", "You forgot to enter Receiver name")
            return;
        }
        if(amount < 0) {
            Alert.alert("Error", "You must enter number in Positive")
            return;
        }
        if(amount.length == 0) {
            Alert.alert("Error", "You forgot to enter amount of blood in litre")
            return;
        }
        if(Number(amount) === 0) {
            Alert.alert("Error", "You can't donate 0 litre blood")
            return;
        }

        if(donatingTo.length > 0 && Number(amount) > 0 && amount.length > 0) {
            const datetime = new Date()

            const newDonation = {
                "bloodType": bloodType,
                "time": moment(datetime).format("LT"),
                "date": moment(datetime).format('L'),
                "to_person": donatingTo,
                "amount_of_blood": amount,
                "by_person": user
            }

            await firebase.firestore()
                .collection("points")
                .doc(uid)
                .set({
                    point: points + 1,
                })
                .then(() => {
                    console.log("Successfully Point Increased")
                    dispatch(setUserPoints(points + 1))

                    firebase.firestore()
                        .collection("donated")
                        .doc(uid)
                        .set({
                            donated: [...donated, newDonation]
                        })
                        .then(() => {
                            dispatch(updateDonation(newDonation))
                            console.log("Successfully Donation Added")
                            navigation.navigate("Home")
                        })
                        .catch(err => console.error(err.message))
                })
                .catch(err => console.error(err.message))

        }
    }

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <Header isModal={ isModal } setIsModal={ setIsModal } userName={ user.length > 0 ? user : "E" } />

            <View style={{
                flex: 1,
                opacity: isModal ? 0.3 : 1,
            }}>
                <Text style={{
                    textAlign: "center",
                    paddingVertical: 15,
                    fontSize: 20,
                    fontWeight: "700",
                    color: "#da2f47",
                }}>Donating Blood to</Text>
                <Form>
                    <Item inlineLabel disabled style={{
                        backgroundColor: "#EBEBE4"
                    }}>
                        <Label style={{
                            fontWeight: "700"
                        }}>Blood Type 🩸</Label>
                        <Input style={{
                            color: "#C6C6C6"
                        }} disabled value={ bloodType } />
                    </Item>
                    <Item inlineLabel>
                        <Label style={{
                            fontWeight: "700"
                        }}>Amount of Blood 💉</Label>
                        <Input 
                            placeholder="In Litre" 
                            keyboardType="numeric" 
                            value={ `${ amount }` }
                            onChangeText={ e => setAmount(`${ e }`) }
                        />
                    </Item>
                    <Item inlineLabel>
                        <Label style={{
                            fontWeight: "700"
                        }}>Receiver 🧍</Label>
                        <Input 
                            placeholder="Receiver Name" 
                            value={ donatingTo }
                            onChangeText={ e => setDonatingTo(e) }
                        />
                    </Item>
                    <Button block rounded 
                        style={{
                            margin: 25,
                            padding: 20,
                        }}
                        onPress={ () => submitValue() }
                    >
                        <Text style={{
                            color: "#fff",
                            fontSize: 16,
                        }}>Enter</Text>
                    </Button>
                </Form>
            </View>
            {
                isModal && (
                    <ModalHeader isModal={ isModal } setIsModal={ setIsModal } />
                )
            }
        </SafeAreaView>
    )
}
