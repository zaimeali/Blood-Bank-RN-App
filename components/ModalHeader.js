import React from 'react'
import { View, Text, Dimensions, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

// Components
import HR from './HR'

// Firebase
import firebase from 'firebase'

// Redux
import { useDispatch } from 'react-redux'
import { logoutSuccess } from '../redux/userReducer'


export default function ModalHeader({ isModal, setIsModal }) {

    const dispatch = useDispatch()

    return (
        <View style={{
            backgroundColor: "#fff",
            position: "absolute",
            height: 300,
            width: Dimensions.get('window').width * 0.7,
            alignSelf: "center",
            bottom: Dimensions.get('window').height * 0.25,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,  
            elevation: 5,
            borderRadius: 10,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
        }}>

            <Pressable 
                style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                }}
                onPress={ () => setIsModal(!isModal) }
            >
                <Ionicons 
                    name="md-close-circle-outline" size={24} color="#da2f47"
                />
            </Pressable>

            <Pressable
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#da2f47",
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingVertical: 10,
                    paddingHorizontal: 40,
                }}
            >
                <Text style={{
                    color: "#da2f47",
                    marginRight: 5,
                    fontSize: 16,
                    fontWeight: "700"
                }}>Settings</Text>
                <Ionicons name="md-settings-outline" size={20} color="#da2f47" />
            </Pressable>


            <View style={{
                position: "absolute",
                bottom: 20,
            }}>
                <HR />
                <Pressable
                    style={{
                        backgroundColor: "#da2f47",
                        paddingVertical: 10,
                        paddingHorizontal: 40,
                        borderRadius: 5,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={ () => {
                        firebase.auth()
                            .signOut()
                            .then(() => {
                                dispatch(logoutSuccess())
                            })
                            .catch(err => console.error(err.message))
                    } }
                >
                    <Text style={{
                        color: "#fff",
                        fontSize: 16,
                        marginRight: 5,
                    }}>Log Out</Text>
                    <Ionicons name="exit-outline" size={22} color="white" />
                </Pressable>
            </View>
        </View>
    )
}
