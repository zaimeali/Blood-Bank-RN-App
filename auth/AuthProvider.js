import React, { useState } from 'react'
import { AuthContext } from './context'

// Firebase
import firebase from 'firebase'

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    const defValue = {
        user, 
        setUser,
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
