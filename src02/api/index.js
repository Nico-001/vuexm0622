import Ajax from '@/api/node_modules/@/ajax/Ajax'

 export const  reqCategoryList = () =>{
  return Ajax({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}

reqCategoryList()