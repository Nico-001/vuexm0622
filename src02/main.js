import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import  '@/api'

Vue.config.productionTip = false

//这里是全局注册的组件
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)


new Vue({
  render: h => h(App),
  router,
  store
  
}).$mount('#app')
