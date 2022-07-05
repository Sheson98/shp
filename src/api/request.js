import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const request = axios.create({
    baseURL:'http://gmall-h5-api.atguigu.cn',
    timeout:2000,
})

request.interceptors.request.use((config)=>{
    nprogress.start()
    return config
})
request.interceptors.response.use((res)=>{
    nprogress.done()
    return Promise.resolve(res.data)
},()=>{
    return Promise.reject(new Error("failed"))
})

export default request