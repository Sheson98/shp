<template>
  <!-- 商品分类导航 -->
        <div class="type-nav"  >
            <div class="container">
                <div @mouseleave="leaveIndex">
                    <h2 class="all" @mouseenter="changeShow('enter')"  >全部商品分类</h2>
                    <div class="sort" v-show="isShow"  @mouseleave="changeShow('leave')"> 
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item " v-for="(item,index) in categoryList" :key="item.categoryId"  :class="{cur:curIndex==index}" >
                                <h3  @mouseenter="changeIndex(index)"   >
                                    <a href=" " :data-categoryName1="item.categoryName" :data-categoryId1="item.categoryId" >{{item.categoryName}}</a>
                                </h3>
                                <div class="item-list clearfix" :style="{display:curIndex==index?'block':'none'}">
                                    <div class="subitem" v-for="(childItem,index) in item.categoryChild" :key="childItem.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a href="" :data-categoryName2="childItem.categoryName" :data-categoryId2="childItem.categoryId" >{{childItem.categoryName}}</a>
                                            </dt>
                                            <dd>
                                                <em  v-for="(ccItem,index) in childItem.categoryChild  " :key="ccItem.categoryId">
                                                    <a href=""  :data-categoryName3="ccItem.categoryName" :data-categoryId3="ccItem.categoryId" >{{ccItem.categoryName}}</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <nav class="nav" >
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>

            </div>
        </div>

</template>

<script>
import { mapState } from 'vuex'
import {throttle} from 'lodash'
export default {
    name:"TypeNav",
     mounted(){
      //派发请求
      this.$store.dispatch('getCategoryList')
      if(this.$route.path!='/home'){
        this.isShow = false
      }
    },
    data(){
        return{
            curIndex:-1,
            isShow:true
        }
    },
    methods:{
        changeIndex:throttle(function(index){
             this.curIndex = index;
        },50)
        ,leaveIndex(index){
            this.curIndex = -1;
        },
        changeShow(handler){
            if(this.$route.path == '/search'){
                  if(handler == 'enter'){
                     this.isShow = true
                    } else{
                        this.isShow = false
                    }
            }
          
        },
        goSearch(event){
          //  this.$router.push('search')
            const {categoryname1,categoryname2,categoryname3} =  event.target.dataset;
            const {categoryid1,categoryid2,categoryid3} =  event.target.dataset;
            const categoryName = categoryname1||categoryname2||categoryname3
            const categoryId = categoryid1||categoryid2||categoryid3
            if(categoryName&&categoryId){
                this.$router.push({name:"search",query:{categoryName,categoryId}})
                debugger
            }
        }
    },
    computed:{
        ...mapState({
            categoryList:(state)=>{
                return state.home.categoryList
            }
        })
    }
}
</script>

<style  lang="less" scoped>
    .cur{
            background-color: rgba(247, 0, 0, 0.144);
          }
.type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }
                    
                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        // &:hover {
                        //     .item-list {
                        //         display: block;
                        //     }
                        // }
                    }
                }
            }
        }
    }
</style>