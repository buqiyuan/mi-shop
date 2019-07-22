<template>
  <div class="shop-cart">
    <search-bar>
      <template v-slot:title>购物车</template>
    </search-bar>
    <div class="shop-cart-container">
      <router-link to="/login" v-if="isLogin" class="to-login">
        <p>登录后享受更多优惠</p>
        <p>去登陆 ></p>
      </router-link>
      <div v-else class="to-shpping">
        <span>购物车还是空的</span>
        <span>去逛逛</span>
      </div>
      <div class="recommend-box">
        <div class="recommend-top-img">
          <img v-if="recommendTopImg" :src="recommendTopImg.items[0].img_url"
               :style="{width:recommendTopImg.w / 100 + 'rem',height:recommendTopImg.h/100+'rem'}">
        </div>
        <div class="recommend-list">
          <div v-for="(item,index) in recommendList" :key="index" class="goods-item">
            <a class="exposure">
              <div class="goods-img-box"><img class="lazy" :src="item.image_url"></div>
              <div class="goods-info">
                <div class="goods-name no-wrap">{{item.name}}</div>
                <div class="goods-price price">{{item.price}}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchBar from '@/components/SearchBar'

  export default {
    data() {
      return {
        isLogin: true,
        recommendTopImg: null,
        recommendList: null
      }
    },
    components: {SearchBar},
    methods: {},
    created() {
      this.axios.get('/api/recommendBlank.json').then(res => {
        this.recommendTopImg = res.data.data.header.body
        this.recommendList = res.data.data.recom_list
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .shop-cart {
    .shop-cart-container {
      padding-top: 56px;

      .to-login {
        display: flex;
        padding: 0 .5rem;
        align-content: center;
        background: #ebebeb;

        p {
          flex: 1;
          height: 1.04rem;
          line-height: 1.04rem;
        }

        p:first-of-type {
          text-align: left;
          font-size: .32rem;
          color: rgba(0, 0, 0, .87);
        }

        p:last-of-type {
          font-size: .25rem;
          color: rgba(0, 0, 0, .54);
          text-align: right;
        }
      }

      .to-shpping {
        height: 1.24rem;
        line-height: 1.24rem;
        background: #ebebeb;
        text-align: center;

        span {
          display: inline-block;

          &:first-of-type {
            font-size: .28rem;
            color: #aaa;
            background: url("https://m.mi.com/static/img/cartnull.daaf7926f8.png") no-repeat;
            background-size: auto 100%;
            height: .7rem;
            line-height: 0.7rem;
            padding-left: .75rem;
          }

          &:last-of-type {
            color: #333;
            font-size: .23rem;
            height: .5rem;
            line-height: .5rem;
            padding: 0 .12rem;
            border: 1px solid #999;
          }
        }
      }

      .recommend-box {
        padding-bottom: .9rem;
        background: #fff;
        text-align: left;

        .recommend-list {
          overflow: hidden;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-between;
          align-content: flex-start;
          align-items: center;

          .goods-item {
            flex: 0 1 49.5%;
            overflow: hidden;

            a {
              display: block;

              .goods-img-box {
                position: relative;

                img {
                  display: block;
                  width: 100%;
                  min-height: 3.56rem;
                }
              }

              .goods-info {
                padding: .18rem .26rem .22rem;

                .goods-name {
                  font-size: .28rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }

                .goods-price {
                  position: relative;
                  padding-left: .5em;
                  line-height: 1em;
                  font-size: .32rem;
                  display: inline-block;
                  color: #ff6700;
                  margin-top: .1rem;

                  &.price:before {
                    content: "\A5";
                    position: absolute;
                    left: 0;
                    top: 0;
                    font-size: .76em;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
