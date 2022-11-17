import axios from "axios";
import { API_URL } from '../../config';


export const koszyk = {
  state: () => ({
    customer_id: 1,
    products: []
  }),
  getters: {
    getKoszyk: (state) => state
  },
  mutations: {
    addToCart: (state, payload) => {
      if (state.products.map(p => p.product_id).includes(payload)) {
        state.products = state.products.map(p => {
          if (p.product_id === payload) p.quantity++;
          return p;
        })
      } else {
        state.products.push({
          product_id: payload,
          quantity: 1
        });
      }

      alert('Dodano do koszyka 🛒');
    },
    removeFromCart: (state, payload) => {
      state.products = state.products.filter(p => p.product_id !== payload);
    },
    changeQuantity: (state, payload) => {
      state.products = state.products.map(p => {
        if (p.product_id === payload.product_id) {
          p.quantity = payload.quantity;
        }
        return p;
      })
    },
    zamow: (state) => {
      state.products = [];
    }
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit('addToCart', payload);
    },
    removeFromCart: (context, payload) => {
      context.commit('removeFromCart', payload);
    },
    changeQuantity: (context, payload) => {
      context.commit('changeQuantity', payload);
    },
    zamow: async (context) => {
      //* losowe wybranie customera
      const { data: customers } = await axios.get(API_URL + 'customers');
      context.state.customer_id = Math.floor(Math.random() * customers.length)

      const response = await axios.post(API_URL + 'orders', context.state);

      if (response.status === 200) {
        context.commit('zamow');
        alert('Zamówiono 🍔🍟');
      } else {
        alert('Nie udało się złożyc zamówienia 😥');
      }
    }
  }
}