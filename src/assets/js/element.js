import Vue from 'vue'
import ElementUI, { Button, Select ,Form, FormItem, Input, Message} from 'element-ui'

Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message //将弹框组件挂载到vue的原型对象message
