import React, { useState } from 'react'
import { View, Text, Dimensions, Image, Pressable, Modal } from 'react-native'
// import { Ionicons } from '@expo/vector-icons'

export default function Header({ isModal, setIsModal, userName }) {

    return (
        <View style={{
            width: Dimensions.get('window').width,
            height: 90,
            paddingTop: 30,
            paddingHorizontal: 20,
            backgroundColor: "#da2f47",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <View>
                <Image 
                    source={ require('./../assets/icon.png') }
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                    }}
                />
            </View>

            <View>
                <Text style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: 18,
                }}>Saylani Blood Bank 🚑</Text>
            </View>

            <Pressable 
                onPress={() => {
                    setIsModal(!isModal)
                }}
                style={{
                    backgroundColor: "#fcecee",
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text style={{
                    textAlign: "center",
                    fontWeight: "700",
                }}>{ userName.length > 0 ? userName[0] : "J" }</Text>
            </Pressable>
        </View>
    )
}
