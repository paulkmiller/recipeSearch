import { createRouter, createWebHistory } from 'vue-router';
import RecipesByIngredient from '@/views/RecipesByIngredient.vue';
import RecipesByLetter from '@/views/RecipesByLetter.vue';
import RecipesByName from '@/views/RecipesByName.vue';
import RecipeDetails from '@/views/RecipeDetails.vue';
import DefaultLayout from '@/components/layout__default.vue';
import Ingredients from '@/views/IngredientsPage.vue';

import Home from '../views/HomePage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/name/:name?',
          name: 'byName',
          component: RecipesByName,
        },
        {
          path: '/letter/:letter?',
          name: 'byLetter',
          component: RecipesByLetter,
        },
        {
          path: '/ingredients',
          name: 'ingredients',
          component: Ingredients,
        },
        {
          path: '/ingredient/:ingredient',
          name: 'byIngredient',
          component: RecipesByIngredient,
        },
        {
          path: '/recipe/:id',
          name: 'recipeDetails',
          component: RecipeDetails,
        },
      ],
    },
  ],
});
