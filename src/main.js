import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '../src/assets/style/theme/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import axios from 'axios';
import qs from 'qs';

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$axios = axios;
Vue.prototype.qs=qs;
// axios.defaults.baseURL = '/api'  //服务器地址
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
