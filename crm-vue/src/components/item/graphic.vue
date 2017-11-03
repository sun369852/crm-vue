<template>
	<div class="wrap" :style="{width:width}">
		<div class="gra-wrap" :style="{height:width}">
			<div class="circle" :style="{ backgroundColor: circleColor,height:width}"></div>
			<p class="num" :style="{color: numColor}">{{num}}</p>
		</div>
		<div class="title" :style="{color: textColor}">{{title}}</div>
	</div>
	
</template>

<script>
	export default {
	  name: 'graphic',
	  props: ["circleColor","width","num","title","numColor","textColor"]
	  
	}
</script>

<style scoped>
	.wrap {
		margin: 0 auto;	
	}
	.gra-wrap {
		position: relative;
		width: 100%;
		margin-bottom: 20px;
	}
	.circle {
		position: absolute;
		border-radius: 50%;
		top: 0;
		left: 0;
		width: 100%;
	}
	.num {
		font: 22px/32px "微软雅黑";
		background-color: #545C64;
		width: 120px;
		text-align: center; 
		position: absolute;
		top: 70%;
		transform: translateY(-50%);
		left: 50%;
	}
	.title{
		width: 100%;
		text-align: center;
		font: 32px/40px "微软雅黑";
	}
</style>