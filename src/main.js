import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '@/assets/js/element.js'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/css/global.css' //导入全局样式表
import '@/assets/fonts/iconfont.css' //导入icon
Vue.config.productionTip = false
Vue.prototype.$http = axios
//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
//Vue.use(ElementUI); 完全引入


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

