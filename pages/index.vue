<template>
   <div class="main-page" v-if="Object.keys($parent.$attrs).length > 0  &&  Object.keys($parent.$attrs.words).length > 0">
     <section class="features mt-5 mb-5">
       <div class="container">
         <h2 class="big text-center">{{ $parent.$attrs.words.home.features_title }}</h2>
         <p class="gray text-center mb-4">{{ $parent.$attrs.words.home.features_content }}</p>
         <div class="row justify-content-center">
           <div class="col-lg-3 col-md-6 col-12 mb-2" v-for="(i,key) in $parent.$attrs.words.home.features">
             <div class="feature">
               <p class="mb-1"><span><i :class="i['icon']"></i></span></p>
               <p class="mb-0 fw-bold">{{ i['title'] }}</p>
               <p class="gray">{{ i['content'] }}</p>
             </div>
           </div>
         </div>
       </div>
     </section>

     <!-------------------start of services section--------------------------- -->
     <section class="services mb-5">
       <div class="container">
         <h2 class="big text-center">{{ $parent.$attrs.words.home.service_title }}</h2>
         <p class="gray text-center mb-4">{{ $parent.$attrs.words.home.service_content }}</p>

         <div class="row align-items-center mb-4">
           <div class="col-lg-6 col-12">
             <div class="content">
               <h2 class="fw-bold mb-3">خدمة تصميم  المواقع</h2>
               <p class="gray">محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع </p>
             </div>
           </div>
           <div class="col-lg-6 col-12">
             <div class="images">
               <div class="row align-item-center">
                 <div class="col-6">
                   <div class="image h-100">
                     <img style="max-width: 100%" class="h-100" src="/images/companies/1.png">
                   </div>
                 </div>
                 <div class="col-6">
                   <div class="image mb-4">
                     <img class="w-100" src="/images/companies/1.png">
                   </div>
                   <div class="image">
                     <img class="w-100" src="/images/companies/1.png">
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="row align-items-center">
           <div class="col-lg-6 col-12">
             <div class="content">
               <p class="fw-bold">خدمة تصميم  المواقع</p>
               <p class="gray">محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع محتوي خدمه تصميم المواقع </p>
             </div>
           </div>
           <div class="col-lg-6 col-12">
             <div class="images">
               <div class="row align-item-center">
                 <div class="col-6">
                   <div class="image h-100">
                     <img style="max-width: 100%" class="h-100" src="/images/companies/1.png">
                   </div>
                 </div>
                 <div class="col-6">
                   <div class="image mb-4">
                     <img class="w-100" src="/images/companies/1.png">
                   </div>
                   <div class="image">
                     <img class="w-100" src="/images/companies/1.png">
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>

       </div>
     </section>
     <!-------------------end of services section--------------------------- -->
   </div>
</template>

<script>
import InfiniteScroll from "../mixins/InfiniteScroll";
import {mapGetters,mapActions} from 'vuex';
import Job_info_filters_box from "../components/Modals/job_info_filters_box";
import filters_jobs_search from "../mixins/filters_jobs_search";

export default {
  name: 'index',
  components: {Job_info_filters_box},
  mixins:[InfiniteScroll,filters_jobs_search],
  data(){
    return {
      data: [],
      lang:'',
      meta:{
        description:'You will find job descriptions for all jobs around the world here in jd.skillar.com. You will know everything related to jobs, including tasks, interests, requirements, certificates, etc., all in one place. | التوصيف الوظيفي لجميع الوظائف حول العالم ستجدها هنا في سكلير ستعرف كل ما يتعلق بالوظائف  من مهام و اهتمامات و متطلبات و شهادات و خلافه هذا كله في مكان واحد ',
        keywords:'Job description , job-specific certificates , job-specific interests , job-specific tasks , job requirements , job capabilities , job work values , job-related work activities , التوصيف الوظيفي , الشهادات الخاصه بالوظيفه , الاهتمامات الخاصه بالوظيفة المهام الخاصه بالوظيفة , متطلبات الوظيفة , قدرات الوظيفة , قيم عمل الوظيفة , انشطة العمل المتلقة بالوظيفة'
      },
    }
  },
  methods:{
    ...mapActions({
      'all_services_action':'services/allDataAction',
    }),
  },
  mounted() {
    this.all_services_action();
    this.lang = localStorage.getItem('lang');
  },
  head() {
    return {
      title: 'التوصيف الوظيفي لجميع الوظائف | jobs definition',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta['description']
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.meta['keywords']
        }
      ],

    }
  },


  computed:{
    ...mapGetters({
      'jobs_data':'jobs/getData',
      'getTotal':'jobs/getTotal'
    })
  },
}
</script>

<style lang="scss" scoped>
@import "~style/variables";
.features{
  .feature{
    position: relative;
    top:0px;
    transition: 0.5s all;
    border-radius: 10px;
    padding: 10px;
    p:first-of-type{
      span{
        display: inline-flex;
        width: 50px;
        height: 50px;
        background-color: white;
        align-items: center;
        justify-content: center;
        border: 1px solid $main_color;
        border-radius: 5px;
        color:$main_color;
        transition: 0.5s all;
      }
    }
    &:hover{
      top:-10px;
      box-shadow: 0px 0px 5px 0px #ddd;
      p:first-of-type > span{
        background-color: $main_color;
        color:white;
      }
    }
  }
}
.services{
  margin-top: 100px;
  .container{
    >div:nth-child(even){
      direction: rtl;
    }
  }
  .images{
    .image{
      img{
        border-radius: 10px;
        object-fit: contain
      }
    }
  }
}
</style>
