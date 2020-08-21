<template>
	<div class="goodsItem">
		<img :src="goodsItem.show.img" alt="">
		<div class="goodsInfo">
			<p>{{goodsItem.title}}</p>
			<span class="price">{{goodsItem.price}}</span>
			<span class="cfav">{{goodsItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GoodsListItem',
	props:{
		goodsItem:{
			type:Object,
			default(){
				return {}
			}
		}
	}
}
</script>

<style scoped>
	.goodsItem{
		width: 47%;
		margin-bottom: 10px;
	}
	.goodsItem img{
		width: 100%;
		border-radius: 5px;
	}
	.goodsInfo{
		text-align: center;
		left: 0;
		right: 0;

	}
	.goodsInfo p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-top: 4px;
		margin-bottom: 4px;
	}
	.goodsInfo span{
		margin: 0 10px;

	}
	.goodsInfo .price{
		color: hotpink;
	}
	.goodsInfo .cfav{
		position: relative;
	}
	.goodsInfo .cfav::before{
		position: absolute;
		content: '';
		width: 14px;
		height: 14px;
		left: -15px;
		top: 3px;
		background: url("../../../../assets/img/common/collect.svg") 0 0/14px 14px;
	}

</style>