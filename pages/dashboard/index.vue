<template>
  <div class="dashboard">
     <h1 class="text-center fw-bold blue mb-3 mt-3 mb-5">{{ $parent.$attrs.words.admin.home.quick_statistics }}</h1>
     <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-2" v-for="i in $parent.$attrs.words.admin_navbar.links" v-if="i['path'] != '/'">
            <div class="box">
              <nuxt-link to="/">
                <div class="d-flex align-items-center">
                  <p class="mb-0 mx-3"><span><i :class="i['icon']"></i></span></p>
                  <div>
                    <h3 class="mb-0 normal">{{ i['name'] }}</h3>
                    <h2 class="black fit-content">{{ statistics[i['path'].replace('/','')] }}</h2>
                  </div>
                </div>

              </nuxt-link>
            </div>
          </div>
        </div>
     </div>
  </div>
</template>

<script>

import {mapActions , mapGetters} from "vuex";

export default {
  name: "index",
  layout:"admin",
  data(){
    return {

    }
  },
  methods:{
    ...mapActions({
      'statisticsAction':'dashboard/statistics/allDataAction'
    })
  },
  computed:{
    ...mapGetters({
      'statistics':'dashboard/statistics/getData'
    })
  },
  mounted(){
    this.statisticsAction()
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
#chart{

}
.box{
  >a{
    p:first-of-type{
      span{
        width: 50px;
        height: 50px;
        display: inline-flex;
        background-color: $sky;
        border-radius: 4px;
        align-items: center;
        justify-content: center;
        i{
          font-size: $semi_big;
          color:white;
        }
      }
    }
  }
}
table{
  tr{
    td{
      span.related-block{
        background-color: $main_color;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: white;

      }
    }
  }
}
</style>
