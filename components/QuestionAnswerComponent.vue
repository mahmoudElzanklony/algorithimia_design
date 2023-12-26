<template>
  <div class="question_answer">
    <div class="head d-flex align-items-center justify-content-between p-2">
       <span>{{ question }}</span>
       <span><i class="bi bi-chevron-down"></i></span>
    </div>
    <div class="body p-2">
      <p class="mb-0">{{ answer }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name:'QuestionAnswerComponent',
  props:['question','answer']
}

</script>

<style scoped lang="scss">
@import "~style/variables";
.question_answer{
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  .head{
    background-color: $sky;
    border-bottom: 1px solid #dddddd;
    span{
      color:white;
      i{
        cursor: pointer;
      }
    }
  }
  .body{
    display: none;
  }
}
</style>
