import Vue from 'vue'
import VueRouter from 'vue-router'
import { vxm } from '../store/store.vuex'

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
    component: () => import('../pages/Matchday.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/result',
    name: 'Results',
    component: () => import('../pages/Result.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login.vue'),
    meta: {
      anonymousContext: true
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!vxm.user.user) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
