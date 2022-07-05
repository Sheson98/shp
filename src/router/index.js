import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    redirect :'home'
  },
  {
    path: '/home',
    component: Home,
  },
  
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/search',
    component: Search,
    name:"search"
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
