<template>
    <Header></Header>
    <div class="beta-map">
        <div class="abs-fullwidth beta-map wow flipInX">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3678.0141923553406!2d89.551518!3d22.801938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff8ff8ef7ea2b7%3A0x1f1e9fc1cf4bd626!2sPranon+Pvt.+Limited!5e0!3m2!1sen!2s!4v1407828576904"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
        ></iframe>
        </div>
    </div>
    <div id="content" class="space-top-none">
      <div class="space50">&nbsp;</div>
      <div class="row">
        <div class="col-sm-8">
          <h2>Contact Form</h2>
          <div class="space20">&nbsp;</div>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ani m id est laborum.
          </p>
          <div class="space20">&nbsp;</div>
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-block">
              <input v-model="form.name" type="text" placeholder="Your Name (required)" />
            </div>
            <div class="form-block">
              <input v-model="form.email" type="email" placeholder="Your Email (required)" />
            </div>
            <div class="form-block">
              <input v-model="form.subject" type="text" placeholder="Subject" />
            </div>
            <div class="form-block">
              <textarea v-model="form.message" placeholder="Your Message"></textarea>
            </div>
            <div class="form-block">
              <button type="submit" class="beta-btn primary">Send Message <i class="fa fa-chevron-right"></i></button>
            </div>
          </form>
        </div>
        <div class="col-sm-4">
          <h2>Contact Information</h2>
          <div class="space20">&nbsp;</div>
          <h6 class="contact-title">Address</h6>
          <p>
            Suite 127 / 267 – 277 Brussel St,
            <br />
            62 Croydon, NYC
            <br />
            Newyork
          </p>
          <div class="space20">&nbsp;</div>
          <h6 class="contact-title">Business Enquiries</h6>
          <p>
            Doloremque laudantium, totam rem aperiam,
            <br />
            inventore veritatio beatae.
            <br />
            <a href="mailto:biz@betadesign.com">biz@betadesign.com</a>
          </p>
          <div class="space20">&nbsp;</div>
          <h6 class="contact-title">Employment</h6>
          <p>
            We’re always looking for talented persons to
            <br />
            join our team.
            <br />
            <a href="mailto:hr@betadesign.com">hr@betadesign.com</a>
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
    components: {
        Header,
        Footer,
    },
    data() {
      return {
        form: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      };
    },
    methods: {
      handleSubmit() {
        alert(`Message Sent: ${JSON.stringify(this.form)}`);
        this.form = { name: "", email: "", subject: "", message: "" };
      },
    },
  };
  </script>
  
  