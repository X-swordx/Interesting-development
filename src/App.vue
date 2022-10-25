<template>
  <div id="app">
    <!-- <HelloWorld msg="Vue with tailwind"/> -->
    <!-- <PxToVw></PxToVw> -->
    <LazyLoad></LazyLoad>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import PxToVw from './components/PxToVw.vue'
import LazyLoad from './components/LazyLoad.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // PxToVw,
    LazyLoad
  }
}
</script>

<style>
</style>
