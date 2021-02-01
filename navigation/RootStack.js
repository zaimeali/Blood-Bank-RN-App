import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

export default function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={ HomeScreen }
            />
        </Stack.Navigator>
    )
}
