<template>
	<div id="app">
		<el-container style="height:100%">
			<el-aside style="height:100%">
				<el-col :span="24">
				    <el-menu
				      default-active="2"
				      class="el-menu-vertical-demo"
				      background-color="#545c64"
				      text-color="#fff"
				      active-text-color="#ffd04b">
				      <el-menu-item index="1">
				        <!--<i class="el-icon-menu"></i>-->
				        <span slot="title">首页</span>
				      </el-menu-item>
				      <el-menu-item index="2">
				        <!--<i class="el-icon-setting"></i>-->
				        <span slot="title"></span>
				      </el-menu-item>
				    </el-menu>
  				</el-col>
			</el-aside>
			<el-container>
				<el-header>header</el-header>
				<el-main>
					<login></login>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import login from '@/components/login'
	import '@/assets/reset.css'
	export default {
	  name: 'app',
	  components: {
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
