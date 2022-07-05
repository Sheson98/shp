<template>
  <div>
    <!-- 已注册的全局组件可以直接引入 -->
    <TypeNav></TypeNav>
    
    <ListContainer></ListContainer>
    <Recommand></Recommand>
    <Rank></Rank>
    <Like></Like>
    <Floor   v-for="(item,index) in floorList" :key="item.id" :list="item"/>
    <Brand></Brand>
  </div>
</template>

<script>
import TypeNav from './TypeNav/index.vue';
import ListContainer from '@/pages/Home/ListContainer'
import Recommand from '@/pages/Home/Recommand'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex';
    export default {
    name: "Home",
    components: { TypeNav, ListContainer, Recommand, Rank, Like, Floor, Brand },
    mounted(){
      this.$store.dispatch('getfloorList')
    },
    computed:{
       ...mapState({
            floorList:(state)=>{
                return state.floorList
            }
        })
    }
   
}
</script>

<style>

</style>