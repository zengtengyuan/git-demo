<template>
	<Login v-if='!store.state.login'></Login>
	<div v-else class="top_box"> 
		<img src="../../static/bili.png" alt="">
		<div>
			<div class="name">ponyzeng</div>
			<div class="stage">超级会员</div>
			<div class="numbers">动态：10</div>
		</div>
		
	</div>
</template>

<script>
	import Login from '../home/Login.vue'
	import { useStore } from 'vuex'
	import {ref} from 'vue'
	export default{
		setup(){
			const store = useStore()
			return {
				store
			}
		},
		components:{
			Login
		}
	}
</script>

<style scoped>
	.top_box{
		display: flex;
		background-color: #fff;
		padding: 20px;
	}
	.top_box img{
		border-radius: 50%;
		margin-right: 10px;
		width: 40px;
		height: 40px;
	}
	.top_box .name{
		font-size: 15px;
		font-weight: bolder;
	}
	.top_box .stage{
		font-size:8px;
		color: red;
		padding: 1px 1px;
		font-family: 'KaiTi';
		display: inline-block;
		margin-top: 5px;
		border: 0.3px solid red;
		text-align: center;
	}
	.top_box .numbers{
		font-size: 10px;
		margin-top: 8px;
		color: #39d0bb;
		font-weight: bold;
	}
</style>