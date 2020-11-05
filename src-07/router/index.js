import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import routes from './routes'
const originPush = VueRouter.prototype.push

VueRouter.prototype.push = function(location,resolved,rejected){
  if(resolved === undefined && rejected === undefined){
    return originPush.call(this,location).catch(()=>{})
  }else{
    return originPush.call(this,location,resolved,rejected)
  }
}

export default new VueRouter({
  mode:'history',
  routes
})