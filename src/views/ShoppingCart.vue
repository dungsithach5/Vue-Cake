<template>
    <Header></Header>
    <div>
      <div class="inner-header">
        <div class="container">
          <div class="pull-left">
            <h6 class="inner-title">Shopping Cart</h6>
          </div>
          <div class="pull-right">
            <div class="beta-breadcrumb font-large">
              <router-link to="/">Home</router-link> / <span>Shopping Cart</span>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
  
      <div class="container">
        <div id="content">
          <div class="table-responsive">
            <!-- Shopping Cart Table -->
            <table class="shop_table beta-shopping-cart-table" cellspacing="0">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Qty.</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in cartItems" :key="item.id">
                  <td class="product-name">
                    <div class="media">
                      <img :src="item.image" class="pull-left" alt="" />
                      <div class="media-body">
                        <p class="font-large table-title">{{ item.name }}</p>
                        <p class="table-option">Color: {{ item.color }}</p>
                        <p class="table-option">Size: {{ item.size }}</p>
                        <a class="table-edit" href="#">Edit</a>
                      </div>
                    </div>
                  </td>
                  <td class="product-price">
                    <span class="amount">${{ item.price.toFixed(2) }}</span>
                  </td>
                  <td class="product-status">{{ item.status }}</td>
                  <td class="product-quantity">
                    <select v-model="item.quantity" @change="updateQuantity(index)">
                      <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                    </select>
                  </td>
                  <td class="product-subtotal">
                    <span class="amount">${{ (item.quantity * item.price).toFixed(2) }}</span>
                  </td>
                  <td class="product-remove">
                    <button @click="removeItem(index)" class="remove" title="Remove this item">
                      <i class="fa fa-trash-o"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="6" class="actions">
                    <div class="coupon">
                      <label for="coupon_code">Coupon</label>
                      <input
                        type="text"
                        name="coupon_code"
                        v-model="couponCode"
                        placeholder="Coupon code"
                      />
                      <button class="beta-btn primary" @click="applyCoupon">
                        Apply Coupon <i class="fa fa-chevron-right"></i>
                      </button>
                    </div>
                    <button class="beta-btn primary" @click="updateCart">
                      Update Cart <i class="fa fa-chevron-right"></i>
                    </button>
                    <button class="beta-btn primary" @click="proceedToCheckout">
                      Proceed to Checkout <i class="fa fa-chevron-right"></i>
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
            <!-- End of Shopping Cart Table -->
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </template>
  
  <script>
  export default {
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        cartItems: [
          {
            id: 1,
            name: "Men’s Belt",
            image: "assets/dest/images/shoping1.jpg",
            price: 235.0,
            status: "In Stock",
            quantity: 1,
            color: "Red",
            size: "M",
          },
          {
            id: 2,
            name: "Men’s Belt",
            image: "assets/dest/images/shoping2.jpg",
            price: 235.0,
            status: "In Stock",
            quantity: 1,
            color: "Red",
            size: "M",
          },
          {
            id: 3,
            name: "Men’s Belt",
            image: "assets/dest/images/shoping3.jpg",
            price: 235.0,
            status: "In Stock",
            quantity: 1,
            color: "Red",
            size: "M",
          },
        ],
        couponCode: "",
      };
    },
    methods: {
      updateQuantity(index) {
        console.log(`Updated quantity for item ${index + 1}`);
      },
      removeItem(index) {
        this.cartItems.splice(index, 1);
      },
      applyCoupon() {
        console.log(`Coupon "${this.couponCode}" applied!`);
      },
      updateCart() {
        console.log("Cart updated!");
      },
      proceedToCheckout() {
        console.log("Proceeding to checkout...");
      },
    },
  };
  </script>
  
  <style>
  /* Add your CSS here */
  </style>
  