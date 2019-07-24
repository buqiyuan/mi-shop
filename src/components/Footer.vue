<template>
  <v-card flat>

    <!--<category v-if="bottomNav == 'category'"></category>-->
    <!--<shop-cart v-if="bottomNav == 'ShopCart'"></shop-cart>-->
    <!--<mine v-if="bottomNav == 'mine'"></mine>-->
    <transition>
      <keep-alive>
    <router-view></router-view>
      </keep-alive>
    </transition>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      fixed
      color="transparent"
    >
      <v-btn
        color="#ff6700"
        flat
        value="home"
        @click="$router.push('home')"
      >
        <span>首页</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn
        color="#ff6700"
        flat
        value="category"
        @click="$router.push('category')"
      >
        <span>分类</span>
        <v-icon>image_search</v-icon>
      </v-btn>

      <v-btn
        color="#ff6700"
        flat
        value="ShopCart"
        @click="$router.push('shopcart')"
      >
        <span>购物车</span>
        <v-icon>shopping_cart</v-icon>
      </v-btn>

      <v-btn
        color="#ff6700"
        flat
        value="mine"
        @click="$router.push('mine')"
      >
        <span>我的</span>
        <v-icon>person_outline</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    components: {Navbar},
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
