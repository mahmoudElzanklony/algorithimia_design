
export const state = () => ({
  data: {},
})

export const getters = {
  getData(state) {
    return state.data
  },
}

export const mutations = {
  InitializeData(state,payload){
    state.data = payload;
  },
}

export const actions = {
  async allDataAction({ commit}) {
    return this.$axios.post('/dashboard/statistics').then((e) => {
      console.log(e.data)
      commit('InitializeData', e.data.data);
    })
  },

}
