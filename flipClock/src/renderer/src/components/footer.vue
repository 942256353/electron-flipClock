<template>
    <main class="drag w-full px-2 text-center mt-2 rounded-md flex justify-between items-center" :style="{backgroundColor:config.footer.bgColor,color:config.footer.color}">
        <div class="text-sm">我是小谢</div>
        <Navbar/>
    </main>
</template>
<script setup lang="ts">
import {useConfigStore} from '@renderer/store/useConfigStore'
import Navbar from "@renderer/components/Navbar.vue"
const { config} = useConfigStore()
</script>
<style lang="scss">
 main{
    user-select: none;
 }
</style>
