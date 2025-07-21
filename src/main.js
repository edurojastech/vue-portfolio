import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import Home from './pages/Home.vue'
import Projetos from './pages/Projetos.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projetos', component: Projetos }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
