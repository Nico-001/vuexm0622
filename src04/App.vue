<template>
  <div>
    <Header></Header>
   <router-view></router-view>
    <Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
  export default {
    name:'',
    components:{
      Header,
      Footer
    },
    mounted(){
       //挂载后就可以拿到数据
        this.getCategoryList()
    },
    methods:{
       //封装函数
        getCategoryList(){
            this.$store.dispatch('getCategoryList')
        },
    }
    
  }
</script>

<style lang="less" scoped>

</style>
