import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		maxId:2,
		users:[
			{
				id:1,
				username: "user1",
				password: "admin",
				name:"翠花",
				sex:"女",
				birth:"1991-03-04",
				age:"19",
				tel:"130101010101",
				mail:"123456789@qq.com",
				position:"职员",
				manager: "大汉",
				projects:[
					"项目一","项目二","项目三","项目四","项目五"					
				]
			},
			{
				id:2,
				username: "user2",
				password: "admin",
				name:"傻子",
				sex:"男",
				birth:"1991-05-09",
				age:"20",
				tel:"13383838581",
				mail:"avasdfge@qq.com",
				position:"主管",
				manager: "疯子",
				projects:[
					"项目一","项目二","项目三","项目四","项目五"					
				]
			}
		],
		nowUser: {
				id:1,
				username: "user1",
				password: "admin",
				name:"翠花",
				sex:"女",
				birth:"1991-03-04",
				age:"19",
				tel:"130101010101",
				mail:"123456789@qq.com",
				position:"职员",
				manager: "大汉",
				projects:[
					"项目一","项目二","项目三","项目四","项目五"					
				]
			},
		graphic: {
			width: "150px",
			circleColor: "blue",
			numColor: "#fff",
			items:[
				{
					title:"利润",
					textColor: "red",
					num: 0
				},
				{
					title:"订单",
					textColor:"#000",
					num: 0
				},
				{
					title:"总交易额",
					textColor:"#000",
					num: 0
				}
			]
		}
	},
	getters:{
		items(state,getters){
	  		var items = state.graphic.items;
	  		setInterval(function(){
	  			for (var i = 0; i < items.length; i++) {
	  				items[i].num += Math.floor(Math.random()*(i+1)*134)
	  			}
	  		},1000)
	  		
	  		return items
	  	}
	},
	mutations: {
		changeNowUser(state,user){
			state.nowUser = user;
		},
		updateUser(state,user){
			for (var attr in state.nowUser) {
				state.nowUser[attr] = user[attr];
			}
		},
		addNewUser(state,user){
			state.users.push(user)
		},
		maxIdAdd(state){
			state.maxId +=1;
		},
		delClickUser(state,index){
			state.users.splice(index,1)
		}
	},
	
})

