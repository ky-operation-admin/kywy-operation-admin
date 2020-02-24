import request from '@/utils/request'
// 登入
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
// 获取用户信息
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: {
      token
    },
  })
}
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
