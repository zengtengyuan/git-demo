
<template>
    <el-header class="whole_box">
        <!-- 左侧内容区 -->
        <div class="l-content">
            <el-button size="small" @click="handleCollapse">
                <el-icon :size="20">
                    <Menu />
                </el-icon>
            </el-button>
            <h3>首页</h3>
        </div>
        <!-- 右侧内容区 -->
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/user.png">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script>
import { useStore } from 'vuex'
    export default{
        setup(){
            let store = useStore()
            let handleCollapse=()=>{
                store.commit('changeIsCollapse')
            }
            return {
                handleCollapse
            }
        }
    }
</script>

<style scoped>
   
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        background-color: #333;
    }
    .r-content .user{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .l-content{
        display: flex;
        margin-left: 10px;
        align-items: center;
    }
    .l-content h3{
        color:#fff;
    }
    .l-content .el-button{
        margin-right: 20px;
    }
    .r-content{
        margin-right: 10px;
    }
</style>
