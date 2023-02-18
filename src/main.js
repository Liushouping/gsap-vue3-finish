import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import 'aos/dist/aos.css'

import { createI18n } from 'vue-i18n'

import zh from "./language/zh-TW.json";
import en from "./language/en-US.json";
import ja from "./language/ja-JP.json";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") ?? "en-US",
  fallbackLocale: "en-US",
  messages: {
    "zh-TW": zh,
    "en-US": en,
    "ja-JP": ja
  }
});



const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
