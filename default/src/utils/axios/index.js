import axios from 'axios'
import {
  requestSuccess,
  requestFail,
  responseSuccess,
  responseFail
} from '@conf'

// 站点统一的配置
const instance = axios.create({
  baseURL: process.env.VUE_APP_HOST,
  timeout: 15000,
  contentType: 'application/x-www-form-urlencoded',
  complete: function(xhr, status) {
    if (status === 'timeout') {
      xhr.abort()
    }
  }
})
// 注入请求拦截
instance.interceptors.request.use(requestSuccess, requestFail)

// 注入响应拦截
instance.interceptors.response.use(responseSuccess, responseFail)

// 过程组装请求
export default async P => {
  return new Promise(resolve => {
    instance({
      method: P.type || 'get',
      url: P.url,
      params: P.params ? P.params : null,
      data: P.data ? P.data : null
    })
      .then(res => {
        //TODO: 后端数据在这添加 预编译
        resolve(res)
        P.success && P.success(res)
      })
      .catch(err => {
        P.error && P.error(err)
      })
  })
} //web请求: ajax封装
