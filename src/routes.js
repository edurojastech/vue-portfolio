import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Projetos from './pages/Projetos.vue'
import Blog from './pages/Blog.vue'
import NotFound from './pages/NotFound .vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projetos', component: Projetos },
  { path: '/blog/:id', component: Blog},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router