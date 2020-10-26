# template

## Project setup

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

### Lints and fixes files

```

yarn lint

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### axios

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
