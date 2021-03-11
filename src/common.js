import qs from 'qs'
import axios from 'axios'
import api from './api'

let isRefreshingToken = false
let requests = []
// Add a request interceptor
axios.interceptors.request.use(config=>{
    config.headers.Authorization = localStorage.token
    return config
})
// Add a response interceptor
axios.interceptors.response.use(response=>{
    console.log(response)
    if ( response.data.code === 1000 ){
        const config = response.config
        if ( !isRefreshingToken ){
            isRefreshingToken = true
            return refreshToken().then(res=>{
                const token = res.data.token
                setToken(token)
                config.headers.Authorization = token
                requests.forEach(cb => cb(token))
                return axios(config)
            }).catch(err=>{
                console.log('Refreshing token encounter an error => ', err)
            }).finally(()=>{
                isRefreshingToken = false
                requests = []
            })
        }else{
            return new Promise((resolve)=>{
                requests.push((token)=>{
                    config.headers.Authorization = token
                    resolve(axios(config))
                })
            })
        }
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
    }, error=>{
        console.log(err)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export const refreshToken = () => {
    return axios.get(api.refresh_token, { 
        params: {
            oldToken: getToken()
        }
    }).then(res=>res.data)
}

export const setToken = token => localStorage.token = token
export const getToken = () => localStorage.token
