import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store' //追記

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next('/login');
      } else {
        next();
      }
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next();
      } else {
        next('/login');
      }
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
