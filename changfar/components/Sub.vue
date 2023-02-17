<template>
	<view class='top_box'>
		<view @click="toBack">《</view>
		<view class="top_text">发布动态</view>
		<view :class="inputWords==''?'button_none':'button'" @click="toGo">发表</view>
	</view>
	<!-- 发表文字 -->
	<view class="input_box">
	<!-- 	<input 
		type="text" 
		placeholder-class="place"
		placeholder="想说什么随便说"
		/> -->
		<textarea 
		cols="36" 
		v-model="inputWords"
		rows="10"
		maxlength="200"
		placeholder-class="place"
		placeholder="想说什么随便说"
		></textarea>
	</view>
</template>

<script>
	import { ref } from 'vue'
	export default {
		setup(){
			let inputWords = ref('')
			function toGo(){
				if(inputWords.value.length==0){
					return
				}else{
					uni.switchTab({
						url:'../pages/index/index'
					})
				}
			}
			
			function toBack(){
				uni.switchTab({
					url:'../pages/index/index'
				})
			}
			return {
				toGo,
				toBack,
				inputWords
			}
		}
	}
</script>

<style scoped>
	.top_box{
		display: flex;
		justify-content: space-between;
		margin: 10px;
		font-size: 13px;
	}
	.top_box .top_text{
		font-family: 'KaiTi';
		font-weight: bolder;
	}
	.top_box .button{
		background-color: #39d0bb;
		padding: 2px 5px;
		font-size: 12px;
		color: #fff;
	}
	.top_box .button_none{
		background-color: #9e9e9e;
		padding: 2px 5px;
		font-size: 12px;
		color: #fff;
	}
	.input_box{
		background-color: #fff;
		margin: 10px;
		border-radius: 10px;
		font-size: 10px;
		padding: 5px;
		word-break: break-all;
	}
	.input_box textarea{
		font-size: 13px;
		width: 100%;
	}
	.place{
		color:#9e9e9e;
		font-size: 10px;
	}
</style>
