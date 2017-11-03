import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		users:[
			{
				username: "aaa",
				password: "bbb"
			}
		],
		nowUser: "",
//		title:""
	},
	mutations: {
		changeNowUser(state,username){
			state.nowUser = username;
		},
//		changeTitle(state,title){
//			state.title = title;
//		}
	},
	
})