import request from '@/utils/request'
// 获取在招职位列表
export function getJobopen(params){
    return request({
        url: '/openposition/queryOpenPositions',
        method: 'get',
        params
    })
} 
// 发布新职位
export function postNewposition(data) {
     let fd = new FormData();
     fd.append('accountid', data.accountid*1); //账号组织表ID
     fd.append('organizationid', data.organizationid*1); //账号组织表ID
     fd.append('positionid', data.positionid*1); //发布的哪个职位
     fd.append('openpositionNumber', data.openpositionNumber*1); //开放职位的数目
     fd.append('positionValidity', data.positionValidity); //职位有效期
     fd.append('workAddress', data.workAddress); //工作地址
     fd.append('salaryTo', data.salaryTo*1); //薪资下限
     fd.append('salaryFrom', data.salaryFrom*1); //薪资上限
     fd.append('positionName ', data.positionName); //职位名称
  return request({
    url: '/openposition/recordOpenPosition',
    method: 'post',
    fd
  })
}