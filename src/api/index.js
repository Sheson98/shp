import request  from "./request";
import mockRequest  from "./mockRequest";
//三级联动接口

export const reqCategoryList = ()=>{
  return  request({
        url:'api/product/getBaseCategoryList',
        method:'get'
    })
}
export const reqBannerList = ()=>{
  return  mockRequest({
        url:'/banner',
        method:'get'
    })
}
export const reqFloorList = ()=>{
  return  mockRequest({
        url:'/floor',
        method:'get'
    })
}
export const reqGetSearchInfo = (params)=>{
  return  request({
        url:'api/list',
        method:'post',
        data:params
    })
}