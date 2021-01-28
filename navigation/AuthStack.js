import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import LandingScreen from '../screens/LandingScreen'

const Stack = createStackNavigator()

export default function AuthStack() {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen 
                name="Landing"
                component={ LandingScreen }
                options={{
                    animationEnabled: false,
                }}
            />
            <Stack.Screen 
                name="Login"
                component={ LoginScreen }
                options={{
                    animationEnabled: false,
                }}
            />
            <Stack.Screen 
                name="Register"
                component={ RegisterScreen }
                options={{
                    animationEnabled: false,
                }}
            />
        </Stack.Navigator>
    )
}
