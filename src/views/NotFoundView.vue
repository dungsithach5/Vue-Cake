<template>
    <Header></Header>
    <section class="bg-gray">
      <div class="inner-header">
        <div class="container">
          <h6 class="inner-title">Page Not Found</h6>
        </div>
      </div>
      <div class="container text-center">
        <h2>Oops! That Page Can’t Be Found!</h2>
        <img src="assets/dest/images/404.jpg" alt="" />
        <p>It looks like nothing was found at this location.</p>
        <form role="search" id="searchform">
          <input type="text" placeholder="Search entire store here..." />
          <button class="fa fa-search" type="submit"></button>
        </form>
      </div>
    </section>
    <Footer></Footer>
  </template>
  
  <script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  export default {
    name: "NotFound",
    components: {
    Header,
    Footer,
  },
  };
  </script>
  