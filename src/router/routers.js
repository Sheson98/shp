import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail  from '@/pages/Detail'

export default [
    {
      path: '/',
      redirect: '/home'
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
      path: '/search/:keyword?',
      component: Search,
      name:"search"
    },
    {
      path: '/details/:skuid?',
      component: Detail
    },
  ]