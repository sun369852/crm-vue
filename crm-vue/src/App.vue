<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import '@/assets/reset.css'
	export default {
	  name: 'app',
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
