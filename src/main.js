import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import './assets/scss/style.scss';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
