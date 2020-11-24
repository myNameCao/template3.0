<template>
  <div class="login">
    <div class="content">
      <div class="titleShow">
        <image src="./images/logo.png" class="logo" />
        <text class="title"> 欢迎来到 </text>
      </div>
      <input
        id="phoneNum"
        v-model="phoneNumber"
        class="weui-input"
        type="text"
        placeholder="请输入账户/手机号"
      />
      <!-- <div class="ipt2"> -->
      <input
        id="password"
        v-model="password"
        class="weui-input2"
        :password="flag"
        placeholder="请输入密码"
      />
      <!-- <text class="eye" @tap="changeIpt">*</text> -->
      <!-- </div> -->
    </div>
    <!-- <div class="tishi">手机验证码登录</div> -->
    <div class="gitBtn">
      <div class="loginBtn" @tap="login">登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        phoneNumber: '',
        password: '',
        flag: true,
        num: 0
      }
    },
    methods: {
      login() {}
    }
  }
</script>

<style lang="less" scoped>
  .login {
    width: 750px;
    height: 100%;
  }
  .content {
    width: 90%;
    padding-left: 10%;
  }
  .titleShow {
    margin: 0% 0 10% 0;
    // display: flex;
  }
  .logo {
    display: inline-block;
    width: 66px;
    height: 70px;
    vertical-align: middle;
    margin-right: 16px;
  }
  .title {
    // line-height: 70px;
    display: inline-block;
    font-family: PingFangSC;
    font-size: 46px;
    font-weight: 600;
    color: #333333;
    // height: 70px;
    vertical-align: bottom;
  }
  .weui-input {
    width: 90%;
    border-bottom: 1px solid #ccc;
    height: 90px;
    margin-bottom: 20px;
  }
  .weui-input2 {
    width: 90%;
    border-bottom: 1px solid #ccc;
    height: 90px;
    margin-bottom: 20px;
  }
  .ipt2 {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .tishi {
    width: 90%;
    text-align: right;
    font-size: 26px;
    margin: 20px 0;
  }
  .eye {
    width: 20%;
    height: 90px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    line-height: 90px;
  }
  .gitBtn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
  .loginBtn {
    width: 70%;
    background: linear-gradient(to right, #28c8ff, #008cff);
    height: 90px;
    font-size: 30px;
    text-align: center;
    border-radius: 50px;
    line-height: 90px;
    color: #fff;
    font-family: PingFangSC;
  }
</style>
