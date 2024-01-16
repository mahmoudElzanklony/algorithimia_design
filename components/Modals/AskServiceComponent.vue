<template>


  <!-- Modal -->
  <div class="modal fade" v-if="words != null &&  Object.keys(words).length > 0 "
       id="ask_service" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ words.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form v-if="get_name != ''">
            <div class="form-group mb-2 position-relative has_icon">
              <label>{{ words.inputs_labels.service_type }}</label>
              <span><i class="bi bi-check2"></i></span>
              <input class="form-control" name="name" :value="get_name">
            </div>
            <div class="form-group mb-2 position-relative has_icon">
              <label>{{ words.inputs_labels.info }}</label>
              <span><i class="bi bi-info-circle"></i></span>
              <textarea class="form-control" name="info" ></textarea>
            </div>
            <div class="file_upload mb-2">
              <div>
                <span class="mrl-1">{{ words.inputs_labels.info_file }}</span>
                <span class="gray"><i class="bi bi-cloud-arrow-up"></i></span>
              </div>
              <input type="file" name="file" required>
              <p class="file_name"></p>
            </div>
            <div class="form-group mb-2">
              <input type="submit" class="form-control btn btn-primary" :value="words.send">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ words.close }}</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name:'AskServiceComponent',
    props:['words'],
    computed:{
      ...mapGetters({
          'get_name':'ask_service/getName'
      })
    }
  }
</script>


<style scoped lang="scss">
@import "~style/variables";

</style>
