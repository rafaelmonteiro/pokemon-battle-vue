import localForage from "localforage";

export default {
  install(Vue, options){
    Vue.backends = {
		get(){
			return localForage.getItem('backends').then(value => {

				if (value) { return value; }

				return Vue.http.get(options.url).then(response => {
					localForage.setItem('backends', response.data);
					return response.data;
				});
		    }); 
		},
		selected(item){
			if (!item) { return localForage.getItem('selectedBackend'); }

			Vue.http.options.root = item.url;
			return localForage.setItem('selectedBackend', item);
		}
	}

	Vue.prototype.$backends = { 
		get: Vue.backends.get, 
		selected: Vue.backends.selected 
	};
  }
}
