import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ThanksView from './views/ThanksView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/obrigado', alias: ['/thanks.html'], component: ThanksView },
  ],
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 80, behavior: 'smooth' }
    return { top: 0 }
  },
})
