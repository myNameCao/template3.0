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
ajax({
  url: 'AccountsInfo',
  success(res) {
    // todo something
  }
})
```

方法二（async）

```js
;async () => {
  let { data } = await ajax({ url: 'AccountsInfo' })
  // todo something
}
```

## error 处理
