import { createSlice } from "@reduxjs/toolkit";

const name ='user'

const initialState = {
    user: {}
}

export const userSlice = createSlice({
    name,
    initialState,
    reducers: {
        increment: (state, action) => {
            state.user = 'Hello World'
        },
        decrement: (state, action) => {
            state.user = 'Hello W'
        },
    },
    extraReducers: {}
})

export const { reducer: userReducer } = userSlice
export const { actions: userActions } = userSlice
