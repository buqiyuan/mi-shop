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
      <div v-if="cartCount < 1" class="to-shpping">
        <span>购物车还是空的</span>
        <span>去逛逛</span>
      </div>
      <div>
        <!--购物车列表start-->
        <div class="shopcart-list">
          <div v-for="(item,index) in cartList" :key="index" class="goods-item">
            <v-checkbox
              class="checkbox"
              v-model="selected"
              color="#ff6700"
              :value="item.id"
            ></v-checkbox>
            <div class="goods-img">
              <img :src="item.imgurl"
                   alt="">
            </div>
            <div class="goods-info">
              <div class="goods-name">{{item.name}}</div>
              <div class="goods-price">售价：{{item.price}}</div>
              <div class="goods-quantity">
                <div>
                  <button @click="subtract(item.id)">-</button>
                  <input type="number" readonly :value="$store.getters.getCartItemTotal(item.id)">
                  <button @click="add(item.id)">+</button>
                </div>
                <v-icon class="delete-item">delete_outline</v-icon>
              </div>
            </div>
          </div>
        </div>
        <!--购物车列表end-->
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
    <div class="bottom-submit">
      <div class="flex-box">
        <div>
          <v-checkbox
            v-model="selectedAll"
            class="checkbox"
            color="#ff6700"
            label="全选"
            hide-details
          ></v-checkbox>
        </div>
        <div class="shop-total">
          <span>合计：</span><i>￥{{totalPrice}}</i>
        </div>
        <div class="to-pay">
          <div>
            结算({{selected.length}})
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
        flag: false,//判断点击的CheckBox是购物车列表的还是全选的，false为全选的
        selectedAll:false,//全选状态
        selected: [],//列表的CheckBox状态
        cartList: this.$store.getters.getCartItems,
        isLogin: true,
        recommendTopImg: null,
        recommendList: null
      }
    },
    computed: {
      cartCount() {
        return this.$store.getters.getCartTotal
      },
      totalPrice(){
        return this.$store.getters.calcTotalPrice(this.selected)
      }
    },
    watch: {
      selected() {
        this.$store.commit('setSelectedStatus', this.selected)
        this.updateSelectedAllStatus()
      },
      selectedAll(val){//监听全选或取消全选
        if (val) {
          this.selected = []
          this.cartList.forEach(item => {
            this.selected.push(item.id)
          })
        } else {
          if (!this.flag){//判断是否是单击列表的CheckBox，如果点击的是列表中的CheckBox则不清空，否则便是单击全选CheckBox清空
            this.selected = []
          }
        }
        return !val
      }
    },
    components: {SearchBar},
    methods: {
      add(id) {//增加购买数量
        this.$store.commit('addQuantity', id)
      },
      subtract(id) {//减少购买数量
        this.$store.commit('subtractQuantity', id)
      },
      getRecommend() {//获取推荐列表数据
        this.axios.get('/api/recommendBlank.json').then(res => {
          this.recommendTopImg = res.data.data.header.body
          this.recommendList = res.data.data.recom_list
          console.log(res.data)
        }).catch(err => {
          console.log(err)
        })
      },
      getSelected() {//获取之前商品的选中状态
        let selectedIds = []
        this.cartList.forEach(item => {
          if (item.selected) {
            selectedIds.push(item.id)
          }
        })
        this.selected = selectedIds
      },
      updateSelectedAllStatus(){//判断是否全选状态
        if (this.selected.length != this.cartList.length){
          this.flag = true
          this.selectedAll = false
        } else {
          this.flag = false
          this.selectedAll = true
        }
      }
    },
    created() {
      this.getSelected()
      this.getRecommend()
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
        padding-bottom: 2.4rem;
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
      /*购物车列表start*/
      .shopcart-list {
        background-color: #f5f5f5;

        .goods-item {
          display: flex;
          padding-left: .14rem;
          padding-top: .2rem;
          background: white;
          margin-bottom: .2rem;

          .checkbox {
            flex: 1;
            align-items: center;
          }

          .goods-img {
            flex: 3;

            img {
              width: 100%;
            }
          }

          .goods-info {
            flex: 7;
            padding-left: .2rem;

            .goods-name {
              font-size: .28rem;
              line-height: .32rem;
            }

            .goods-price {
              padding: .12rem 0;
              font-size: .24rem;
              color: #999;
            }

            .goods-quantity {
              display: flex;
              padding: .22rem 0;
              font-size: .24rem;

              & > div {
                flex: 1;

                &:first-of-type {
                  align-self: flex-start;
                }

                &:last-of-type {
                  display: flex;
                  justify-content: flex-start;
                  font-size: .32rem;

                  button {
                    padding: 0 .14rem;
                    border: 1px solid #ccc;
                  }

                  input {
                    display: inline-block;
                    width: .6rem;
                    padding: 0 .12rem;
                    text-align: center;
                    border-top: 1px solid #ccc;
                    border-bottom: 1px solid #ccc;
                  }
                }
              }

              .delete-item {
                margin-right: .24rem;
              }
            }
          }
        }
      }
      /*购物车列表end*/
    }

    /*底部结算区域*/
    .bottom-submit {
      position: fixed;
      bottom: 54px;
      left: 0;
      padding-left: .2rem;
      z-index: 999;
      width: 100vw;
      box-shadow: 0 1px 1px -1px rgba(0,0,0,.3);
      background-color: white;
      .flex-box{
        display: flex;
        font-size: 0.26rem;
        .v-input--selection-controls{
          margin: 0;
          padding: 0;
        }
        & > div{
          flex: 1;
          padding: .22rem;
          &.shop-total{
            align-self: center;
            i{
              color: #ff6700;
            }
          }
          &.to-pay{
            display: flex;
            justify-content: center;
            color: white;
            background: #ff6700;
            div{
              align-self: center;
              justify-items: center;
            }
          }
        }
      }
    }
  }
</style>
