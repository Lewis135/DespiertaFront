export const state = () => ({
  listPosts: [],
  selectedPost: null,
})
export const getters = {
    getListPosts(state) {
      return state.listPosts
    },
    getSelectedPost(state) {
      return state.selectedPost
    } 
}

export const mutations = {
  setListPosts(state, list) {
    state.listPosts = list
  },

  setSelectedPost(state, post) {
    state.selectedPost = post
  }
}

export const actions = {
  retrieveListPosts({ commit }) { 
    return new Promise((resolve, reject) => {
      this.$storyapi.get(`cdn/stories?starts_with=posts/&token=${this.$storyapi.accessToken}`)
        .then((res) => {
          commit('setListPosts', res.data.stories)
          resolve(res.data.stories);
        })
        .catch((err) => {
          if (!err.response) {
            console.error(err);
            reject(err)
          } else {
            console.error(err.response.data);
          }
        });
    });
  },
  retrieveSelectedPost({ commit, state }, slug) {
    if(state.selectedPost  && state.selectedPost.slug != slug){
      commit('setSeletedPost', null)
    } else {
      this.$storyapi.get(`cdn/stories/posts/${slug}`)
        .then((res) => {
          commit('setSelectedPost', res.data.story)
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
}
