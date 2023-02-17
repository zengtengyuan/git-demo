import { def } from '@vue/shared'
import { createStore } from 'vuex'
const store = createStore({
	  state(){
		  return {
			  login:true,
			  name:'ponyzeng',
			  baseUrl:'http://127.0.0.1:3000'
		  }
	  }
	 })
export default store