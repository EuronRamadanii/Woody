<template>
    <div>
        <!-- <AboutHeader /> -->
        <AboutBanner />
        <W31About />
        <!-- <AboutFeatures /> -->
        <AboutTeam />
        <W31AboutFeatures />
        <AboutClients />
    </div>
</template>

<script>
import AboutHeader from '@/components/About/About-header.vue';
import AboutBanner from '@/components/About/AboutBanner.vue';
import W31About from '@/components/W31-about.vue';
import AboutTeam from '@/components/About/About-team.vue';
import AboutFeatures from '@/components/About/About-features.vue';
import W31AboutFeatures from '../components/w31-about-features.vue';
import AboutClients from '../components/About/AboutClients.vue';

export default {
    name: "About",
    components: {
        AboutHeader,
        AboutBanner,
        W31About,
        AboutTeam,
        AboutFeatures,
        W31AboutFeatures,
        AboutClients
    }
}
</script>