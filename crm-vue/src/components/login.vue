<template>
	<div class="wrap">
		<div class="login-wrap">
			<div class="login-img"></div>
			<h2 class="title">登录</h2>
			<el-form>
				<el-form-item>
					<el-input v-model="login.username" placeholder="请输入用户名"></el-input>
					<div class="info" v-text="usernameInfo"></div>
				</el-form-item>
				<el-form-item>
					<el-input v-model="login.password" placeholder="请输入密码" type="password"></el-input>
					<div class="info" v-text="passwordInfo"></div>
				</el-form-item>
				<!--底下这个要改成routerlink-->
				<!--<div><div class="forget-password">忘记密码？</div></div>-->
				<div class="clearfix box">
					<el-checkbox v-model="checked" class="remember-pass">记住密码</el-checkbox>
					<!--<el-form-item>-->
						<el-button type="primary" class="login-btn" @click="haveUser">登录</el-button>
					<!--</el-form-item>-->
				</div>
				
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'login',
	  data(){
	  	return {
	  		login: {
	  			username: "",
	  			password: ""
	  		},
	  		checked: true,
	  		usernameInfo:"",
	  		passwordInfo:"",
	  		haveAccount:true
	  	}
	  },
	  created(){
	  		if (localStorage.username) {
	  			this.login.username=localStorage.getItem( "username");
	  		}
	  		if (localStorage.password) {
	  			this.login.password=localStorage.getItem( "password");
	  		}
	  },
	  methods: {
	  	haveUser(){
	  		if (this.checked) {
	  			localStorage.setItem( "username",this.login.username);
	  			localStorage.setItem( "password",this.login.password);
	  		}
	  		if (this.login.username == "") {
	  			this.usernameInfo = "请输入用户名"
	  			return
	  		}
	  		if (this.login.username == "") {
	  			this.passwordInfo = "请输入密码"
	  			return
	  		}
	  		var users = this.$store.state.users;
	  		var user = users.filter(item => {
	  			return item.username == this.login.username;
	  		})
	  		if (user.length == 0) {
	  			this.usernameInfo = "用户名不存在"
	  			this.passwordInfo = ""
	  			this.haveAccount = false;
	  			return
	  		} else if(user[0].password != this.login.password ){
	  			this.usernameInfo = ""
	  			this.passwordInfo = "密码错误"
	  			this.haveAccount = false;
	  			return
	  		}
	  		localStorage.setItem( "nowUser",this.login.username);
	  		this.$store.commit("changeNowUser",user[0])
	  		this.$router.replace("/index")
	  	}
	  }
	}
</script>

<style scoped>
	.wrap {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.login-wrap {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 400px;
		height: 400px;
		box-sizing: border-box;
	}
	.login-img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin: 0 auto 40px;
		background-color: red;
	}
	.title {
		text-align: center;
		margin-bottom: 40px;
	}
	.el-form-item {
		margin-bottom: 30px;
	}
	.info {
		position: absolute;
		left: 5px;
		top: 35px;
		color: red;
	}
	.forget-password {
		display: inline-block;
		padding: 0 3px;
		margin-left: 10px;
		font-size: 14px;
		line-height: 22px;
	}
	.forget-password:hover {
		cursor: pointer;
		color: #409EFF;
	}
	.box {
		margin-top: 10px;
	}
	.remember-pass {
		margin-top: 10px;
		margin-left: 10px;
		float: left;
		
	}
	.login-btn {
		margin-right: 20px;
		float: right;
	}
</style>