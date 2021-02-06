import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import HomeScreen from '../screens/HomeScreen'
import Donate from '../screens/Donate'
import Receive from '../screens/Receive'

const Stack = createStackNavigator()

export default function RootStack() {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen 
                name="Home"
                component={ HomeScreen }
                options={{
                    animationEnabled: false,
                }}
            />
            <Stack.Screen 
                name="Donate"
                component={ Donate }
                options={{
                    animationEnabled: false,
                }}
            />
            <Stack.Screen 
                name="Receive"
                component={ Receive }
                options={{
                    animationEnabled: false,
                }}
            />
        </Stack.Navigator>
    )
}
