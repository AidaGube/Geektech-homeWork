import { configureStore } from "@reduxjs/toolkit";
import { api } from "config/requester";
import { postReducer } from "./slices/postSlice";
import { userReducer } from "./slices/userSlice";


export const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer
    }, //slice
    middleware: (getDefaultMiddlware) => getDefaultMiddlware({ thunk: { extraArguments: api } }),
})