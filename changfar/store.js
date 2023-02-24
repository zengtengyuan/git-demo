import { def } from '@vue/shared'
import { createStore } from 'vuex'

const state  = {
	login:false,
	name:'ponyzeng',
	token:'',
	phone:'',
	baseUrl:'http://127.0.0.1:3000'
}

const mutations = {
	LOGIN(state,data){
		state.login = true
		state.phone = data.phone
		state.token = data.token
		console.log(data)
	}
}
const store = createStore({
		state,
		mutations,
	 })
export default store