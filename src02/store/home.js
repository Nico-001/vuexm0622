import {reqCategoryList} from '@/api'
const state = {
  //存数据
  categoryList:[]
}

const mutations = {
  //直接修改state的值
  RECIVECATEGORYLIST(state,categoryList){
    state.categoryList = categoryList
  }
}
const actions ={
  async getCategoryList(context){
   const result = await reqCategoryList()
   if(result.code === 200){
     context.commit('RECIVECATEGORYLIST',result.data)
   }
  }
}

export default ({
  state,
  actions,
  mutations,
  
  
})