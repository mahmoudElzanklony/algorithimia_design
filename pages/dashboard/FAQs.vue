<template>
  <div class="dashboard">
    <h1 class="text-center fw-bold blue mb-3 mt-3 mb-5">{{ $parent.$attrs.words.admin.general.categories }}</h1>
    <div class="container">
      <div class="d-flex justify-content-end mb-2">
        <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#add_question" @click="item = null">{{ $parent.$attrs.words.admin.general.add_item }}</button>
      </div>
      <input class="form-control mb-3 js_search" :placeholder="$parent.$attrs.words.admin.general.search" filter_area=".dashboard .row > div"
             find=".question_answer .head > span">
      <div class="row">

        <div :class="'col-lg-12 mb-2 q_'+index" v-for="(i,index) in questions" :key="index">
          <question-answer-component :id="i['id']" :question="JSON.parse(i['name'])[lang]"
                                     :answer="JSON.parse(i['answer'])[lang]"
                                     :control="true"
                                     @update="((e)=>handleUpdate(e))"
                                     @delete="((e)=>delete_item('questions',e,'questions','.q_'+index))"
          ></question-answer-component>
        </div>

      </div>
    </div>
    <dynamic-modal-component id_ele="add_question"
                             submit_action_path="dashboard/questions/save_data"
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
import QuestionAnswerComponent from "@/components/QuestionAnswerComponent.vue";
export default {
  name: "FAQs",
  layout:"admin",
  mixins:[updateItem,delete_item],
  data(){
    return {
      'lang':'',
      words_data_modal:{
        ...this.$parent.$attrs.words.admin.questions.modal,
        'send':this.$parent.$attrs.words.general.send,
        'close':this.$parent.$attrs.words.general.close,
      }
    }
  },
  methods:{
    ...mapActions({
      'questionsAction':'dashboard/questions/allDataAction'
    }),
    handleUpdate(id){
      var selected = this.$store.getters['dashboard/questions/getData'].find((item)=>{return item.id === id});
      this.update_item(selected);
      new bootstrap.Modal(document.getElementById('add_question')).show()
    }
  },
  computed:{
    ...mapGetters({
      'questions':'dashboard/questions/getData'
    })
  },
  mounted(){
    this.lang = localStorage.lang ?? 'ar';
    this.questionsAction()
  },
  components:{QuestionAnswerComponent, ImageComponent,dynamicModalComponent}
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";


</style>
