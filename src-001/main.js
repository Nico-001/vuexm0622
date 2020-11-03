import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// import '@/mock/mockServer'
import '@/api'
// import 'swiper/css/swiper.css'  

//定义全局
import TypeNav from '@/components/TypeNav'
// import SliderLoop from '@/components/SliderLoop'
//注册
Vue.component('TypeNav',TypeNav)
// Vue.component('SliderLoop',SliderLoop)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
