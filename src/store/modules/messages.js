const state = {};

const getters = {
  getMssgs: (state) => state.message,
};

const actions = {
  fetchMssgs({ commit }) {
    fetch("api/backend.com/v1/mssgs")
      .then((res) => res.json())
      .then((data) => commit("setMssgs", data))
      .catch((e) => console.error(e));
  },
};

const mutations = {
  setMssgs: (state, messages) => (state.messages = messages),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
