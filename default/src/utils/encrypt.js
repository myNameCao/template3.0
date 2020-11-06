import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'
import { options } from '@conf'

export function encrypt(str) {
  var key = CryptoJS.enc.Base64.parse(options.key) // key 要和后台一致
  var iv = CryptoJS.enc.Base64.parse(options.iv) // iv 要和后台一致
  str = CryptoJS.enc.Utf8.parse(str)
  return CryptoJS.DES.encrypt(str, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC
  }).toString()
}

// 登录密码解密
export function decrypt(str) {
  var key = CryptoJS.enc.Base64.parse(options.key)
  var iv = CryptoJS.enc.Base64.parse(options.iv)
  var decryptObj = CryptoJS.DES.decrypt(str, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC
  })
  return decryptObj.toString(CryptoJS.enc.Utf8)
}

export const setCookie = (str, data, obj) => {
  Cookies.set(str, data, { expires: 30, ...obj })
}
export const getCookie = str => {
  return Cookies.get(str)
}
