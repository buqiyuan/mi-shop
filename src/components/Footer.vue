<template>
  <div class="">
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <div class="bottom-nav-container">
      <div class="bottom-nav">
        <router-link to="/home" class="flex-item">
          <div class="icon-home app-bottom-icon"></div>
          <div>首页</div>
        </router-link>
        <router-link to="/category" class="flex-item">
          <div class="icon-category app-bottom-icon"></div>
          <div>分类</div>
        </router-link>
        <router-link to="/shopcart" class="flex-item">
          <div class="icon-shop-cart app-bottom-icon">
            <div class="bubble-num">{{cartTotal}}</div>
          </div>
          <div>购物车</div>
        </router-link>
        <router-link to="/mine" class="flex-item">
          <div class="icon-mine app-bottom-icon"></div>
          <div>我的</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    components: {Navbar},
    data() {
      return {
        bottomNav: 'home',
        transitionName: 'slide-left',
      }
    },
    computed: {
      cartTotal() {
        return this.$store.getters.getCartTotal
      }
    },
    // watch: {
    // '$route': {
    //   handler: function (to, from) {
    //     this.$nextTick(function () { //页面加载完成后执行
    //       console.log(to)
    //       if (to.name == 'home') {
    //
    //       }else if (to.name == 'category'){
    //
    //       } else if (to.name == 'shopcart'){
    //
    //       } else if (to.name == 'mine'){
    //
    //       }
    //     })
    //   },
    //   immediate: true//立即执行watch
    // }
    // },
    mounted() {

    },
    methods: {
      // clickBottomNavItem(e) {
      //   let item = e.currentTarget
      //   Array.from(item.parentElement.children).forEach(item => {
      //     item.classList.remove('on')
      //     item.querySelector("div[class^='icon']").classList.remove('active')
      //   })
      //   item.classList.add('on')
      //   item.querySelector("div[class^='icon']").classList.add('active')
      // }
    },
    watch: {
      '$route'(to, from) {
        //判断用户点击底部tabbar进行左右滑动切换
        if (to.meta.index > from.meta.index) {
          this.transitionName = 'slide-right';
        } else {
          this.transitionName = 'slide-left';
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  /*向右滑动*/
  .slide-left-leave-to,
  .slide-right-enter {
    transform: translate3d(-100%, 0, 0);
  }
  .slide-left-enter,
  .slide-right-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    position: absolute;
    transition: all 0.3s ease;
  }

  .bottom-nav-container {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    z-index: 999;
    width: 100vw;
    height: 56px;

    .bottom-nav {
      display: flex;
      flex-direction: row;
      height: 100%;

      .flex-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        &.router-link-active {
          color: #ff6700;

          .icon-home {
            background-image: url("../assets/home_active.png");
          }

          .icon-category {
            background-image: url("../assets/cate_active.png");
          }

          .icon-shop-cart {
            background-image: url("../assets/shop_cart_active.png");
          }

          .icon-mine {
            background-image: url("../assets/mine_active.png");
          }
        }

        & > div {
          flex: 1;
          align-items: center;

          &.app-bottom-icon {
            width: .4rem;
            height: .4rem;
            background-color: transparent;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: contain;
          }

          &.icon-home {
            background-image: url("../assets/home.png");
          }

          &.icon-category {
            background-image: url("../assets/cate.png");
          }

          &.icon-shop-cart {
            position: relative;
            background-image: url("../assets/shop_cart.png");

            .bubble-num {
              position: absolute;
              top: 0;
              right: -0.13rem;
              width: 0.28rem;
              height: 0.28rem;
              text-align: center;
              color: white;
              font-size: 0.18rem;
              line-height: 0.28rem;
              border-radius: 0.28rem;
              background-color: #ed4d41;
            }
          }

          &.icon-mine {
            background-image: url("../assets/mine.png");
          }
        }
      }
    }
  }
</style>
