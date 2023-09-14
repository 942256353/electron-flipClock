<script setup lang="ts">
import FlipClock from '../composables/FileClock'
import { onMounted,watch } from "vue";
import "@renderer/assets/flipClock.scss"
import {useConfigStore} from '@renderer/store/useConfigStore'
const { config} = useConfigStore()
const instance = new FlipClock({
            el: '#main',
           ...config.clock
        });
       

onMounted(() => {
   instance.render();
})
watch(()=>config.clock.type,()=>{
   instance.destory().config({
            el: '#main',
           ...config.clock
        }).render();
})
const quit = ()=>{
   window.api.quit();
}
const refresh = ()=>{
   if(config.clock.type==='clock') return;
   instance.destory().config({
            el: '#main',
           ...config.clock
        }).render();
}
</script>
<template>
   <main>
      <div id="main" @contextmenu="quit" @dblclick="refresh" :style="{'--bgColor':config.clock.bgColor||'red','--color':config.clock.color||'#fff'}"></div>
   </main>
</template>
<style lang="scss">
:root{
   // --bgColor:#e67e22;
   // --color:#000;
}
</style>