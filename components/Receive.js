import React from 'react'
import { View, Text, FlatList, Pressable, Image } from 'react-native'
import HR from './HR'

export default function Receive({ receiveType }) {
    
    const BLOOD_TYPE_ICON = {
        "O+": require("./../assets/blood_icons/Opos.png"),
        "O-": require("./../assets/blood_icons/Oneg.png"),
        "A+": require("./../assets/blood_icons/Apos.png"),
        "A-": require("./../assets/blood_icons/Aneg.png"),
        "B+": require("./../assets/blood_icons/Bpos.png"),
        "B-": require("./../assets/blood_icons/Bneg.png"),
        "AB+": require("./../assets/blood_icons/ABpos.png"),
        "AB-": require("./../assets/blood_icons/ABneg.png")
    }

    return (
        <View style={{
            padding: 15,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fcecee",
            margin: 25,
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,  
            elevation: 3,
        }}>
            <View style={{
                width: "100%"
            }}>
                <Text style={{    
                    fontSize: 17,
                    fontWeight: "700",
                    color: "#da2f47",
                    textAlign: "center",
                }}>You can receive blood from</Text>
                <HR />
                <FlatList 
                    data={ receiveType }
                    keyExtractor={({  }, index) => `bloodType-${index}`}
                    horizontal={ true }
                    renderItem={({ item }) => {
                        // console.log(item)
                        return (
                            <Pressable
                                style={{
                                    padding: 10,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 2,  
                                    elevation: 5,
                                    backgroundColor: "#fff",
                                    marginRight: 10,
                                    borderRadius: 5,
                                }}
                            >
                                <Image 
                                    source={ BLOOD_TYPE_ICON[`${item}`] }
                                    style={{
                                        width: 40,
                                        height: 40,
                                    }}
                                />
                            </Pressable>
                        )
                    }}
                />
            </View>
        </View>
    )
}
