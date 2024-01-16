
<template>
  <!-- Modal -->
  <div class="modal fade"
       id="showAdInfo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog"  v-if="item != null &&  Object.keys(item).length > 0 ">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ item.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <image-component class="image mb-2" :src="item?.image?.image"></image-component>
          <div class="content">
            <div class="mb-0 d-flex align-items-center mb-2">
              <img src="/images/check.jpg">
              <span class="normal mx-1 fw-bold">{{ item?.name }}</span>
            </div>
            <p class="gray mb-2 info_ad">{{ item?.info }}</p>
            <ul>
              <li v-for="(i,index) in item?.requirements" class="gray" :key="index">{{ i['name'] }}</li>
            </ul>
            <p class="mb-0 d-flex justify-content-end align-items-center">
              <span class="small mx-1">{{ item?.created_at }}</span>
              <span class="gray">
                    <i class="bi bi-calendar small"></i>
              </span>
            </p>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ close }}</button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import ImageComponent from "@/components/ImageComponent.vue";
  export default {
    name:'HandleAdInfoModal',
    props:['item','close'],
    components:{ImageComponent}
  }
</script>

<style scoped lang="scss">
  .modal{
    .modal-body{
      >img{
        height: 150px;
        margin: unset;
      }
      .content{
        img{
          height: 20px;
          border-radius: 4px;
          display: inline-block;
          margin: unset;
        }
      }
      ul{
        border-top: 1px solid #ddd;
        padding-top: 5px;
        list-style: disc;
        list-style-position: inside;
      }
    }
  }
</style>
