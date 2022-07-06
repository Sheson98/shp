import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'


Vue.use(VueRouter)

const routes = routers

const router = new VueRouter({
  mode:'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // `to` 和 `from` 都是路由地址
    // `savedPosition` 可以为空，如果没有的话。
    return { y: 0 }
  }
})

export default router
