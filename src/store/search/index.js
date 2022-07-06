
import {reqGetSearchInfo} from '@/api/index' 
const search = {
  state: {
    //定义初始值|
    searchInfo:{}
  },
  getters: {
    goodsList(state){
      return state.searchInfo?.goodsList||[]
    },
    attrsList(state){
      return state.searchInfo?.attrsList||[]
    },
    trademarkList(state){
      return state.searchInfo?.trademarkList||[]
    }
    
  },
  mutations: {
    //唯一可以修改state的地方
    getReqGetSearchInfo(state,searchInfo){
      state.searchInfo = searchInfo
    }
  },
  actions: {
    //业务逻辑空间
    async  getReqSearchInfo({commit},params={}){
      const result = await  reqGetSearchInfo(params)
        if(result.code == 200){
          this.commit('getReqGetSearchInfo',result.data)
        }
    },
  }
}
  export default search