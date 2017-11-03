<template>
	<el-container style="height:100%">
		<m-aside></m-aside>
		<el-container style="min-width: 640px;">
			<el-header style="background-color: blue;">
				<m-header></m-header>
			</el-header>
			<el-main style="position: relative;">
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
	  components: {
	  	mAside,
	  	mHeader
	  }
	}
</script>

<style>
</style>