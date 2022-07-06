
import {reqCategoryList,reqBannerList,reqFloorList} from '@/api/index' 

const  home =   {
  state: {
    //定义初始值|
    categoryList:[],
    bannerList:[],
    floorList:[]
  },
  getters: {
  },
  mutations: {
    //唯一可以修改state的地方
    CategoryList(state,categoryList){
      state.categoryList = categoryList;
    },
    BannerList(state,bannerList){
      state.bannerList = bannerList;
    },
    FloorList(state,floorList){
      state.floorList = floorList;
    }
  },
  actions: {
    //业务逻辑空间
    async  getCategoryList(){
        const result = await  reqCategoryList()
        if(result.code == 200){
          this.commit('CategoryList',result.data)
        }
    },
    async getBannerList(){
      const result = await  reqBannerList()
      if(result.code == 200){
        this.commit('BannerList',result.data)
      }
    },
    async getfloorList(){
      const result = await  reqFloorList()
      if(result.code == 200){
        this.commit('FloorList',result.data)
      }
    }
  }
}
export default  home