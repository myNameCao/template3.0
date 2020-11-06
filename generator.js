module.exports = (api, options, rootOptions) => {
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
  })
  // 复制template模版  注意顺序
  api.render('./default')
  api.extendPackage({
    // 命令
    scripts: {
      formatCode: 'prettier --write src/**/*.{js,vue}',
      eslintCode: 'eslint --fix src/**/*.{js,vue}'
    },
    dependencies: {
      'js-cookie': '^2.2.1',
      'crypto-js': '^4.0.0',
      axios: '^0.21.0'
    },
    devDependencies: {
      husky: '^4.3.0',
      'lint-staged': '^10.4.2'
    }
  })
  options.platform === 'mobile'
    ? require('./mobile')(api, options)
    : require('./pc')(api, options)
}
