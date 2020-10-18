export const state = () => ({
  vicenHome: "",
  tatiHome: ""
})
export const getters = {
  getVicenHome(state) {
      return state.vicenHome
  },
  getTatiHome(state) {
      return state.tatiHome
  } 
}

export const mutations = {
  setVicenHome(state, text) {
    state.vicenHome = text
  },

  setTatiHome(state, text) {
    state.tatiHome = text
  }
}

export const actions = {
    async retrieveVicenHomeData({ commit }) { 
        this.$storyapi.get("cdn/stories/home/vicenhome")
          .then((res) => {
            commit('setVicenHome', res.data.story.content)
          })
          .catch((err) => {
            if (!err.response) {
              console.error(err);
            } else {
              console.error(err.response.data);
            }
          });
    },
    async retrieveTatiHomeData({ commit }) { 
        this.$storyapi.get("cdn/stories/home/tatihome")
          .then((res) => {
            commit('setTatiHome', res.data.story.content)
          })
          .catch((err) => {
            if (!err.response) {
              console.error(err);
            } else {
              console.error(err.response.data);
            }
          });
    }
}
