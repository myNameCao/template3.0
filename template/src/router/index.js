import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { routerBeforeEach } from '@conf'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 注入拦截
router.beforeEach(routerBeforeEach)

export default router
