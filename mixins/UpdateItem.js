export default{
  name:'UpdateItem',
  data(){
    return {
       item:null
    }
  },
  methods:{
    update_item(item){
      var output = {};
      for(let key in item){

        if(typeof item[key] == 'string' && item[key].indexOf('{') == 0 && item[key].indexOf('}') == item[key].length - 1){
           // this is json
            var json = JSON.parse(item[key]);
            output['ar_'+key] = json['ar'];
            output['en_'+key] = json['en'];
        }else if (Array.isArray(item[key])){
          var items = [];
          for(let k of item[key]){
            // i has now object
            var req = {}
            var name = JSON.parse(k['name'])
            req['id'] = k['id'];
            req['ar_name'] = name['ar'];
            req['en_name'] = name['en'];
            items.push(req);
          }
          output[key] = items
        }else{
           output[key] = item[key];
        }
      }
      this.item = output;
    },
  }
}


