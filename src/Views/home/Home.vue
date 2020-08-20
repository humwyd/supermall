<template>
	<div id="narBar">
		<NarBar class="home-nar">
			<div slot="center">购物街</div>
		</NarBar>
	</div>

</template>

<script>
import NarBar from '../../components/common/navbar/NarBar'
import {getHomeMUltidata} from '../../network/home'
export default {
	name: 'Home',
	data(){
		return{
			banners:[],
			recommends:[],
			tabOffsetTop: 0,

		}
	},
	components:{
		NarBar,
	},
	created () {
		getHomeMUltidata().then(res=>{
			console.log(res)
			this.banners=res.data.banner
			this.recommends=res.data.recommend
		})
	},
	methods:{

	}
}
</script>

<style scoped>
	.home-nar{
		background-color: hotpink;
		color: #f6f6f6;

	}
	Swiper_item{
		width: 200px;
		height: 200px;
		background-color: pink;
	}

</style>