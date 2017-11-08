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
					<el-button type="primary" @click="addDialog = true">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<el-table
			:data="this.$store.state.users"
			style="width: 100%"
			>
			<el-table-column
				type="selection"
		     	width="55"
		     	align="center"
		      ></el-table-column>
		      <el-table-column
		      	prop="name"
		      	label="姓名"
		      	align="center"
		      	width="80px"
		      	></el-table-column>
		      <el-table-column
		      	prop="birth"
		      	label="生日"
		      	align="center"
		      	></el-table-column>
		      <el-table-column
		      	prop="age"
		      	label="年龄"
		      	align="center"
		      	width="50px"
		      	></el-table-column>
		      <el-table-column
		      	prop="tel"
		      	label="电话"
		      	align="center"
		      	></el-table-column>
		      <el-table-column
		      	prop="mail"
		      	label="邮箱"
		      	align="center"
		      	></el-table-column>
		      <el-table-column
		      	prop="position"
		      	label="职位"
		      	align="center"
		      	></el-table-column>
		      <el-table-column
		      	prop="manager"
		      	label="直系领导"
		      	align="center"
		      	></el-table-column>
		</el-table>
		<el-dialog
		  title="新增用户"
		  :visible.sync="addDialog"
		  width="700px"
		  >
		  <el-form label-width="100px">
		  	<el-form-item label="用户名：">
		  		{{"users "+ this.newUser.name}}
		  	</el-form-item>
		  	<el-form-item label="密码：">{{this.newUser.password}}</el-form-item>
		  	<el-form-item label="姓名：">
		  		<el-input v-model="newUser.name" placeholder="请输入姓名"></el-input>
		  	</el-form-item>
		  	<el-form-item label="生日：">
		  		<el-date-picker type="date" placeholder="选择日期" v-model="newUser.birth"></el-date-picker>
		  	</el-form-item>
		  	<el-form-item label="手机：">
		  		<el-input v-model="newUser.tel" placeholder="请输入手机"></el-input>
		  	</el-form-item>
		  	<el-form-item label="邮箱：">
		  		<el-input v-model="newUser.mail" placeholder="请输入邮箱"></el-input>
		  	</el-form-item>
		  	<el-form-item label="职位：">
		  		<el-dropdown trigger="click" @command="chosePosition">
		  			<el-button size="medium">{{this.newUser.position}}<i class="el-icon-arrow-down el-icon--right"></i></el-button>
		  			<el-dropdown-menu slot="dropdown">
		  				<el-dropdown-item v-for="item in positionList" :command="item">{{item}}</el-dropdown-item>
			  		</el-dropdown-menu>
		  		</el-dropdown>
		  		
		  	</el-form-item>
		  	<el-form-item label="直系领导：">
		  		<el-input v-model="newUser.manager" placeholder="请输入姓名"></el-input>
		  	</el-form-item>
		  </el-form>
		  <span slot="footer">
		    <el-button type="primary" @click="addDialog = false">确 定</el-button>
		    <el-button @click="addDialog = false">取 消</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
	  name: 'usermanage',
	  data(){
	  	return {
	  		addDialog:false,
	  		newUser: {
	  			username: this.$store.state.users.length + 1,
	  			password: "admin",
	  			birth:"",
	  			name:"",
	  			position:"职位",
	  			tel:"",
	  			mail:"",
	  			manager:""
	  		},
	  		positionList:["助理","专员","主管","高级主管","经理","高级经理","总监","总经理"]
	  	}
	  },
	  methods:{
	  	chosePosition(command){
	  		this.newUser.position = command;
	  	}
	  }
	}
</script>


<style>
</style>