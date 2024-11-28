<template>
    <div>
      <div class="row">
        <div class="col-sm-4">
          <img :src="product.image" :alt="product.title" />
        </div>
        <div class="col-sm-8">
          <div class="single-item-body">
            <p class="single-item-title">{{ product.title }}</p>
            <p class="single-item-price"><span>${{ product.price }}</span></p>
          </div>
  
          <div class="single-item-desc">
            <p>{{ product.description }}</p>
          </div>
  
          <div class="single-item-options">
            <select class="wc-select" name="size">
              <option v-for="size in product.options.sizes" :key="size" :value="size">{{ size }}</option>
            </select>
            <select class="wc-select" name="color">
              <option v-for="color in product.options.colors" :key="color" :value="color">{{ color }}</option>
            </select>
            <select class="wc-select" name="qty">
              <option v-for="qty in product.options.quantities" :key="qty" :value="qty">{{ qty }}</option>
            </select>
            <a class="add-to-cart" href="#"><i class="fa fa-shopping-cart"></i></a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['product'],
  };
  </script>
  