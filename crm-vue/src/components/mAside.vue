<template>
	<el-aside width="150px">
        <el-col :span="24">
        	<router-link :to="{name:'index'}">
        		<div class="logo"></div>
        	</router-link>
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">

                <el-menu-item index="1">
                    <template slot="title">
                        <!--<i class="el-icon-location"></i>-->
                        <span>主页</span>
                    </template>
                </el-menu-item>

                <el-menu-item index="2">
                    <!--<i class="el-icon-setting"></i>-->
                    <span slot="title">用户管理</span>
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
</style>