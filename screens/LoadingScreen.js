import React from 'react'
import { View, Text } from 'react-native'

import { loadingScreenStyles as styles } from '../styles/style'

export default function LoadingScreen() {
    return (
        <View style={ styles.container }>
            <Text>Loading Screen</Text>
        </View>
    )
}
