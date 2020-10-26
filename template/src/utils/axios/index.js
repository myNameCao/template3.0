import axios from 'axios'
import {
  requestSuccess,
  requestFail,
  responseSuccess,
  responseFail
} from '@conf'
// 站点统一的配置
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_HOST,
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

export const ajax = P => {
  return instance({
    method: P.type || 'get',
    url: P.url,
    params: P.params ? P.params : null,
    data: P.data ? P.data : null
  })
    .then(res => {
      // 状态码的处理
      P.success && P.success(res.data)
    })
    .catch(function(err) {
      P.error && P.error(err)
    })
} //web请求: ajax封装
