const appToMount = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true
    };
  },
  methods: {
    addToCart(id) {
      this.cart.push(id);
    },
    removeFromCart(id) {
      this.cart.pop(id);
    }
  }
});
