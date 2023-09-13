import {createRouter,createWebHistory} from 'vue-router'

import Clock from '@renderer/views/Clock.vue'
// import Show from '@renderer/views/Show.vue'

const routes = [
    {name:'clock',path:'/',component:Clock},
    // {name:'show',path:'/show',component:Show},
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router