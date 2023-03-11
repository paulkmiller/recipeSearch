import Vue from 'vue';
import VueRouter, { createWebHistory } from 'vue-router';

import { SiteName, TitleSeparator, RouterMode } from '../config';

import Home from '../views/Home.vue';
import MealList from '../views/MealList.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: RouterMode,
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home title',
      },
    },
    {
      path: '/letter/:letter',
      name: 'byLetter',
      component: MealList,
      meta: {
        title: 'MealList Title',
      },
    },
  ],
});

VueRouter.beforeEach((to, from, next) => {
  document.title = to.meta.title + TitleSeparator + SiteName;
  next();
});

export default router;
