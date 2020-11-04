<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-if="searchParams.categoryName">
              {{searchParams.categoryName}}
              <i @click="removeCategoryName">x</i>
            </li>
            <li class="with-x" v-if="searchParams.keyword">{{searchParams.keyword}}
               <i @click="removeKeyword">x</i>
            </li>
            <!-- 显示品牌面包屑 -->
            <li class="with-x" v-if="searchParams.trademark">
              {{searchParams.trademark.split(':')[1]}}
              <i @click="removeTrademark">x</i>
            </li>
            <!-- 显示属性面包屑 -->
            <li class="with-x" 
            v-for="(prop,index) in searchParams.props"
            :key="index"
            >
             {{prop.split(':')[1]}}
              <i  @click="removeProp(index)">x</i>
            </li>
           
          </ul>
        </div>

        <!--selector-->
        <SearchSelector
         @searchForTrademark='searchForTrademark'
         @searchForAttrs='searchForAttrs'
         />

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{active:sortFlag === '1'}">
                  <a href="javascript:;" @click="sortGoods('1')">
                    综合
                    <i v-if="sortFlag === '1'" class="iconfont" 
                    :class="{
                      icondown:sortType === 'desc',
                      iconup:sortType === 'asc'
                    }"></i>
                    </a>
                </li> 
                <li :class="{active:sortFlag === '2'}">
                  <a href="javascript:;" @click="sortGoods('2')">价格
                     <i v-if="sortFlag === '2'"  class="iconfont "
                     :class="{
                      icondown:sortType === 'desc',
                      iconup:sortType === 'asc'
                    }"></i>
                  </a>
                </li>
                  <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" 
              v-for="(goods,index) in goodsList"
               :key="goods.id"
                >
                <div class="list-wrap">
                  <div class="p-img">
                    <a href="item.html" target="_blank">
                      <img :src="goods.defaultImg" />
                  </a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{goods.price}}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">
                      {{goods.title}}
                    </a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
          <!-- 当前页、每页显示数据2、总条数16、连续页数5 -->
         <Pagination
          :currentPageNum="searchParams.pageNo"
          :pageSize="searchParams.pageSize"
          :total="goodsListInfo.total"
          :continueNum="5"
          @changeNum="changeNum"
         ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
  import SearchSelector from './SearchSelector/SearchSelector'
  export default {
    name: 'Search',
    data() {
    return {
      //是我们用户默认搜索的参数,初始化参数
      //是把用户今后可能的所有搜索参数都收集到对象当中，只不过用户操作相关的全部清空
      //后面用户在搜索的时候，根据不同的操作，只需要修改初始化参数，然后再次发送请求就好了
      searchParams: {
        category1Id:'',
        category2Id:'',
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 2,
        props: [],
        trademark: "",
      },
    };
  },
    beforeMount(){
    //？从路由拿参数
    this.handelerParams()
  },
    mounted() {
      //发送请求，vuex获取数据
     this.getGoodsListInfo();
  },
 
  methods: {
     getGoodsListInfo() {
      this.$store.dispatch("getGoodsListInfo", this.searchParams);
    },
     //封装函数，处理参数问题
     handelerParams(){
      //在首页点击列表，进到search页面的数据
      let{
        categoryName,
        category1Id,
        category2Id,
        category3Id
      } = this.$route.query
      let {keyword} = this.$route.params

      //更新：通过类别筛选获取数据
      let searchParams = {
        ...this.searchParams,
        categoryName,
        category1Id,
        category2Id,
        category3Id,
        keyword
      }
      //把参数当中的空串的属性去掉，因为会占带宽
      Object.keys(searchParams).forEach(item => {
        if(searchParams[item] === ''){
          delete searchParams[item]
        }
      })
      this.searchParams = searchParams
    },

     //删除面包屑的类名
     removeCategoryName(){
      delete this.searchParams.categoryName;
      let location = {name:'search',params:this.$route.params}
      // this.$router.push(location)
      this.$router.replace(location)//搜索页往搜索页跳转不需要保留历史记录

    },
    //删除关键字类名
    removeKeyword(){
      delete this.searchParams.keyword;
      let location = {name:'search',query:this.$route.query}
      // this.$router.push(location)
      this.$router.replace(location)//搜索页往搜索页跳转不需要保留历史记录
      
      //触发header清空输入框事件
      this.$bus.$emit('clearKeyword')
    },

    //根据品牌搜索
    searchForTrademark(trademark){
        let trademarkInfo = `${trademark.tmId}:${trademark.tmName}`;
      //修改搜索参数发请求
      this.searchParams.trademark = trademarkInfo;
      this.getGoodsListInfo();
    },
    //删除面包屑品牌
    removeTrademark(){
      this.searchParams.trademark = undefined
      this.getGoodsListInfo()
    },
    //根据属性搜索
    searchForAttrs(attr,attrValue){
      let prop = `${attr.attrId}:${attrValue}:${attr.attrName}`;
      let isRepeat = this.searchParams.props.some((item) => item === prop)
      if (isRepeat) return
      this.searchParams.props.push(prop)
      this.getGoodsListInfo()
    },
    //删除面包屑属性
    removeProp(index){
      this.searchParams.props.splice(index,1)
      this.getGoodsListInfo();
    },
    //点击综合和价格，排序商品
    sortGoods(sortFlag){
      //获取原来的排序规则（排序标志和排序类型）
      let originSortFlag = this.searchParams.order.split(':')[0]
      let originSortType = this.searchParams.order.split(':')[1]
      let newOrder = ''
      // 判断点击传递过来的标志是否和原来的排序标志一样  
      if(sortFlag === originSortFlag){
        //原来的排序标志和新点击的一样，只需改变排序类型
        newOrder = `${originSortFlag}:${originSortType === 'desc'? 'asc' : 'desc'}`
      }else{
        //原来的排序标志和新点击的不一样，只需改变排序标志，排序类型默认给一个就行
        newOrder = `${sortFlag}:desc`
      }

      this.searchParams.order = newOrder
      this.getGoodsListInfo()

    },
    changeNum(page){
      this.searchParams.pageNo = page
      this.getGoodsListInfo()
    }

  },
  
  computed:{
   //从vuex里面拿数据
    ...mapGetters(['goodsList']),
    ...mapState({
      goodsListInfo: state => state.search.goodsListInfo
    }),
    sortFlag(){
      return this.searchParams.order.split(':')[0]
    },
    sortType(){
      return this.searchParams.order.split(':')[1]
    }
  },
  watch:{
    $route:{
      handler(){
        this.handelerParams()
        this.getGoodsListInfo();

      }
    }
  },



    components: {
      SearchSelector
    }
  }
