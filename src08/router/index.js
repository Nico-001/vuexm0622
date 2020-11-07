import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



const originPush = VueRouter.prototype.push

VueRouter.prototype.push = function(location,resolved,rejected){
  if(resolved === undefined && rejected === undefined){
    return originPush.call(this,location).catch(()=>{})
  }else{
    return originPush.call(this,location,resolved,rejected)
  }
}

import routes from './routes'

export default new VueRouter({
  mode:'history',
  routes,
  //切换路由的时候保证跳转到的页面滚动位置在最上方
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})