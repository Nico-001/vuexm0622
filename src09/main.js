import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer'
import '@/api'
import 'swiper/css/swiper.css'  

//定义全局
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import Pagination from '@/components/Pagination'
//注册
Vue.component('TypeNav',TypeNav)
Vue.component('SliderLoop',SliderLoop)
Vue.component('Pagination',Pagination)


Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
