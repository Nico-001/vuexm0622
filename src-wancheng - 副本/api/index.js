
import Ajax from '@/api/node_modules/@/ajax/Ajax'
import mockAjax from '@/api/node_modules/@/ajax/mockAjax'

export const reqCategoryList = () =>{
    return Ajax({
      url:'/product/getBaseCategoryList',
      mothod:'get'
    })
}
// reqCategoryList()

export const reqBannerList = () =>{
  return mockAjax({
    url:'/banner',
    mothod:'get'
  })
}
export const reqFloorList = () =>{
  return mockAjax({
    url:'/floor',
    mothod:'get'
  })
}