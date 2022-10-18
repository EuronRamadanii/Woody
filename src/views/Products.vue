<template>
    <div>
        <ServicesFeatures />
        <ServicesBanner />
        <ServicesBannerServices />
       
    </div>
</template>

<script>




import ServicesBannerServices from '@/components/Services-banner-Services.vue';
import ServicesBanner from '../components/Services-banner.vue';
import ServicesFeatures from '../components/Services-features.vue'

export default {
    components: {
        ServicesBannerServices,
        ServicesBanner,
        ServicesFeatures
    }
}



</script>