<template>
  <div class="spec-preview">
    <img :src="defaultImg.imgUrl" />
    <div class="event" @mousemove="move"></div>
    <div class="big">
      <img :src="defaultImg.imgUrl" ref="bigImg"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:['imgList'],
    data(){
      return{
        defaultIndex:0
      }
    },
    mounted(){
     
      this.$bus.$on('changeDefaultIndex',this.changeDefaultIndex)
    },
    computed:{
      //因为这里遍历的是imgList里面的数据，所以要通过计算属性计算出里面的数据
      //但是页面的一打开的时候，就会初始化数据展示，得到的是空的数组，
      //但是一发请求，数据就会回来，所以会出现假错现象，为了防止假错现象所以在后面加 ‘|| {}’
      //在用的时候就会报假错
      defaultImg(){
        return this.imgList[this.defaultIndex] || {}
      }
    },
     methods:{
    //全局事件总线接收到小图列表组件传递的下标，修改当前的下标实现同步
      changeDefaultIndex(index){
        this.defaultIndex = index
        
      },
      move(event){
         //移入之后先让遮罩移动
        let mask = this.$refs.mask
        let bigImg = this.$refs.bigImg

        let mouseX = event.offsetX
        let mouseY = event.offsetY

        let maskX = mouseX - mask.offsetWidth / 2
        let maskY = mouseY - mask.offsetHeight / 2


        if(maskX < 0){
          maskX = 0
        }else if(maskX > mask.offsetWidth){
          maskX = mask.offsetWidth
        }

        if(maskY < 0){
          maskY = 0
        }else if(maskY > mask.offsetHeight){
          maskY = mask.offsetHeight
        }


        mask.style.left = maskX + 'px'
        mask.style.top = maskY + 'px'

        bigImg.style.left = -2 * maskX + 'px'
        bigImg.style.top= -2 * maskY + 'px'


      }
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>