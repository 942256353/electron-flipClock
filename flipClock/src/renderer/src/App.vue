<script setup lang="ts">
import useMouseEvent from "../src/composables/useMouseEvent"
const {fn} = useMouseEvent()
fn()
</script>

<template>
  <Suspense>
    <router-view #default="{Component}">
      <div class="drag">
        <component :is="Component" class="flex flex-col justify-center items-center"></component>
      </div>
    </router-view>
</Suspense>    
</template>

<style lang="less">
</style>
