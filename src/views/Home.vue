<template>
  <div>
    <Header />
    <Corusel />
    <Grid />
    <FaqBlock />
    <Projects data-aos="zoom-in" data-aos-duration="1500" />
    <Stats />
    <FaqBlock2 data-aos="zoom-in" data-aos-duration="1500" />
    <W31Bottom data-aos="zoom-in" data-aos-duration="1500" />
    <AboutFeatures data-aos="zoom-in" data-aos-duration="1500" />
    <div id="appp" v-cloak>
      <transition name="fade">
        <div id="pagetop" class="fixed right-0 bottom-0" v-show="scY > 300" @click="toTop">
          <svg style="
              background-color: black;
              border-radius: 10px;
              cursor: pointer;
            " xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff"
            stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </div>
      </transition>
    </div>
    <div class="whatsapp_float">
      <a href="https://wa.me/38346132727" target="_blank"><img style="height: 50px; width: 50px; padding: 5px"
          src="../assets/icons/whatsapp.png" class alt="" /></a>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Corusel from "../components/Corusel.vue";
import Grid from "@/components/Grid.vue";
import FaqBlock from "../components/Faq-block.vue";
import Projects from "../components/Projects.vue";
import Stats from "../components/Stats.vue";
import FaqBlock2 from "../components/Faq-block2.vue";
import Footer from "../components/Footer.vue";
import W31Bottom from "../components/w31-bottom.vue";
import AboutFeatures from "@/components/About/About-features.vue";

export default {
  name: "Home",
  components: {
    Header,
    Corusel,
    Grid,
    FaqBlock,
    Projects,
    Stats,
    FaqBlock2,
    Footer,
    W31Bottom,
    AboutFeatures,
  },
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
.whatsapp_float {
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 1;
  background-color: black;
  border-radius: 10px;
}

#appp {
  position: fixed;
  bottom: 40px;
  right: 20px;
  z-index: 1;
}
</style>
