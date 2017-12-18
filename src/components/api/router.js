import Vue from 'vue'

export default (to, from, next) => {

  if (Vue.http.options.root || ['noapi', 'error'].indexOf(to.name) > -1) {
    next();
    return;
  }

  Promise.all([Vue.backends.get(), Vue.backends.selected()]).then(values => { 

    if (values[0].length == 0) {
      next({ name: 'noapi' });
      return;
    }

    Vue.http.options.root = values[1] ? values[1].url : values[0][0].url; 
    next();

  }).catch(e => { 
    next({ name: 'error' });
  });
}