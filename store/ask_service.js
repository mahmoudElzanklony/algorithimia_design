
export const state = () => ({
  name:'',
})

export const getters = {
  getName(state) {
    return state.name
  },
}

export const mutations = {
  InitializeName(state,payload){
    state.name = payload;
  },
}

export const actions = {
  async send_this_ask({ state,commit},payload = []) {
    commit('loader/updateLoaderMutation',true,{root:true});
    return await this.$axios.get('categories', payload).then((e) => {
      commit('InitializeData', e.data.data);
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });
  },


}
