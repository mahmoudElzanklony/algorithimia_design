
export const state = () => ({
  data: [],
  item:{},
  status:true
})

export const getters = {
  getData(state) {
    return state.data
  },
  getItem(state) {
    return state.item
  },
}

export const mutations = {
  InitializeData(state,payload){
    state.data = payload;
  },
  InitializeItem(state,payload){
    state.item = payload;
  },
  UpdateData(state,payload){
    if(payload.length > 0 ) {
      state.data = [...state.data, ...payload]
    }else if(payload != null && Object.keys(payload).length > 0){
      state.data.unshift(payload)
    }
  },
}

export const actions = {
  async allDataAction({ state,commit},payload = []) {
    commit('loader/updateLoaderMutation',true,{root:true});
    return await this.$axios.get('categories', payload).then((e) => {
      commit('InitializeData', e.data.data);
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });
  },
  async specificItemAction({ state,commit},payload = '') {
    commit('loader/updateLoaderMutation',true,{root:true});
    return this.$axios.get('categories/'+payload).then((e) => {
      commit('InitializeItem', e.data.data);
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });
  },


}
