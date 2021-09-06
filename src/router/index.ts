import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home.vue';
import test from '@/views/test.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/test',
    name: 'test',
    component: test,
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue'), // 懒加载组件
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
