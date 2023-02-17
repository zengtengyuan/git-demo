<template>
    <!-- <div> -->
     <div class="common-layout">
    <el-container class="lay-container">
            <CommonAside/>
      <el-container class="r-container">
           <el-header>
             <CommonHeader/>
           </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
    <!-- </div> -->
  
</template>
<script>
    import { defineComponent } from 'vue'
    import CommonHeader from '../components/CommonHeader.vue'
    import CommonAside from '../components/CommonAside.vue'
    export default defineComponent({
            components:{
                CommonHeader,
                CommonAside
            }
    })
</script>

<style scoped>
   .r-container{
        flex-wrap: wrap;
   }
   .el-header{
    padding: 0px;
   }
   .common-layout{
    height: 100%;
   }
   .common-layout .el-container{
    height: 100%;
   }
   .common-layout .el-container .el-aside{
    height: 100%;
    background-color: #39d0bb;
   }
   .el-main{
    margin: 0;
    padding: 10px;
   }
</style>