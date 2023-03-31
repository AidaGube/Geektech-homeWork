import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axios } from 'axios';

const name = 'post'

const initialState = {
    post: 'Post work',
    status: ''
}

export const postFetch = createAsyncThunk(
    `${name}/postFetch`, //название нашего санка должен быть индивидуальным

    async (_, { extra: api }) => { //второй аргумент колбэк
        const data = await api.get('/posts') //запрос на посты
        return data
    }
)

export const postSlice = createSlice({
    name,
    initialState,
    reducers: {
        increment: (state, action) => {
            state.post = 'Hello World'
        },
        decrement: (state, action) => {
            state.post = 'Hello W'
        },
    },
    extraReducers: (builder) => {
        builder.addCase(postFetch.pending, (state, action) => { //отправка запроса
            state.status = 'panding'
        })
        builder.addCase(postFetch.fulfilled, (state, action) => { // обработка запроса
            console.log(action.payload);
            state.post = action.payload
            state.status = 'succsess'
        })
        builder.addCase(postFetch.rejected, (state, action) => { //запрос откланен
            console.log(action.payload);
            state.error = 'ERROR'
            state.error = 'rejected'
        })

    }
})

export const { reducer: postReducer } = postSlice
export const { actions: postActions } = postSlice
