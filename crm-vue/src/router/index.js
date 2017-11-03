import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import usermanage from '@/components/usermanage'
import userfile from '@/components/userfile'
import indexFront from '@/components/indexFront'


Vue.use(Router)

export default new Router({
routes: [
    {
    	path:"/",
    	name:"/",
    	redirect: '/login'
    },
    {
    	path:"/login",
    	name:"login",
    	component:login
    },
    {
    	path: '/index',
    	component:index,
    	meta: {title:"首页"},
    	children:[
    		{
    			path:"",
		    	name:"indexFront",
		    	component: indexFront,
		    	meta:{title:"首页"}
    		},
    		{
    			path:"usermanage",
		    	name:"usermanage",
		    	component: usermanage,
		    	meta:{title:"用户管理"}
    		},
    		{
    			path:"userfile",
		    	name:"userfile",
		    	component: userfile,
		    	meta:{title:"个人信息"}
    		}
    	]
    }
]
})
