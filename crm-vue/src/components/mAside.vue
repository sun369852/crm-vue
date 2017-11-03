<template>
	<el-aside width="200px" style="min-width: 200px;">
        <el-col :span="24">
        	<router-link to="/index">
        		<div class="logo"></div>
        	</router-link>
            <el-menu
                :default-active="this.$route.path"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                :router="true"
                active-text-color="#ffd04b">

                <el-menu-item index="/index">
                    <span slot="title">
                        <!--<i class="el-icon-location"></i>-->
                        <span>首页</span>
                        <!--<router-link :to="{name:'index'}">首页</router-link>-->
                    </span>
                </el-menu-item>

                <el-menu-item index="/index/usermanage">
                    <!--<i class="el-icon-setting"></i>-->
                    <span slot="title">
                    	<span>用户管理</span>
                    	<!--<router-link :to="{name:'usermanage'}">用户管理</router-link>-->
                    </span>
                </el-menu-item>
                <el-menu-item index="/index/userfile">
                    <!--<i class="el-icon-setting"></i>-->
                    <span slot="title">
                    	<span>个人信息</span>
                    	<!--<router-link :to="{name:'usermanage'}">用户管理</router-link>-->
                    </span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-aside>
</template>

<script>
	export default {
	  name: 'mAside'
	 
	}
</script>

<style>
	.el-menu {
		border-right: none;
	}
	.el-aside {
		box-sizing: border-box;
        height: 100%;
        background: #545c64;
    }
    .logo {
    	width: 100%;
    	height: 80px;
    	background-color: green;
    }
    .el-menu-item a {
    	display: block;
    	width: 100%;
    	height: 100%;
    	color: #fff;
    	transition: .3s;
    }
    /*.el-menu-item .router-link-active,
    .el-menu-item .router-link-exact-active {
    	color: rgb(255, 208, 75)
    }*/
</style>