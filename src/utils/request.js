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
  //   baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: 'http://120.25.214.5:8081',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 3000 // request timeout
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log('111', error) // for debug
    return Promise.reject(error)
  }
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
    window.console.log('res', res, 'res.code', res.code);
    if (!res.code){
        return res
    }
    if (res.code != 1) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
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
      Message({
        message: '登陆成功！',
        type: 'success',
        duration: 2 * 1000
      })
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
