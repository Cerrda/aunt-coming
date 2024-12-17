import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('@/views/my/index.vue'),
    },
  ],
})

export default router
