<template>
    <div>
        <ContactForm />
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
import header from '../components/About/About-header.vue'
import ContactForm from '../components/Contact-form.vue'

export default {
    components: {
        header,
        ContactForm
    },
    data() {
        return {
            scTimer: 0,
            scY: 0,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
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
                behavior: "smooth"
            });
        },
    },
}
</script>

<style>
.whatsapp_float {
    position: fixed;
    bottom: 100px;
    right: 20px;
}

#appp {
    position: fixed;
    bottom: 40px;
    right: 20px;
}
</style>