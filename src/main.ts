import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { messages } from './i18n'
import App from './App.vue'

import './styles/main.css'

const app = createApp(App)
const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
})
app.use(i18n)
app.mount('#app')
