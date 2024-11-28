<template>
    <Header></Header>
    <div>
      <div class="inner-header">
        <div class="container">
          <div class="pull-left">
            <h6 class="inner-title">Sản phẩm</h6>
          </div>
          <div class="pull-right">
            <div class="beta-breadcrumb font-large">
              <a href="index.html">Home</a> / <span>Sản phẩm</span>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="container">
        <div id="content" class="space-top-none">
          <div class="main-content">
            <div class="space60">&nbsp;</div>
            <div class="row">
              <SidebarMenu :menuItems="menuItems" />
              <div class="col-sm-9">
                <ProductList title="New Products" :products="newProducts" />
                <div class="space50">&nbsp;</div>
                <ProductList title="Top Products" :products="topProducts" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </template>
  
  <script>
import SidebarMenu from './SidebarMenu.vue';
import ProductList from './ProductList.vue';
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
  export default {
    components: {
      SidebarMenu,
      ProductList,
      Header,
      Footer,
    },
    data() {
      return {
        menuItems: [
          "Typography",
          "Buttons",
          "Dividers",
          "Columns",
          "Icon box",
          "Notifications",
          "Progress bars and Skill meter",
          "Tabs",
          "Testimonial",
          "Video",
          "Social icons",
          "Carousel sliders",
          "Custom List",
          "Image frames & gallery",
          "Google Maps",
          "Accordion and Toggles",
          "Custom callout box",
          "Page section",
          "Mini callout box",
          "Content box",
          "Computer sliders",
          "Pricing & Data tables",
          "Process Builders",
        ],
        newProducts: [
          {
            id: 1,
            title: "Sample Woman Top",
            price: "$34.55",
            image: "assets/dest/images/products/1.jpg",
            link: "product.html",
          },
          {
            id: 2,
            title: "Sample Woman Top",
            price: "$34.55",
            image: "assets/dest/images/products/1.jpg",
            link: "product.html",
          },
          {
            id: 3,
            title: "Sample Woman Top",
            price: "$34.55",
            image: "assets/dest/images/products/1.jpg",
            link: "product.html",
          },
        ],
        topProducts: [
          {
            id: 1,
            title: "Sample Woman Top",
            price: "$34.55",
            image: "assets/dest/images/products/1.jpg",
            link: "product.html",
          },
          {
            id: 2,
            title: "Sample Woman Top",
            price: "$34.55",
            image: "assets/dest/images/products/1.jpg",
            link: "product.html",
          },
          {
            id: 3,
            title: "Sample Woman Top",
            price: "$34.55",
            image: "assets/dest/images/products/1.jpg",
            link: "product.html",
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  