<template>
  <section class="auth current_page">
    <div class="layout"></div>
     <div class="auth-content" v-if="Object.keys($parent.$attrs).length > 0  &&  Object.keys($parent.$attrs.words).length > 0">
       <div class="container-fluid h-100 d-flex align-items-center justify-content-center">
         <div class="form-data">
           <img src="/images/logo.png">
           <form class="p-3" method="post" @submit.prevent="login">
             <div class="form-group mb-2 input-icon flex-wrap">
               <label>{{ $parent.$attrs.words.login.email }}</label>
               <input class="form-control" name="email" required>
               <span><i class="bi bi-envelope"></i></span>
             </div>
             <div class="form-group mb-3 input-icon flex-wrap">
               <label class="d-flex justify-content-between w-100">
                 <span>{{ $parent.$attrs.words.login.password }}</span>
               </label>
               <input class="form-control" name="password" type="password" required>
               <span><i class="bi bi-key"></i></span>
             </div>
             <RecaptchaComponent></RecaptchaComponent>
             <div class="form-group mb-4">
               <input class="form-control btn btn-primary" type="submit" :value="$parent.$attrs.words.login.login" disabled>
             </div>
           </form>
         </div>
       </div>
     </div>
  </section>
</template>

<script>
import {mapActions} from 'vuex';
import RecaptchaComponent from "../../components/RecaptchaComponent.vue";
export default {
  name: "login",
  components: {RecaptchaComponent},


  methods:{
    ...mapActions({
      'login':'auth/login/loginAction'
    })
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
.auth{
  background-image: url("/images/authBack.jpg");
  background-size: cover;
  background-position: center;
  height: 1000px;
  position: relative;
  .layout{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    backdrop-filter: blur(4px);
  }
  .form-data{
    width: 500px;
  }
  img{
    height: 100px;
    display: block;
    margin:20px auto;

  }
}
</style>
