import axios from 'axios'
import store from '@/store'
import {
  getToken
} from '@/utils/auth'

// create an axios instance
// 设置默认请求地址，所有请求从这里发起
const service = axios.create({
  //   本地接口
    baseURL: 'http://192.168.1.171:8081',
  // 测试环境接口
//   baseURL: 'http://120.25.214.5:8081',
  //   生产环境接口
    // baseURL: 'http://39.107.33.189:8081',
  timeout: 3000 // request timeout
})

// 请求拦截
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log('111', error) // for debug
    return Promise.reject(error)
  }
)
export default service
