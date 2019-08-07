<template>
  <div class="home-carousel"
       @touchstart.stop
       @touchmove.stop
       @touchend.stop
  >
    <v-carousel
      height="3.66rem"
      interval="3000"
      cycle
      hide-delimiter-background
      hide-controls
    >
      <v-carousel-item

        v-for="(item,i) in items"
        :key="i"
        height="3.66rem"
        :src="item.img_url"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: ['items']
  }
</script>

<style lang="scss">
  .home-carousel{
    .v-carousel__controls {
      background: transparent!important;
      .v-btn  .material-icons {
        color: rgba(255, 255, 255, .5)!important;
      }
      .v-btn--active  .material-icons {
        color: white!important;
      }
    }
    .v-window__container{
      height: 100%!important;
    }
    .v-carousel__item{
      height: 100%!important;
    }
  }

</style>
