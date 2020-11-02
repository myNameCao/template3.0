module.exports = (api, options = {}, rootOptions = {}) => {
  api.extendPackage({
    dependencies: {
      vant: '^2.10.11'
    },
    devDependencies: {
      'postcss-px-to-viewport': '^1.1.1',
      'vue-cli-plugin-vconsole': '^1.0.1'
    }
  })
  api.injectImports(api.entryFile, `import './vant'`)
  api.render('./template')
}
