import React from 'react'
import { View, Text } from 'react-native'

export default function BloodType({ bloodType }) {
    return (
        <View>
            <Text>Your Blood Type: { bloodType }</Text>
        </View>
    )
}
