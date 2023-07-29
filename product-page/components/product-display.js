appToMount.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <a :href="image"><img :src="image" :class="{'out-of-stock-img': !inStock}"/></a>
      </div>
      <div class="product-info">
        <h1>{{title}}</h1>
        <p>{{description}}</p>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{shipping}}</p>
        <p>{{onSale}}</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          :style="{backgroundColor: variant.color}"
          @click="updateVariant(index)"
          class="color-circle"
        >
          {{}}
        </div>
        <br />
        <div v-for="size in sizes">{{size}}</div>
        <button class="button" :disabled="!inStock" :class="{disabledButton: !inStock}" @click="addToCart">Add to Cart</button>
        <button class="button" :disabled="!inStock" :class="{disabledButton: !inStock}" @click="removeFromCart">Remove From Cart</button>
      </div>
      </div>
    </div>`,
  data() {
    return {
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
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
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
      if (
        this.variants[this.selectedVariant].onSale &&
        this.variants[this.selectedVariant].quantity
      ) {
        return `${this.brand} ${this.product} is on sale!`;
      } else {
        return '';
      }
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      } else {
        return 2.99;
      }
    }
  }
});
