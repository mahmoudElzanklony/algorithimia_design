<template>

    <div class="main-page" >

      <HeaderComponent  class="mb-5" :words="$parent.$attrs.words"></HeaderComponent>



      <section class="features mt-5 mb-5" >
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
          <h2 class="big text-center" >{{ $parent.$attrs.words.home.service_title }}</h2>
          <p class="gray text-center mb-4" >{{ $parent.$attrs.words.home.service_content }}</p>
          <ServiceComponent :words="$parent.$attrs.words.home"
                            v-for="(i,index) in all_services"
                            :key="index" :service="i"></ServiceComponent>
        </div>
        <nuxt-link to="/services" class="d-block white btn btn-primary"

                   style="width: max-content; margin: 20px auto">{{ $parent.$attrs.words.home.all_services }}</nuxt-link>
      </section>
      <!-------------------end of services section--------------------------- -->

      <!-------------------start of projects section--------------------------- -->
      <section class="projects">
        <div class="container">
          <h2 class="big text-center" >{{ $parent.$attrs.words.home.projects_title }}</h2>
          <p class="gray text-center" >{{ $parent.$attrs.words.home.projects_content }}</p>
          <ul class="d-flex justify-content-between flex-wrap">
            <li class="mx-1" >
              <button @click="check_active(0)" class="btn btn-primary">{{ $parent.$attrs.words.general.all }}</button>
            </li>
            <li class="cursor-pointer mx-1 mb-2" v-for="(i,key) in all_categories" :key="key" >
              <button @click="check_active(i['id'])" class="btn btn-outline-primary">{{ i['name'] }}</button>
            </li>
          </ul>
        </div>
        <div class="inner_projects">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="(i,key) in all_projects_data" :key="key">
              <ProjectInfoComponent :data="i" :words="$parent.$attrs.words.home"></ProjectInfoComponent>

            </div>
          </div>
          <nuxt-link to="/projects" class="d-block white btn btn-primary" style="width: max-content; margin: 20px auto">{{ $parent.$attrs.words.home.all_projects }}</nuxt-link>
        </div>
        <ProjectDetailsPopUpComponent :data="selected_project" :close_word="$parent.$attrs.words.general.close"></ProjectDetailsPopUpComponent>
      </section>
      <!-------------------end of projects section--------------------------- -->

      <!-------------------start of statistics section--------------------------- -->
      <section class="statistics">
        <div class="layer d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-12 mb-2" v-for="(i,key) in $parent.$attrs.words.home.statistics" :key="key">
                <div class="box text-center">
                  <p class="mb-0"><span><i :class="i['icon']"></i></span></p>
                  <p class="mb-0">{{ i['name'] }}</p>
                  <p>{{ i['value'] }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-------------------end of statistics section--------------------------- -->

      <!-------------------start of team section--------------------------- -->

      <section class="team">
        <div class="container">
          <h2 class="big text-center">{{ $parent.$attrs.words.home.team_title }}</h2>
          <p class="gray text-center">{{ $parent.$attrs.words.home.team_content }}</p>
          <div class="row">
            <div :class="'col-lg-3 col-md-6 col-12 mb-2 '+(i['name'] == ''?' hidden_in_mob':'')" v-for="(i,key) in $parent.$attrs.words.home.team">
              <div :class="'member '+(key % 2 == 0 ?'space-top':'') +(key == 5 || key == 7 ? ' big-top':'')" v-if="i['name'] != ''">
                <img :src="'/images/team/'+i['image']">
                <div class="info">
                  <p class="mb-0 fw-bold">{{ i['name'] }}</p>
                  <p class="gray small">{{ i['content'] }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-------------------end of team section--------------------------- -->

      <!-------------------start of visual resource--------------------------- -->
      <VisualResourceComponent :words="$parent.$attrs.words"></VisualResourceComponent>
      <!-------------------end of visual resource--------------------------- -->


      <!-------------------start  of Most recently questions--------------------------- -->
      <section class="recent_questions mb-5">
        <div class="container">
            <h2 class="big text-center">{{ $parent.$attrs.words.home.faq.title }}</h2>
            <p class="gray text-center">{{ $parent.$attrs.words.home.faq.content }}</p>
            <div class="row">
              <div class="col-lg-6 col-12 mb-2">
                 <div class="questions">
                   <QuestionAnswerComponent class="mb-3" v-for="(i,index) in faqs_data"
                                            :key="index"
                                            :question="i['name']" :answer="i['answer']"></QuestionAnswerComponent>
                 </div>
              </div>
              <div class="col-lg-6 col-12 mb-2">
                 <div class="image">
                   <img src="/images/home/FAQ.png">
                 </div>
              </div>
            </div>
            <nuxt-link class="btn btn-outline-primary mb-5" to="/FAQs">{{ $parent.$attrs.words.general.see_more }}</nuxt-link>
        </div>
      </section>

      <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.375118677859!2d31.343372193119425!3d30.054780253417775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e7a1bb7605d%3A0xe8e44cb0e5604cb7!2sMostafa%20El-Nahaas%2C%20Nasr%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1703556372562!5m2!1sen!2seg"
              width="100%" height="750" style="border:0;" allowfullscreen=""
              loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
      <!-------------------end  of Most recently questions--------------------------- -->

</template>

<script>
import InfiniteScroll from "../mixins/InfiniteScroll";
import {mapGetters,mapActions} from 'vuex';
import Job_info_filters_box from "../components/Modals/job_info_filters_box";
import filters_jobs_search from "../mixins/filters_jobs_search";
import ServiceComponent from "../components/ServiceComponent";
import ProjectInfoComponent from "../components/ProjectInfoComponent";
import HeaderComponent from "../components/HeaderComponent";
import QuestionAnswerComponent from "@/components/QuestionAnswerComponent.vue";
import ImageComponent from "../components/ImageComponent";
import ProjectDetailsPopUpComponent from "../components/ProjectDetailsPopUpComponent";
import VisualResourceComponent from "../components/VisualResourceComponent";

export default {
  name: 'index',
  components: {Job_info_filters_box,ServiceComponent,ProjectInfoComponent,ImageComponent,ProjectDetailsPopUpComponent,VisualResourceComponent,HeaderComponent,QuestionAnswerComponent},
  mixins:[InfiniteScroll,filters_jobs_search],
  fetch(){
    this.$store.dispatch('faq/allDataAction', '?limit=5');
    return this.$store.dispatch('services/allDataAction', '?limit=4');

  },
  data(){
    return {
      data: [],

      lang:'',
      selected_cat_id:0,
      meta:{
        description:'You will find job descriptions for all jobs around the world here in jd.skillar.com. You will know everything related to jobs, including tasks, interests, requirements, certificates, etc., all in one place. | التوصيف الوظيفي لجميع الوظائف حول العالم ستجدها هنا في سكلير ستعرف كل ما يتعلق بالوظائف  من مهام و اهتمامات و متطلبات و شهادات و خلافه هذا كله في مكان واحد ',
        keywords:'Job description , job-specific certificates , job-specific interests , job-specific tasks , job requirements , job capabilities , job work values , job-related work activities , التوصيف الوظيفي , الشهادات الخاصه بالوظيفه , الاهتمامات الخاصه بالوظيفة المهام الخاصه بالوظيفة , متطلبات الوظيفة , قدرات الوظيفة , قيم عمل الوظيفة , انشطة العمل المتلقة بالوظيفة'
      },
    }
  },
  methods:{
    ...mapActions({
      'all_services_action':'services/allDataAction',
      'all_categories_action':'categories/allDataAction',
      'all_projects_action':'projects/allDataAction',
      'all_faqs':'faq/allDataAction',
    }),
    check_active(category_id){
      this.selected_cat_id = category_id;
      $(event.target).parent().parent().find('.btn-primary').removeClass('btn-primary').addClass('btn-outline-primary');
      $(event.target).removeClass('btn-outline-primary').addClass('btn-primary');
    }
  },
  mounted() {
   // this.all_services_action('?limit=4');
    if(this.all_categories.length == 0) {
       this.all_categories_action()
    }
    this.all_projects_action('?limit=12');
    this.lang = localStorage.getItem('lang');
    console.log(this.$store.state)
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
      'all_services':'services/getData',
      'all_categories':'categories/getData',
      'all_projects':'projects/getData',
      'selected_project':'projects/getSelectedItem',
      'faqs_data':'faq/getData',
    }),
    all_projects_data(){
       if(this.selected_cat_id > 0){
         return this.all_projects.filter((e)=>{
           return e.service.category.id == this.selected_cat_id;
         })
       }
       return this.all_projects
    }
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
        border: 1px solid $sky;
        border-radius: 5px;
        color:$sky;
        transition: 0.5s all;
      }
    }
    &:hover{
      top:-10px;
      box-shadow: 0px 0px 5px 0px #ddd;
      p:first-of-type > span{
        background-color: $sky;
        color:white;
      }
    }
  }
}
.services{
  margin-top: 100px;
}
.team{
  margin-top: 90px;
  .member{
    border: 1px solid #eee;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    img{
      height: 400px;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    .info{
      padding: 10px;
      position: absolute;
      width: 92%;
      left: 4%;
      border-radius: 6px;
      background-color: white;
      bottom: -200px;
      transition: 0.5s all;
    }
    &:hover{
      .info{
        bottom: 8px;
      }
    }
  }
  @media (min-width: 1000px) {
    .big-top{
      margin-top: -80px;
    }
  }
}
.statistics{
  background-image: url("static/images/home/statistics_bk.jpg");
  background-size: cover;
  background-attachment: scroll;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;
  .layer{
    height: 100%;
    background-color: #0000004f
  }
  p{
    color:white;
    span:first-of-type{
      i{
        font-size: $big;
      }
    }
    span{
      color:white;
    }
  }
  @media (max-width: 992px) {
     &{
       height: max-content;
     }
  }
}
.recent_questions{
  margin-top: 80px;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
@media(min-width: 1000px){
  .space-top{
    margin-top: 100px;
  }
}
</style>
