<template>
  <div class="row align-items-center mb-4" v-if="Object.keys(words).length > 0 && service != null">
    <div class="col-lg-5 col-12 mb-2">
      <div class="content">
        <h2 class="fw-bold mb-3">{{ service['name'] }}</h2>
        <p class="gray">{{ service['info'] }}</p>
        <a target="_blank" href="#" class="btn btn-outline-primary">{{ words.service_projects_visit }}</a>
      </div>
    </div>
    <div class="col-lg-7 col-12">
      <div class="images">
        <div class="row align-item-center">
          <div class="col-6">
            <div class="image h-100" v-if="service['images'].length > 0">
              <ImageComponent :src="service['images'][0]['image']" style="height: 100%;"></ImageComponent>
            </div>
          </div>
          <div class="col-6">
            <div class="image mb-4" v-if="service['images'].length > 1">
              <ImageComponent :src="service['images'][1]['image']"></ImageComponent>
            </div>
            <div class="image" v-if="service['images'].length > 2">
              <ImageComponent :src="service['images'][2]['image']"></ImageComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import ImageComponent from '../components/ImageComponent'

export default {
  name: "ServiceComponent",
  props:['service','words'],
  components:{ImageComponent},
}
</script>

<style lang="scss" scoped>
@import "~style/variables";
.images{
  .image{
    img{
      border-radius: 10px;
      object-fit: contain;
      max-width: 100%;
    }
  }
}
</style>
