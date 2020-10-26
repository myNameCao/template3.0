module.exports = (api, options, rootOptions) => {
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
  if (options.ui === 'iview') {
    api.extendPackage({
      dependencies: {
        iview: '^3.5.4'
      }
    })
    api.injectImports(
      api.entryFile,
      `import iView from 'iview'
       import 'iview/dist/styles/iview.css'    
       Vue.use(iView)`
    )
  }
  if (options.ui === 'element-ui') {
    api.extendPackage({
      dependencies: {
        'element-ui': '^2.13.2'
      }
    })
    api.injectImports(
      api.entryFile,
      `import ElementUI from 'element-ui'
       import 'element-ui/lib/theme-chalk/index.css'
       Vue.use(ElementUI)`
    )
  }
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
  })
  // 复制template模版  注意顺序

  api.render('./template')
  api.render('./default')
}
