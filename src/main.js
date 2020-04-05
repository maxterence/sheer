import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/style/theme/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import axios from 'axios';
import http from './http.js';
import qs from 'qs';

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$http = http;
Vue.prototype.$axios = axios;
Vue.prototype.qs=qs;
// axios.defaults.baseURL = '/api'  //关键代码
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
