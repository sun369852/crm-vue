<template>
	<el-container style="height:100%">
		<m-aside></m-aside>
		<el-container>
			<el-header>header</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import mAside from '@/components/mAside'
	export default {
	  name: 'main',
	  components: {
	  	mAside
	  }
	}
</script>

<style>
</style>