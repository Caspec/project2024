import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/DashboardView.vue')
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: () => import('@/views/TransactionsView.vue')
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('@/views/ReportsView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
