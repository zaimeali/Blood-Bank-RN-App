import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'

// Redux
import { useSelector } from 'react-redux'

// Components
import Header from '../components/Header'
import ModalHeader from '../components/ModalHeader'


export default function Receive({ navigation }) {

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
                <Text>Receive</Text>
            </View>
            {
                isModal && (
                    <ModalHeader isModal={ isModal } setIsModal={ setIsModal } />
                )
            }
        </SafeAreaView>
    )
}
