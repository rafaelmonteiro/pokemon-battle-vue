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
      this.$backends.selected(this.selectedApi);
    }
  },
  created() {
    Promise.all([this.$backends.get(), this.$backends.selected()]).then(values => { 
      this.apis = values[0]; 
      if (!values[0].length) { return; }

      this.selectedApi = values[1] ? values[1] : values[0][0];
    });
  },
  components: { help }
}