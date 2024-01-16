<template>
  <section class="recent_questions mt-80">
    <div class="container">
      <h2 class="big text-center">{{ $parent.$attrs.words.home.faq.title }}</h2>
      <p class="gray text-center">{{ $parent.$attrs.words.home.faq.content }}</p>
      <div class="row">
        <div class="col-12 mb-2">
          <QuestionAnswerComponent class="col-12 mb-2" v-for="(i,index) in faqs_data"
                                   :key="index"
                                   :question="i['name']" :answer="i['answer']"></QuestionAnswerComponent>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import QuestionAnswerComponent from "@/components/QuestionAnswerComponent.vue";
  import {mapGetters} from "vuex";
  export default {
    name:'FAQS',
    fetch(){
      return this.$store.dispatch('faq/allDataAction');
    },
    computed: {
      ...mapGetters({
        'faqs_data': 'faq/getData',
      }),
    },
    components:{QuestionAnswerComponent}
  }
</script>

<style scoped lang="scss">

</style>
