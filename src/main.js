import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI, { Button, Select } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.component(Button.name,Button);//按需引入
Vue.component(Select.name,Select);
//Vue.use(ElementUI); 完全引入
//Vue.use(Button);
//Vue.use(Select);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

