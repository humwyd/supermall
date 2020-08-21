<template>
	<div class="tabControl">
		<div v-for="(item,index) in title" :key="index" class="tab-control-item" :class="{active:index===currenIndex}" @click="itemClick(index)">
			<span>{{item}}</span>
		</div>

	</div>
</template>

<script>
export default {
	name: 'TabControl',
	data(){
		return {
			currenIndex:0
		}
	},
	props:{
		title:{
			type:Array,
			default(){
				return []
			}
		}
		},
	methods:{
		itemClick(index){
			this.currenIndex=index
			this.$emit('tabClick',index)
		}
	}
}
</script>

<style scoped>
	.tabControl{
		display: flex;
		text-align: center;
	}

	.tab-control-item{
		flex: 1;
		height: 40px;
		line-height: 40px;
		font-size: 15px;


	}
	.tab-control-item span{
		padding: 4px;

	}
	.active{
		color: hotpink;
	}
	.active span{
		border-bottom: solid 2px hotpink;

	}

</style>