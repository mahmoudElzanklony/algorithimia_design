import formValidation from "../validation/formValidation";

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
  async contact_us({ state,commit}) {
    var target = event.target;
    var data = new FormData(target);
    commit('loader/updateLoaderMutation',true,{root:true});
    return await this.$axios.post('/contact_us', data).then((e) => {
      formValidation(e.data,target);
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });
  },


}
