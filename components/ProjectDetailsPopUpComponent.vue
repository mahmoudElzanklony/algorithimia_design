<template>

  <!-- Modal -->
  <div class="modal fade" id="project_details" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" >
      <div class="modal-content" v-if="Object.keys(data).length > 0">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ data['name'] }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="images" v-if="data['images'].length > 0">
            <div class="image">
              <a target="_blank" :href="$config.url+'/images/'+data['images'][0]['image']">
                <ImageComponent :src="data['images'][0]['image']"></ImageComponent>
              </a>
            </div>
            <div class="small d-flex justify-content-center align-items-center flex-wrap" >
              <ImageComponent v-for="(i,key) in data['images']" :key="key" class="mx-1" :src="i['image']"></ImageComponent>
            </div>
          </div>
          <p class="gray">{{ data['info'] }}</p>
          <ul class="d-flex flex-wrap">
            <li v-for="(i,key) in data['skills'].split(',')" :key="key">
              <span class="btn btn-outline-primary mb-2 mx-1">{{ i }}</span>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ close_word }}</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import ImageComponent from '../components/ImageComponent'
export default {
  name: "ProjectDetailsPopUpComponent",
  props:['data','close_word'],
  components:{ImageComponent},
  methods:{

  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
.modal-dialog{
  max-width: 950px;
}
.images{
  .image{
    img{
      height: 235px;
      max-width: 100%;
      object-fit: contain;
      display: block;
      margin: 15px auto;
    }
  }
  .small{
    img{
      height: 75px;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin-bottom: 10px;
      object-fit: contain;
    }
  }
}
</style>
