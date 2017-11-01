import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'

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
    	name: "index",
    	component:index
    }
]
})
