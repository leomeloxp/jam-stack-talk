// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Eagle from 'eagle.js';

// import eagle.js default styles
// import 'eagle.js/dist/eagle.css';
// import animate.css for slide transition
import 'animate.css';

import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Eagle);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
