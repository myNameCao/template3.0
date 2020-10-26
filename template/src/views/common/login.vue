<template>
  <div class="bg-main login-wrap">
    <div class="bg-cont-blur"></div>
    <div class="login-wrapper">
      <div class="bg-cont">
        <div class="login-school-bg">
          <div class="school-bg">
            <div class="default-bg"></div>
          </div>
        </div>
        <div class="login-box">
          <div class="login-box-logo" :style="{ height: '60px' }">
            <img src="./img/Login-logo.png" class="school-logo" />
          </div>
          <div class="login-box-content" :style="{ marginTop: '20px' }">
            <div class="login-ibox">
              <div
                id="loginBoxMain"
                class="login-box-main"
                style="margin-top:20px;"
              >
                <input v-model="username" placeholder="账号" type="text" />
                <input v-model="keyword" placeholder="密码" type="password" />
                <button class="login-btn" @click="loginWeb">
                  登陆
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="content-nav-box">
        <p v-cloak>
          Copyright © 2016-{{ enddate }} 晓羊教育
          <a @click="toXYIndex">www.xiaoyangedu.com</a> 版权所有
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import { ajax, encrypt, setCookie } from '@utils'
  export default {
    name: 'Login',
    data() {
      return {
        isShowLogin: false,
        accountModel: null,
        username: '',
        keyword: '',
        enddate: new Date().getFullYear()
      }
    },
    created() {
      // 判断登录1
      this.getAccountInfo()
    },
    destroyed() {
      window.clearTimeout(this.setTimeoutID)
      this.setTimeoutID = null
    },
    methods: {
      toXYIndex() {
        window.open('http://www.xiaoyangedu.com')
      },
      // 获取所有校区信息
      getAccountInfo() {
        let _this = this
        ajax({
          url: 'AccountsInfo',
          success(res) {
            _this.accountModel = res.data[0]
          }
        })
      },
      // 登录
      async loginWeb() {
        let data = {
          AccountID: this.accountModel.SYSAccountID,
          LoginId: this.username,
          Password: encrypt(this.keyword)
        }
        let res = await ajax({ type: 'post', url: 'login', data })
        if (res.success) {
          let token = res.data.token
          if (token) {
            setCookie('.XYTOKEN', token)
            this.$router.push('/home')
          }
        }
      }
    }
  }
