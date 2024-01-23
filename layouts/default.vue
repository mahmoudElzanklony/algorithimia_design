<template>
  <div>
    <navbar-component  :words="words_data"></navbar-component>


    <nuxt  :words="words_data" :error="networkError"/>
    <span class="up"><i class="bi bi-arrow-up"></i></span>
    <loader v-if="loader_status" :color="'#0a58ca'" size="60px"></loader>
    <ask-service-component :words="words_data.ask_service"></ask-service-component>
    <DotsComponent></DotsComponent>
    <footer-component :words="words_data"></footer-component>


  </div>
</template>

<script>


import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import text_editor from "../mixins/text_editor";

import {mapGetters,mapActions} from 'vuex';
import AskServiceComponent from "@/components/Modals/AskServiceComponent.vue";
import DotsComponent from "../components/DotsComponent.vue";

export default {
  name: "default",
  mixins:[text_editor],
  data(){
    return {

    }
  },
  components: {AskServiceComponent, NavbarComponent,FooterComponent,DotsComponent},

  computed:{
    ...mapGetters({
      'loader_status':'loader/getLoaderGetter',
      'auth_check_getter':'auth/login/get_auth_user_validation',
      'words_data':'words_data_lang/getData'
    }),
    networkError() {
      return this.$store.state.networkError;
    },
  },
  errorCaptured(error, vm, info){
    // return false
    if (error.request && error.request.status >= 400) {
      // Handle network errors specifically
      this.$store.commit('setNetworkError', error);
      return false;
      // Display a user-friendly message or perform other actions
    }
  },
  methods:{
    ...mapActions({
      'validate_user':'auth/login/validateAuthAction',
    })
  },
  mounted() {
    /*if(this.auth_check_getter == null){
       this.validate_user();
    }*/

  },
}
</script>
