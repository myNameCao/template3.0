import Cookies from 'js-cookie'
import baseApi from '@lib/baseApi'
import { loading, closeloading } from '@utils/xyui'
let uid = 0
let list = []
// Add a request interceptor
export const requestSuccess = res => {
  list.push(uid++)
  if (list.length) loading()
  res.url = baseApi.privatePath[res.url] || baseApi.publicPath[res.url]
  if (baseApi.privatePath[res.url]) {
    res.headers['XYTOKEN'] = Cookies.get('.XYTOKEN')
  }
  return res
}
export const requestFail = requestError => {
  // 自定义发送请求失败逻辑，断网，请求发送监控等
  return Promise.reject(requestError)
}

// Add a response interceptor

export const responseSuccess = responseObj => {
  if (!list.length) loading()
  return responseObj.data
}

export const responseFail = responseError => {
  if (!list.length) closeloading()
  // 响应失败，可根据 responseError.message 和 responseError.response.status 来做监控处理
  return Promise.reject(responseError)
}
