import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";


import language from "./modules/language";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    language,
  },
  plugins: [
    createPersistedState({
      paths: ["language"],
      storage: window.localStorage,
    }),
  ],
});
