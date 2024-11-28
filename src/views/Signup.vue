<template>
    <Header></Header>
    <div>
      <div class="inner-header">
        <div class="container">
          <div class="pull-left">
            <h6 class="inner-title">Đăng kí</h6>
          </div>
          <div class="pull-right">
            <div class="beta-breadcrumb">
              <a href="/">Home</a> / <span>Đăng kí</span>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
  
      <div class="container">
        <div id="content">
          <form @submit.prevent="submitForm" class="beta-form-checkout">
            <div class="row">
              <div class="col-sm-3"></div>
              <div class="col-sm-6">
                <h4>Đăng kí</h4>
                <div class="space20">&nbsp;</div>
  
                <div class="form-block">
                  <label for="email">Email address*</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                  />
                </div>
  
                <div class="form-block">
                  <label for="fullname">Fullname*</label>
                  <input
                    type="text"
                    id="fullname"
                    v-model="form.fullname"
                    required
                  />
                </div>
  
                <div class="form-block">
                  <label for="address">Address*</label>
                  <input
                    type="text"
                    id="address"
                    v-model="form.address"
                    placeholder="Street Address"
                    required
                  />
                </div>
  
                <div class="form-block">
                  <label for="phone">Phone*</label>
                  <input
                    type="text"
                    id="phone"
                    v-model="form.phone"
                    required
                  />
                </div>
  
                <div class="form-block">
                  <label for="password">Password*</label>
                  <input
                    type="password"
                    id="password"
                    v-model="form.password"
                    required
                  />
                </div>
  
                <div class="form-block">
                  <label for="repassword">Re-password*</label>
                  <input
                    type="password"
                    id="repassword"
                    v-model="form.repassword"
                    required
                  />
                </div>
  
                <div class="form-block">
                  <button type="submit" class="btn btn-primary">Register</button>
                </div>
              </div>
              <div class="col-sm-3"></div>
            </div>
          </form>
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
        form: {
          email: "",
          fullname: "",
          address: "",
          phone: "",
          password: "",
          repassword: ""
        }
      };
    },
    methods: {
      submitForm() {
        if (this.form.password !== this.form.repassword) {
          alert("Passwords do not match!");
          return;
        }
        alert("Form submitted successfully!");
        console.log(this.form);
      }
    }
  };
  </script>
  
  <style>
  /* Add your CSS styles here */
  .inner-header {
    margin-bottom: 20px;
  }
  .form-block {
    margin-bottom: 15px;
  }
  </style>
  