</script>

<style lang="less" scoped>
  .main {
    margin: 10px 0;

    .py-container {
      width: 1200px;
      margin: 0 auto;

      .bread {
        margin-bottom: 5px;
        overflow: hidden;

        .sui-breadcrumb {
          padding: 3px 15px;
          margin: 0;
          font-weight: 400;
          border-radius: 3px;
          float: left;

          li {
            display: inline-block;
            line-height: 18px;

            a {
              color: #666;
              text-decoration: none;

              &:hover {
                color: #4cb9fc;
              }
            }
          }
        }

        .sui-tag {
          margin-top: -5px;
          list-style: none;
          font-size: 0;
          line-height: 0;
          padding: 5px 0 0;
          margin-bottom: 18px;
          float: left;

          .with-x {
            font-size: 12px;
            margin: 0 5px 5px 0;
            display: inline-block;
            overflow: hidden;
            color: #000;
            background: #f7f7f7;
            padding: 0 7px;
            height: 20px;
            line-height: 20px;
            border: 1px solid #dedede;
            white-space: nowrap;
            transition: color 400ms;
            cursor: pointer;

            i {
              margin-left: 10px;
              cursor: pointer;
              font: 400 14px tahoma;
              display: inline-block;
              height: 100%;
              vertical-align: middle;
            }

            &:hover {
              color: #28a3ef;
            }
          }
        }
      }

      .details {
        margin-bottom: 5px;

        .sui-navbar {
          overflow: visible;
          margin-bottom: 0;

          .filter {
            min-height: 40px;
            padding-right: 20px;
            background: #fbfbfb;
            border: 1px solid #e2e2e2;
            padding-left: 0;
            border-radius: 0;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

            .sui-nav {
              position: relative;
              left: 0;
              display: block;
              float: left;
              margin: 0 10px 0 0;

              li {
                float: left;
                line-height: 18px;

                a {
                  display: block;
                  cursor: pointer;
                  padding: 11px 15px;
                  color: #777;
                  text-decoration: none;
                }

                &.active {
                  a {
                    background: #e1251b;
                    color: #fff;
                  }
                }
              }
            }
          }
        }

        .goods-list {
          margin: 20px 0;

          ul {
            display: flex;
            flex-wrap: wrap;

            li {
              height: 100%;
              width: 20%;
              margin-top: 10px;
              line-height: 28px;

              .list-wrap {
                .p-img {
                  padding-left: 15px;
                  width: 215px;
                  height: 255px;

                  a {
                    color: #666;

                    img {
                      max-width: 100%;
                      height: auto;
                      vertical-align: middle;
                    }
                  }
                }

                .price {
                  padding-left: 15px;
                  font-size: 18px;
                  color: #c81623;

                  strong {
                    font-weight: 700;

                    i {
                      margin-left: -5px;
                    }
                  }
                }

                .attr {
                  padding-left: 15px;
                  width: 85%;
                  overflow: hidden;
                  margin-bottom: 8px;
                  min-height: 38px;
                  cursor: pointer;
                  line-height: 1.8;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;

                  a {
                    color: #333;
                    text-decoration: none;
                  }
                }

                .commit {
                  padding-left: 15px;
                  height: 22px;
                  font-size: 13px;
                  color: #a7a7a7;

                  span {
                    font-weight: 700;
                    color: #646fb0;
                  }
                }

                .operate {
                  padding: 12px 15px;

                  .sui-btn {
                    display: inline-block;
                    padding: 2px 14px;
                    box-sizing: border-box;
                    margin-bottom: 0;
                    font-size: 12px;
                    line-height: 18px;
                    text-align: center;
                    vertical-align: middle;
                    cursor: pointer;
                    border-radius: 0;
                    background-color: transparent;
                    margin-right: 15px;
                  }

                  .btn-bordered {
                    min-width: 85px;
                    background-color: transparent;
                    border: 1px solid #8c8c8c;
                    color: #8c8c8c;

                    &:hover {
                      border: 1px solid #666;
                      color: #fff !important;
                      background-color: #666;
                      text-decoration: none;
                    }
                  }

                  .btn-danger {
                    border: 1px solid #e1251b;
                    color: #e1251b;

                    &:hover {
                      border: 1px solid #e1251b;
                      background-color: #e1251b;
                      color: white !important;
                      text-decoration: none;
                    }
                  }
                }
              }
            }
          }
        }

        .page {
          width: 733px;
          height: 66px;
          overflow: hidden;
          float: right;

          .sui-pagination {
            margin: 18px 0;

            ul {
              margin-left: 0;
              margin-bottom: 0;
              vertical-align: middle;
              width: 490px;
              float: left;

              li {
                line-height: 18px;
                display: inline-block;

                a {
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  border: 1px solid #e0e9ee;
                  margin-left: -1px;
                  font-size: 14px;
                  padding: 9px 18px;
                  color: #333;
                }

                &.active {
                  a {
                    background-color: #fff;
                    color: #e1251b;
                    border-color: #fff;
                    cursor: default;
                  }
                }

                &.prev {
                  a {
                    background-color: #fafafa;
                  }
                }

                &.disabled {
                  a {
                    color: #999;
                    cursor: default;
                  }
                }

                &.dotted {
                  span {
                    margin-left: -1px;
                    position: relative;
                    float: left;
                    line-height: 18px;
                    text-decoration: none;
                    background-color: #fff;
                    font-size: 14px;
                    border: 0;
                    padding: 9px 18px;
                    color: #333;
                  }
                }

                &.next {
                  a {
                    background-color: #fafafa;
                  }
                }
              }
            }

            div {
              color: #333;
              font-size: 14px;
              float: right;
              width: 241px;
            }
          }
        }
      }
    }
  }
</style>