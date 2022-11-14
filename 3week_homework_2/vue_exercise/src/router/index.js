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
    path: '/gallery',
    name: 'GalleryView',
    component: () =>
      import(/* webpackChunkNmae: "gallery" */ '../views/GalleryView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
