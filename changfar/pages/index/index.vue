<template>
	<view class="top">
		<div>
			<span></span>
		</div>
		<div>
			<image src="../../static/go.png" @click="toGo"></image>
			<image src="../../static/any.png" @click="toAny"></image>
		</div>
	</view>
	<!-- 动态首页 -->
	<view v-for="(item,index) in ideasData" class="dongtai_box">
		<view class="image_box">
			<img src="../../static/money.png">
		</view>
		<view class="right_box">
			<view class="nickName">
				{{item.name}}
			</view>
			<view class="text_box">
				{{item.text}}
			</view>
			<view class="time_box">
				{{item.time}}
			</view>
		</view>
		<view class="comment_box">
				<img src="../../static/comment.png">
		</view>
	</view>
	
</template>

<script>
	import { useStore } from 'vuex'
	import request from '../../request/api.js'
	import { onMounted, reactive ,toRefs} from 'vue'
	export default {
		setup(){
			var Data = reactive({
				ideasData:[]
			})
			onMounted(()=>{
				getData()
				console.log(ideasData)
			})
			let  ideasData
			const store = useStore()
			function toRedPack(){
				uni.navigateTo({
					url:'../../components/RedPack'
				})
			}
			function getData(){
				const store = useStore()
				request({
					url:store.state.baseUrl+'/ideas/lookAll',
					method:"GET",
					headers:{"Content-Type":"application/json"}
				}).then(res=>{
					Data.ideasData = res.data.data
				}).catch(err=>{
					console.log(err)
				})
			}
			function toGo(){
				console.log(store.state.name)
				if(store.state.name!='ponyzeng') 
					return uni.showToast(
					{
						title:'您还没登录呢',
						icon:'none'
						}
					)
				uni.navigateTo({
					url:'../../components/Sub'
				})
			}
			function toAny(){
				console.log('去看看别的')
			}
			return {
				toRedPack,
				toGo,
				toAny,
				getData,
				...toRefs(Data)
				
			}
		}
	}
</script>

<style  scoped>
	/*顶部样式 */
	.top{
		background-image: url('../../static/ava.png');
		height: 220px;
		padding: 10px;
		display: flex;
		justify-content:space-between;
		border-radius: 0  0 30px 30px;
	}
	.top span{
		color: #ffffff;
		font-family: 'KaiTi';
		font-weight: bolder;
	}
	.top image{
		margin-right: 18px;
		width: 20px;
		height: 20px;
	}
	/* 动态样式*/
	.dongtai_box{
		display: flex;
		margin: 10px;
		background-color: #ffffff;
		padding: 10px;
		border-radius: 18px;
		position: relative;
		box-shadow: 1px 1px  #9e9e9e;
	}
	.dongtai_box .image_box img{
		width: 30px;
	}
	.dongtai_box .nickName{
		font-size: 16px;
		color: #39d0bb;
		font-weight: bolder;
	}
	.dongtai_box .right_box{
		margin: 0 10px;
	}
	.dongtai_box .img_box{
		border-radius: 50%;
	}
	.dongtai_box img{
		border-radius: 50%;
	}
	.dongtai_box .time_box{
		font-size: 10px;
		margin-top: 5px;
		color: #9e9e9e;
	}
	.dongtai_box .right_box .text_box{
		font-size: 13px;
		margin-top: 5px;
	}
	.dongtai_box .comment_box{
		background-color: #39d0bb;
		text-align: center;
		width: 20px;
		height: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		position: absolute;
		bottom: 10px;
		right: 10px;
	}
	</style>
