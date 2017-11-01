<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import '@/assets/reset.css'
	import login from '@/components/login'
	export default {
	  name: 'app',
	  components:{
	  	login
	  }
	}
</script>

<style>
	html,body {
		height: 100%;
	}
	#app {
		height: 100%;
	}
</style>
