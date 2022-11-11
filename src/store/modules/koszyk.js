export const koszyk = {
  state: () => ({
    customer_id: 1,
    products: [
      {
        product_id: 1,
        quantity: 2
      },
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

      alert('Dodano do koszyka');
    },
    removeFromCart: (state, payload) => {
      console.log(state.products, payload);
      state.products = state.products.filter(p => p.product_id !== payload);
    },
    changeQuantity: (state, payload) => {
      state.products = state.products.map(p => {
        if (p.product_id === payload.product_id) {
          p.quantity = payload.quantity;
        }
        return p;
      })
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
    }
  }
}