<template>
  <div class="dashboard">
    <h1 class="text-center fw-bold blue mb-3 mt-3 mb-5">{{ $parent.$attrs.words.admin.general.services }}</h1>
    <div class="container">
      <div class="d-flex justify-content-end mb-2">
        <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#add_category" @click="update_item(null)">{{ $parent.$attrs.words.admin.general.add_item }}</button>
      </div>
      <input class="form-control mb-3 js_search" :placeholder="$parent.$attrs.words.admin.general.search" filter_area=".dashboard .row > div"
             find=".content p:first-of-type span:last-of-type">
      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-2" v-for="(i,index) in services" :key="index">
          <div :class="'box el_'+index">
            <div class="d-flex align-items-center justify-content-between">
              <span class="cursor-pointer" data-bs-toggle="modal" data-bs-target="#add_category" @click="update_item(i)"><i class="bi bi-pencil-square gray"></i></span>
              <span class="cursor-pointer" @click="delete_item('services',i['id'],'services','.el_'+index)"><i class="bi bi-trash red"></i></span>
            </div>
            <image-component :src="i?.images?.[0]?.image"></image-component>
            <div class="small_images d-flex align-items-center justify-content-center">
              <div :class="'position-relative ser_image_'+key" v-for="(im,key) in i['images']" :key="key" >
                <span class="cursor-pointer" @click="delete_item('images',im['id'],'images','.ser_image_'+key)"><i class="bi bi-x-circle-fill red"></i></span>
                <image-component class="mx-1" :src="im?.image"></image-component>
              </div>
            </div>
            <div class="content d-flex align-items-center justify-content-between mt-2">
              <p class="mb-0">
                <span  v-tooltip="$parent.$attrs.words.admin.general.name"><i class="bi bi-info"></i></span>
                <span class="d-block w-100 text-center small"> {{ JSON.parse(i['name'])[lang] }}</span>
              </p>
              <p class="mb-0">
                <span v-tooltip="$parent.$attrs.words.admin.general.projects"><i class="bi bi-lightbulb"></i></span>
                <span class="d-block w-100 text-center small">{{ i['projects_count'] ?? 0 }}</span>
              </p>
              <p class="mb-0">
                <span v-tooltip="$parent.$attrs.words.admin.general.created_at"><i class="bi bi-calendar3"></i></span>
                <span class="d-block w-100 text-center small">{{ i['created_at'] }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <dynamic-modal-component id_ele="add_category"
                             submit_action_path="dashboard/services/save_data"
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
  name: "services",
  layout:"admin",
  mixins:[updateItem,delete_item],
  data(){
    return {
      'lang':'',
      words_data_modal:{
        ...this.$parent.$attrs.words.admin.services.modal,
        'send':this.$parent.$attrs.words.general.send,
        'close':this.$parent.$attrs.words.general.close,
        'search_what_you_want':this.$parent.$attrs.words.register.select_best_choice,
      }
    }
  },
  methods:{
    ...mapActions({
      'servicesAction':'dashboard/services/allDataAction',
    }),
  },
  computed:{
    ...mapGetters({
      'services':'dashboard/services/getData',
    })
  },
  mounted(){
    this.lang = localStorage.lang ?? 'ar';
    this.servicesAction();

  },
  components:{ImageComponent,dynamicModalComponent}
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

</style>
