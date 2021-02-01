import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    'name': 'user',
    initialState: {
        user: null,
        uid: null,
        userDetail: {},
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
        },
        registerSuccess: (state, action) => {
            state.user = action.payload
        },
        logoutSuccess: (state, action) => {
            state.user = null
        },
        setUID: (state, action) => {
            state.uid = action.payload
        },
        setUserDetail: (state, action) => {
            state.userDetail = action.payload
        },
    }
})

export default userSlice.reducer
export const {
    loginSuccess, 
    registerSuccess,
    logoutSuccess,
    setUID,
    setUserDetail,
} = userSlice.actions