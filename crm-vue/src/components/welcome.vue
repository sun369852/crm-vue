<template>
	<div class="clearfix" style="margin-right: 45px;">
		<p>Welcome {{this.$store.state.nowUser.name}}</p>
		<el-dropdown style="float: left;" placement="top-end">
			  <span class="el-dropdown-link">
			    <img src="" class="userImg"/>
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>
			    	<router-link :to="{name:'userfile'}">个人信息</router-link>
			    </el-dropdown-item>
			    <el-dropdown-item>
			    	<router-link :to="{name: 'login'}">退出</router-link>
			    </el-dropdown-item>
			  </el-dropdown-menu>
		</el-dropdown>
			</div>
</template>

<script>
	export default {
	  name: 'welcome'
	}
</script>

<style scoped>
	.userImg {
		width: 50px;
		height: 50px;
		
	}
	.el-dropdown-menu__item {
		padding: 0;
	}
	p {
		height: 100%;
		float: left;
		margin-right: 15px;
		line-height: 60px;
	}
	a {
		padding: 0 20px;
		width: 100%;
		line-height: 36px;
		display: block;
		color: #5a5e66;
	}
</style>