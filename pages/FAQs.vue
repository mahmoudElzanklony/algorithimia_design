<template>
  <section class="recent_questions mt-80">
    <div class="container">
      <h2 class="big text-center">{{ $parent.$attrs.words.home.faq.title }}</h2>
      <p class="gray text-center">{{ $parent.$attrs.words.home.faq.content }}</p>
      <div class="row" v-for="i in 3" :key="i">
        <div class="col-12 mb-2">
          <QuestionAnswerComponent class="col-12 mb-2" v-for="(i,index) in $parent.$attrs.words.visual_resources.get_started.steps"
                                   :key="index"
                                   :question="i['name']" :answer="i['content']"></QuestionAnswerComponent>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import QuestionAnswerComponent from "@/components/QuestionAnswerComponent.vue";
  export default {
    name:'FAQS',
    components:{QuestionAnswerComponent}
  }
</script>

<style scoped lang="scss">

</style>
