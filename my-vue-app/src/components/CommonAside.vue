<template>
    <el-aside :width="$store.state.isCollapse?'64px':'180px'">
        <el-menu
        active-text-color="#000000"
        background-color="#39d0bb"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        :collapse="$store.state.isCollapse"
        :collapse-transition="false"
      >
        
        <el-menu-item 
            :index="item.path" 
            v-for="item in noChildren()"
            :key="item.path"
            >
          <el-icon>
            <component class="icons" :is="item.icon"></component>
          </el-icon>
          <span>{{item.label}}</span>
        </el-menu-item>
        <el-sub-menu
            :index="item.label"
            v-for="item in hasChildren()"
            :key="item.path"
        >
          <template #title>
            <el-icon>
               <component class="icons" :is="item.icon"></component>
            </el-icon>
            <span>{{item.label}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
             :index="subItem.path"
              v-for="(subItem,subIndex) in  item.children"
              :key = "subIndex"
              >
              <el-icon>
               <component class="icons" :is="subItem.icon"></component>
            </el-icon>
            <span>{{subItem.label}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>
</template>

<script>
    export default{
        setup(){
        const list = [
            {
                path:'/user',
                name:"user",
                label:"用户管理",
                icon:"user",
                url:"UserManage/UserManage",
                children:[
                    {
                        path:'/addUser',
                        name:"addUser",
                        label:"添加用户",
                        icon:"compass",
                        url:"UserManage/UserAdd"
                    },
                    {
                        path:'/deleteUser',
                        name:"addUser",
                        label:"删除用户",
                        icon:"compass",
                        url:"UserManage/UserDelete"
                    }
                ]
            },
            {
                path:'/goods',
                name:"goods",
                label:"商品管理",
                icon:"menu",
                url:"GoodsManage/GoodsManage"
            }
        ]
        const noChildren = ()=>{
            return list.filter((item)=>!item.children)
        }
        const hasChildren = ()=>{
            return list.filter((item)=>item.children)
        }

        return {
            noChildren,
            hasChildren
        }
    }
    }
   
</script>

<style scoped>
    .el-menu{
        border:none;
    }
</style>