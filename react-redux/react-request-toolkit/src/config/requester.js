import axios from "axios";
import { Cookie } from 'helpers/cookie';

// interceptory v axios
export const api = axios.create({
    baseURL: 'http://localhost:2000/',
})

api.interceptors.request.use((config) => { //интерцептор когда отправляется запрос
    // config.headers.Authorization = Cookie.getCookie('token');
    // config.headers['Content-Type'] = 'application-json';

    return config
})

api.interceptors.response.use( //интерцептор когда успешно проходит наш запрос
    (response) => {
        return response
    },
    async (error) => { //интерцептор когда запрос падает 401error

        const originalReq = error.config  // save config old request
        const token = Cookie.getCookie('token') // take cookie

        if (error.response.status === 401 && token) {  //истек срок годности существует ли он
            const tokenRes = await axios.post('http://localhost:2000/refresh', { token: token }) // отправляем на рефреш и кладем старый токен
           
            Cookie.setCookie('token', tokenRes.data.new_token) // переписывает со старого на новый 

            originalReq.headers.Authorization = tokenRes.data.new_token // конфиг старого запроса обращаемся к хедер и суем токен который получили с рефреш

            api.request(originalReq) //еще раз отправляем наш запрос
        }

        return error
    })