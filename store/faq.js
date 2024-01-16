
export const state = () => ({
  data: [],
  selected_item:{},
  status:true
})

export const getters = {
  getData(state) {
    return state.data
  },
  getSelectedItem(state){
    return state.selected_item
  }
}

export const mutations = {
  InitializeData(state,payload){
    state.data = payload;
  },
  UpdateItem(state,payload){
    state.selected_item = payload;
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
  async allDataAction({ state,commit},payload = '') {
    commit('loader/updateLoaderMutation',true,{root:true});
    return this.$axios.get('faqs'+(payload.length > 0 ? payload:'')).then((e) => {
      commit('InitializeData', e.data.data);
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });
  },


}
