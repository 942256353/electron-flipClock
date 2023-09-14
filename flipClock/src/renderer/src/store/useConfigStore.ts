import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const config = ref({
    clock: {
      bgColor:'#e67e22',
      color:'#fff',
      style: 'flipClock',
      type: 'clock' as 'clock' | 'timing',
      timing: {
        hour: 0,
        minute: 8,
        second: 10
      }
    },
    footer: {
        bgColor:'#008c8c',
        color:'#fff',
        content:'桌面时钟@2023_By_小谢'
    }
  })
  return {
    config
  }
},{persist:true})
