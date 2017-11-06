<template>
	<div class="wrap">
		<div class="infoWrap clearfix">
			<p class="lablename">用户名：</p>
			<el-input class="inp" style="float: left;" v-model="userProfile.username" v-if="fileOnoff.username" :autofocus="true" v-focus></el-input>
			<div class="showText" v-text="userProfile.username" v-if="!fileOnoff.username"></div>
			<el-button class="btn rewrite" type="primary" icon="el-icon-edit" size="mini" v-if="!fileOnoff.username" @click="rewrite('username')"></el-button>
			<el-button class="btn save"  type="success" icon="el-icon-success" size="mini" v-if="fileOnoff.username" @click="save('username')"></el-button>
			<el-button class="btn error" type="danger" icon="el-icon-error" size="mini" v-if="fileOnoff.username" @click="cancal('username')"></el-button>
		</div>
		<div class="infoWrap clearfix">
			<el-button type="primary" @click="dialogVisible = true">修改密码</el-button>
			<el-dialog 
				title="修改密码"
				:visible.sync="dialogVisible"
				>
					<el-form label-position="right">
						<el-form-item label="原密码" :label-width="formLabelWidth">
					      <el-input v-model="password.oldPassword" auto-complete="off" class="pass-inp"></el-input>
					    </el-form-item>
					    <el-form-item label="新密码" :label-width="formLabelWidth">
					      <el-input v-model="password.newPassword" auto-complete="off" class="pass-inp"></el-input>
					    </el-form-item>
					    <el-form-item label="确认密码" :label-width="formLabelWidth">
					      <el-input v-model="password.confirmPassword" auto-complete="off" class="pass-inp"></el-input>
					    </el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
					      <el-button type="primary" @click="dialogVisible = false">确 认</el-button>
					      <el-button  @click="dialogVisible = false">取 消</el-button>
					    </div>
			</el-dialog>
		</div>
		<div class="infoWrap clearfix">
			<p class="lablename">姓名：</p>
			<div class="showText" v-text="userProfile.name"></div>
		</div>
		
		<div class="infoWrap clearfix">
			<p class="lablename">年龄：</p>
			<div class="showText" v-text="userProfile.age"></div>
		</div>
		<div class="infoWrap clearfix">
			<p class="lablename">手机：</p>
			<el-input class="inp" style="float: left;" v-model="userProfile.tel" v-if="fileOnoff.tel" :autofocus="true" v-focus></el-input>
			<div class="showText" v-text="userProfile.tel" v-if="!fileOnoff.tel"></div>
			<el-button class="btn rewrite" type="primary" icon="el-icon-edit" size="mini" v-if="!fileOnoff.tel" @click="rewrite('tel')"></el-button>
			<el-button class="btn save"  type="success" icon="el-icon-success" size="mini" v-if="fileOnoff.tel" @click="save('tel')"></el-button>
			<el-button class="btn error" type="danger" icon="el-icon-error" size="mini" v-if="fileOnoff.tel" @click="cancal('tel')"></el-button>
		</div>
		<div class="infoWrap clearfix">
			<p class="lablename">邮箱：</p>
			<el-input class="inp" style="float: left;" v-model="userProfile.mail" v-if="fileOnoff.mail" :autofocus="true" v-focus></el-input>
			<div class="showText" v-text="userProfile.mail" v-if="!fileOnoff.mail"></div>
			<el-button class="btn rewrite" type="primary" icon="el-icon-edit" size="mini" v-if="!fileOnoff.mail" @click="rewrite('mail')"></el-button>
			<el-button class="btn save"  type="success" icon="el-icon-success" size="mini" v-if="fileOnoff.mail" @click="save('mail')"></el-button>
			<el-button class="btn error" type="danger" icon="el-icon-error" size="mini" v-if="fileOnoff.mail" @click="cancal('mail')"></el-button>
		</div>
		<div class="infoWrap clearfix">
			<p class="lablename">职位：</p>
			<div class="showText" v-text="userProfile.position"></div>
		</div>
		<div class="infoWrap clearfix">
			<p class="lablename">直系领导：</p>
			<div class="showText" v-text="userProfile.manager"></div>
		</div>
	</div>
</template>

<script>
	export default {
		//怎么做单选按钮
	  name: 'userfile',
	  data(){
	  	return {
	  		fileOnoff:{
	  			username:false,
				password: false,
				tel:false,
				mail:false,
	  		},
	  		dialogVisible :false,
	  		password:{
	  			oldPassword:"",
	  			newPassword:"",
	  			confirmPassword:""
	  		},
	  		formLabelWidth: '120px'
	  	}
	  },
	  computed:{
	  	userProfile(){
	  		return JSON.parse( JSON.stringify(this.$store.state.nowUser) )
	  	}
	  },
	  methods:{
	  	changePassword(){
	  		
	  	},
	  	//编辑个人信息
	  	rewrite(item){
	  		this.fileOnoff[item] = !this.fileOnoff[item];
	  		this.userProfile[item] = "";
	  	},
	  	//保存个人信息
	  	save(item){
	  		console.log(this.userProfile[item])
	  		if (this.userProfile[item] =="") {
	  			this.$alert("请输入内容",{
	  				title:"消息",
	  				confirmButtonText: '确定',
	  				customClass:'alert-wrap',
	  				confirmButtonClass:'alert-confirm'
	  			})
	  			return
	  		}
//	  		this.userProfile[item] = this.$store.state.nowUser[item];
	  		this.fileOnoff[item] = !this.fileOnoff[item];
	  		this.$store.commit("updateUser",this.userProfile)
	  	},
	  	//取消编辑
	  	cancal(item){
	  		this.fileOnoff[item] = !this.fileOnoff[item];
	  		this.userProfile[item] = this.$store.state.nowUser[item];
	  	}
	  }
	}
</script>

<style scoped>
	.wrap {
		position: relative;
		padding-top: 70px;
	}
	.el-button--mini {
		font-size: 14px;
		padding: 3px 3px;
	}
	.infoWrap {
		width: 550px;
		font: 16px/40px "微软雅黑";
		position: relative;
		margin: 0 auto 30px;
	}
	.lablename {
		float: left;
		width: 100px;
	}
	.inp,.showText {
		width: 300px;
		margin-right: 15px;
		float: left;
	}
	.btn {
		position: relative;
		top: 4px;
		margin: 0 10px;
	}
	.pass-inp {
		width: 300px;
	}
	.alert-wrap {
		width: ;
	}
	.alert-confirm {
		
	}
	
</style>