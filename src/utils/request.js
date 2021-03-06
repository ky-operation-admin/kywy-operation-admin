import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
import store from '@/store'
import {
  getToken
} from '@/utils/auth'

// create an axios instance
// 设置默认请求地址，所有请求从这里发起
const service = axios.create({
  // 模拟接口
  baseURL: process.env.VUE_APP_BASE_API,
  //   本地接口
  //   baseURL: 'http://192.168.1.171:8081',
  // 测试环境接口
  //   baseURL: 'http://120.25.214.5:8081',
  // //   生产环境接口
  //   baseURL: 'http://39.107.33.189:8081',

  timeout: 3000 // request timeout
})

// 请求拦截
service.interceptors.request.use(
  config => {
    
    if (store.getters.token) {
      config.headers['token'] = getToken()
    }

    return config
  },
  error => {
    // do something with request error
    console.log('111', error) // for debug
    return Promise.reject(error)
  },
)

// 响应拦截
service.interceptors.response.use(
  /**
   * 如果想获得http信息， 如头信息或状态信息
   *  return  response => response
   */

  /**
   * 通过自定义代码确定请求状态
   * 通过HTTP状态码来判断状态
   */
  response => {
    const res = response.data
    // 如果返回的不是1，就提示error
    // window.console.log('res', res, 'res.code', res.code);
    if (!res.code) {
      return res
    }
    if (res.code != 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      if (res.code == 401 || res.code == 403 || res.code == 404) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }

      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
