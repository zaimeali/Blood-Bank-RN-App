import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Container } from 'native-base'

// Styles
import { landingScreenStyles as styles } from './../styles/style'


export default function LandingScreen({ navigation }) {
    return (
        <Container style={ styles.container }>
                <View style={ styles.logoView }>
                    <Image 
                        source={ require('./../assets/icon.png') }
                        style={ styles.logoSize }
                    />
                    <Text style={ styles.appHeadingText }>Saylani Blood Bank 🚑</Text>
                </View>
                <View style={ styles.btnView }>
                    <TouchableOpacity 
                        style={ styles.btnStyle } 
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={ styles.btnText }>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={ styles.btnStyle } 
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={ styles.btnText }>Register</Text>
                    </TouchableOpacity> 
                </View>
        </Container>
    )
}
