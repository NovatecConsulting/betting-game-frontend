import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../pages/Homepage.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/matchday',
    name: 'Match Day',
    component: () => import('../pages/Matchday.vue')
  },
  {
    path: '/result',
    name: 'Results',
    component: () => import('../pages/Result.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login.vue')
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