</script>
<style lang="less" scpoed>
  .login-wrap {
    .cont-main {
      margin: 0 auto;
    }

    .ivu-form .ivu-form-item-error .ivu-input {
      border-left: 0;
      border-right: 0;
      border-top: 0;
    }

    .ivu-form .ivu-form-item-error .ivu-input:focus {
      box-shadow: 0 0 0 0;
    }

    .bg-main {
      height: 100%;
      width: 100%;
      position: relative;
    }

    .bg-cont-blur {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-image: url('./img/page-bg-airplane.jpg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    /*css hack */
    /* 解决input框背景变黄色问题 */
    input:-webkit-autofill {
      box-shadow: 0 0 0px 1000px white inset !important;
    }

    input:-webkit-autofill {
      box-shadow: 0 0 0px 1000px white inset !important;
    }

    /*在IE上input的兼容问题*/
    input::-ms-clear {
      display: none;
    }

    /* 子模块图标的展示 */
    .show-box {
      width: 790px;
      height: 97px;
      margin-bottom: 50px;
      position: absolute;
      bottom: 0px;
      z-index: 2;
      overflow: hidden;
    }

    .show-box > ul {
      position: absolute;
      left: 0;
      /*width: 1800px;*/
    }

    .show-box > ul > li {
      display: inline-block;
      margin-right: 20px !important;
    }

    .show-box > ul > li a {
      cursor: default;
    }

    .show-box > ul > li a .box-icon {
      display: block;
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      margin-left: 7px;
      font-size: 40px;
      color: #fefefe;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transition: all 0.3s;
    }

    .show-box > ul > li a .box-icon > .icon {
      display: block;
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      margin-left: 1px;
      font-size: 32px;
      color: #cacaca;
      opacity: 1;
      transition: all 0.3s;
    }

    .show-box > ul > li a .box-name {
      display: block;
      width: 75px;
      text-align: center;
      font-size: 12px;
      opacity: 0.6;
      transition: all 0.3s;
      color: #fefefe;
      overflow: hidden;
    }

    .show-box > ul > li a:hover {
      text-decoration: none;
    }

    .show-box > ul > li a:hover .box-icon > .icon {
      transition: all 0.3s;
      font-size: 40px;
      color: #fff;
      opacity: 1;
    }

    .show-box > ul > li a:hover .box-name {
      transition: all 0.3s;
      color: #fff;
      opacity: 1;
    }

    .login-wrapper {
      position: absolute;
      top: 50%;
      margin-top: -285px;
      left: 50%;
      margin-left: -550px;
      width: 1100px;
      height: 570px;
    }

    /* 背景图适配各屏幕 */
    @media all and (max-width: 1367px) {
      .show-box {
        width: 790px;
        height: 97px;
        margin-bottom: 11px;
      }

      .show-box > ul > li a .box-icon {
        display: block;
        width: 40px;
        height: 40px;
        line-height: 40px;
      }

      .show-box > ul > li a .box-icon > .icon {
        display: block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
      }

      .show-box > ul > li a:hover .box-icon > .icon {
        font-size: 22px;
      }

      .show-box > ul > li a .box-icon {
        margin-left: 15px;
      }
    }

    @media all and (min-width: 1368px) and (max-width: 1680px) {
      .show-box {
        width: 790px;
        height: 97px;
        margin-bottom: 11px;
      }

      .show-box > ul > li a .box-icon {
        display: block;
        width: 45px;
        height: 45px;
        line-height: 45px;
      }

      .show-box > ul > li a .box-icon > .icon {
        display: block;
        width: 45px;
        height: 45px;
        line-height: 45px;
        font-size: 28px;
      }

      .show-box > ul > li a:hover .box-icon > .icon {
        font-size: 34px;
      }

      .show-box > ul > li a .box-icon {
        margin-left: 15px;
      }
    }

    /* 羊博士 */

    .sheep-paw {
      position: absolute;
      z-index: 1000;
      transform: scale(0.4);
      top: -20px;
      left: 50%;
      margin-left: -110px;
    }

    .login-animation-wrapper {
      position: absolute;
      z-index: 8;
      left: 50%;
      top: -130px;
      margin-left: -55px;
      width: 110px;
      height: 126px;
    }

    .sheep-body {
      position: absolute;
      transform: scale(0.4);
      top: 0;
      left: -88px;
    }

    /* 登录页内容 */
    .bg-cont {
      display: flex;
      width: 1250px;
      height: 728px;
      position: absolute;
      top: 50px;
      left: -85px;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 9;
      background-image: url('./img/module-bg-zhi.png');
      background-repeat: no-repeat;
      background-size: contain;
      box-sizing: border-box;
      padding: 33px 64px 110px 75px;
    }

    bg-cont-blur .login-school-bg,
    .login-box {
      position: relative;
    }

    .login-school-bg .school-bg > div.default-bg {
      width: 71%;
      height: 74%;
      margin: 76px auto 0;
    }

    .login-school-bg .school-bg > div.bg-cont-blur-in {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      border-radius: 4px;
    }

    .login-box-logo {
      position: relative;
      margin: 17px 0 14px;
      height: 60px;
      text-align: center;
    }

    .login-box {
      position: absolute;
      top: 90px;
      right: 8.69%;
      width: 460px;
      height: 480px;
      /* min-height: 420px; */
      background: #fff;
      border-radius: 10px;
      z-index: 11;
    }

    .login-box-content {
      padding: 0px 60px;
    }

    .login-box img {
      height: 100%;
    }

    .login-box > .login-box-logo > .login-logo {
      width: 100%;
      margin: 0 auto;
      text-align: center;
      display: block;
    }

    .login-box .login-box-top {
      margin: auto;
      text-align: center;
    }

    .ivu-modal-mask {
      display: none;
    }

    .ivu-modal-header,
    .ivu-modal-body,
    .ivu-modal-footer {
      padding: 0;
      list-style: none;
    }

    .ivu-modal-content {
      width: 60%;
      margin-left: 4%;
      background: #fff;
      box-shadow: 0px 2px 4px 0px rgba(47, 47, 47, 0.2);
      border-radius: 4px;
      position: absolute;
      top: 80px;
      z-index: 9999;
      overflow: auto;
      padding: 10px 0;
    }

    .school-list-box {
      text-align: left;
      cursor: pointer;
      padding: 10px 20px;
      background: #fff;
    }

    .school-list-active i {
      color: #4196ff;
    }

    .school-list .school-list-box:last-child {
      border-bottom: none;
    }

    .school-list-box-logo {
      width: 50%;
      padding: 0 10px 10px;
    }

    .school-list-box .school-list-box-tit {
      display: flex;
      justify-content: space-between;
      color: #292929;
      transition: all 0.3s;
    }
    .school-list-box .school-list-box-tit span {
      font-size: 15px;
    }
    .school-list-box .school-list-box-tit i {
      font-size: 20px;
      font-weight: 700;
    }
    .school-list-box:hover {
      background: rgba(156, 156, 156, 0.15);
    }
    .school-list-box:hover .school-list-box-tit {
      transition: all 0.3s;
    }

    .login-box > .login-box-top > .school-logo {
      width: 34.6%;
      margin-top: 7.75%;
    }

    .school-tit {
      text-align: center;
      font-size: 20px;
      color: #444;
      font-weight: bold;
    }

    .icon-null-school-name {
      font-size: 20px !important;
      font-weight: bold;
      padding: 0 0 10px;
    }

    .login-box > .login-box-top > .errorschool-tit {
      font-size: 18px;
      color: #292929;
      letter-spacing: 0.7px;
      margin-top: 10px;
    }

    .input-name {
      margin-bottom: 10px;
    }

    .login-box-main {
      position: relative;

      .verify-wrap {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #ffffff;
        z-index: 1111;
      }
    }

    .login-box .login-box-main input {
      height: 40px;
      margin: 10px 0 0 0;
      padding: 0;
      list-style: none;
      outline: none;
      font-size: 16px;
    }

    .input-list {
      width: 100%;
    }

    .ivu-input {
      border-radius: 0;
      border: none;
      border-bottom: 1px solid #dedede;
    }

    .ivu-input:hover {
      border-color: #dedede;
    }

    .ivu-input:focus {
      -webkit-box-shadow: none;
      box-shadow: none;
      border-color: #57a3f3;
    }

    .input-wrapper.focused .input-line {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    .input-line {
      margin: 0;
      height: 2px;
      border: none;
      background-color: #0083ff;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
      transition: -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
      transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
      transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1),
        -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .login-text {
      margin: 15px 0px 10px;
      width: 100%;
      text-align: right;
    }

    .login-text > a {
      font-size: 12px;
      color: #9b9b9b;
    }

    .login-error {
      margin-top: 10px;
      margin-bottom: 10px;
      height: 20px;
      line-height: 20px;
      padding-left: 10px;
      width: 100%;
      background: rgba(247, 140, 140, 0.9);
      color: #fff;
      letter-spacing: 0.7px;
      border-radius: 4px;
    }

    .login-error span {
      color: #fff;
      font-size: 12px;
    }

    .login-box-main > .login-list {
      width: 320px;
      height: 40px;
      margin: 0 auto 23px;
      position: relative;
    }
    .login-box-main input {
      display: inline-block;
      height: 40px;
      width: 100%;
      margin: 0;
      padding: 0;
      padding-left: 35px;
      list-style: none;
      outline: none;
      border: none;
      border-bottom: 1px solid #eaeaea;
      font-size: 14px;
    }

    .login-btn {
      margin-top: 40px;
      width: 100%;
      height: 44px;
      color: #fff;
      font-size: 16px;
      letter-spacing: 6px;
      border-color: #4196ff !important;
      background: #4196ff;
      border-radius: 4px;
      box-shadow: none;
      outline: none;
    }

    .login-btn:focus {
      -webkit-box-shadow: 0 0 0 2px rgba(240, 109, 45, 0.2) !important;
      box-shadow: 0 0 0 2px rgba(240, 109, 45, 0.2) !important;
    }

    .login-ibox > .active-ibox {
      display: block;
    }

    .login-ibox > .active-qrcode {
      display: block;
    }

    .login-qrcode-entry {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }

    /*用户名登录错误信息*/
    .danger-tit {
      margin: 6px 5px 10px;
    }

    .danger-tit span {
      width: 100%;
      height: 32px;
      line-height: 32px;
      display: block;
      background: #ef8e8e;
      color: #fff;
      border-radius: 4px;
      margin: 0;
    }

    .danger-tit > span > label {
      font-weight: normal;
    }

    .danger-tit i {
      margin: 0 0 0 6px;
    }

    /* 底部样式 */
    .footer {
      height: 50px;
      width: 100%;
      overflow: hidden;
      color: #b3bacb;
      position: absolute;
      bottom: 0;
      z-index: 1;
    }

    .content-nav-box {
      width: 100%;
      margin: 10px auto;
      text-align: center;
      a {
        color: #444;
      }
      a:hover {
        color: #2d8cf0;
      }
    }

    .content-nav-box ul {
      height: 50px;
      line-height: 50px;
      padding: 0;
      padding-top: 20px;
      text-align: center;
      width: 462px;
      margin: 0 auto;
    }

    .content-nav-box li {
      float: left;
      height: 22px;
      line-height: 22px;
      float: left;
      padding: 0 5px;
      color: #666;
    }

    .content-nav-box li a {
      color: #76756f;
      transition: all 0.3s;
    }

    .content-nav-box .content-nav-box-text .dt a:hover {
      transition: all 0.3s;
      color: #4c4c49;
    }

    .content-nav-box .content-nav-box-text {
      float: left;
      height: 22px;
      padding: 0 2px;
    }

    .spacer {
      width: 1px;
      height: 12px;
      margin-top: 5px;
      padding: 0;
      background: #76756f;
      overflow: hidden;
    }

    .foot-table-fr > div {
      height: 22px;
      line-height: 22px;
    }

    /* 登录框二维码显示 */
    .corner-toggle-box {
      position: absolute;
      width: 100%;
      bottom: 20px;
      text-align: center;
    }

    .corner-toggle-box-v {
      display: inline-block;
      width: 2px;
      height: 18px;
      vertical-align: middle;
      background: #b8b8b8;
    }

    .corner-toggle-box > span {
      display: inline-block;
      cursor: pointer;
      margin: 0 30px;
      height: 25px;
      line-height: 25px;
      letter-spacing: 0.8px;
      color: #444;
      font-size: 18px;
    }

    .corner-toggle-box > span:hover {
      transition: all 0.3s;
      opacity: 0.8;
    }

    .corner-toggle-box > button {
      box-shadow: none;
      border: none;
      background: #fff;
      transition: all 0.3s;
    }

    .corner-toggle-box > button:hover,
    .corner-toggle-box > button:focus {
      transition: all 0.3s;
      color: #57a3f3;
      background: #fff;
      box-shadow: none;
      border: none;
    }

    .corner-toggle-box > .active-i {
      color: #6392e9;
    }

    .login-qrcode {
      margin-top: 16px;
      margin-bottom: 47px;
      width: 80%;
      display: block;
      margin: 15px auto;
      border: 1px solid #eaeaea;
      padding: 5px;
    }

    .login-qrcode > img {
      width: 100%;
      display: block;
      margin: 0 auto;
    }

    .login-qrcode > span {
      display: block;
      text-align: center;
      margin-top: 15px;
      color: #888;
      font-size: 14px;
      transition: all 0.3s;
      cursor: default;
    }

    .demo-spin-icon-load {
      animation: ani-demo-spin 1s linear infinite;
    }

    @keyframes ani-demo-spin {
      from {
        transform: rotate(0deg);
      }

      50% {
        transform: rotate(180deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    .demo-spin-col {
      height: 230px;
      position: relative;
      border: 1px solid #eee;
    }

    .white-bg-section {
      width: 500px;
      position: absolute;
      bottom: 0px;
      left: 50%;
      z-index: 10;
      margin-left: -250px;
      overflow: hidden;
    }

    .change-school-mark {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 9998;
      background: rgba(255, 255, 255, 0);
    }

    .change-school-mark-confirm {
      position: absolute;
      top: 80px;
      left: -30px;
      box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.3);
      margin: auto;
      width: 400px;
      height: 360px;
      overflow-y: auto;
      z-index: 9999;
      background: #fff;
      border-radius: 6px;
      .school-list {
        height: 280px;
        overflow-y: auto;
      }
    }
    .change-school-mark-confirm .school-list-search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      position: relative;
      margin: 20px;
      height: 36px;
      background: #ffffff;
      input {
        flex: 1;
        height: 34px;
        padding: 0 50px 0 20px;
        line-height: 34px;
        color: rgba(0, 0, 0, 0.85);
        border: 1px solid #c2c2c2;
        border-radius: 18px;
      }
      input::placeholder {
        color: rgba(0, 0, 0, 0.45);
      }
      input:hover {
        border: 1px solid #4196ff;
      }
      input:focus {
        border: 1px solid #4196ff;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(65, 150, 255, 0.2);
      }
      i {
        position: absolute;
        right: 17px;
        top: 8px;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.45);
      }
    }
    .btn-switch {
      display: inline-block;
      padding: 3px 8px;
      background: #f2f2f2;
      color: rgba(0, 0, 0, 0.85);
      border-radius: 13px;
      margin-top: 5px;
    }
    .btn-switch:hover {
      background: #e7f4ff;
      color: #1890ff;
    }
    .parent-null-bg {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      z-index: 1000;
    }

    .parent-null {
      position: absolute;
      top: 40%;
      left: 50%;
      width: 500px;
      height: 320px;
      margin-top: -270px;
      margin-left: -300px;
      background: rgba(255, 255, 255, 1);
      border-radius: 33px;
      z-index: 1001;
      text-align: center;
      padding: 40px;
    }
    .login-wrapper-custom {
      .login-box-custom {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 460px;
        height: 480px;
        margin-left: -230px;
        margin-top: -240px;
        background: #fff;
        border-radius: 8px;
        z-index: 11;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.24);
        img {
          height: 100%;
        }
        .login-box-logo {
          .login-logo {
            width: 100%;
            margin: 0 auto;
            text-align: center;
            display: block;
          }
        }
        .login-box-top {
          margin: auto;
          text-align: center;
          .school-logo {
            width: 34.6%;
            margin-top: 7.75%;
          }
          .errorschool-tit {
            font-size: 18px;
            color: #292929;
            letter-spacing: 0.7px;
            margin-top: 10px;
          }
        }
        .login-box-main {
          position: relative;
          .verify-wrap {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: #ffffff;
            z-index: 1111;
          }
          .login-list {
            width: 320px;
            height: 40px;
            margin: 0 auto 23px;
            position: relative;
            label {
              display: inline-block;
              width: 26px;
              text-align: center;
              vertical-align: bottom;
              position: absolute;
              top: 7px;
              left: 5px;
              i {
                font-size: 26px;
                color: #7fdc87;
              }
            }
            input {
              display: inline-block;
              height: 40px;
              width: 320px;
              margin: 0;
              padding: 0;
              padding-left: 35px;
              list-style: none;
              outline: none;
              border: none;
              border-bottom: 1px solid #eaeaea;
              font-size: 14px;
            }
          }
          input {
            height: 40px;
            margin: 10px 0 0 0;
            padding: 0;
            list-style: none;
            outline: none;
            font-size: 16px;
          }
        }
      }
    }
    /* 适配各屏幕 */
    @media all and (max-width: 1367px) {
      .bg-cont {
        top: 30%;
        width: 970px;
        height: 645px;
      }

      .sheep-paw {
        top: 70px;
      }
      .login-wrapper-custom .login-box-custom {
        margin-left: -150px;
        margin-top: -205px;
        width: 330px;
        height: 410px;
      }
      .login-box {
        top: 8.5%;
        right: 6.69%;
        width: 330px;
        height: 410px;
      }
      .change-school-mark-confirm {
        left: 0px;
        width: 290px;
        height: 300px;
        .school-list {
          height: 218px;
        }
      }
      .login-animation-wrapper {
        top: -40px;
      }

      .login-box-content {
        padding: 0px 20px;
      }

      .ivu-form-item {
        margin-bottom: 10px;
      }
      .corner-toggle-box {
        margin-top: 45px;
        text-align: center;
      }

      .corner-toggle-box > span {
        font-size: 14px;
      }
    }

    @media all and (min-width: 1368px) and (max-width: 1660px) {
      .login-box-content {
        padding: 20px 50px;
      }
      .ivu-form-item {
        margin-bottom: 10px;
      }
    }

    @media all and (min-width: 1681px) and (max-width: 1919px) {
      .ivu-form-item {
        margin-bottom: 16px;
      }
    }

    @media all and (min-width: 1368px) and (max-width: 1680px) {
      .corner-toggle-box > span {
        font-size: 16px;
      }
    }

    @media all and (min-width: 1681px) and (max-width: 1920px) {
      .corner-toggle-box > span {
        font-size: 18px;
      }
    }

    @media all and (min-width: 1921px) {
      .corner-toggle-box > span {
        font-size: 20px;
      }
    }
  }
</style>
