
import {reqGetGoodsDetails} from '@/api/index' 
const details = {
  state: {
    //定义初始值|
    goodsDetails:{}
  },
  getters: {
    categoryView(state){
      return state.goodsDetails.categoryView||{}
    },
    skuInfo(state){
      return state.goodsDetails.skuInfo||{}
    },
  },
  mutations: {
    //唯一可以修改state的地方
    GetGoodsDetails(state,goodsDetails){
      state.goodsDetails = goodsDetails
    }
  },
  actions: {
    //业务逻辑空间
    async  GetGoodsDetails({commit},skuId){
      const result = await  reqGetGoodsDetails(skuId)
      debugger
        if(result.code == 200){
          this.commit('GetGoodsDetails',result.data)
        }
    },
  }
}
  export default details