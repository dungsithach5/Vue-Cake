<template>
    <Header></Header>
    <div>
      <!-- Inner Header -->
      <div class="inner-header">
        <div class="container">
          <div class="pull-left">
            <h6 class="inner-title">Prices</h6>
          </div>
          <div class="pull-right">
            <div class="beta-breadcrumb font-large">
              <a href="index.html">Home</a> / <span>Prices</span>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
  
      <!-- Content -->
      <div class="container">
        <div id="content">
          <p>
            Neque porro quisquam est, qui dolom ipsum quia dolor sit amet.
            Consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <div class="space25">&nbsp;</div>
  
          <!-- Price Tables -->
          <div class="row">
            <div
              v-for="(pricing, index) in pricingOptions"
              :key="index"
              class="col-sm-3"
            >
              <div class="beta-pricing">
                <div class="pri-title">
                  <h4>{{ pricing.title }}</h4>
                </div>
                <div class="clear"></div>
                <span class="pri-amo">
                  <span class="price-currency">$</span>
                  <span class="price-amount">{{ pricing.price }}</span>
                  <sup>{{ pricing.cents }}</sup>
                  <sub>{{ pricing.period }}</sub>
                </span>
                <div class="clear"></div>
                <span
                  v-for="(feature, featureIndex) in pricing.features"
                  :key="featureIndex"
                  class="beta-price-list"
                >
                  {{ feature }}
                </span>
                <span class="beta-price-button">
                  <a href="#" class="beta-btn beta-btn-2d">
                    Sign up Now <i class="fa fa-chevron-right"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="space20">&nbsp;</div>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur.
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </template>
  
  <script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
  export default {
    name: "PricingPage",
    components: {
        Header,
        Footer,
    },
    data() {
      return {
        pricingOptions: [
          {
            title: "Standard",
            price: "5",
            cents: "99",
            period: "monthly",
            features: [
              "5 Projects",
              "5 GB Storage",
              "Unlimited Users",
              "10 GB Bandwidth",
              "Enhanced Security",
            ],
          },
          {
            title: "Standard",
            price: "5",
            cents: "99",
            period: "monthly",
            features: [
              "5 Projects",
              "5 GB Storage",
              "Unlimited Users",
              "10 GB Bandwidth",
              "Enhanced Security",
            ],
          },
          {
            title: "Standard",
            price: "5",
            cents: "99",
            period: "monthly",
            features: [
              "5 Projects",
              "5 GB Storage",
              "Unlimited Users",
              "10 GB Bandwidth",
              "Enhanced Security",
            ],
          },
          {
            title: "Standard",
            price: "5",
            cents: "99",
            period: "monthly",
            features: [
              "5 Projects",
              "5 GB Storage",
              "Unlimited Users",
              "10 GB Bandwidth",
              "Enhanced Security",
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your CSS here */
  .inner-header {
    padding: 20px 0;
  }
  
  .beta-pricing {
    border: 1px solid #ddd;
    padding: 20px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .beta-pricing .pri-title h4 {
    margin-bottom: 20px;
  }
  
  .beta-price-list {
    display: block;
    margin: 5px 0;
  }
  
  .beta-price-button a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .beta-price-button a:hover {
    background-color: #0056b3;
  }
  </style>
  