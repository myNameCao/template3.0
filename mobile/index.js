module.exports = (api, options = {}, rootOptions = {}) => {
  console.log(options)
  api.extendPackage({
    dependencies: {
      vant: '^2.10.11'
    }
  })
  api.render('./template')
}
