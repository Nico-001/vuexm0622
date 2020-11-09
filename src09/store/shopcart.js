import {reqAddOrUpdateShopCart,reqShopCartList,reqDeleteCart,reqUpdateCartIsCheck} from '@/api'

const state = {
  shopCartList:[]
}

const mutations = {
  RECEIVESHOPCARTLIST(state,shopCartList){
    state.shopCartList = shopCartList
  }
}
const actions ={
  async addOrUpdateShopCart({commit},{skuId,skuNum}){
    const result = await reqAddOrUpdateShopCart(skuId,skuNum)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('fail'))
    }
  },
  async getShopCartList({commit}){
    const result = await reqShopCartList()
    if(result.code === 200){
      commit('RECEIVESHOPCARTLIST',result.data)
    }
  },
  async updateCart({commit},{skuId,isChecked}){
    const result = await reqUpdateCartIsCheck(skuId,isChecked)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('fail'))
    }
  },
  async updateCartAll({commit,dispatch,state},isChecked){
    let promises = []
    state.shopCartList.forEach(item =>{
      if(item.isChecked === isChecked) return
      const promise = dispatch('updateCart',{skuId:item.skuId,isChecked})
      promises.push(promise)
    })
    return Promise.all(promises)
  },
  //删除
  async deleteCart({commit},skuId){
    const result = await reqDeleteCart(skuId)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('fail'))
    }
  },
  //删除多个
  async deleteCartAll({commit,dispatch,state}){
    let promises = []
    state.shopCartList.forEach(item =>{
      if(!item.isChecked) return
      const promise = dispatch('deleteCart',item.skuId)
      promises.push(promise)
    })
    return Promise.all(promises)
  },
}
const getters ={}
export default {
  state,
  actions,
  mutations,
  getters
 
}