
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

//请求购物车列表数据
export const reqShopCartList = () => {
  return Ajax({
    url:'/cart/cartList',
    method:'get'
  })
}

//请求修改购物车选中状态

export const reqUpdateCartIsCheck = (skuId,isChecked) =>{
  return Ajax({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get'
  })
}

//请求删除单个购物车

export const reqDeleteCart = (skuId) =>{
  return Ajax({
    url:`/cart/deleteCart/${skuId}`,
    method:'delete'
  })
}