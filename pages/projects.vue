<template>
  <div class="main-page" v-if="Object.keys($parent.$attrs).length > 0  &&  Object.keys($parent.$attrs.words).length > 0">

    <!-------------------start of projects section--------------------------- -->
    <section class="projects">
      <div class="container">
        <h2 class="big text-center mb-3">
          <span>{{ $parent.$attrs.words.home.projects_title }}</span>
          <span v-if="Object.keys(specific_category).length > 0">{{ $parent.$attrs.words.general.in+' '+specific_category['name'] }}</span>
          <span v-if="service_id != null && all_projects_data.length > 0">{{ $parent.$attrs.words.general.in+' '+all_projects_data[0]['service']['name'] }}</span>
        </h2>
        <p class="gray text-center" v-if="cat_id == null">{{ $parent.$attrs.words.home.projects_content }}</p>
        <ul class="d-flex justify-content-between flex-wrap" v-if="cat_id == null && service_id == null && false">
          <li class="mx-1" >
            <button @click="check_active(0)" class="btn btn-primary">{{ $parent.$attrs.words.general.all }}</button>
          </li>
          <li class="cursor-pointer mx-1 mb-2" v-for="(i,key) in all_categories" :key="key" >
            <button @click="check_active(i['id'])" class="btn btn-outline-primary">{{ i['name'] }}</button>
          </li>
        </ul>
      </div>
      <div class="inner_projects">
        <div class="container">
          <SlickComponent>
            <div v-for="(i,key) in all_projects_data" :key="key">
              <ProjectInfoComponent :data="i" :words="$parent.$attrs.words.home"></ProjectInfoComponent>
            </div>
          </SlickComponent>
        </div>
      </div>
      <ProjectDetailsPopUpComponent :data="selected_project" :close_word="$parent.$attrs.words.general.close"></ProjectDetailsPopUpComponent>
    </section>
    <!-------------------end of projects section--------------------------- -->

  </div>
</template>

<script>
import InfiniteScroll from "../mixins/InfiniteScroll";
import {mapGetters,mapActions} from 'vuex';
import Job_info_filters_box from "../components/Modals/job_info_filters_box";
import ProjectInfoComponent from "../components/ProjectInfoComponent";
import ImageComponent from "../components/ImageComponent";
import ProjectDetailsPopUpComponent from "../components/ProjectDetailsPopUpComponent";
import SlickComponent from "../components/SlickComponent.vue";

export default {
  name: 'index',
  components: {SlickComponent, Job_info_filters_box,ProjectInfoComponent,ImageComponent,ProjectDetailsPopUpComponent},
  mixins:[InfiniteScroll],
  data(){
    return {
      data: [],
      cat_id:null,
      service_id:null,
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
      'all_categories_action':'categories/allDataAction',
      'category_action':'categories/specificItemAction',
      'all_projects_action':'projects/allDataAction',
    }),
    check_active(category_id){
      this.selected_cat_id = category_id;
      $(event.target).parent().parent().find('.btn-primary').removeClass('btn-primary').addClass('btn-outline-primary');
      $(event.target).removeClass('btn-outline-primary').addClass('btn-primary');
    }
  },
  mounted() {
    var filter = '?';

    if(document.URL.split('category_id=')[1] != undefined){
      this.cat_id = document.URL.split('category_id=')[1];
      filter += 'category_id='+this.cat_id+'&';
      this.category_action(this.cat_id)
    }
    if(document.URL.split('service_id=')[1] != undefined){
      this.service_id = document.URL.split('service_id=')[1];
      filter += 'service_id='+this.service_id+'&';
    }
    if(filter[filter.length-1] == '&'){
      filter = filter.slice(0, -1);
    }
    if(this.all_categories.length == 0 && this.cat_id == null) {
       this.all_categories_action()
    }

    this.all_projects_action(filter);
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
      'all_categories':'categories/getData',
      'specific_category':'categories/getItem',
      'all_projects':'projects/getData',
      'selected_project':'projects/getSelectedItem',
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


</style>
