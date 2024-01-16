<template>
  <div class="dashboard">
    <h1 class="text-center fw-bold blue mb-3 mt-3 mb-5">{{ $parent.$attrs.words.admin.general.projects }}</h1>
    <div class="container">
      <div class="d-flex justify-content-end mb-2">
        <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#add_project" @click="update_item(null)">{{ $parent.$attrs.words.admin.general.add_item }}</button>
      </div>
      <form method="post" @submit.prevent="projectsAction">
        <div class="row align-items-end mb-3">
          <div class="col-6">
            <label>{{ $parent.$attrs.words.admin.general.name }}</label>
            <input class="form-control" :placeholder="$parent.$attrs.words.admin.general.search" name="name">
          </div>
          <div class="col-3">
            <label>{{ $parent.$attrs.words.admin.general.services }}</label>
            <select class="form-control" name="service_id">
              <option value="">{{ $parent.$attrs.words.register.select_best_choice }}</option>
              <option v-for="(i,index) in services" :key="index" :value="i['id']">{{ i['name'] }}</option>
            </select>
          </div>
          <div class="col-3">
            <input type="submit" class="form-control btn btn-outline-primary" :value="$parent.$attrs.words.general.send">
          </div>
        </div>
      </form>
      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-2" v-for="(i,index) in projects" :key="index">
          <div :class="'box el_'+index">
            <div class="d-flex align-items-center justify-content-between">
              <span class="cursor-pointer" data-bs-toggle="modal" data-bs-target="#add_project" @click="update_item(i)"><i class="bi bi-pencil-square gray"></i></span>
              <span class="cursor-pointer" @click="delete_item('projects',i['id'],'projects','.el_'+index)"><i class="bi bi-trash red"></i></span>
            </div>
            <image-component class="mb-3" :src="i?.images?.[0]?.image"></image-component>
            <div class="small_images d-flex align-items-center justify-content-center">
              <div :class="'position-relative ser_image_'+key" v-for="(im,key) in i['images']" :key="key" >
                <span class="cursor-pointer" @click="delete_item('images',im['id'],'images','.ser_image_'+key)"><i class="bi bi-x-circle-fill red"></i></span>
                <image-component class="mx-1" :src="im?.image"></image-component>
              </div>
            </div>
            <div class="content row align-items-center mt-2">
              <p class="mb-2 col-6">
                <span v-tooltip="$parent.$attrs.words.admin.general.name" class="m-0"><i class="bi bi-info"></i></span>
                <span class="d-block w-100 small" > {{ JSON.parse(i['name'])[lang] }}</span>
              </p>
              <p class="mb-2 col-6">
                <span v-tooltip="$parent.$attrs.words.admin.general.link" class="m-0"><i class="bi bi-link-45deg"></i></span>
                <span class="d-block w-100 small">
                  <a :href="i['link']" target="_blank">{{ i['link'] }}</a>
                </span>
              </p>
              <p class="mb-2 col-6">
                <span v-tooltip="$parent.$attrs.words.admin.general.skills" class="m-0"><i class="bi bi bi-tags"></i></span>
                <span class="d-block w-100 small">{{ i['skills'] }}</span>
              </p>
              <p class="mb-2 col-6">
                <span v-tooltip="$parent.$attrs.words.admin.general.created_at" class="m-0"><i class="bi bi-calendar3"></i></span>
                <span class="d-block w-100 small">{{ i['created_at'] }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <dynamic-modal-component id_ele="add_project"
                             submit_action_path="dashboard/projects/save_data"
                             :words="words_data_modal"
                             :item="item"></dynamic-modal-component>
  </div>
</template>

<script>
import updateItem from "@/mixins/UpdateItem";
import ImageComponent from "@/components/ImageComponent.vue";
import dynamicModalComponent from "@/components/DynamicModalComponent.vue";
import {mapActions , mapGetters} from "vuex";
import delete_item from "@/mixins/delete_item.vue";
export default {
  name: "projects",
  layout:"admin",
  mixins:[updateItem,delete_item],
  data(){
    return {
      'lang':'',
      words_data_modal:{
        ...this.$parent.$attrs.words.admin.projects.modal,
        'send':this.$parent.$attrs.words.general.send,
        'close':this.$parent.$attrs.words.general.close,
        'search_what_you_want':this.$parent.$attrs.words.register.select_best_choice,
      }
    }
  },
  methods:{
    ...mapActions({
      'projectsAction':'dashboard/projects/allDataAction',
      'servicesAction':'services/allDataAction'
    }),
  },
  computed:{
    ...mapGetters({
      'projects':'dashboard/projects/getData',
      'services':'services/getData'
    })
  },
  mounted(){
    this.lang = localStorage.lang ?? 'ar';
    this.projectsAction();
    this.servicesAction();

  },
  components:{ImageComponent,dynamicModalComponent}
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
.box{
  .content{
    p{
      span:last-of-type{
        text-align: initial;
      }
    }
  }
}

</style>
