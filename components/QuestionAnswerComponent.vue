<template>
  <div class="question_answer">
    <div class="head d-flex align-items-center justify-content-between p-2">
       <span>{{ question }}</span>
       <p class="mb-0" v-if="control">
         <span class="cursor-pointer" @click="$emit('update',id)"><i class="bi bi-pencil-square white"></i></span>
         <span class="cursor-pointer mx-3" @click="$emit('delete',id)"><i class="bi bi-trash white"></i></span>
         <span><i class="bi bi-chevron-down"></i></span>
       </p>
       <p v-else class="mb-0">
         <span><i class="bi bi-chevron-down"></i></span>
       </p>
    </div>
    <div class="body p-2">
      <p class="mb-0">{{ answer }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name:'QuestionAnswerComponent',
  props:['id','question','answer','control']
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
