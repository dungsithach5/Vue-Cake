<template>
  <div>
    <div class="inner-header">
      <div class="container">
        <div class="pull-left">
          <h6 class="inner-title">Giới thiệu</h6>
        </div>
        <div class="pull-right">
          <div class="beta-breadcrumb font-large">
            <a href="index.html">Home</a> / <span>Giới thiệu</span>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="container">
      <div id="content">
        <div class="our-history">
          <h2 class="text-center wow fadeInDown">Our History</h2>
          <div class="space35">&nbsp;</div>

          <div class="history-slider">
            <div class="history-navigation">
              <a
                v-for="(year, index) in historyYears"
                :key="index"
                :data-slide-index="index"
                :href="historyLink"
                class="circle"
              >
                <span class="auto-center">{{ year }}</span>
              </a>
            </div>

            <div class="history-slides">
              <div
                v-for="(slide, index) in historySlides"
                :key="index"
                class="row"
              >
                <div class="col-sm-5">
                  <img :src="slide.image" alt="" />
                </div>
                <div class="col-sm-7">
                  <h5 class="other-title">{{ slide.title }}</h5>
                  <p v-html="slide.address"></p>
                  <div class="space20">&nbsp;</div>
                  <p>{{ slide.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="space50">&nbsp;</div>
        <hr />
        <div class="space50">&nbsp;</div>
        <h2 class="text-center wow fadeInDown">
          Our Passion for What We Do Transfers Into Our Services
        </h2>
        <div class="space20">&nbsp;</div>
        <p class="text-center wow fadeInLeft">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.<br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <div class="space35">&nbsp;</div>

        <div class="row">
          <div
            class="col-sm-2 col-sm-push-2"
            v-for="(counter, index) in counters"
            :key="index"
          >
            <div class="beta-counter">
              <p class="beta-counter-icon">
                <i :class="counter.icon"></i>
              </p>
              <p class="beta-counter-value timer numbers" :data-to="counter.value" data-speed="2000">
                {{ counter.value }}
              </p>
              <p class="beta-counter-title">{{ counter.title }}</p>
            </div>
          </div>
        </div>

        <div class="space50">&nbsp;</div>
        <hr />
        <div class="space50">&nbsp;</div>

        <h2 class="text-center wow fadeInDown">Our Amazing Team</h2>
        <div class="space20">&nbsp;</div>
        <h5 class="text-center other-title wow fadeInLeft">Founders</h5>
        <p class="text-center wow fadeInRight">
          Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed
          quia <br />
          consequuntur magni dolores.
        </p>
        <div class="space20">&nbsp;</div>
        <div class="row">
          <div class="col-sm-6" v-for="(founder, index) in founders" :key="index">
            <div class="beta-person media">
              <img class="pull-left" :src="founder.image" alt="" />
              <div class="media-body beta-person-body">
                <h5>{{ founder.name }}</h5>
                <p class="font-large">Founder</p>
                <p>{{ founder.description }}</p>
                <a href="single_type_gallery.html">View projects <i class="fa fa-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="space60">&nbsp;</div>
        <h5 class="text-center other-title wow fadeInDown">
          The Best of Professionals
        </h5>
        <p class="text-center wow fadeInUp">
          Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed
          quia <br />
          consequuntur magni dolores.
        </p>
        <div class="space20">&nbsp;</div>
        <div class="row">
          <div
            class="col-sm-3"
            v-for="(professional, index) in professionals"
            :key="index"
          >
            <div class="beta-person beta-person-full">
              <div class="bets-img-hover">
                <img :src="professional.image" alt="" />
              </div>
              <div class="beta-person-body">
                <h5>{{ professional.name }}</h5>
                <p class="font-large">{{ professional.role }}</p>
                <p>{{ professional.description }}</p>
                <a href="single_type_gallery.html">
                  View projects <i class="fa fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      historyYears: [2003, 2004, 2005, 2007, 2009, 2011, 2014],
      historyLink: "blog_with_2sidebars_type_e.html",
      historySlides: [
        {
          image: "assets/dest/images/history.jpg",
          title: "Birth",
          address: `Suite 127 / 267 – 277 Brussel St,<br />62 Croydon, NYC<br />New York`,
          content:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit...",
        },
        // Add more slides here
      ],
      counters: [
        { icon: "fa fa-user", value: 19855, title: "Clients Satisfied" },
        { icon: "fa fa-picture-o", value: 3568, title: "Amazing Works" },
        { icon: "fa fa-clock-o", value: 258934, title: "Support Hours" },
        { icon: "fa fa-pencil", value: 150, title: "New Projects" },
      ],
      founders: [
        {
          name: "Bob Robertson",
          image: "assets/dest/images/person2.jpg",
          description:
            "Nemo enim ipsam voluptatem quia voluptas sit asatur aut odit aut fugit...",
        },
        // Add more founders here
      ],
      professionals: [
        {
          name: "Mark Priston",
          role: "Web developer",
          image: "assets/dest/images/person1.jpg",
          description:
            "Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit...",
        },
        // Add more professionals here
      ],
    };
  },
};
</script>

<style scoped>
/* Add scoped styles for this component */
</style>
