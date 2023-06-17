import appAxios from "../../utils/appAxios";

export default {
  state: {
    comicsDetails: null,
  },
  getters: {},
  mutations: {
    comic(state, item) {
      state.comicsDetails = item;
    },
  },

  //:443/v1/public/comics/1220?ts=1&apikey=c4cfd6f38705de35fd226ed571a5ebdd&hash=9eeacc15a3ba4d5c0b6b6a2e96566917
  actions: {
    getComicDetails(context, comicId) {
      appAxios({
        url: `/v1/public/comics/${comicId}?ts=1&apikey=c4cfd6f38705de35fd226ed571a5ebdd&hash=9eeacc15a3ba4d5c0b6b6a2e96566917`,
        method: "GET",
      }).then((response) => {
        context.commit("comic", response.data.data);
        console.log(response.data.data);
      });
    },
  },
  namespaced: true,
};
