import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@renderer/assets/global.scss'
import '@renderer/assets/tailwind.css'
import { createPinia } from 'pinia'
const app= createApp(App)
app.use(createPinia())
app.use(router).mount('#app')
