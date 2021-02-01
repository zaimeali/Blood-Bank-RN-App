import React from 'react'

// Context
import { AuthContext } from './context'

// Async Storage
// import AsyncStorage from '@react-native-community/async-storage'

// Firebase
import firebase from 'firebase'


export default function AuthProvider({ children }) {

    const defValue = {
        login: async (email, password) => {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(res => console.log(res))
                .catch(err => console.error(err))
        },
        register: async (email, password, name) => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(res => console.log(res))
                .catch(err => console.error(err))
        },
        logout: async () => {
            firebase
                .auth()
                .signOut()
        }
    }

    return (
        <AuthContext.Provider
            value={ defValue }
        >
            { children }
        </AuthContext.Provider>
    )
}
