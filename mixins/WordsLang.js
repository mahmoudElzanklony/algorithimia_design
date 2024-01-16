import cookie from "cookie";

export default   {
    name:'WordsLang',
    async fetch() {
     // console.log(context)
      //console.log(cookie.parse(req.headers.cookie || ''));
      const lang = 'en';
      const words = require(`~/lang/${lang}/words`).default;
      this.$store.commit('words_data_lang/InitializeData',words)


    },

}
