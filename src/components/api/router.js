import Vue from 'vue'

export default (to, from, next) => {

  if (Vue.http.options.root || ['noapi', 'error'].indexOf(to.name) > -1) {
    next();
    return;
  }

  Vue.backends.get().then(items => {
    if (items.length == 0) {
      next({ name: 'noapi' });
      return;
    }

    Vue.http.options.root = items[0].url;
    next();
  })
  .catch((e)=>{
    next({ name: 'error' });
  });

}