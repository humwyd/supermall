import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import('../Views/home/Home')
const Category=()=>import('../Views/category/Category')
const Cart=()=>import('../Views/cart/Cart')
const Profile=()=>import('../Views/profile/Profile')

// 安装插件
Vue.use(VueRouter)

//创建路由对象
const routes=[
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/category',
		component:Category
	},
	{
		path:'/cart',
		component:Cart
	},
	{
		path:'/profile',
		component:Profile
	}
]

const router=new VueRouter({
	routes,
	mode:'history'
})
//导出router
export default router
