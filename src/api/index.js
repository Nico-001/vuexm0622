
import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'

export const reqCategoryList = () =>{
    return Ajax({
      url:'/product/getBaseCategoryList',
      mothod:'get'
    })
}
// reqCategoryList()

