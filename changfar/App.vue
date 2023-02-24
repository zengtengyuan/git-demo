<script>
	import { useStore } from 'vuex'
	export default {
		setup(){
			const store = useStore()
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('app_show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page{
		background-color: #f1f1f1;
	}
</style>
