
import Home from '@/views/Home'
import Register from '@/views/Register'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'

export default [
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/detail/:skuId',
    component:Detail
  },
  {
    path:'/addcartsuccess',
    component:AddCartSuccess
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/register',
    component:Register,
    //解决登录页和注册页底部不显示
    meta:{
      isHidden:true
    }
  },
  {
    path:'/search/:keyword?',
    component:Search,
    name:'search',
    props(route){
      return {keyword:route.params.keyword,keyword1:route.query.keyword1}
    }
  },
  {
    path:'/login',
    component:Login,
    meta:{
      isHidden:true
    }

  },
  {
    path:'/',
    redirect:'/home'
  }
]