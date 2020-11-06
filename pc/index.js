module.exports = (api, options = {}, rootOptions = {}) => {
  api.extendPackage({
    dependencies: {
      iview: '^3.5.4'
    }
  })
  api.injectImports(api.entryFile, `import './iview'`)
  api.render('./template')
}
