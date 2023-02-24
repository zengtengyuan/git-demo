<template>
  <div>
    <div class="top_box">
      <span>X</span>
      <span>帮助</span>
    </div>
    <span class="welcome">欢迎登录畅远科技</span>
    <div class="input_box">
      <input 
	  type="number" v-model="phoneNumber" placeholder="请输入手机号"
	  placeholder-class="place"
	  />
    </div>
	<div class="input_box">
	  <input 
		v-model="passWord" placeholder="请输入密码"
	   placeholder-class="place"
	   />
	</div>
    <div class="info_box">
      <span>未注册的手机号验证后自动创建美团账户</span>
    </div>
    <div class="read_box">
      <input type="radio"  :checked='isChecked' @click="changeRadio"/>
      <span class="right_text">
		  我已阅读并同意
		  <span class="xieyi"> 用户协议 </span>,
		  <span class="xieyi"> 隐私政策</span>
		  ,并授权畅远科技使用该账号信息(如昵称,头像,收货地址)进行统一管理
	  </span>
    </div>
    <div class="yanzhengma">
      <button
      :class="isRightNumber?'back_style_have':'back_style_none'"
      @click="getYanzhengma"
      >
      登录
      </button>
    </div>
    <div class="changeLogin">
      <span></span>
      <span>遇到问题</span>
    </div>
  </div>
</template>

<script>
	import request from '../../request/api.js'
  export default{
    name:"Login",
    data(){
      return{
        isChecked:"",
        phoneNumber:"",
        isRightNumber:'',
		passWord:''
      }
    },
    watch:{
      phoneNumber(a){
        if(a.length==11){
          this.isRightNumber = true
        }else{
          this.isRightNumber = false
        }
      }
    },
    methods:{
      changeRadio(){
        this.isChecked = !this.isChecked
      },
      async getYanzhengma(){
		if(this.phoneNumber.length<11){
			return uni.showToast({
			  title:"手机号码输入不正确",
			  icon:'none'
			})
		}
   //      if(!this.isChecked){
			// return uni.showToast({
   //          title:"请先阅读并同意用户协议",
			// icon:'none'
   //        })
   //      }
		
        //登录成功逻辑
		request({
			url:this.$store.state.baseUrl+'/users/login',
			method:"POST",
			data:{
				"phone":this.phoneNumber,
				"pwd":this.passWord
			},
			headers:{"Content-Type":"application/json"}
		}).then(res=>{
			uni.showToast({
				title:res.data.text,
				icon:'none'
			})
			if(res.data.status==200){
				this.$store.commit('LOGIN',res.data)
				return uni.switchTab({
					url:'../index/index'
				})
			}
		}).catch(err=>{
			console.log(err)
		})
      }
    }
  }
</script>

<style scoped>
  /* 设置顶部样式 */
  .top_box{
    display: flex;
    padding: 5px 9px 5px 9px;
    margin-bottom: 40px;
    font-size: 10px;
    justify-content: space-between;
    align-items: center;
  }
  .welcome{
      margin-left:30px;
      font-size: 20px;
      font-family: 'KaiTi';
      font-weight: bolder;
  }
  /* 设置登录输入框样式 */
  .input_box{
    margin-top: 20px;
    font-size: 12px;
    margin:20px 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #9e9e9e;
  }
  .input_box input{
    border: none;
    padding: 0 10px;
    outline: 0;
  }
  .input_box input:focus{
    border: none;
  }
  .info_box{
    margin-left: 30px;
    font-size:12px;
    margin-top: 20px;
    color: #9e9e9e;
  }
  .read_box{
    display: flex;
    margin: 30px;
    font-size: 10px;
  }
  .xieyi{
    color:deepskyblue;
  }
  .read_box .right_text{
    margin-left: 10px;
  }
  /* 设置验证码样式 */
  .yanzhengma{
    padding: 0 20px;
  }
  .yanzhengma button{
	font-size: 12px;
    width: 100%;
    padding: 1px;
    border-radius: 10px;
    border: 0;
  }
  .back_style_none{
    /* background-color: #eec500; */
    background-color: #FEF5CA;
  }
  .back_style_have{
    background-color: #eec500;
  }
  .changeLogin{
    margin: 20px 30px 0 30px;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
  }
  .place{
	  font-size: 13px;
  }
</style>
