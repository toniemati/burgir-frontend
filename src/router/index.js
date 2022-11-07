import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import Koszyk from '../views/Koszyk.vue';
import Onas from '../views/Onas.vue';
import Kontakt from '../views/Kontakt.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/koszyk',
    name: 'koszyk',
    component: Koszyk
  },
  {
    path: '/onas',
    name: 'onas',
    component: Onas
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: Kontakt
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
