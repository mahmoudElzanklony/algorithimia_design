
<template >

  <vue-particles class="random_dots" color="#dedede"
                 :particleOpacity="0.7"
                 :particlesNumber="80"
                 shapeType="circle"
                 :particleSize="4"
                 linesColor="#dedede"
                 :linesWidth="1"
                 :lineLinked="true"
                 :lineOpacity="0.3"
                 :linesDistance="20"

                 :moveSpeed="5"
                 :hoverEffect="true"
                 hoverMode="grab"
                 :clickEffect="true"
                 clickMode="push"></vue-particles>

</template>

<script>
  export default {
    name:'DotsComponent'
  }
</script>


<style scoped lang="scss">
.random_dots{
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
