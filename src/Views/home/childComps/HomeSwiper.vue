<template>
  <div class="block">
    <el-carousel height="170px" arrow="always">
      <el-carousel-item v-for="(item,index) in this.banners" :key="index" :setActiveItem="loop">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

  export default {
    name: "HomeSwiper",

    props: {
      banners: {
        type:Array,
        // required:true
      }
    },
    data() {
    	return {
        setActive:true
      }
    },

    methods: {
      loop(){
        this.setActive=true
      }
    }
  }
</script>

<style scoped>
img{
  height: 100%;
  width: 100%;
}
.el-carousel__item{
  autoplay:true
}
</style>