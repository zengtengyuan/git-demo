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
				{{item.content}}
			</view>
			<view class="time_box">
				{{item.time}}
			</view>
			<!-- 点赞评论等 -->
			<view class="bottom_box">
				<view class="like_box" v-for="items in item.likes">
					<img src="../../static/like_s.png">
					<span>{{items.name}}</span>
				</view>
			</view>
		</view>
		<view class="comment_box">
			<view class="left_box" v-show="isShowLike&index==nowIndex">
				<view @click="like(item,index)"
				 v-show="item.likes"
				 >
					<img src="../../static/like.png" alt="" v-show="!item.likes.includes({phone:store.state.phone})">
					<span v-show="!item.likes.indexOf({phone:store.state.phone})==-1">赞</span>
				</view>
				<view @click="like(item,index)"  
				 v-show="item.likes">
					<img src="../../static/like_s.png" v-show="item.likes.includes({phone:store.state.phone})">
					<span v-show="item.likes.includes({phone:store.state.phone})==-1">取消</span>
				</view>
				<view>
					<img src="../../static/comment_.png" alt="">
					<span>评论</span>
				</view>
			</view>
			<view class="right_box"  @click="comment(index)">
				
				<img src="../../static/comment.png" alt="">
			</view>
		</view>
	</view>
</template>

<script>
	import { useStore } from 'vuex'
	import { ref} from 'vue'
 	import request from '../../request/api.js'
	import { onMounted, reactive ,toRefs} from 'vue'
	export default {
		setup(){
			var isShowLike = ref(false)
			var nowIndex = ref('')
			var Data = reactive({
				ideasData:[]
			})
			
			let  ideasData
			var store = useStore()
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
				if(!store.state.token) 
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
			function comment(index){
				if(index!=nowIndex.value){
					isShowLike.value = true
				}else{
					isShowLike.value = !isShowLike.value
				}
				nowIndex.value = index
			}
			function like(item,index){
				//判断我是否已经点过赞，拿到我的phone
				if(!store.state.token){
					return uni.showToast({
							title:'需要登录才可以进行操作',
							icon:'none'
						})
				}
				if(!item.likes.includes(store.state.phone)){
					//没点赞过，所以现在点赞
					Data.ideasData[index].likes.push(store.state.phone)
					request({
						url:store.state.baseUrl+'/ideas/like',
						method:"POST",
						data:{
							"phone":store.state.phone,
							"_id":item._id,
							"token":store.state.token
						},
						headers:{"Content-Type":"application/json"}
					}).then(res=>{
						uni.showToast({
							title:res.data.text,
							icon:'none'
						})
					}).catch(err=>{
						console.log(err)
					})
				}else{
					//没有点赞呢 所以现在点赞
					let number = Data.ideasData[index].likes.indexOf(store.state.phone)
					Data.ideasData[index].likes.splice(number,1)
					request({
						url:store.state.baseUrl+'/ideas/disLike',
						method:"POST",
						data:{
							"phone":store.state.phone,
							"_id":item._id,
							"token":store.state.token
						},
						headers:{"Content-Type":"application/json"}
					}).then(res=>{
						uni.showToast({
							title:res.data.text,
							icon:'none'
						})
					}).catch(err=>{
						console.log(err)
					})
				}
				
			}
			store = reactive(store)
			return {
				isShowLike,
				nowIndex,
				toRedPack,
				toGo,
				toAny,
				getData,
				comment,
				like,
				store,
				...toRefs(Data)
				
			}
		},
		onShow: function() {
			this.getData()
		},
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
	.dongtai_box .comment_box {
		display: flex;
		font-size: 12px;
		height: 30px;
		justify-content: center;
		align-items: center;
		
		position: absolute;
		bottom: 10px;
		right: 10px;
	}
	.dongtai_box .comment_box img{
		width: 12px;
		height: 12px;
		padding: 0 5px;
	}
	.dongtai_box .comment_box .left_box{
		display: flex;
		color:#fff;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: #373737;
	}
	.dongtai_box .comment_box .left_box view{
		margin:5px;
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
	}
	.dongtai_box .comment_box .right_box{
		background-color: #ECECEC;
	}
	.dongtai_box .bottom_box {
		background-color: #ECECEC;
		width:260px;
		font-size: 12px;
		margin-top:10px;
		padding: 5px;
		display: block;
	}
	.dongtai_box .bottom_box .like_box{
		display: flex;
		align-items: center;
	}
	.dongtai_box .bottom_box .like_box img{
		width: 15px;
		margin:0 3px;
		height: 15px;
	}
	</style>
