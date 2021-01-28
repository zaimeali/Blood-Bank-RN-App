// React
import React from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './navigation/AuthStack'

// Firebase
import * as firebase from 'firebase'
import { firebaseConfig } from './auth/firebase'

// Context
import AuthProvider from './auth/AuthProvider'

// Initialize Firebase
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}


// // Root Stack
// const RootStack = createStackNavigator()
// const RootStackScreen = ({ userToken }) => (
//   <RootStack.Navigator
//     headerMode="none"
//   >
//     {
//       userToken ? (
//         <RootStack.Screen 
//           name="Home"
//           component={ LandingStackScreen }
//         />
//       ) : (
//         <RootStack.Screen 
//           name="Auth"
//           component={ LandingStackScreen }
//         />
//       )
//     }
//   </RootStack.Navigator>
// )


export default function App() {

  // const [userToken, setUserToken] = useState(null)

  // const authContext = useMemo(() => {
  //   return {
  //     signIn: () => {
  //       setUserToken("LOGGED-IN")
  //     },
  //     signUp: () => {
  //       setUserToken("LOGGED-IN")
  //     },
  //     signOut: () => {
  //       setUserToken(null)
  //     }
  //   }
  // }, [])

  return (
    // <AuthContext.Provider
    //   value={ authContext }
    // >
    //   <NavigationContainer>
    //     <RootStackScreen userToken={ userToken } />
    //   </NavigationContainer>
    // </AuthContext.Provider>

    <AuthProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </AuthProvider>
  )
}