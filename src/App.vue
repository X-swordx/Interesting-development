<template>
  <div id="app">
    <!-- <Tailwind msg="Vue with tailwind"/> -->
    <!-- <PxToVw></PxToVw> -->
    <!-- <LazyLoad></LazyLoad> -->
    <!-- <MovieClip
        class="people mx-auto"
        ref="MovieClip"
        :frames="imgArr"
        :duration="2000"
        :width="455"
        :height="344"
        :autoPlay="true"
        :loop="true"
    /> -->
    <!-- <quark-button type="primary">Button</quark-button> -->
    <Trigger></Trigger>
  </div>
</template>

<script>
// import Tailwind from './components/Tailwind.vue'
// import PxToVw from './components/PxToVw.vue'
// import LazyLoad from './components/LazyLoad.vue'
// import MovieClip from './components/MovieClip/MovieClip.vue'
// import "quarkd/lib/button"
import Trigger from './components/Trigger.vue'

export default {
  name: 'App',
  components: {
    // Tailwind,
    // PxToVw,
    // LazyLoad,
    // MovieClip,
    Trigger
  },
  data() {
    const imgArr = [];
    for (let index = 0; index < 16; index += 1) {
      imgArr.push(require(`@/assets/gif/${index}.png`));
    }
    return {
      imgArr
    }
  },
  methods: {
    // babel会自动将 async 里面的主体包装成 try catch
    async fn() {
      await new Promise((resolve, reject) => reject('报错'));
      await new Promise((resolve) => resolve(1));
      console.log('do something...');
    }
  },
  created() {
    this.fn()
  }
}
</script>

<style>
</style>
