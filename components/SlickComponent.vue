<template>
  <div v-if="status">
    <div class="inner_projects" v-slick="slickOptions" ref="slickContainer">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'SlickComponent',
  data(){
    return {
      slickOptions: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
          {
            breakpoint: 1024, // medium screens
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768, // small screens
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
      status:false
    }
  },
  mounted() {
    this.status = true;
  }
}
</script>



<style scoped lang="scss">

</style>
