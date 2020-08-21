import axios from 'axios'

export function request (config) {
	//1.创建axios实例
	const instance =axios.create({
		baseURL:'http://152.136.185.210:8000/api/z8',
		timeout:4000
	})
	//2.axios 的拦截器
	//2.1.请求拦截的作用
	instance.interceptors.request.use(config=>{
		return config
	},err=>{
		console.log(err)

	})
	//2.2 响应拦截
	instance.interceptors.response.use(res=>{
		return res.data
	},err=>{
		return Promise.resolve(err.response)

	})

	return instance(config)

}