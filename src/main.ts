import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { MotionPlugin } from '@vueuse/motion'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/index'

createApp(App).use(createPinia().use(piniaPluginPersistedstate)).use(router).use(MotionPlugin).use(autoAnimatePlugin).mount('#app')
