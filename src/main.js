import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import api from './components/api'
import autoProgress from 'vue-auto-progress'
import vueResource from 'vue-resource'

Vue.use(vueResource)
Vue.use(api, { url: 'https://vanderleisilva.github.io/pokemon-battle/backend-api.json' })

window.jQuery = require('jquery');
require('bootstrap');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<div><App/><auto-progress/></div>',
  components: { App, autoProgress }
})
