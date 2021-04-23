import Vue from 'vue'
import ElementUI, {
  Button, Form, FormItem, Input, Message,
  Container,Header, Aside, Main,
  Menu, Submenu, MenuItem,
  Breadcrumb,BreadcrumbItem,
  Card, Row, Col, Table, TableColumn,Switch, Tooltip, Pagination, Dialog, Option,MessageBox,
  Tag,
  Tree,
  Select

} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Option)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)

Vue.prototype.$message = Message //将弹框组件挂载到vue的原型对象message
Vue.prototype.$confirm = MessageBox.confirm
