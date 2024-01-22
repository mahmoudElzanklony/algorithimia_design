<template>
  <div class="visual-resources-content"
       v-if="Object.keys($parent.$attrs).length > 0  &&  Object.keys($parent.$attrs.words).length > 0">
    <VisualResourceComponent :words="$parent.$attrs.words"></VisualResourceComponent>
    <div class="skills">
      <div class="container">
        <div class="inner">
          <div class="row">
            <div class="col-lg-3 col-sm-6 col-12 mb-2" v-for="(i,key) in $parent.$attrs.words.visual_resources.more_info" :key="key">
              <div class="skill text-center">
                 <p class="mb-0 semi_big fw-bold">{{ i['name'] }}</p>
                 <p class="mb-0 big fw-bold">{{ i['number'] }}</p>
                 <p class="mb-0 semi_big fw-bold">{{ i['content'] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="developers_tools">
      <div class="container">
        <h2 class="big text-center mb-4">{{ $parent.$attrs.words.visual_resources.title }}</h2>
        <p class="text-center fw-bold gray mb-5">{{ $parent.$attrs.words.visual_resources.content }}</p>
         <div class="dev" v-for="(i,key) in $parent.$attrs.words.visual_resources.developers_tools" :key="key">
           <div class="row align-items-center"  >
             <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-2 d-flex align-items-center">
               <div class="image">
                 <img :src="'/images/icons/'+i['image']">
               </div>
               <span class="mb-0 normal fw-bold mx-2">{{ i['name'] }}</span>
             </div>
             <div class="col-lg-9 col-md-8 col-sm-6 col-12">
               <div class="tools">
                 <span class="mx-1 mb-2" v-for="(tool,index) in i['skills']" :key="index">{{ tool }}</span>
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>

    <div class="get_started">
        <div class="container">
          <h2 class="big text-center">{{ $parent.$attrs.words.visual_resources.get_started.title }}</h2>
          <p class="text-center gray normal">{{ $parent.$attrs.words.visual_resources.get_started.content }}</p>
          <div class="row">
            <div class="col-md-6 col-12 mb-2">
               <div class="steps">
                  <QuestionAnswerComponent class="mb-3" v-for="(i,index) in $parent.$attrs.words.visual_resources.get_started.steps"
                                           :key="index"
                                           :question="i['name']" :answer="i['content']"></QuestionAnswerComponent>
               </div>
            </div>
            <div class="col-md-6 col-12 mb-2">
              <div class="info">
                <p v-for="(i,index) in $parent.$attrs.words.visual_resources.get_started.info" :key="index" class="mb-3">
                  <span class="mx-1"><i class="bi bi-patch-check"></i></span>
                  <span>{{ i }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import VisualResourceComponent from "../components/VisualResourceComponent";
  import QuestionAnswerComponent from "@/components/QuestionAnswerComponent.vue";

  export default {
    name:'visualresources',
    components:{VisualResourceComponent,QuestionAnswerComponent},

  }
</script>


<style scoped lang="scss">
@import "~style/variables";
.skills{
  .inner {
    background-color: #eeeeee;
    border: 1px solid #dddddd;
    border-radius: 8px;
    padding:90px 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    .skill {
      text-align: center;
      border: 1px solid #dddddd;
      border-radius: 10px;
      background-color: white;
      transition: 0.5s all;
      padding:30px 15px;
      &:hover{
        background-color: $main_color;
      }
      &:hover > p{
        color:white;
      }
    }
  }
}
.developers_tools{
  margin-top: 80px;
  .dev{
    border-radius: 6px;
    border: 1px solid #dddddd;
    padding: 8px;
    margin-bottom: 15px;
    .image{
      width: max-content;
      padding: 5px;
      border-radius: 4px;
      background-color: $sky;
      img{
        width: 45px;
        height: 45px;
        object-fit: contain;
      }
    }
    .tools{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      span{
        border: 1px solid $sky;
        transition: 0.3s all;
        border-radius: 4px;
        padding: 8px 12px;
        &:hover{
          background-color: $sky;
          color:white;
        }
      }
    }
  }
}
.get_started{
  margin-top: 80px;
  .info{
    p{
      background-color: #eeeeee30;
      padding: 10px;
      border: 1px solid #dddddd;
      border-radius: 8px;
      span:first-of-type{
        color:$sky;
      }
    }
  }
}
</style>
