import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const config = ref({
    clock: {
      bgColor:'#e67e22',
      color:'#fff',
      style: 'index',
      type: 'timing' as 'clock' | 'timing',
      timing: {
        hour: 0,
        minute: 0,
        second: 100
      }
    },
    footer: {
        bgColor:'#ecf0f1',
        color:'#000'
    }
  })
  return {
    config
  }
})
