module.exports = (api, options = {}, rootOptions = {}) => {
  api.extendPackage({
    dependencies: {
      vant: '^3.0.0-beta.8'
    },
    devDependencies: {
      'postcss-px-to-viewport': '^1.1.1',
      'vue-cli-plugin-vconsole': '^1.0.1'
    }
  })
  api.render('./template')
}
