import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    'name': 'user',
    initialState: {
        user: null,
        uid: null,
        userDetail: {},
        points: 0,
        donated: [],
        received: [],
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
        setUserPoints: (state, action) => {
            state.points = action.payload
        },
        updateDonation: (state, action) => {
            state.donated.push(action.payload)
        },
        setDonation: (state, action) => {
            state.donated = action.payload
        },
        updateReceiver: (state, action) => {
            state.received.push(action.payload)
        },
        setReceiver: (state, action) => {
            state.received = action.payload
        }
    }
})

export default userSlice.reducer
export const {
    loginSuccess, 
    registerSuccess,
    logoutSuccess,
    setUID,
    setUserDetail,
    setUserPoints,
    setDonation,
    updateDonation,
    setReceiver,
    updateReceiver,
} = userSlice.actions