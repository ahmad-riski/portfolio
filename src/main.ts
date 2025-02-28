import './assets/style.css'

import { createApp } from 'vue'

import Main from './Main.vue'
import Contact from './components/Contact.vue'
import router from './router'

createApp(Main)
.use(router)
.mount('#app')

