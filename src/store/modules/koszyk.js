import axios from "axios";
import { API_URL } from '../../config';


export const koszyk = {
  state: () => ({
    customer_id: 1,
    products: [
      // { product_id: 1, quantity: 1 },
      // { product_id: 6, quantity: 1 },
      // { product_id: 10, quantity: 1 }
    ]
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
    setCustomer: (state, payload) => {
      state.customer_id = payload;
    },
    zamow: (state) => {
      state.customer_id = 1;
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
    setCustomer: (context, payload) => {
      context.commit('setCustomer', payload);
    },
    zamow: async (context) => {
      try {
        const response = await axios.post(API_URL + 'orders', context.state);
        context.commit('zamow', response.data);
        alert('Zamówiono 🍔🍟');
      } catch (e) {
        alert('Nie udało się złożyc zamówienia 😥');
      }
    }
  }
}