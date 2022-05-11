import axios from "axios"
//doamain backend
export const DOMAIN = ''
export const USER_LOGIN = 'userLogin'
export const ACCESSTOKEN = 'accessToken'
export const SUCCESS = 'success'
export const ERROR = 'error'
export const WARNING = 'warning'
//config axios
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000,
})
http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        ['']: "",

    }
    return config;
}, (error) => { return Promise.reject(error) })