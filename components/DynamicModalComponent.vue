<template>
  <!-- Modal -->
  <div class="modal fade" :id="id_ele" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ words.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submit_form">
            <input type="hidden" name="id" v-if="item != null && item.hasOwnProperty('id')" :value="item?.id">
            <div class="selector" v-if="words['inputs'].find((e)=> e['type'] === 'file' && e.hasOwnProperty('multiple') && e.multiple === false) !== undefined">
              <image-component :src="item == null ? 'no_preview.png':item?.image?.image"></image-component>
            </div>
            <div class="form-input"
                 v-for="(i,index) in words['inputs']" :key="index">

              <div class="form-data-items mb-2 position-relative has_icon" v-if="i['type'] == 'text' && i.hasOwnProperty('multiple') && i.multiple === true">
                <p class="d-flex mb-0 justify-content-end" v-if="item == null">
                  <span class="cursor-pointer main-color add_another_item" >{{ words.add_another }}</span>
                </p>

                <div v-if="item != null">
                  <p class="d-flex mb-0 justify-content-end" >
                    <span class="cursor-pointer main-color add_another_item" >{{ words.add_another }}</span>
                  </p>
                  <div :class="'form-group mb-2 position-relative has_icon req_'+km"
                       v-for="(data_item,km) in item[i['input']]" :key="index">
                    <div class="position-relative has_icon mb-2">
                      <label class="d-flex justify-content-between">
                        <span>{{ i['inputs'][0]['label'] }}</span>
                      </label>
                      <span><i :class="i['icon']"></i></span>
                      <input
                        class="form-control" type="text" name="ar_requirements[]" :value="data_item['ar_name']">
                    </div>
                    <div class="position-relative has_icon mb-2">
                      <label class="d-flex justify-content-between">
                        <span>{{ i['inputs'][1]['label'] }}</span>
                      </label>
                      <span><i :class="i['icon']"></i></span>
                      <input
                        class="form-control" type="text" name="en_requirements[]" :value="data_item['en_name']">
                    </div>
                    <span class="delete_icon" :id="data_item['id']" @click="delete_item('ads_requirments',data_item['id'],'ads_requirments','.req_'+km)"><i class="red bi bi-trash cursor-pointer" ></i></span>
                  </div>
                </div>

                <div v-else>
                  <div class="form-group position-relative">
                    <div class="has_icon position-relative mb-2" v-for="input_item in i['inputs']">
                      <label>
                        <span>{{ input_item['label'] }}</span>
                      </label>
                      <span><i :class="i['icon']"></i></span>
                      <input
                        class="form-control" type="text" :name="input_item['input']" value="">
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group mb-2 position-relative has_icon" v-else-if="i['type'] != 'file'">
                <label>
                  <span>{{ i['name'] }}</span>
                </label>
                <span><i :class="i['icon']"></i></span>
                <input v-if="!(i['type'] == 'select' || i['type'] == 'textarea')"
                       class="form-control" :type="i['type']" :name="i['input']" :value="item != null && item[i['input']] != '' ? item[i['input']] :''">


                <textarea v-else-if="i['type'] == 'textarea'"
                          class="form-control"
                          :name="i['input']"
                          :value="item != null && item[i['input']] != '' ? item[i['input']] :''">{{ item != null && item[i['input']] != '' ? item[i['input']] :'' }}</textarea>


                <select v-else class="form-control" :name="i['input']" :value="item != null && item[i['input']] != '' ? item[i['input']] :''" required>
                  <option value="">{{ words.search_what_you_want }}</option>
                  <option v-for="(op,key) in $store.getters[i.getter_path]" :key="key"
                          :selected="item != null && item[i['input']] === op['id']"
                          :value="op['id']">{{ op['name'] }}</option>
                </select>


              </div>

              <div class="file_upload mb-2" v-else>
                <div>
                  <span class="mrl-1">{{ i['name'] }}</span>
                  <span class="gray"><i class="bi bi-cloud-arrow-up"></i></span>
                </div>
                <input type="file" name="images[]" v-if="i['multiple'] == true" :multiple="true"  :required="item == null || Object.keys(item).length === 0">
                <input type="file" name="image" v-else  class="preview-image" selector=".selector img"  :required="item == null || Object.keys(item).length === 0">
                <p class="file_name" v-if="i['multiple']"></p>
              </div>
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
  import delete_item from "@/mixins/delete_item.vue";
  import ImageComponent from "@/components/ImageComponent.vue";
  export default {
    name:'DynamicModalComponent',
    props:['id_ele','words','item','submit_action_path'],
    mixins:[delete_item],
    async mounted() {
      for(let item of this.words['inputs']){
        if(item.type == 'select'){
          if(this.$store.getters[item.getter_path].length == 0){
             await this.$store.dispatch(item.action_path);
          }
        }
      }
    },
    methods:{
      submit_form(){
        this.$store.dispatch(this.submit_action_path,[new FormData(event.target),event.target])
      }
    },
    components:{
      ImageComponent
    }
  }
</script>

