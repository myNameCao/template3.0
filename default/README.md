# 下载项目依赖

yarn or npm install

# vscode 需要下载插件

1. Prettier - Code formatter
2. Git History

## Compiles and hot-reloads for development

```shell
yarn serve
```

## Compiles and minifies for production

```shell
yarn build

```

# axios

## url 配置

- 本项目 url 需要统一配置（lib/baseApi）

- 分两种接口公共接口和私有接口（代码会自动识别添加 token）
  公共接口: 不需要 token
  私有接口:需要 token

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

方法三:（then)

```js
axios({ url: 'AccountsInfo' }).then(res => {
  // todo something
})
```

请求数据

- data 只包含请求业务参数
- token 会根据接口注册的位置 自动添加
- loading 当页面发送请求时，需要 loadind 添加`true`, 默认不 loaing,请求完成自动关闭
- success 成功后的逻辑

## error 处理

## 工具类

    axios 属于项目的工具类他是默认的函数

```js
import axios, { encrypt, setCookie } from '@utils'

// todo something

encrypt()

setCookie()
```
