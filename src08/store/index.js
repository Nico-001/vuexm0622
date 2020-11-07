import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import home from './home'
import users from './users'
import search from './search'
import detail from '@/store/detail'
import shopcart from '@/store/shopcart'


const state = {}
const actions ={}
const mutations = {}
const getters ={}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{
    home,
    users,
    search,
    detail,
    shopcart
  }
})