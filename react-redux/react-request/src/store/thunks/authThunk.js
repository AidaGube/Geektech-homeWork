import { api } from "config/requester"
import { Cookie } from "helpers/cookie"
import { postsFill } from "../reducers/usersReducers"
import { getUser } from "../reducers/usersReducers"
import { axios } from 'axios';



// export const authThunk = () => {
//     return async (dispatch) => {
//         const data = await api.get('posts')
//         dispatch(postsFill(data.response.data))
//     }
// }
export const getThunk = () => {
    return async (dispatch) => {
        const data = await api.get('posts')
        dispatch(postsFill(data.response.data))
    }
}

//cookie
export const authThunkToken = (body) => {

    return async (dispatch) => {
        const data = await api.post('/login', { username: body.username, password: body.password })
        Cookie.setCookie('token', data.data.token, 1)
        Cookie.setCookie('user', JSON.stringify(data.data.data))

        dispatch(getUser(data.response.user))
    }
}