<template>
	<div class="recommend">
		<div v-for="(item,index) in recommends" :key=index class="recommend_item">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>

</template>

<script>
export default {
	name: 'HomeRecommendView',
	props:{
		recommends:{
			type:Array,
			default(){
				return []
			}

		}
	}
}
</script>

<style scoped>
	.recommend{
		display: flex;
		margin: 10px 0;
		text-align: center;
		padding: 10px 0 20px;
		border-bottom: 8px solid #eee;


	}
	.recommend_item{
		flex: 1;
		margin: 0 1px;
	}
	.recommend_item img{
		width: 75px;
		height: 75px;
		margin-bottom: 10px;

	}

</style>