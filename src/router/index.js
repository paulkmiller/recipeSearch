import { createRouter, createWebHistory } from 'vue-router';
import MealsByIngredient from '@/views/MealsByIngredient.vue';
import MealsByLetter from '@/views/MealsByLetter.vue';
import MealsByName from '@/views/MealsByName.vue';

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
      path: '/name/:name?',
      name: 'byName',
      component: MealsByName,
    },
    {
      path: '/letter/:letter?',
      name: 'byLetter',
      component: MealsByLetter,
    },
    {
      path: '/ingredient/:ingredient?',
      name: 'byIngredient',
      component: MealsByIngredient,
    },
    // {
    //   path: '/letter/:letter',
    //   name: 'byLetter',
    //   component: MealList,
    // },
    // import the About component and add a route for it
    // {
    //   path: '/about',
    //   component: () => import('@/views/About.vue'),
    // },
  ],
});
