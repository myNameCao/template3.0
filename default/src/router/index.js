import routes from './routes'
import { routerBeforeEach } from '@conf'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 注入拦截
router.beforeEach(routerBeforeEach)

export default router
