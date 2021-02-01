// React
import React, { useEffect } from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './navigation/AuthStack'
import RootStack from './navigation/RootStack'

// Firebase
import firebase from 'firebase'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { loginSuccess, setUID } from './redux/userReducer'


export default function Route() {

  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => { 
    const subscriber = firebase.auth().onAuthStateChanged((authUser) => {
        if(authUser?.displayName) {
            dispatch(loginSuccess(authUser.displayName))
            dispatch(setUID(authUser.uid))
        }
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