<template>
    <header id="site-header" class="fixed-top" style="background-color: #222222;">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark stroke">
                <h1>
                    <router-link class="navbar-brand" to="/"><span class="sub-log">Wo</span>ody</router-link>
                </h1>
                <!-- if logo is image enable this   
      <a class="navbar-brand" href="#index.html">
          <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
      </a> -->
                <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <!-- <i class="fa-bars"></i> -->
                    <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mx-lg-auto">
                        <li class="nav-item">
                            <router-link class="nav-link " to="/" exact>
                                {{ $t('Home') }} <span class="sr-only">(current)</span> </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">
                                {{ $t('About') }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/products">{{ $t('Products') }}</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact">{{ $t('Contact') }}</router-link>
                        </li>
                    </ul>
                </div>
                <!-- toggle switch for light and dark theme -->

                <!-- <div class="mobile-position">
                    <nav class="navigation">
                        <div class="theme-switch-wrapper">
                            <label class="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox">
                                <div class="mode-container py-1">
                                    <i class="gg-sun"></i>
                                    <i class="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div> -->
                <!-- //toggle switch for light and dark theme -->

                <b-dropdown :text="language" variant="btnLanguage"
                    style="margin-right:20px; background-color: white; border-radius: 10px;" class="dropdown-language">
                    <b-dropdown-item variant="dropLanguage" @click="changeL('en')">
                        Anglisht
                    </b-dropdown-item>
                    <div>
                        <b-dropdown-item variant="dropLanguage" @click="changeL('sq')">
                            Shqip
                        </b-dropdown-item>
                    </div>
                </b-dropdown>
            </nav>
        </div>
    </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            lang: 'en'
        };
    },
    computed: {
        ...mapGetters(['getLanguage']),
        language() {
            if (this.getLanguage === 'en') {
                return 'Anglisht'
            }
            return 'Shqip'
        },
    },
    methods: {
        ...mapActions(['changeLanguage']),

        changeL(a) {
            this.changeLanguage(a)
            if (this.$i18n.locale !== a) {
                this.$i18n.locale = a
            }
        },
    },
}
</script>

<style>
.router-link-active {
    color: #e44901 !important;
}

/* #site-header {
    z-index: 1;
} */
</style>



