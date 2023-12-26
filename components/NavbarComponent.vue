<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container" v-if="Object.keys($attrs).length > 0  &&  Object.keys($attrs.words).length > 0">
      <nuxt-link class="navbar-brand cursor-pointer position-relative"
                 to="/" tag="img" style="top: -6px;" src="/images/logo.png"></nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mrl-reverse-15" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 align-items-md-center position-relative">
          <li class="nav-item link mrl-1">
            <nuxt-link to="/" class="nav-link line-hover">{{ $attrs.words.navbar.home }}</nuxt-link>
          </li>
          <li class="nav-item link mrl-1">
            <nuxt-link to="/about-us" class="nav-link line-hover" href="/about-us">{{ $attrs.words.navbar.about }}</nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{ $attrs.words.navbar.categories }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" :href="'/projects?category_id='+i['id']" v-for="(i,index) in all_categories" :key="index">{{ i['name'] }}</a></li>
            </ul>
          </li>
          <li class="nav-item link mrl-1">
            <nuxt-link to="/visualresources" class="nav-link line-hover" >{{ $attrs.words.navbar.visual_resources }}</nuxt-link>
          </li>
          <li class="nav-item link mrl-1">
            <nuxt-link to="/FAQs" class="nav-link line-hover" >{{ $attrs.words.navbar.faqs }}</nuxt-link>
          </li>
          <li class="nav-item link mrl-1">
            <nuxt-link to="/contact_us" class="nav-link line-hover" >{{ $attrs.words.navbar.contact_us }}</nuxt-link>
          </li>

          <li class="nav-item link mrl-1"
              v-if="false && $auth.loggedIn && $auth.$state.user.hasOwnProperty('role') && $auth.$state.user.role.name == 'admin'">
            <nuxt-link to="/dashboard" class="nav-link line-hover">{{ $attrs.words.navbar.dashboard }}</nuxt-link>
          </li>

        </ul>

        <ul class="navbar-nav mb-2 mb-lg-0 align-items-md-center">
          <li class="nav-item mrl-1" v-if="showRegisterLink && false">
            <nuxt-link to="/auth/register" class="nav-link btn-bk-primary">{{ $attrs.words.navbar.register }}</nuxt-link>
          </li>
          <li class="nav-item mrl-1" v-else-if="false" @click="logoutAction">
            <nuxt-link to="/auth/register" class="nav-link btn-bk-primary">{{ $attrs.words.navbar.logout }}</nuxt-link>
          </li>
          <li class="nav-item mrl-1">
            <button class="nav-link btn btn-outline-primary" @click="changeLang">
              {{ another_lang }}
            </button>
          </li>

        </ul>

      </div>
    </div>
  </nav>

</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
  name: "NavbarComponent",
  data(){
    return {
      file_name:'navbar',
      another_lang:'',
      auth_status:false,
      admin_status:false,
      showRegisterLink: false,
    }
  },
  computed:{
    ...mapGetters({
      'auth_check':'auth/login/get_auth_user_validation',
      'all_categories':'categories/getData',
    }),
    shouldShowRegisterLink() {
      return !this.$store.state.auth.loggedIn
    }
  },
  methods:{
    ...mapActions({
      'logoutAction':'auth/login/logoutAction',
      'all_categories_action':'categories/allDataAction',
    }),
    updateRegisterLinkVisibility() {
      this.showRegisterLink = !this.$store.state.auth.loggedIn
    },
    changeLang(){
      document.cookie = "lang=; expires=Thu, 01 Jan 1990 00:00:00 UTC; path=/;";
      if(localStorage.getItem('lang') == null || localStorage.getItem('lang') == 'ar'){
          localStorage.setItem('lang','en');
        document.cookie = "lang=en; expires=Thu, 01 Jan 3970 00:00:00 UTC; path=/;";

      }else{
        localStorage.setItem('lang','ar');
        document.cookie = "lang=ar; expires=Thu, 01 Jan 3970 00:00:00 UTC; path=/;";
      }
      window.location = document.URL;
    },
  },
  async mounted() {
    if(this.all_categories.length == 0) {
      await this.all_categories_action()
    }
    this.updateRegisterLinkVisibility()
    this.$store.subscribe(this.updateRegisterLinkVisibility)
    if(sessionStorage.hasOwnProperty('authenticated')){
        this.auth_status = true;
    }
    if(localStorage.hasOwnProperty('user_info')){
      var user_info = JSON.parse(localStorage.user_info);
      if(user_info.role.name == 'admin'){
        this.admin_status = true;
      }
    }


      if(localStorage.getItem('lang') == null || localStorage.getItem('lang') == 'ar'){
          this.another_lang = 'English';
      }else{
        this.another_lang = 'اللغة العربية';
      }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
nav{
  box-shadow: 1px 1px 10px 0px #ddd;
  position: fixed;
  top:0px;
  right: 0px;
  left: 0px;
  z-index: 99999999999;
  background-color: white !important;
  .navbar-brand{
    font-size: $semi_big !important;
    font-weight: bold;
  }
  ul{
    li.link{
      .nav-link{
        position: relative;
        padding: 0px;
        padding-right: 0px !important;
        padding-left: 0px !important;
        color: $black;
        &.active{
          color: $blue;
        }
      }

    }
  }
  .user_profile{
    img{
      width: 40px;
      height: 40px;
      border: 1px solid #eeeeee;
      border-radius: 50%;
    }
  }
  .btn-outline-primary{
    padding: 4px 8px !important;
  }

}
@media (max-width: 767px) {
  nav{
    ul{
      li:not(:last-of-type){
        .nav-link{
          margin-bottom: 15px;
        }
      }
      .dots-action > li > ul{

      }
    }
  }
}
</style>
