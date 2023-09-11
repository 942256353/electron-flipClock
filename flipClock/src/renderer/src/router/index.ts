import {createRouter,createWebHistory} from 'vue-router'

import Home from '@renderer/views/Home.vue'
// import Show from '@renderer/views/Show.vue'

const routes = [
    {name:'home',path:'/',component:Home},
    // {name:'show',path:'/show',component:Show},
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router