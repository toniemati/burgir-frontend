import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import ProductDetails from '../views/ProductDetails.vue';
import Koszyk from '../views/Koszyk.vue';
import Onas from '../views/Onas.vue';
import Kontakt from '../views/Kontakt.vue';
import Deliveries from '@/views/stats/Deliveries.vue';
import Auto from '@/views/stats/Auto.vue';
import Pracownik from '@/views/stats/Pracownik.vue';
import Klient from '@/views/stats/Klient.vue';

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
  {
    path: '/dostawa/:id',
    name: 'dostawaDetails',
    component: Deliveries
  },
  {
    path: '/auto/:id',
    name: 'autoDetails',
    component: Auto
  },
  {
    path: '/pracownik/:id',
    name: 'pracownikDetails',
    component: Pracownik
  },
  {
    path: '/klient/:id',
    name: 'klientDetails',
    component: Klient
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
