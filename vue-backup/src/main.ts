import './assets/main.css'
import 'ant-design-vue/dist/reset.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue'
import App from './App.vue'

// Import pages
import Home from './pages/Home.vue'
import Tuition from './pages/Tuition.vue'
import Portfolio from './pages/Portfolio.vue'
import Contact from './pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/tuition', name: 'Tuition', component: Tuition },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app')
