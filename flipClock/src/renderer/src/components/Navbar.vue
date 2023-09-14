<script setup lang="ts">
import {useConfigStore} from '@renderer/store/useConfigStore'
import { Time,AlarmClock } from '@icon-park/vue-next'
import {useRouter} from 'vue-router'
const router = useRouter()
const { config} = useConfigStore()
const toggle = ()=>{
    config.clock.type=config.clock.type==='clock'?'timing':'clock'
    router.push({name:'clock'})
}
</script>
<template>
    <main class="py-1 nodrag rounded-md flex justify-between items-center gap-1" :style="{backgroundColor:config.footer.bgColor,color:config.footer.color}">
        <div  @click="toggle" class=" cursor-pointer hover:text-[#e67e22]">
            <AlarmClock theme="outline" size="18"  v-if="config.clock.type=='clock'"/>
            <Time theme="outline" size="18" v-else/>
        </div>
       <div class="flex gap-1 text-sm opacity-80 hover:text-[#e67e22]">
        <RouterLink v-if="$route.name=='clock'" :to="{name:'config'}">
            配置
        </RouterLink>
        <RouterLink v-else :to="{name:'clock'}">
            时钟
        </RouterLink>
       </div>
    </main>
</template>
<style scoped lang="scss">
    main{
        user-select: none;
    }
</style>