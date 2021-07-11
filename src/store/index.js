import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    searchedUsers: []
  },
  mutations: {
    SET_SEARCHED_USER(state, status) {
      state.searchedUsers.push(status);
    }
  },
  getters: {
    searchedUsers: state => state.searchedUsers
  }
});