// const vueEnv = process.env.VUE_APP_STRUCTURE
// const Timestamp = new Date().getTime()
const path = require('path')
// const env = process.env.VUE_APP_ENV
module.exports = {
  productionSourceMap: false, // vueEnv === 'Beta' || process.env.NODE_ENV !== 'production',
  publicPath: '/',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('@view', path.resolve(__dirname, 'src/views'))
      .set('@lib', path.resolve(__dirname, 'src/lib'))
      .set('@conf', path.resolve(__dirname, 'src/utils/@conf'))
      .set('@static', path.resolve(__dirname, 'src/assets'))
      .set('@utils', path.resolve(__dirname, 'src/utils'))
      .set('@comp', path.resolve(__dirname, 'src/components'))
  },
  configureWebpack: {},
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  }
}
