<template>
	<div class="wrapper">
		<ul class="content">
			<button @click="btnClick">click</button>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
			<li>lienbiao</li>
		</ul>
	</div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
	name: 'Category',
	data(){
		return{
			scroll:null
		}
	},
	//组件创建完调用
	mounted () {
		this.scroll=new BScroll(document.querySelector('.wrapper'),{
			probeType:3,
			click:true,
			pullUpLoad:true

		})
		this.scroll.on('scroll',(position)=>{
			console.log(position)
		})
		this.scroll.on('pullingUp',()=>{
			console.log('finished')
		})

	},
	methods:{
		btnClick(){
			console.log('btnClick')
		}

	}
}
</script>

<style scoped>
	.wrapper{
		height: 150px;
		background-color: pink;
		overflow: hidden;
	}

</style>