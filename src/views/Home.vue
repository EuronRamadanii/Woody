<template>
  <div>
    <Header />
    <Corusel />
    <Grid />
    <FaqBlock />
    <Projects />
    <Stats />
    <FaqBlock2 />
    <W31Bottom />
    <AboutFeatures />
    <div class="whatsapp_float">
      <a href="https://wa.me/38346132727" target="_blank"><img src="../assets/icons/whatsapp.png" width="50px" class
          alt="" /></a>


    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Corusel from '../components/Corusel.vue';
import Grid from '@/components/Grid.vue';
import FaqBlock from '../components/Faq-block.vue';
import Projects from '../components/Projects.vue';
import Stats from '../components/Stats.vue';
import FaqBlock2 from '../components/Faq-block2.vue';
import Footer from '../components/Footer.vue';
import W31Bottom from '../components/w31-bottom.vue';
import AboutFeatures from '@/components/About/About-features.vue';

export default {
  name: 'Home',
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
    AboutFeatures
  }
}
</script>

<style>
.whatsapp_float {
  position: fixed;
  bottom: 40px;
  right: 20px;
}
</style>
