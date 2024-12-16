import NProgress from '@/../configs/nprogress/index'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/index.vue'),
    },
  ],
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => NProgress.done())

export default router
