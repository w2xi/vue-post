import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'lib-flexible'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import './filter.js'
import api from './api.js'
import './common.js'

Vue.config.productionTip = false
axios.defaults.baseURL = api.base_url
Vue.prototype.$_axios = axios
Vue.prototype.$_api = api

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
