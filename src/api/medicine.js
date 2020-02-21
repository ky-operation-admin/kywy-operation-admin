// 寻医问药接口
import request from '../utils/medicineRequest'
import {
  getToken
} from '@/utils/auth'

let token = getToken()
// 查询医生列表
export function queryMeDoctor(data) {
  return request({
    url: '/meDoctor/queryMeDoctor',
    method: 'get',
    params: data,
    headers: {
      token
    },
  })
}
// 修改医生信息
export function modifyMeDoctor(userinfo) {
  return request({
    url: '/meDoctor/modifyMeDoctor',
    method: 'put',
    headers: {
      token
    },
    params: {
        'id': userinfo.id,
        'profilePhoto': userinfo.profilePhoto,
        'account': userinfo.account,
        'phone': userinfo.phone,
        'name': userinfo.name,
        'gender': userinfo.gender,
        'authState': userinfo.authState,
        'hospital': userinfo.hospital,
        'department': userinfo.department,
        'professionalTitle': userinfo.professionalTitle,
        'goodAt': userinfo.goodAt,
        'introduce': userinfo.introduce,
        'experience': userinfo.experience,
        'doctorno': userinfo.doctorno,
    }
  })
}
