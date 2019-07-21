<template>
  <div class="home-carousel">
    <v-carousel
      height="210"
      :cycle="cycle"
      hide-controls
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        height="210"
        :src="item.img_url"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cycle: false,
      }
    },
    activated() {
      this.cycle = true;
    },

    deactivated() {
      this.cycle = false;
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
  }

</style>
