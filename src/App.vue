<template>
  <div id="app">
    <!-- <HelloWorld msg="Vue with tailwind"/> -->
    <!-- <PxToVw></PxToVw> -->
    <!-- <LazyLoad></LazyLoad> -->
    <MovieClip
        class="people mx-auto"
        ref="MovieClip"
        :frames="imgArr"
        :duration="2000"
        :width="455"
        :height="344"
        :autoPlay="true"
        :loop="true"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import PxToVw from './components/PxToVw.vue'
// import LazyLoad from './components/LazyLoad.vue'
import MovieClip from './components/MovieClip/MovieClip.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // PxToVw,
    // LazyLoad,
    MovieClip
  },
  data() {
    const imgArr = [];
    for (let index = 0; index < 16; index += 1) {
      imgArr.push(require(`@/assets/gif/${index}.png`));
    }
    return {
      imgArr
    }
  }
}
</script>

<style>
</style>
