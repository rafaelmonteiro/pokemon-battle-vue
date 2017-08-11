export default {
  name: 'character',
  data () {
    return {
      apiUrl: this.$http.options.root,
      isAttacking: false
    }
  },
  computed: {
    lifeStatus: function () {
      return ((100*this.currentHealth)/this.player.health).toFixed(0);
    },
    condition: function(){
      if (this.lifeStatus < 26) {
        return { class: 'danger', title: this.player.name + ' is about to die' }
      }

      if (this.lifeStatus < 51) {
        return { class: 'warning', title: this.player.name + " doesn't have too much health left" }
      }

      return { class: '', title: this.player.name + " is in a good condition" }
    }
  },
  methods: {
    hit(attack){
      if (this.isCpu || this.isAttacking ) { return; }
      
      this.isAttacking=true;
      this.$emit('attack', attack);
      setTimeout(()=> { this.isAttacking = false; }, 3000);
    }
  },
  props: {
  	player: {
      type: Object,
      required: true
    },
    isCpu:{
    	type: Boolean,
    	default: false
    },
    currentHealth:{
      type: Number,
      default: 0
    }
  }
}