import { createStore } from "vuex";
import comics from "./modules/comics";
import comicDetails from "./modules/comicDetails";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    comics,
    comicDetails,
  },
});
