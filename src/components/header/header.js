import help from './help'

export default {
  name: 'header',
  data () {
    return {
      apis: [],
      selectedApi: null
    }
  },
  methods: {
  	help(){
  		this.$refs.help.open()
  	},
    changeApi(){
      this.$http.options.root = this.selectedApi.url;
    }
  },
  created() {
    this.$backends.get().then(i => { 
      this.apis = i; 
      if (i.length) { 
        this.selectedApi = i[0] 
      }
    })
  },
  components: { help }
}