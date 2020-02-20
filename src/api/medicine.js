// 寻医问药接口
import request from '../utils/medicineRequest'
import {
  getToken
} from '@/utils/auth'

let token = getToken()
// 查询医生列表
export function queryMeDoctor() {
  return request({
    url: '/meDoctor/queryMeDoctor',
    method: 'get',
    headers: {
      token
    },
  })
}