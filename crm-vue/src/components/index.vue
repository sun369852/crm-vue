<template>
	<el-container style="height:100%">
		<m-aside></m-aside>
		<el-container>
			<el-header style="background-color: blue;">
				<m-header></m-header>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import mAside from '@/components/mAside'
	import mHeader from '@/components/mHeader'
	export default {
	  name: 'main',
	  created(){
	  	this.$store.commit("changeNowUser",localStorage.getItem("nowUser"))
	  },
	  components: {
	  	mAside,
	  	mHeader
	  }
	}
</script>

<style>
</style>