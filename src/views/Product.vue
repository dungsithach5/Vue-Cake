<template>
    <div>
      <HeaderSection />
  
      <div class="container">
        <div id="content">
          <div class="row">
            <!-- Main Product Section -->
            <div class="col-sm-9">
              <ProductDetails :product="product" />
              <RelatedProducts :products="relatedProducts" />
            </div>
  
            <!-- Sidebar Section -->
            <div class="col-sm-3 aside">
              <Sidebar :bestSellers="bestSellers" :newProducts="newProducts" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderSection from './components/HeaderSection.vue';
  import ProductDetails from './components/ProductDetails.vue';
  import RelatedProducts from './components/RelatedProducts.vue';
  import Sidebar from './components/Sidebar.vue';
  
  export default {
    components: {
      HeaderSection,
      ProductDetails,
      RelatedProducts,
      Sidebar,
    },
    data() {
      return {
        product: {
          title: 'Sample Woman Top',
          price: 34.55,
          description: `Nam libero tempore, cum soluta nobis est eligendi optio...`,
          image: 'assets/dest/images/products/6.jpg',
          options: {
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['Red', 'Green', 'Yellow', 'Black', 'White'],
            quantities: [1, 2, 3, 4, 5],
          },
        },
        relatedProducts: [
          { title: 'Sample Woman Top', price: 34.55, image: 'assets/dest/images/products/4.jpg' },
          { title: 'Sample Woman Top', price: 34.55, image: 'assets/dest/images/products/5.jpg' },
          { title: 'Sample Woman Top', price: 33.55, image: 'assets/dest/images/products/6.jpg', sale: true },
        ],
        bestSellers: [
          { title: 'Sample Woman Top', price: 34.55, image: 'assets/dest/images/products/sales/1.png' },
          { title: 'Sample Woman Top', price: 34.55, image: 'assets/dest/images/products/sales/2.png' },
        ],
        newProducts: [
          { title: 'Sample Woman Top', price: 34.55, image: 'assets/dest/images/products/sales/3.png' },
          { title: 'Sample Woman Top', price: 34.55, image: 'assets/dest/images/products/sales/4.png' },
        ],
      };
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  