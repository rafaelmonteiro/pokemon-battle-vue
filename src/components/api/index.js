import localForage from "localforage";

export default {
  install(Vue, options){
    Vue.$backends = {
		get(){
			return localForage.getItem('backends').then(value => {

				if (value) { return value; }

				return Vue.http.get(options.url).then(response => {
					localForage.setItem('backends', response.data);
					return response.data;
				});
		    }); 
		}
	}
  }
}
