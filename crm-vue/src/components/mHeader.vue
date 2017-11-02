<template>
	<header class="clearfix">
		<h2 class="title">{{this.$route.meta.title}}</h2>
		<welcome style="float:right"></welcome>
	</header>
</template>

<script>
	import welcome from "@/components/welcome"
	export default {
	  name: 'mHeader',
	  components: {
	  	welcome
	  }
	}
</script>

<style>
	.title {
		float: left;
	}
	header {
		color: #fff;
	}
</style>