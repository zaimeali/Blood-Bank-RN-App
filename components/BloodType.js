import React from 'react'
import { View, Text, Image } from 'react-native'

// Static
import { BLOOD_TYPE_ICON } from './../static/bloodTypes'


export default function BloodType({ bloodType }) {

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
            <Text style={{
                fontSize: 17,
                fontWeight: "700",
                color: "#da2f47",
            }}>Your Blood Type:</Text>
            <Image 
                source={ BLOOD_TYPE_ICON[`${bloodType}`] }
                style={{
                    width: 35,
                    height: 35,
                }}
            />
        </View>
    )
}
