<template>
  <div class="outer">
    <div class="project d-flex align-items-center">
      <a :href="data['link']" target="_blank">
        <ImageComponent v-if="data['images'].length > 0" :src="data['images'][0]['image']"></ImageComponent>
      </a>
      <div class="info mx-2">
        <p class="d-flex align-items-center justify-content-between mb-0">
          <a :href="data['link']" target="_blank">{{ data['name'] }}</a>
          <span  @click="selectProject(data)"
                 data-bs-toggle="modal" data-bs-target="#project_details" data-bs-config={backdrop:true}><i class="bi bi-info-square semi_big"></i></span>
        </p>
        <p class="mb-0">{{ data['info'] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ImageComponent from '../components/ImageComponent'
import {mapMutations} from 'vuex';
export default {
  name: "ProjectInfoComponent",
  props:['data','words'],
  components:{ImageComponent},
  methods:{
    ...mapMutations({
      'selectProject':'projects/UpdateItem'
    })
  }

}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
.outer{
  padding: 10px;
}
.project{
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 8px;
  img{
    height: 140px;
    width: 140px;
    object-fit: contain;
    transition: 0.5s all;
    position: relative;
  }
  .info{
    height: 110px;
     a{
       font-size: $normal !important;
     }
     p:last-of-type{
       display: -webkit-box;
       -webkit-box-orient: vertical;
       overflow: hidden;
       text-overflow: ellipsis;
       /* Set the maximum number of lines to 2 */
       -webkit-line-clamp: 3;
       /* Ensure compatibility with newer browsers */
       display: -webkit-box;
       max-height: 100px; /* Adjust the height as needed */
     }
  }

}
</style>
