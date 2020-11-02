import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from './home'
 

const state = {}
const actions ={}
const mutations = {}
const getters = {}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{
    home
  }

})