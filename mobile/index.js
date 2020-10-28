module.exports = (api, options = {}, rootOptions = {}) => {
  api.extendPackage({
    dependencies: {
      vant: '^2.10.11'
    }
  })
  api.injectImports(api.entryFile, `import './iview'`)
  api.render('./template')
}
