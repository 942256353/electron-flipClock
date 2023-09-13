<template>
    <main class="bg-[#ecf0f1] w-full text-center mt-2 rounded-md" :style="{backgroundColor:config.footer.bgColor,color:config.footer.color}">
        我是小谢
    </main>
</template>
<script setup lang="ts">
import {useConfigStore} from '@renderer/store/useConfigStore'

const { config} = useConfigStore()
</script>
<style lang="scss">
 main{
    user-select: none;
 }
</style>
