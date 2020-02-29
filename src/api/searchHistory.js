import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/searchHistory/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/searchHistory/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/searchHistory/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/searchHistory/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/searchHistory/update',
    method: 'post',
    data
  })
}
