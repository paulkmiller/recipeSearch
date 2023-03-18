import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import router from './router';
import store from './store';
import App from './App.vue';
import * as filters from './filters';

import './assets/scss/style.scss';

library.add(fas, faYoutube);

createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');

const app = createApp(App);

app.config.globalProperties.$filters = filters;
