import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		users:[
			{
				username: "aaa",
				password: "bbb",
				name:"翠花",
				age:"19",
				tel:"130101010101",
				mail:"123456789@qq.com",
				position:"职员",
				manager: "大汉",
				projects:[
					"项目一","项目二","项目三","项目四","项目五"					
				]
			}
		],
		nowUser: "",
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
	mutations: {
		changeNowUser(state,user){
			state.nowUser = user;
		}
	},
	
})