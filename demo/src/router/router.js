import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import LoginSuccess from '../views/LoginSuccess.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/loginsuccess',
      name:'loginsuccess',
      component:LoginSuccess
    }
  ]
})
