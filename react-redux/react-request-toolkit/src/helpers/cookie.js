import cookie from "js-cookie";

export const Cookie = {
    setCookie: (key, value, expires) => {  // время жизни токена
        cookie.set(key, value, { expires })
    },
    getCookie: (key) => {
        return cookie.get(key)
    },
    removeCookie: (key) => {
        cookie.remove(key)
    }

}