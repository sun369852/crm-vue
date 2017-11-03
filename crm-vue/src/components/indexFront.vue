<template>
	<div class="wrap" 
		style="position: absolute;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);">
		<el-row :gutter="20">
			<el-col :span="24/items.length" v-for="item in items">
				<graphic :width="graphic.width" :circleColor="graphic.circleColor" :numColor="graphic.numColor" :title="item.title" :textColor="item.textColor" :num="item.num"></graphic>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import graphic from "@/components/item/graphic"
	export default {
	  name: 'indexFront',
	  data(){
	  	return {
	  		graphic: null
	  	}
	  },
	  created(){
	  		this.graphic = this.$store.state.graphic
	  },
	  computed:{
	  	items(){
	  		var items = this.graphic.items;
	  		clearInterval(window.timer)
	  		window.timer = setInterval(function(){
	  			for (var i = 0; i < items.length; i++) {
	  				//这里应该要commit给vuex
	  				items[i].num += Math.floor(Math.random()*(i+1)*134)
	  			}
	  		},1000)
	  		return items
	  	}
	  },
	  components:{
	  	graphic
	  }
	}
</script>

<style >
	
</style>