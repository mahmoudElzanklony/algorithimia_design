<template>
 <section class="visual_resources">
    <div class="container">
      <h2 class="text-center mb-3 white">{{ words.home.visual_resources.main_title }}</h2>
      <p class="text-center gray semi_big white">{{ words.home.visual_resources.main_content }}</p>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div :class="'carousel-item '+(key === 0 ? 'active':'')"
               v-for="(i,key) in words.home.visual_resources.services" :key="key">
            <div class="row">
              <div class="col-md-3 col-6 mb-2" v-for="el in Object.values(i)">
                <p class="mb-0 text-center white semi_big">{{ el }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="text-center">
         <button class="btn btn-outline-white" data-bs-toggle="modal"
                 @click="set_service_name(words.ask_service.types.remote_employee)"
                 data-bs-target="#ask_service">{{ words.general.ask_this_service }}</button>
         <nuxt-link  class="btn btn-outline-white white" to="/visualresources">{{ words.general.see_more }}</nuxt-link>
      </div>
    </div>

  </section>
</template>

<script>
  import {mapMutations} from "vuex";

  export default {
    name:'VisualResourceComponent',
    props:['words'],
    methods:{
      ...mapMutations({
        'set_service_name':'ask_service/InitializeName'
      }),
    }
  }
</script>
<style scoped lang="scss">
@import "~style/variables";
.visual_resources{
  background-color: $sky;
  padding: 90px 50px;
  .container{
    >div:last-of-type{
      margin-top: 20px;
    }
  }
  #carouselExampleIndicators{
    margin-top: 60px;
  }
  a{
    padding-top: 7px;
    padding-bottom: 7px;
  }
  @media (max-width: 992px) {
    .container{
      >div:last-of-type{
        margin-top: 40px;
      }
    }
    .carousel-indicators{
       bottom: -50px;
    }
  }
  @media (min-width: 992px) {
    .carousel-inner {
      height: 90px;
    }
  }
}
</style>
