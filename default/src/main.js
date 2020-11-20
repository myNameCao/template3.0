import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import viewUI from './viewUI'

const app = createApp(App).use(store).use(router).mount('#app')

viewUI(app)
