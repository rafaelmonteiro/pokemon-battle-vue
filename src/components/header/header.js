import help from './help'

export default {
  name: 'header',
  methods: {
  	help(){
  		this.$refs.help.open()
  	}
  },
  created() {
    // this.$http.get('all')
    // .then(response => { 
    
    // }, response => {

    // });
  },
  components: { help }
}