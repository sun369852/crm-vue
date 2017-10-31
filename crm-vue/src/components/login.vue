<template>
	<div class="wrap">
		<div class="login-wrap">
			<div class="login-img"></div>
			<h2 class="title">登录</h2>
			<el-form>
				<el-form-item>
					<el-input v-model="login.username"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="login.password"></el-input>
				</el-form-item>
				<!--底下这个要改成routerlink-->
				<div class="forget-password">忘记密码？</div>
				<div class="clearfix">
					<el-checkbox v-model="checked" class="remember-pass">记住密码</el-checkbox>
					<el-form-item>
						<el-button type="primary" class="login-btn">登录</el-button>
					</el-form-item>
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
	  			username: "abc",
	  			password: "ccc"
	  		},
	  		checked: true
	  	}
	  }
	}
</script>

<style>
	.wrap {
		width: 100%;
		height: 100%;
	}
	.login-wrap {
		width: 400px;
		height: 400px;
		/*border: 2px solid #000;*/
		margin: 0 auto;
		box-sizing: border-box;
		padding-top: 30px;
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
	.remember-pass {
		float: left;
		
	}
	.login-btn {
		float: right;
	}
</style>