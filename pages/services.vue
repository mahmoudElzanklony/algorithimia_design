<template>
  <div class="main-page" v-if="Object.keys($parent.$attrs).length > 0  &&  Object.keys($parent.$attrs.words).length > 0">

    <!-------------------start of services section--------------------------- -->
    <section class="services mb-5">
      <div class="container">
        <h2 class="big text-center">{{ $parent.$attrs.words.home.service_title }}</h2>
        <p class="gray text-center mb-4">{{ $parent.$attrs.words.home.service_content }}</p>
        <ServiceComponent :words="$parent.$attrs.words.home"
                          v-for="(i,index) in all_services"
                          :key="index" :service="i"></ServiceComponent>
      </div>
    </section>
    <!-------------------end of services section--------------------------- -->


  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import ServiceComponent from "../components/ServiceComponent";
import ImageComponent from "../components/ImageComponent";

export default {
  name: 'services',
  components: {ServiceComponent,ImageComponent},
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
    }),

  },
  mounted() {
    this.all_services_action();

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
    }),
  },
}
</script>

<style lang="scss" scoped>
@import "~style/variables";

</style>
