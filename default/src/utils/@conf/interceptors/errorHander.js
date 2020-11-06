import router from '@router'

export default {
  200() {
    router.replace({ path: '/error401' })
  },
  401() {
    router.replace({ path: '/error401' })
  },
  404() {
    router.replace({ path: '/error404' })
  },
  500() {
    router.replace({ path: '/error500' })
  }
}
