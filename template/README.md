# 晓羊项目

```
yarn install

```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

# axios

## url 配置

- 本项目 url 需要统一配置（lib/baseApi）

- 分两种接口公共接口和私有接口（代码会自动识别添加 token）

      公共接口: 不需要token
      私有接口:需要token

```js
{
  //  需要token 接口列表
  privatePath: {},
  //  不需要token 接口列表
  publicPath: {
    login: '/xy/login'
  }
}
```

## 发送请求

方法一（异步回调）

```js
import axios from '@utils'

axios({
  url: 'AccountsInfo',
  success(res) {
    // todo something
  }
})
```

方法二（async）

```js
;axios () => {
  let { data } = await ajax({ url: 'AccountsInfo' })
  // todo something
}
```

## error 处理

## 工具类

    axios 属于项目的工具类他是默认的函数

```js
import axios, { encrypt, setCookie } from '@utils'

// todo something

encrypt()

setCookie()
```
