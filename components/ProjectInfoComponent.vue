<template>
  <div class="project">
    <ImageComponent v-if="data['images'].length > 0" :src="data['images'][0]['image']"></ImageComponent>
    <div class="info">
       <p class="d-flex align-items-center justify-content-between">
         <a target="_blank" class="white" :href="data['link']"><i class="bi bi-link-45deg semi_big"></i></a>
         <span class="white" @click="selectProject(data)"
               data-bs-toggle="modal" data-bs-target="#project_details" data-bs-config={backdrop:true}><i class="bi bi-info-square semi_big"></i></span>
       </p>
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
.project{
  position: relative;
  overflow: hidden;
  cursor: pointer;
  img{
    padding: 25px;
    width: 100%;
    border: 1px solid #ddd;
    height: 300px;
    object-fit: contain;
    transition: 0.5s all;
    position: relative;
    &:hover{
      transform: scale(1.2);
    }
  }
  .info{
    padding: 15px;
    width: 100%;
    background-color: #00000038;
    position: absolute;
    z-index: 2;
    top: 0px;
    bottom: 0px;
    opacity: 0;
    transition: 0.5s all;
    p{
      a,span{
        z-index: 999;
      }
    }
  }
  &:hover .info{
    opacity: 1;
  }
  &:hover img{
    transform: scale(1.2);
  }
}
</style>
