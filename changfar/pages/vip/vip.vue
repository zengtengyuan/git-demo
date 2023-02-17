<template>
	<Login v-if='isLogin'></Login>
</template>

<script>
	import Login from '../home/Login.vue'
	import { useStore } from 'vuex'
	import {ref} from 'vue'
	export default{
		setup(){
			const store = useStore()
			let isLogin = ref(store.state.login)
			return {
				isLogin
			}
		},
		components:{
			Login
		}
	}
</script>

<style>
</style>