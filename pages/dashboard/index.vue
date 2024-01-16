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
                    <h2 class="black fit-content">100</h2>
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
import Vue from "vue";
export default {
  name: "index",
  layout:"admin",
  data(){
    return {
      options:{
        chart: {
          type: 'area',
          height: 400,

        },
        stroke: {
          curve: 'smooth',
        },
        series: [{
          name: 'jobs',
          data: [30,40,35,50,49,60,70,91,125,40,60,80]
        }],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
          }
        },
        xaxis: {
          categories: null,
        }
      },
      users_chart : {
        series: [
          {
          name: '',
          data: [70, 40, 28, 100, 42, 109, 100]
          },
          {
          name: '',
          data: [11, 32, 45, 202, 34, 52, 41]
          },
        ],
        chart: {
          type: 'area',
          height: 400,
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2023", "2024", "2025","2026","2027","2028","2029"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy'
          },
        },
      },
      jobs_chart_pie:{
        series: [44, 55, 41, 17],
        chart: {
          height: 400,
          type: 'donut',
        },
        labels: [],
        chartOptions: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },

      }
    }
  },
  mounted(){
    // ['Jan','Feb','Marc','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
    setTimeout(()=>{

      this.options.xaxis.categories = this.words.months;

      this.users_chart.series[0].name = this.words.employees;
      this.users_chart.series[1].name = this.words.companies;

      this.jobs_chart_pie.labels.push(this.words.accepted_request);
      this.jobs_chart_pie.labels.push(this.words.rejected_requests);
      this.jobs_chart_pie.labels.push(this.words.top_best_request);
      this.jobs_chart_pie.labels.push(this.words.not_viewed_requests);
      console.log(this.users_chart.series);
      var chart = new ApexCharts(document.querySelector("#chart"), this.options);
      var users_chart = new ApexCharts(document.querySelector("#users_chart"), this.users_chart);
      var jobs_chart = new ApexCharts(document.querySelector("#jobs_chart"), this.jobs_chart_pie);

      chart.render();
      users_chart.render();
      jobs_chart.render();
    },1500)
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
