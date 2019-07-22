<template>
  <v-card flat>
    <navbar v-show="bottomNav == 'home'"></navbar>
    <category v-show="bottomNav == 'category'"></category>
    <shop-cart v-show="bottomNav == 'ShopCart'"></shop-cart>
    <mine v-show="bottomNav == 'mine'"></mine>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      fixed
      color="transparent"
    >
      <v-btn
        color="teal"
        flat
        value="home"
      >
        <span>首页</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="category"
      >
        <span>分类</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="ShopCart"
      >
        <span>购物车</span>
        <v-icon>place</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="mine"
      >
        <span>我的</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Category from '@/components/Category.vue'
  import ShopCart from '@/components/ShopCart.vue'
  import Mine from '@/components/Mine.vue'

  export default {
    components: {Navbar, Category, ShopCart, Mine},
    data() {
      return {
        bottomNav: 'home'
      }
    }
  }
</script>

<style scoped>
  .v-item-group.v-bottom-nav .v-btn {
    background: white !important;
  }
</style>
