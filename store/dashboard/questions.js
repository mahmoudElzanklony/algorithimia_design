import CurrentPageDetectPaginate from "../../plugins/CurrentPageDetectPaginate";
import formValidation from "../../validation/formValidation";

export const state = () => ({
  data: [],
  item:{},
})

export const getters = {
  getData(state) {
    return state.data
  },
  getItem(state){
    return state.item;
  }
}

export const mutations = {
  SetItem(state,payload){
    state.item = payload;
  },
  InitializeData(state,payload){
    state.data = payload;
  },
  UpdateData(state,payload){
    console.log(payload)
    if(payload != null && Object.keys(payload).length > 0) {
      state.data.push(payload)
    }
  },
  update_index_data:function (state,payload){
    let id = state.data.findIndex((item)=>{
      return item.id ==  payload.id;
    });
    if(id >= 0){
      console.log(id);
      console.log(state.data);
      this._vm.$set(state.data,id,payload);
    }
  }
}

export const actions = {
  async allDataAction({ commit},payload = []) {
    commit('loader/updateLoaderMutation',true,{root:true});
    if(event != undefined && typeof event == "object" ){
      console.log(event)
      payload = new FormData(event.target)
    }

    return this.$axios.post('/dashboard/faqs',payload).then((e) => {
      commit('InitializeData', e.data.data);
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });
  },
  async save_data({state,commit},comming_data = []){
    let payload = comming_data[0];
    let target  = comming_data[1];
    console.log(payload.get("name"))
    console.log(payload[0])
    commit('loader/updateLoaderMutation',true,{root:true});
    return this.$axios.post('dashboard/faqs/save', payload).then((e) => {
      console.log(payload)
      console.log(e.data)
      if( payload instanceof FormData && payload.has('id')
      ){
        commit('update_index_data',e.data.data);
      }else {
        commit('UpdateData', e.data.data);
      }
      formValidation(e.data,target);
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });
  },
}
