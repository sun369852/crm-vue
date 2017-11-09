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
					<el-button type="primary" @click="openAdduser">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<el-table
			:data="this.$store.state.users"
			style="width: 100%"
			>
			<el-table-column
				type="expand"
				>
				<template slot-scope="props">
					<el-form label-position="left" inline id="table-expand">
			          <el-form-item label="姓名：">
			            <span>{{ props.row.name }}</span>
			          </el-form-item>
			           <el-form-item label="性别：">
			            <span>{{ props.row.sex }}</span>
			          </el-form-item>
			           <el-form-item label="生日：">
			            <span>{{ props.row.birth }}</span>
			          </el-form-item>
			           <el-form-item label="年龄：">
			            <span>{{ props.row.age }}</span>
			          </el-form-item>
			           <el-form-item label="电话：">
			            <span>{{ props.row.tel }}</span>
			          </el-form-item>
			           <el-form-item label="邮箱：">
			            <span>{{ props.row.mail }}</span>
			          </el-form-item>
			           <el-form-item label="职位：">
			            <span>{{ props.row.position }}</span>
			          </el-form-item>
			           <el-form-item label="上司：">
			            <span>{{ props.row.manager }}</span>
			          </el-form-item>
			       </el-form>
				</template>
			</el-table-column>
			<el-table-column
				type="selection"
		     	width="55px"
		      ></el-table-column>
		      <el-table-column
		      	prop="name"
		      	label="姓名"
		      	align="center"
		      	></el-table-column>
		      	<el-table-column
		      	prop="sex"
		      	label="性别"
		      	align="center"
		      	></el-table-column>
		      	<el-table-column
		      	prop="position"
		      	label="职位"
		      	align="center"
		      	></el-table-column>
		      <!--<el-table-column
		      	prop="birth"
		      	label="生日"
		      	align="center"
		      	></el-table-column>-->
		      <!--<el-table-column
		      	prop="age"
		      	label="年龄"
		      	align="center"
		      	width="50px"
		      	></el-table-column>-->
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
		      	label="操作"
		      	align="center"
		      	>
		      	<template slot-scope="props">
		      		<el-button
			          size="mini"
			          >编辑</el-button>
			        <el-button
			          size="mini"
			          type="danger"
			          @click="delUser(props.$index, props.row)"
			          >删除</el-button>
		      	</template>
		      </el-table-column>
		      <!--<el-table-column
		      	prop="position"
		      	label="职位"
		      	align="center"
		      	></el-table-column>
		      <el-table-column
		      	prop="manager"
		      	label="直系领导"
		      	align="center"
		      	></el-table-column>-->
		</el-table>
		<el-dialog
		  title="新增用户"
		  :visible.sync="addDialog"
		  width="700px"
		  :close-on-click-modal="false"
		  >
		  <el-form label-width="100px">
		  	<el-form-item label="用户名：">
		  		{{"users " + this.newUser.username}}
		  	</el-form-item>
		  	<el-form-item label="密码：">{{this.newUser.password}}</el-form-item>
		  	<el-form-item label="姓名：">
		  		<el-input v-model="newUser.name" placeholder="请输入姓名"></el-input>
		  	</el-form-item>
		  	<el-form-item label="生日：">
		  		<el-date-picker type="date" placeholder="选择日期" v-model="newUser.birth"></el-date-picker>
		  	</el-form-item>
		  	<el-form-item label="性别">
		  		<el-radio v-model="newUser.sex" label="male">男</el-radio>
  				<el-radio v-model="newUser.sex" label="female">女</el-radio>
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
		    <el-button type="primary" @click="confirmAdduser">确 定</el-button>
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
	  			username: "this.$store.state.users.length + 1",
	  			password: "admin",
	  			birth:"",
	  			name:"",
	  			sex:"",
	  			position:"职位",
	  			tel:"",
	  			mail:"",
	  			manager:""
	  		},
	  		positionList:["助理","专员","主管","高级主管","经理","高级经理","总监","总经理"]
	  	}
	  },
	  methods:{
	  	openAdduser(){
	  		this.newUser.username = this.$store.state.users.length + 1;
			this.newUser.birth = ""
			this.newUser.name = ""
			this.newUser.sex = ""
			this.newUser.position ="职位"
			this.newUser.tel = ""
			this.newUser.mail = ""
			this.newUser.manager = ""
	  		this.addDialog = true;
	  	},
	  	chosePosition(command){
	  		this.newUser.position = command;
	  	},
	  	confirmAdduser(){
	  		this.newUser.sex == "male"?this.newUser.sex = "男":this.newUser.sex = "女"
	  		this.$store.commit("addNewUser",JSON.parse( JSON.stringify(this.newUser) ))
	  		this.addDialog = false
	  	},
	  	delUser(index,row){
	  		row.age = "33"
	  	}
	  }
	}
</script>


<style scoped>
	#table-expand {
    font-size: 0;
  }
  	#table-expand .el-form-item__label {
    width: 90px;
    color: #99a9bf;
  }
	#table-expand .el-form-item{
		margin-right: 0px;
		width: 33.3333%;
	}
</style>