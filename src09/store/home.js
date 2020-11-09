import {reqCategoryList,reqBannerList,reqFloorList} from '@/api'

const state = {
  //存数据
  categoryList:[],
  bannerList:[],
  floorList:[]
  
}
const mutations = {
  //直接修改state里面的数据
  RECEIVECATEGORYLIST(state,categoryList){
    state.categoryList = categoryList
  },
  RECEIVEBANNERLIST(state,bannerList){
    state.bannerList = bannerList
  },
  RECEIVEFLOORLIST(state,floorList){
    state.floorList = floorList
  }
}

const actions ={
  //异步action  因为一般都是在action当中去发请求拿数据
  async getCategoryList(context){
   const result = await reqCategoryList()
   if(result.code === 200){
     //把拿到的数据提交到mutations当中，进行修改
     context.commit('RECEIVECATEGORYLIST',result.data)
   }
  },
  async getBannerList({commit}){
   const result = await reqBannerList()
   if(result.code === 200){
     //把拿到的数据提交到mutations当中，进行修改
     commit('RECEIVEBANNERLIST',result.data)
   }
  },
  async getFloorList({commit}){
   const result = await reqFloorList()
   if(result.code === 200){
     //把拿到的数据提交到mutations当中，进行修改
     commit('RECEIVEFLOORLIST',result.data)
   }
  },


}

const getters ={}
export default {
  state,
  actions,
  mutations,
  getters
 
}