import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueI18n from "vue-i18n";
import sq from "./i18n/sq.json";
import en from "./i18n/en.json";
import "bootstrap-vue/dist/bootstrap-vue.css";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.use(Vuelidate);

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: store.state.language.lang,
  // fallbackLocale: "en",
  messages: {
    en,
    sq,
  },
});
new Vue({
  router,
  // carousel,
  store,
  i18n,
  render: function (h) {
    return h(App);
  },
  mounted() {
    AOS.init();
  },
}).$mount("#app");
