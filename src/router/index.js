import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import ProductDetails from '../views/ProductDetails.vue';
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
    path: '/product/details/:id',
    name: 'productDetails',
    component: ProductDetails
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
