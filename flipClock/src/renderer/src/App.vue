<script setup lang="ts">
import useMouseEvent from '../src/composables/useMouseEvent'
import FooterVue from '@renderer/components/footer.vue'
import { Crown } from '@icon-park/vue-next'
const { fn } = useMouseEvent()
fn()
</script>

<template>
  <Suspense>
    <router-view #default="{ Component }">
      <!-- <el-tooltip class="item" effect="customized" :auto-close="2000"  :show-arrow="true" content="按住皇冠或底部栏可拖拽" placement="bottom"> -->
        <div>
          <div class="flex justify-center mb-2 drag">
            <Crown theme="outline" size="24" fill="#f1c40f" />
          </div>
          <component :is="Component" class="flex flex-col justify-center items-center"></component>
          <FooterVue/>
        </div>
      <!-- </el-tooltip> -->
    </router-view>
  </Suspense>
</template>

<style lang="less">
</style>