/**
 * 路由页面配置
 * meta 标签配置
 * @param {String} title 网站标题
 * @param {String} requireAuth 是否需要登录
 *
 **/
const common = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: 'Login', requireAuth: false },
    component: () => import('@view/common/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta: { title: 'HOME', requireAuth: true },
    component: () => import('@view/common/home.vue')
  }
]
export default common
