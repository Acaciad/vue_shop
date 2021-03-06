import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Welcome from '@/components/Welcome.vue'
import Users from '@/components/user/Users.vue'
import Rights from '@/components/power/Rights.vue'
import Role from '@/components/power/Role.vue'
import Cate from '@/components/goods/Cate.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {path: '/',
    redirect:'/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
        redirect:'/welcome',
        children: [
          { path: '/home', component: Welcome },
          { path: '/users', component: Users },
          { path: '/rights', component: Rights },
          { path:'/roles',component:Role},
          { path: '/categories', component: Cate },

        ]
    },

  ]
})
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从哪个路径跳转过来
  //next 是一个函数 放行 next('/login')

  //用户访问登录页，直接放行
  if(to.path ==='/login') return next();
  //从 sessionStorage 获取保存的token
 const tokenStr = window.sessionStorage.getItem('token')
 //没有token ,强制跳转到登录页
  if(!tokenStr) return next('/login')
  next()
})
export default router
