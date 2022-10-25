<template>
  <div id="lazyload">
      <!-- img中使用图片懒加载。 v-lazy代替v-bind:src -->
      <!-- <ul class="img flex flex-col items-center justify-between" >
          <li v-for="(item,index) in imgList" :key="index"> 
              <img v-lazy="item" alt="" style="width: 768px;"> 
          </li>
      </ul> -->

      <!-- 背景图中使用图片懒加载。 v-lazy:background-image = "" -->
      <ul class="bgImg">
          <li v-lazy:background-image="bgImg"></li>
      </ul>
  </div>
</template>
<script>
export default {
  name:'LazyLoadDemo',
  data(){
      return{
          imgList:[
              require('@/assets/bg.png'),
              require('@/assets/bg2.png'),
          ],
          bgImg: require('@/assets/bg.png'),
      }
  }
}
</script>
<style scoped>
  #lazyload {
      width: 768px;
      background-color: #fcc;
      margin: 0 auto;
  }
  .img{
      width: 768px;
      height: 100vh;  
      background-color: #fcc;
  }
  .bgImg li{
      width: 768px;
      height: 100vh;  
      margin-bottom: 10px;
      background-repeat: no-repeat;
      background-size: cover;
  }
</style>

