const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      brand: 'Vue Mastery',
      product: 'Socks',
      description: 'Warm and comfy socks.',
      selectedVariant: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/socks_green.jpg',
          quantity: 10,
          onSale: true
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/socks_blue.jpg',
          quantity: 0,
          onSale: false
        }
      ],
      sizes: ['S', 'M', 'L', 'XL']
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
    updateVariant(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    onSale() {
      return (
        this.variants[this.selectedVariant].onSale &&
        this.variants[this.selectedVariant].quantity
      );
    },
    onSaleMessage() {
      return `${this.brand} ${this.product} is on sale!`;
    }
  }
}).mount('#app');
