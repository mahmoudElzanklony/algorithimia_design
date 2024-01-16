<template>
  <div class="ad">
    <p  v-if="control === true" class="d-flex mb-0 align-items-center justify-content-between">
      <span class="cursor-pointer" @click="$emit('update',info)"><i class="bi bi-pencil-square gray"></i></span>
      <span class="cursor-pointer" @click="$emit('delete',info)"><i class="bi bi-trash red"></i></span>
    </p>
    <div class="d-flex align-items-center justify-content-between">
      <image-component class="image" :src="info?.image?.image"></image-component>
      <div class="content">
        <div class="mb-0">
          <img src="/images/check.jpg">
          <span class="normal mx-1 fw-bold">{{ info?.name }}</span>
        </div>
        <p class="gray small mb-2 info_ad">{{ info?.info }}</p>
        <div class="d-flex align-items-center justify-content-between flex-wrap">
          <p class="mb-0 cursor-pointer d-flex align-items-center" @click="$emit('showMore',info)">
            <span class="main-color"><i class="bi bi-eye"></i></span>
            <span class="main-color mx-1">{{ see_more_word }}</span>
          </p>
          <p class="mb-0">
            <span class="small">{{ info?.created_at }}</span>
            <span class="gray">
              <i class="bi bi-calendar small"></i>
            </span>
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import ImageComponent from "@/components/ImageComponent.vue";
  export default {
    name:'AdComponent',
    props:['info','see_more_word','control'],
    components:{
      ImageComponent
    }
  }
</script>


<style scoped lang="scss">
.ad{
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 10px;
  img.image{
    width: 80px;
    height: 80px;
    border-radius: 4px;
    object-fit: contain;
  }
  img+div{
    width: calc(100% - 90px);
  }
  .content{
    img{
      height: 20px;
      border-radius: 4px;
    }
    p.info_ad{
      line-height: 25px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

}
</style>
