import appAxios from "../../utils/appAxios";

export default {
  state: {
    comics: null,
  },
  getters: {},
  mutations: {
    comics(state, item) {
      state.comics = item;
    },
  },
  actions: {
    getComics(context) {
      appAxios({
        url: "/v1/public/comics?ts=1&apikey=c4cfd6f38705de35fd226ed571a5ebdd&hash=9eeacc15a3ba4d5c0b6b6a2e96566917",
        method: "GET",
      }).then((response) => {
        context.commit("comics", response.data.data.results);
        console.log(response.data.data.results);
      });
    },
  },
  namespaced: true,
};
