import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import home from './home'
import users from './users'
import search from './search'


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
    search
  }
})