<template>
    <Header></Header>
    <div id="app">
      <div class="inner-header">
        <div class="container">
          <div class="pull-left">
            <h6 class="inner-title">Checkout</h6>
          </div>
          <div class="pull-right">
            <div class="beta-breadcrumb">
              <router-link to="/">Home</router-link> / <span>Checkout</span>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
  
      <div class="container">
        <div id="content">
          <form @submit.prevent="submitCheckout" class="beta-form-checkout">
            <div class="row">
              <!-- Billing Address -->
              <div class="col-sm-6">
                <h4>Billing Address</h4>
                <div class="space20">&nbsp;</div>
  
                <div v-for="field in billingFields" :key="field.id" class="form-block">
                  <label :for="field.id">{{ field.label }}</label>
                  <input
                    :type="field.type"
                    :id="field.id"
                    v-model="field.value"
                    :placeholder="field.placeholder"
                    :required="field.required"
                  />
                </div>
  
                <div class="form-block">
                  <label for="notes">Order notes</label>
                  <textarea id="notes" v-model="orderNotes"></textarea>
                </div>
              </div>
  
              <!-- Your Order -->
              <div class="col-sm-6">
                <div class="your-order">
                  <div class="your-order-head">
                    <h5>Your Order</h5>
                  </div>
                  <div class="your-order-body">
                    <div class="your-order-item">
                      <div v-for="item in orderItems" :key="item.id">
                        <div class="media">
                          <img :src="item.image" alt="" class="pull-left" width="35%" />
                          <div class="media-body">
                            <p class="font-large">{{ item.name }}</p>
                            <span class="color-gray your-order-info">Color: {{ item.color }}</span>
                            <span class="color-gray your-order-info">Size: {{ item.size }}</span>
                            <span class="color-gray your-order-info">Qty: {{ item.qty }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="your-order-item">
                      <div class="pull-left">
                        <p class="your-order-f18">Total:</p>
                      </div>
                      <div class="pull-right">
                        <h5 class="color-black">${{ totalAmount }}</h5>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                  <div class="your-order-head">
                    <h5>Payment Method</h5>
                  </div>
                  <div class="your-order-body">
                    <ul class="payment_methods methods">
                      <li v-for="method in paymentMethods" :key="method.value" class="payment_method">
                        <input
                          :id="'payment_method_' + method.value"
                          type="radio"
                          class="input-radio"
                          name="payment_method"
                          v-model="selectedPaymentMethod"
                          :value="method.value"
                        />
                        <label :for="'payment_method_' + method.value">{{ method.label }}</label>
                        <div v-if="selectedPaymentMethod === method.value" class="payment_box">
                          {{ method.description }}
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="beta-btn primary">
                      Checkout <i class="fa fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </template>
  
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
  export default {
    components: {
        Header,
        Footer,
    },
    data() {
      return {
        billingFields: [
          { id: 'your_first_name', label: 'First name*', type: 'text', placeholder: '', value: '', required: true },
          { id: 'your_last_name', label: 'Last name*', type: 'text', placeholder: '', value: '', required: true },
          { id: 'company', label: 'Company name', type: 'text', placeholder: '', value: '', required: false },
          { id: 'address', label: 'Address*', type: 'text', placeholder: 'Street Address', value: '', required: true },
          { id: 'apartment', label: '', type: 'text', placeholder: 'Apartment, suite, unit etc.', value: '', required: false },
          { id: 'town_city', label: 'Town / City*', type: 'text', placeholder: 'Town / City', value: '', required: true },
          { id: 'country_state', label: 'Country', type: 'text', placeholder: 'State / Country', value: '', required: false },
          { id: 'email', label: 'Email address*', type: 'email', placeholder: '', value: '', required: true },
          { id: 'phone', label: 'Phone*', type: 'text', placeholder: '', value: '', required: true },
        ],
        orderNotes: '',
        orderItems: [
          {
            id: 1,
            name: "Men's Belt",
            color: 'Red',
            size: 'M',
            qty: 1,
            price: 235,
            image: 'assets/dest/images/shoping1.jpg',
          },
        ],
        totalAmount: 235,
        paymentMethods: [
          { value: 'bacs', label: 'Direct Bank Transfer', description: 'Make your payment directly into our bank account.' },
          { value: 'cheque', label: 'Cheque Payment', description: 'Send your cheque to Store Name.' },
          { value: 'paypal', label: 'PayPal', description: 'Pay via PayPal with your credit card.' },
        ],
        selectedPaymentMethod: 'bacs',
      };
    },
    methods: {
      submitCheckout() {
        alert('Order submitted successfully!');
      },
    },
  };
  </script>
  
  <style scoped>
  .inner-header {
    margin-top: 20px;
  }
  </style>
  