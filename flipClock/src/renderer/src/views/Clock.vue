<script setup lang="ts">
import FlipClock from '../composables/FileClock'
import { onMounted } from "vue";
import "@renderer/assets/flipClock.scss"
import FooterVue from '@renderer/components/footer.vue'
import {useConfigStore} from '@renderer/store/useConfigStore'

const { config} = useConfigStore()
onMounted(() => {
   const instance = new FlipClock({
            el: '#main',
           ...config.clock
        });
        instance.render();
})
</script>
<template>
   <main>
      <div id="main" :style="{'--bgColor':config.clock.bgColor,'--color':config.clock.color}"></div>
      <FooterVue />
   </main>
</template>
<style lang="scss">
:root{
   // --bgColor:#e67e22;
   // --color:#000;
}
</style>