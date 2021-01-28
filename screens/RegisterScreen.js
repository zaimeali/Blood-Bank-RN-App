import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { Container } from 'native-base'

import { authScreenStyles as styles } from '../styles/style'

export default function RegisterScreen({ navigation }) {
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
                    style={ styles.defaultField }
                />  
                <TextInput 
                    placeholder="Enter Email"
                    style={ styles.defaultField }
                />    
                <TextInput 
                    placeholder="Enter Password"
                    style={ styles.defaultField }
                    secureTextEntry={ true }
                />     
                <TouchableOpacity
                    style={ styles.defaultBtn }
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
