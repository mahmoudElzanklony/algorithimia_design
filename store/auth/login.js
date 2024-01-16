import formValidation from '/validation/formValidation';
export const state = () => ({
  user_info: {},
  auth_user_validation:null,
})



export const getters = {
  get_auth_user_validation(state) {
    return state.auth_user_validation
  },
}

export const mutations = {
  InitializeData(state,payload){
    state.user_info = payload;
  },
  UpdateAuthUserValidation(state,payload){
     state.auth_user_validation = payload
  },
}


export const actions = {
  async loginAction({ state,commit }) {
    let router = this.$router;
    var target = event.target;
    // Clear the redirect path
    this.$auth.$storage.setUniversal('redirect', null)
   // commit('loader/updateLoaderMutation',true,{root:true});
    try {
       var result = await this.$auth.loginWith('local', {
        data: new FormData(target)
      })
      if(result.data.status == 200 || result.data.hasOwnProperty('id')) {
        await router.push('/');
      }else{
        Toast.fire({
          icon:'error',
          title:result.data.errors
        });
        return false;
      }
      //this.$auth.setUser(response.data.user)
    }catch (e){
      console.log(e);
      Toast.fire({
        icon:'error',
        title:'error in auth process'
      });
      await router.push('/auth/login');
      return false;
    }

  },

  async deleteUserData(){
    console.log('delete user data');
    localStorage.removeItem('user_info');
    localStorage.removeItem('token');
    sessionStorage.clear();
    document.cookie = "token=; expires=Thu, 01 Jan 1990 00:00:00 UTC; path=/;";
    document.cookie = "user_info=; expires=Thu, 01 Jan 1990 00:00:00 UTC; path=/;";
    window.location = '/auth/login';
  },


  async validateAuthAction({state,commit,dispatch}){
    var data = new FormData();

    if(!(localStorage.hasOwnProperty('token'))){
      return false;
    }
    if(localStorage.hasOwnProperty('token')){
      data.append('token',localStorage.token);
    }
    return this.$axios.post('validate-user',data,{

    }).then((e)=>{
      if(e.status == 200){
        sessionStorage.setItem('authenticated',true);
        commit('UpdateAuthUserValidation',true);
      }
    }).catch((e)=>{
      dispatch('deleteUserData');
      commit('UpdateAuthUserValidation',false);

    })
  },


  async logoutAction({state,commit,dispatch}){
    return this.$axios.post('logout').then((e)=>{
      console.log('logout.......................');
      if(e.data.status == 200){
        dispatch('deleteUserData')
      }
    })
  }

}
