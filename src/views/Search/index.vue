<template>
  <div>
    Search
    param:{{$route.params.keyword}} --- query:{{$route.query.keyword1}} <br>

    param:{{keyword}} --- query:{{keyword1}}


  </div>
</template>

<script>
  export default {
    name:'Search',
    props:['keyword','keyword1']
  
  }
</script>

<style lang="less" scoped>

</style>
