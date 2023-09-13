import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const config = ref({
    clock: {
      bgColor:'#e67e22',
      color:'#fff',
      style: 'index',
      type: 'clock' as 'clock' | 'timing',
      timing: {
        hour: 0,
        minute: 8,
        second: 10
      }
    },
    footer: {
        bgColor:'#008c8c',
        color:'#fff'
    }
  })
  return {
    config
  }
})
