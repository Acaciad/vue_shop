import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '@/assets/js/element.js'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/css/global.css' //导入全局样式表
import '@/assets/fonts/iconfont.css' //导入icon
import TreeTable from 'vue-table-with-tree-grid'

//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
//通过axios 请求拦截器添加token,保证拥有获取数据的权限
//axios请求拦截
axios.interceptors.request.use(config => {
  //console.log(config)
  //为请求header对象 ，添加token 验证的 Authorization 字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.config.productionTip = false
//Vue.use(ElementUI); 完全引入

//树形控件

//var ElTreeGrid = require('element-tree-grid');
Vue.component('tree-table',TreeTable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

