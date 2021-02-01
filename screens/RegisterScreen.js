import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import { Container } from 'native-base'

import { authScreenStyles as styles } from '../styles/style'

// Firebase
import firebase from 'firebase'


export default function RegisterScreen({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const [errEmailMsg, setErrEmailMsg] = useState("")
    const [errPasswordMsg, setErrPasswordMsg] = useState("")
    const [errNameMsg, setErrNameMsg] = useState("")

    const submitValues = () => {
        if(email.length === 0) {
            setErrEmailMsg("You forgot to enter email")
        }

        if(password.length === 0) {
            setErrPasswordMsg("You forgot to enter password")   
        }

        if(name.length === 0) {
            setErrNameMsg("You forgot to enter name")
        }

        if(password.length < 8 && password.length > 0) {
            setErrPasswordMsg("Password minimum length should be 8")
            setPassword("")
        }

        if(email.length && name.length && password.length >= 8) {

            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    authUser.user.updateProfile({
                        displayName: name,
                    })
                    navigation.navigate('Detail')
                })
                .catch(err => {
                    Alert.alert(
                        '',
                        `${ err.message }`
                    )
                    setPassword("")
                })
        }
    }

    return (
        <Container style={ styles.container }>
            <View style={ styles.logoContainer }>
                <Image 
                    source={ require('./../assets/icon.png') }
                    style={ styles.logoSize }
                />
                <Text style={ styles.logoText }>
                    Register
                </Text>
            </View>
            <View style={ styles.fieldContainer }>
                <TextInput 
                    placeholder="Enter Name"
                    style={[ errNameMsg.length === 0 ? styles.defaultField : styles.errDefaultField, ]}
                    onChangeText={(e) => setName(e)}
                    value={ name }
                    onFocus={() => setErrNameMsg("")}
                    onBlur={() => {
                        if(name.length === 0) {
                            setErrNameMsg("Name is required")
                        }
                    }}
                />  
                {
                    (errNameMsg.length > 0) && (
                        <Text style={{
                            textAlign: "center",
                            color: "red",
                        }}>{ errNameMsg }</Text>
                    )
                }
                <TextInput 
                    placeholder="Enter Email"
                    style={[ errEmailMsg.length === 0 ? styles.defaultField : styles.errDefaultField, ]}
                    onChangeText={(e) => setEmail(e)}
                    value={ email }
                    keyboardType="email-address"
                    selectTextOnFocus
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    onFocus={() => setErrEmailMsg("")}
                    onBlur={() => {
                        if(email.length === 0) {
                            setErrEmailMsg("Email is required")
                        }
                    }}
                />  
                {
                    (errEmailMsg.length > 0) && (
                        <Text style={{
                            textAlign: "center",
                            color: "red",
                        }}>{ errEmailMsg }</Text>
                    )
                }  
                <TextInput 
                    placeholder="Enter Password"
                    style={[ errPasswordMsg.length === 0 ? styles.defaultField : styles.errDefaultField, ]}
                    secureTextEntry={ true }
                    onChangeText={(e) => setPassword(e)}
                    value={ password }
                    onFocus={() => {
                        setErrPasswordMsg("")
                    }}
                    onBlur={() => {
                        if(password.length === 0) {
                            setErrPasswordMsg("Password is required")
                        }
                    }}
                />     
                {
                    (errPasswordMsg.length > 0) && (
                        <Text style={{
                            textAlign: "center",
                            color: "red",
                        }}>{ errPasswordMsg }</Text>
                    )
                }  
                <TouchableOpacity
                    style={ styles.defaultBtn }
                    onPress={() => submitValues()}
                >
                    <Text style={ styles.defaultBtnText }>Register</Text>
                </TouchableOpacity>   
            </View>
            <View style={ styles.navigationContainer }>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('Login') }
                >
                    <Text style={ styles.navigationText }>Have an account?</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}
