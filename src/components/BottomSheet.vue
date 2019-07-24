<template>
  <div data-app="true">
    <v-bottom-sheet v-model="sheet" persistent>
      <div class="sheet-container">
        <v-icon class="close-sheet" @click="$store.commit('setSheetStatus')">clear</v-icon>
        <div class="goods-info">
          <div class="goods-img">
            <img :src="imgurl" alt="">
          </div>
          <div class="goods-brief">
            <div class="goods-price">
              <span>￥{{price}}</span>
            </div>
            <div class="goods-name">
              <span>{{name}}</span>
            </div>
          </div>
        </div>
        <div class="goods-options">
          <dl class="goods-version">
            <dt>版本</dt>
            <dd>
              <span>4G + 64G</span>
              <span>6G + 128G</span>
            </dd>
          </dl>
        </div>
        <div class="goods-color">
          <div>颜色</div>
          <div>
            <p>黑色</p>
            <p>金色</p>
          </div>
        </div>
        <div class="choose-quantity">
          <div>购买数量</div>
          <div>
            <button @click="subtract">-</button>
            <input type="number" v-model="count">
            <button @click="add">+</button>
          </div>
        </div>
        <div class="add-cart" @click="addToShopcart">
          加入购物车
        </div>
      </div>
    </v-bottom-sheet>
  </div>
</template>

<script>
  export default {
    props: {id: String, name: String, imgurl: String, price: String},
    data() {
      return {
        count: 1,
      }
    },
    //新增sheet的watch，监听变更同步到openStatus
    //监听父组件对props属性result的修改，并同步到组件内的data属性
    computed: {
      sheet() {
        return this.$store.getters.getSheetStatus
      }
    },
    methods: {
      add() {//增加购买数量
        this.count++
      },
      subtract() {//减少购买数量
        this.count = this.count <= 1 ? 1 : --this.count
      },
      addToShopcart() {//添加到购物车
        this.$store.commit('addGoodsToCart', {
          id: this.id,
          name: this.name,
          price: this.price,
          imgurl: this.imgurl,
          count: this.count,
          selected: true
        })
        this.$store.commit('setSheetStatus')
      }
    }
  }
</script>

<style lang="scss">
  .v-dialog__content--active {
    background-color: rgba(0, 0, 0, .7);
  }

  .sheet-container {
    padding: .2rem .32rem 1.27rem;
    background-color: white;

    & > div {
      margin-bottom: 14px;
    }

    .close-sheet {
      position: absolute;
      right: .2rem;
    }

    .goods-info {
      display: flex;
      padding: .64rem 0 .2rem;

      .goods-img {
        flex: 1;
        width: 2rem;
        height: 2rem;

        img {
          width: 2rem;
          height: 2rem;
        }
      }

      .goods-brief {
        display: flex;
        flex-direction: column;
        flex: 2;

        & > div {
          display: flex;
          flex: 1;
          text-align: left;

          &.goods-price span {
            align-self: flex-end;
            color: #ff6700;
            font-size: .48rem;
          }

          &.goods-name span {
            align-self: flex-start;
            font-size: .28rem;
            color: rgba(0, 0, 0, .87);
            line-height: .4rem;
            margin-top: .5em;
          }
        }
      }
    }

    .goods-options {
      .goods-version {
        dt {
          position: relative;
          padding-top: .32rem;
          padding-bottom: .16rem;
          line-height: .24rem;
          font-size: .24rem;
          color: rgba(0, 0, 0, .87);
        }

        dd {
          padding-left: 20px;

          span {
            padding: .12rem .16rem;
            border-radius: 2px;
            color: #f56600;
            height: .72rem;
            line-height: .72rem;
            min-width: 1.45rem;
            box-sizing: border-box;
            text-align: center;
            margin: .16rem 0 0 .16rem;
            overflow: visible;
            border: 1px solid #f56600;

            &:first-of-type {
              border: 1px solid rgba(0, 0, 0, .15);
            }
          }
        }
      }
    }

    .goods-color {
      position: relative;
      padding-top: .32rem;
      padding-bottom: .16rem;
      line-height: .24rem;
      font-size: .24rem;
      color: rgba(0, 0, 0, .87);

      & > div:first-of-type {

      }

      & > div:last-of-type {
        display: flex;
        padding-left: 20px;

        p {
          height: .72rem;
          line-height: .72rem;
          min-width: 1.45rem;
          color: #f56600;
          box-sizing: border-box;
          padding: 0 .08rem;
          text-align: center;
          margin: .16rem 0 0 .16rem;
          overflow: visible;
          border: 1px solid transparent;

          &:last-child {
            color: #666;
          }
        }
      }
    }

    .choose-quantity {
      display: flex;
      padding: .32rem 0;
      font-size: .24rem;

      & > div {
        flex: 1;

        &:first-of-type {
          align-self: flex-start;
        }

        &:last-of-type {
          display: flex;
          justify-content: flex-end;
          font-size: .32rem;
          align-self: flex-end;

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
    }

    .add-cart {
      position: fixed;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      height: .64rem;
      line-height: .64rem;
      border-radius: .4rem;
      background: #ff6700;
      color: #fff;
      display: block;
      text-align: center;
      width: 80%;
      font-size: .28rem;
    }
  }
</style>
