<template>
  <section class="contact_us">
    <div class="container">
      <h2 class="big text-center">{{ $parent.$attrs.words.home.faq.title }}</h2>
      <p class="gray text-center">{{ $parent.$attrs.words.home.faq.content }}</p>
      <div class="row align-items-center">
        <div class="col-md-6 col-12 mb-2">
          <form v-if="get_name != ''">
            <div class="form-group mb-2 has_icon position-relative" v-for="(i,key) in $parent.$attrs.words.contact_us.form" :key="key">
              <label :for="'contact_us'+key">{{ i['name'] }}</label>
              <span><i :class="i['icon']"></i></span>
              <textarea :id="'contact_us'+key" class="form-control" :name="i['input']" required v-if="i['input'] == 'info'"></textarea>
              <input :id="'contact_us'+key" v-else class="form-control" :name="i['input']" required>
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-primary form-control" :value="$parent.$attrs.words.general.send">
            </div>
          </form>
        </div>
        <div class="col-md-6 col-12 mb-2">
          <div class="image">
            <img class="w-100" src="/images/contact_us.jpg">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:'contact_us',
}
</script>

<style scoped lang="scss">
.contact_us{
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
