<template>
  <div class="home">
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,Footer
  }
}
</script>
