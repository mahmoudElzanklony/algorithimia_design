<template>
  <div class="dashboard">
    <h1 class="text-center fw-bold blue mb-3 mt-3 mb-5">{{ $parent.$attrs.words.admin.general.posts }}</h1>
    <div class="container">
      <div class="d-flex justify-content-end mb-2">
        <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#add_post">{{ $parent.$attrs.words.admin.general.add_item }}</button>
      </div>
      <input class="form-control mb-3 js_search" :placeholder="$parent.$attrs.words.admin.general.search" filter_area=".dashboard .row > div"
             find=".ad img + div span:last-of-type">
      <div class="row">
        <div :class="'col-lg-4 col-sm-6 mb-2 ad_'+index" v-for="(i,index) in posts" :key="index">
          <AdComponent @showMore="((e)=>{handelItem(e);  })"
                       @update="((e)=>{openModal(e)})"
                       @delete="((e)=>{delete_item('ads',e['id'],'ads','.ad_'+index)})"
                       :control="true"
                       :info="handleLangData(i)"
                       :see_more_word="$parent.$attrs.words.general.see_more"
          ></AdComponent>
        </div>
      </div>
    </div>
    <HandleAdInfoModal :item="$store.getters['ads/getSelectedItem']" :close="$parent.$attrs.words.general.close"></HandleAdInfoModal>

    <dynamic-modal-component id_ele="add_post"
                             submit_action_path="dashboard/posts/save_data"
                             :words="words_data_modal"
                             :item="item"></dynamic-modal-component>
  </div>
</template>
<script>
import QuestionAnswerComponent from "@/components/QuestionAnswerComponent.vue";
import HandleAdInfoModal from "@/components/Modals/HandleAdInfoModal.vue";
import AdComponent from "@/components/AdComponent.vue";
import updateItem from "@/mixins/UpdateItem";
import ImageComponent from "@/components/ImageComponent.vue";
import dynamicModalComponent from "@/components/DynamicModalComponent.vue";
import {mapActions , mapGetters} from "vuex";
import delete_item from "@/mixins/delete_item.vue";
  export default {
    name:'posts',
    layout:"admin",
    mixins:[delete_item,updateItem],
    data(){
      return {
        'lang':'',
        words_data_modal:{
          ...this.$parent.$attrs.words.admin.posts.modal,
          'send':this.$parent.$attrs.words.general.send,
          'close':this.$parent.$attrs.words.general.close,
          'add_another':this.$parent.$attrs.words.admin.general.add_another,
        }
      }
    },
    mounted(){
      this.lang = localStorage.lang ?? 'ar';
      this.postsAction()
    },
    methods:{
      ...mapActions({
        'postsAction':'dashboard/posts/allDataAction'
      }),
      handelItem(e){
        this.$store.commit('ads/UpdateItem',e);
        this.$nextTick(()=>{
          new bootstrap.Modal(document.getElementById('showAdInfo')).show()
        })
      },
      openModal(e){
        var selected = this.$store.getters['dashboard/posts/getData'].find((item)=>{return item.id === e.id});
        console.log(selected)
        this.update_item(selected);
        new bootstrap.Modal(document.getElementById('add_post')).show()
      },
      handleLangData(item){
        var output = {};
        for(let key in item){
          if(typeof item[key] == 'string' && item[key].indexOf('{') == 0 && item[key].indexOf('}') == item[key].length - 1){
            // this is json
            var json = JSON.parse(item[key]);
            output[key] = json[this.lang];
          }else if (Array.isArray(item[key])){
            output[key] = [];
            for(let k of item[key]){
              // i has now object
              var req = {}
              req['id'] = k['id'];
              req['name'] = JSON.parse(k['name'])[this.lang];
              output[key].push(req)
            }
          }else{
            output[key] = item[key];
          }
        }
        return output;
      },
    },
    computed:{
      ...mapGetters({
        'posts':'dashboard/posts/getData'
      })
    },
    components:{
      dynamicModalComponent, ImageComponent,
      AdComponent,HandleAdInfoModal,QuestionAnswerComponent
    }

  }
</script>


<style scoped lang="scss">

</style>
