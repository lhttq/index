import Vue from 'vue';
import 'normalize.css/normalize.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import router from './router.js';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import './css/main.css';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(MintUI);
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api';  //关键代码
Vue.config.productionTip = false;
// eslint-disable-next-line no-unused-vars
new Vue({
  data:{
    msg:'123',
  },
  router,
  render: h => h(App),
}).$mount('#app')
