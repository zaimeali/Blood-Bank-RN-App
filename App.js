// React
import React, { useState, useEffect, useContext } from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './navigation/AuthStack'
import RootStack from './navigation/RootStack'

// Async Storage
import AsyncStorage from '@react-native-community/async-storage'

// Firebase
import * as firebase from 'firebase'
import { firebaseConfig } from './auth/firebase'

// Context
// import AuthProvider from './auth/AuthProvider'

// Initialize Firebase
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}



export default function App() {

  // const { user, setUser } = useContext(AuthContext)
  const [user, setUser] = useState(false)
  // const { authUser } = useContext(AuthContext)

  // console.log(authUser)

  // const onAuthStateChanged = (user) => {
  //   setUser(user)
  // }

  useEffect(() => { 
    const subscriber = firebase.auth().onAuthStateChanged((authUser) => {
      console.log(authUser)
      // if(authUser?.uid) {
      //   // console.log(authUser.uid)
      //   // setUser(authUser.uid)
      //   setUser(false)
      // }
    })
    return subscriber
  }, [])

  return (
    <NavigationContainer>
      {
        user ? (
          <RootStack />
        ) : (
          <AuthStack />
        )
      }
    </NavigationContainer>
  )
}