import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'

// Redux
import { useSelector } from 'react-redux'

// Component
import ModalHeader from '../components/ModalHeader'
import Header from '../components/Header'


export default function Donate({ navigation }) {

    const [isModal, setIsModal] = useState(false)
    
    const { user } = useSelector(state => state.user)

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <Header isModal={ isModal } setIsModal={ setIsModal } userName={ user.length > 0 ? user : "E" } />

            <View style={{
                flex: 1,
                opacity: isModal ? 0.3 : 1,
            }}>
                <Text>Donate</Text>
            </View>
            {
                isModal && (
                    <ModalHeader isModal={ isModal } setIsModal={ setIsModal } />
                )
            }
        </SafeAreaView>
    )
}
