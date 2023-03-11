import Vue from 'vue';
import Vuex from 'vuex';
import VueCookie from 'vue-cookie';
// find better spot for this
import './assets/scss/style.scss';

import router from './router';
import App from './App.vue';
import VuexStoreConfig from './vuex/store';

import { enableAnalytics, analyticsKey, disableAnalyticsInDebug } from './config';

if (enableAnalytics) {
  const VueAnalytics = require('vue-analytics').default;
  Vue.use(VueAnalytics, {
    id: analyticsKey,
    router,
    debug: {
      enabled: process.env.NODE_ENV !== 'production',
      sendHitTask: process.env.NODE_ENV === 'production' || !disableAnalyticsInDebug,
    },
  });
}

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueCookie);

const store = new Vuex.Store(VuexStoreConfig);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');

// import router from './router';
// import store from './vuex/store';
// import App from './App.vue';

// createApp(App)
//   .use(router)
//   .use(store)
//   .mount('#app');
