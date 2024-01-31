<template>

  <header
          v-if="Object.keys($attrs).length > 0  &&  Object.keys($attrs.words).length > 0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 col-12 mb-2 text-center-mobile">
          <p class="fw-bold big w-100">
            <span>{{ $attrs.words.header.welcome_to }}</span>
            <span class="sky">{{ $attrs.words.header.company_name }}</span>
          </p>
          <p class="gray">{{ $attrs.words.header.company_quick_info }}</p>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#company_video">
            <span><i class="bi bi-play-circle"></i></span>
            <span class="mx-1">{{ $attrs.words.header.watch_video }}</span>
          </button>
        </div>
        <div class="col-md-6 col-12 mb-2">
          <img class="d-block m-auto" src="/images/home/header.gif">
        </div>
      </div>
    </div>




    <!-- Modal -->
    <div class="modal fade" id="company_video" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ $attrs.words.header.company_video }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <video controls class="w-100" src="/videos/company.mp4"></video>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $attrs.words.general.close }}</button>
          </div>
        </div>
      </div>
    </div>

  </header>

</template>

<script>
export default {
  name: "HeaderComponent",
  data(){
    return {
      lang:'',
    }
  },
  mounted() {
      this.lang = localStorage.getItem('lang');
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables";
header{
  img{
    max-width: 100%;
    width: 100%;
    padding-top: 50px;
    position: relative;
    transition: 1s all;
    //animation-name: top_down;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    animation-direction: alternate;
  }
  @keyframes top_down {
    0%{
      top:15px;
    }
    100%{
      top: -15px;
    }
  }
}

</style>
