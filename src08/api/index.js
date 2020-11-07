
import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'

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

export const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    url:'/list',
    method:'post',
    data:searchParams
  })
}

//获取商品详情数据
//  /api/item/{skuId}
export const reqGoodsDetailInfo = (skuId) =>{
  return Ajax({
    url:`/item/${skuId}`,
    method:'get'
  })
}
// reqGoodsDetailInfo()

//请求添加购物车（添加或者修改购物车）
// /api/cart/addToCart/{ skuId }/{ skuNum }
//post
export const reqAddOrUpdateShopCart =(skuId,skuNum) =>{
    return Ajax({
      url:`cart/addToCart/${ skuId }/${ skuNum }`,
      method:'post'
    })
}