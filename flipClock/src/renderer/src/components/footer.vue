<template>
    <main class="drag w-full px-2 text-center mt-2 rounded-md flex justify-between items-center" :style="{backgroundColor:config.footer.bgColor,color:config.footer.color}">
        <div class="text-sm run">{{config.footer.content}}</div>
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
 .run{
    animation: identifier 3s infinite both;
 }
 @keyframes identifier {
    from{
        transform: translateX(0);
    }
    50%{
        transform: translateX(calc(230px - 100%));
    }
    to{
        transform: translateX(0);
    }
 }
</style>
