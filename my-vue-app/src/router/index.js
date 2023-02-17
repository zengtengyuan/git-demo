import { createRouter,createWebHistory } from 'vue-router'

const routes = [
    {
        path:"/",
        component:()=>import('../views/main.vue'),
        children:[
            {
                path:"/",
                name:'home',
                component:()=>import('../views/home/Home.vue')
            }
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router