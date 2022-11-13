import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo',
    name: 'TodoView',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TodoView.vue')
  },
  {
    path: '/consulting',
    name: 'CounsulgtingView',
    component: () =>
      import(/* webpackChunkNmae: "consulting" */ '../views/ConsultingView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
