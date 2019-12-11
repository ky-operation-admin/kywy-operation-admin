import request from '@/utils/request'
// 登入
export function login(data) {
  return request({
    url: '/web/loginByAccount',
    method: 'post',
    data
  })
}
// 获取用户信息
// export function getInfo(token) {
//     var data = ('bearer'+token)
//   return request({
//     url: '/user/info',
//     method: 'get',
//     params: { token },
//     headers:{'Authorization':data}
//   })
// }
export function getInfo(token) {
  return request({
    url: '/web/loginByAccount',
    method: 'post',
    token
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
