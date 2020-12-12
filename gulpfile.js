

const { watch, src, dest } = require('gulp')
const del = require('del')

const copy = path => {
  let allFile = path.split('/')
  let watchFile = allFile[0] // 获得监听的根文件
  let changeFile = allFile[allFile.length - 1] // 获得改变的文件
  let distPash = path.replace(watchFile, '').replace(changeFile, '') //压缩的文件路径
  return src(path).pipe(dest('default' + distPash))
}
const delfile = path => {
  let allFile = path.split('/')
  let watchFile = allFile[0]
  let distPash = path.replace(watchFile, '')
  del('default' + distPash)
}

const defaultTask = () => {
  const watcher = watch(['./test/**/*'])
  watcher.on('change', path => {
    delfile(path)
    copy(path)
  })
  watcher.on('add', path => {
    copy(path)
  })
  watcher.on('unlink', path => {
    delfile(path)
  })
}

exports.default = defaultTask
