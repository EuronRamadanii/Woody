const state = {
  lang: "sq",
};

const getters = {
  getLanguage: (state) => {
    return state.lang;
  },
};

const mutations = {
  SET_LANGUAGE(state, payload) {
    state.lang = payload;
  },
};

const actions = {
  changeLanguage({ commit }, lang) {
    commit("SET_LANGUAGE", lang);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
