<template>
  <div class="dashboard">
    <h1 class="text-center fw-bold blue mb-3 mt-3 mb-5">{{ $parent.$attrs.words.admin.general.categories }}</h1>
    <div class="container">
      <div class="d-flex justify-content-end mb-2">
        <button class="btn btn-outline-primary" data-bs-toggle="modal"
                @click="item = null"
                data-bs-target="#add_category">{{ $parent.$attrs.words.admin.general.add_item }}</button>
      </div>
      <input class="form-control mb-3 js_search" :placeholder="$parent.$attrs.words.admin.general.search" filter_area=".dashboard .row > div"
             find=".content p:first-of-type span:last-of-type">
      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-2" v-for="(i,index) in categories" :key="index">
          <div :class="'box el_'+index">
            <div class="d-flex align-items-center justify-content-between">
              <span class="cursor-pointer" data-bs-toggle="modal" data-bs-target="#add_category" @click="update_item(i)"><i class="bi bi-pencil-square gray"></i></span>
              <span class="cursor-pointer" @click="delete_item('categories',i['id'],'categories','.el_'+index)"><i class="bi bi-trash red"></i></span>
            </div>
            <image-component :src="i.image?.image"></image-component>
            <div class="content d-flex align-items-center justify-content-between mt-2">
              <p class="mb-0">
                <span v-tooltip="$parent.$attrs.words.admin.general.name"><i class="bi bi-info"></i></span>
                <span class="d-block w-100 text-center small" > {{ JSON.parse(i['name'])[lang] }}</span>
              </p>
              <p class="mb-0">
                <span v-tooltip="$parent.$attrs.words.admin.general.services"><i class="bi bi-list-check"></i></span>
                <span class="d-block w-100 text-center small">{{ i['services_count'] }}</span>
              </p>
              <p class="mb-0">
                <span v-tooltip="$parent.$attrs.words.admin.general.projects"><i class="bi bi-lightbulb"></i></span>
                <span class="d-block w-100 text-center small">{{ i['projects_count'] }}</span>
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
                             submit_action_path="dashboard/categories/save_data"
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
  name: "categories",
  layout:"admin",
  mixins:[updateItem,delete_item],
  data(){
    return {
      'lang':'',
      words_data_modal:{
          ...this.$parent.$attrs.words.admin.categories.modal,
          'send':this.$parent.$attrs.words.general.send,
          'close':this.$parent.$attrs.words.general.close,
      }
    }
  },
  methods:{
    ...mapActions({
      'categoriesAction':'dashboard/categories/allDataAction'
    }),
  },
  computed:{
    ...mapGetters({
      'categories':'dashboard/categories/getData'
    })
  },
  mounted(){
    this.lang = localStorage.lang ?? 'ar';
    this.categoriesAction()
  },
  components:{ImageComponent,dynamicModalComponent}
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";


</style>
