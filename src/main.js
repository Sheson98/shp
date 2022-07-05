import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from '@/pages/Home/TypeNav'
import Carsouel from '@/components/Carsouel'
import   '@/mock/mockServer'
import  'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)//全局注册TypeNav组件
Vue.component(Carsouel.name,Carsouel)//全局注册TypeNav组件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
