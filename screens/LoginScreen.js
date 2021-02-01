import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, TextInput, Alert } from 'react-native'
import { Container } from 'native-base'

import { authScreenStyles as styles } from '../styles/style'

// Firebase
import firebase from 'firebase'

// Redux
import { useDispatch } from 'react-redux'
import { loginSuccess, setUID } from '../redux/userReducer'


export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errEmailMsg, setErrEmailMsg] = useState("")
    const [errPasswordMsg, setErrPasswordMsg] = useState("")

    const dispatch = useDispatch()

    const submitValues = () => {
        if(email.length === 0) {
            setErrEmailMsg("You forgot to enter email")
        }

        if(password.length === 0) {
            setErrPasswordMsg("You forgot to enter password")   
        }
        
        if(password.length < 8 && password.length > 0) {
            setErrPasswordMsg("Password minimum length should be 8")
            setPassword("")
        }

        if(email.length && password.length >= 8) {

            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)        
                .then((userCredential) => {
                    // console.log(userCredential.user.uid)
                    dispatch(loginSuccess(userCredential.user.displayName))
                    dispatch(setUID(userCredential.user.uid))
                })
                .catch((error) => {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    Alert.alert(
                        errorCode,
                        errorMessage
                    )
                });
                // .then(authUser => {
                //     authUser.user.updateProfile({
                //         displayName: name,
                //     })
                //     navigation.navigate('Detail')
                // })
                // .catch(err => {
                //     Alert.alert(
                //         '',
                //         `${ err.message }`
                //     )
                //     setPassword("")
                // })
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
                    Login
                </Text>
            </View>
            <View style={ styles.fieldContainer }>
                <TextInput 
                    placeholder="Enter Email"
                    style={[ errEmailMsg.length === 0 ? styles.defaultField : styles.errDefaultField, ]}
                    value={ email }
                    onChangeText={(e) => setEmail(e)}
                    keyboardType="email-address"
                    selectTextOnFocus
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    autoCapitalize="none"
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
                    value={ password }
                    secureTextEntry={ true }
                    onChangeText={(e) => setPassword(e)}
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
                    <Text style={ styles.defaultBtnText }>Login</Text>
                </TouchableOpacity>   
            </View>
            <View style={ styles.navigationContainer }>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('Register') }
                >
                    <Text style={ styles.navigationText }>Don't have an account?</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}