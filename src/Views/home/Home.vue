<template>
	<div class="home">
		<div id="narBar">
			<NarBar class="home-nar">
				<div slot="center">购物街</div>
			</NarBar>
		</div>
		<HomeSwiper :banners="banners"></HomeSwiper>
		<home-recommend-view :recommends="recommends"></home-recommend-view>
		<feature-views></feature-views>
		<tab-control class="tabControl" :title="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
		<goods-list class="goodsList" :goods="goods[currentType].list"></goods-list>


	</div>


</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureViews from './childComps/FeatureViews'

import NarBar from '../../components/common/navbar/NarBar'
import TabControl from '../../components/content/TabControl/TabControl'

import GoodsList from '../../components/content/goods/goodsList/GoodsList'
import GoodsListItem from '../../components/content/goods/goodsList/GoodsListItem'
import {getHomeMUltidata,getHomeGoods} from '../../network/home'
export default {
	name: 'Home',
	data(){
		return{
			banners:[],
			recommends:[],
			tabOffsetTop: 0,
			goods:{
				'pop':{page:0,list:[]},
				'new':{page:0,list:[]},
				'sell':{page:0,list:[]},
			},
			currentType:'pop',
		}
	},
	components:{
		HomeSwiper,
		HomeRecommendView,
		FeatureViews,

		NarBar,
		TabControl,
		GoodsList
	},
	created () {
		this.getHomeMUltidata()
		this.getHomeGoods('pop')
		this.getHomeGoods('new')
		this.getHomeGoods('sell')

	},
	methods:{
		/**
		 * 事件监听方法
		 */
		tabClick(index){
			switch (index) {
				case 0:
					this.currentType='pop';
					break
				case 1:
					this.currentType='new';
					break
				case 2:
					this.currentType='sell'

			}


		},



		/**
		 * 网络请求的方法
		 */

		getHomeMUltidata(){
			getHomeMUltidata().then(res=>{
				console.log(res)
				this.banners=res.data.banner.list
				this.recommends=res.data.recommend.list
				// console.log(this.recommends)
			})
		},
		getHomeGoods(type){
			const page=this.goods[type].page+=1

			getHomeGoods(type,page).then(res=>{
				console.log(res)
				this.goods[type].list.push(...res.data.list)
				this.goods[type].page+=1

			})
		}


	}

}
</script>

<style scoped>
	.home-nar{
		background-color: hotpink;
		color: #f6f6f6;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 9;

	}
	#narBar{
		margin-top: 44px;
	}
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	.tabControl{
		position: sticky;
		top:44px;
		background-color: #f6f6f6;
		z-index: 9;
	}



</style>