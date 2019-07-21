<template>
  <div class="app">
   <Home></Home>
    <!--<content-view></content-view>-->
    <!--<request-loding></request-loding>-->
  </div>
</template>

<script>
import ContentView from '@/components/ContentView.vue'
import Home from '@/views/Home.vue'
import RequestLoding from '@/components/RequestLoading.vue'

export default {
  components: {
    ContentView, RequestLoding,Home
  }
}
</script>

<style lang="scss" scoped>
.app{
  // position: fixed;
  // left: 0;
  // right: 0;
  // top:0;
  // bottom:0;
}
</style>
