import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: JSON.parse(localStorage.getItem("currentUser")),
  },
  getters: {
    currentUser: (state) => state.currentUser,
  },
  mutations: {
    updateUserInMutation(state, user) {
      state.currentUser = user;
      localStorage.setItem("currentUser", JSON.stringify(user));
    },
    clearUserInMutation(state) {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },
  actions: {
    updateUser(state, user) {
      state.commit("updateUserInMutation", user);
    },
    clearUser(state) {
      state.commit("clearUserInMutation");
    },
  },
  modules: {},
});
