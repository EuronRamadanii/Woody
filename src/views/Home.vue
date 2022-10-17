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
