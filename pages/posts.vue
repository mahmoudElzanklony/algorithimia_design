<template>
  <section class="ads mt-80">
    <div class="container">
      <h2 class="big text-center">{{ $parent.$attrs.words.ads.title }}</h2>
      <p class="gray text-center">{{ $parent.$attrs.words.ads.content }}</p>
      <div class="row">
        <div class="col-lg-8 col-12 mb-2">
          <div class="row">
            <div class="col-lg-6 col-12 mb-2" v-for="(i,key) in ads" :key="key">
              <AdComponent @showMore="((e)=>{handelItem(e);  })"

                           :info="i"
                           :see_more_word="$parent.$attrs.words.general.see_more"
              ></AdComponent>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12 mb-2 explore">
          <img class="w-100" src="/images/explore.png">
        </div>
      </div>
    </div>
    <HandleAdInfoModal :item="item" :close="$parent.$attrs.words.general.close"></HandleAdInfoModal>

  </section>
</template>

<script>
import QuestionAnswerComponent from "@/components/QuestionAnswerComponent.vue";
import {mapGetters,mapActions,mapMutations} from "vuex";
import HandleAdInfoModal from "@/components/Modals/HandleAdInfoModal.vue";
import AdComponent from "@/components/AdComponent.vue";
export default {
  name:'posts',
  fetch(){
    return this.$store.dispatch('ads/allDataAction');
  },
  methods:{
    ...mapMutations({
      'UpdateItem':'ads/UpdateItem'
    }),
    handelItem(e){
      this.$store.commit('ads/UpdateItem',e);
      this.$nextTick(()=>{
        new bootstrap.Modal(document.getElementById('showAdInfo')).show()
      })
    }
  },
  computed: {
    ...mapGetters({
      'ads': 'ads/getData',
      'item':'ads/getSelectedItem'
    }),
  },
  components:{HandleAdInfoModal, QuestionAnswerComponent,AdComponent}
}
</script>

<style scoped lang="scss">
.explore{
  img{
    position: relative;
    top:0px;
    animation-name: top_down;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    animation-direction: alternate;
  }
  @keyframes top_down {
    0%{
      top:15px;
    }
    100%{
      top: -15px;
    }
  }
}
</style>

