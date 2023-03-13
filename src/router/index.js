import { createRouter, createWebHistory } from 'vue-router';
import MealList from '@/views/MealList.vue';
import Home from '../views/HomePage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/letter/:letter',
      name: 'byLetter',
      component: MealList,
    },
    // import the About component and add a route for it
    // {
    //   path: '/about',
    //   component: () => import('@/views/About.vue'),
    // },
  ],
});
