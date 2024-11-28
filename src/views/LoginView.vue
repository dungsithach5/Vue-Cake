<template>
    <Header></Header>
    <div>
      <div class="inner-header">
        <div class="container">
          <div class="pull-left">
            <h6 class="inner-title">Đăng nhập</h6>
          </div>
          <div class="pull-right">
            <div class="beta-breadcrumb">
              <a href="index.html">Home</a> / <span>Đăng nhập</span>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
  
      <div class="container">
        <div id="content">
          <form @submit.prevent="handleSubmit" class="beta-form-checkout">
            <div class="row">
              <div class="col-sm-3"></div>
              <div class="col-sm-6">
                <h4>Đăng nhập</h4>
                <div class="space20">&nbsp;</div>
  
                <div class="form-block">
                  <label for="email">Email address*</label>
                  <input type="email" id="email" v-model="email" required />
                </div>
                <div class="form-block">
                  <label for="phone">Password*</label>
                  <input type="password" id="password" v-model="password" required />
                </div>
                <div class="form-block">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
              <div class="col-sm-3"></div>
            </div>
          </form>
        </div> <!-- #content -->
      </div> <!-- .container -->
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
        email: '',
        password: '',
      };
    },
    methods: {
      handleSubmit() {
        // Logic for form submission
        console.log("Email:", this.email);
        console.log("Password:", this.password);
        // You can replace this with actual login API call
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your custom styles go here */
  </style>
  