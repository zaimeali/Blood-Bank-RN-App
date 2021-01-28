import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { Container } from 'native-base'

import { authScreenStyles as styles } from '../styles/style'

export default function LoginScreen({ navigation }) {
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
                    style={ styles.defaultField }
                />    
                <TextInput 
                    placeholder="Enter Password"
                    style={ styles.defaultField }
                />     
                <TouchableOpacity
                    style={ styles.defaultBtn }
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