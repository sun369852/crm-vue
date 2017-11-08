<template>
	<div>
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true">
				<el-form-item>
					<el-input placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</div>
</template>

<script>
	export default {
	  name: 'usermanage',
	  data(){
	  	return {
	  		
	  	}
	  }
	}
</script>


<style>
</style>