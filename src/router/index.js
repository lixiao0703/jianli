import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Notfind from '@/pages/notfind/Notfind'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/notfind',
      name: 'Notfind',
      component: Notfind
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
