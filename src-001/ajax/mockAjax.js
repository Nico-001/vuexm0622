//导入axios
import axios from 'axios'

//导入Nprogress
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

//
const instance = axios.create({
  baseURL:'/mock',
  timeout:20000
})

instance.interceptors.request.use((config)=>{
  Nprogress.start()
  return config
})

instance.interceptors.response.use(
  (response)=>{
    Nprogress.done()
    return response.data
  },
  (error)=>{
    Nprogress.done()
    alert('请求失败'+ error.message || '未知错误')
    return new Promise(()=>{})
  })

  export default instance