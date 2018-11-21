import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './asserts/icons/iconfont.css';
import './style/common.scss';

new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: {
  //   App
  // },
  render: h => h(App)
});
