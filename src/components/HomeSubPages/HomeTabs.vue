<template>
  <div class="home-container">
    <v-tab-item>
      <v-card :class="className" class="component-list-main">
        <div v-for="(item,index) in sections" :key="index">
          <Carousel :items="item.body.items" v-if="item.view_type == 'gallery'"></Carousel>
          <div v-else-if="item.view_type == 'cells_auto_fill'"
               :style="{width:item.body.w / 100 + 'rem',height:item.body.h / 100 + 'rem'}"
               :class="[item.view_type, 'multi_cell']">
            <a class="items" v-for="(item,index) in item.body.items" :key="index"
               :style="{width:item.w / 100 + 'rem',height:item.h / 100 + 'rem',left:item.x / 100 + 'rem',top:item.y / 100 + 'rem'}">
              <img v-lazy="item.img_url" alt="">
            </a>
          </div>

          <div v-else-if="item.view_type == 'divider_line'"
               :style="{height:item.body.line_height / 100 + 'rem',borderBottom:item.body.line_height / 100 + 'rem solid ' + item.body.line_color,
               backgroundColor:item.body.line_color}">
          </div>

          <div v-else-if="item.view_type == 'list_one_type14'" :class="[item.view_type, 'box-flex']"
               :style="{backgroundColor: item.body.bg_color}">
            <a @click="toDetail(item)" v-for="(item,index) in item.body.items" :key="index" class="exposure item">
              <div class="img">
                <img v-lazy="item.img_url" alt="" :style="{width:'6.96rem',height:'4.36rem'}">
              </div>
            </a>
          </div>

          <div v-else-if="item.view_type == 'list_two_type13'" :class="[item.view_type, 'box-flex']"
               :style="{backgroundColor: item.body.bg_color}">
            <a @click="toDetail(item)" v-for="(item,index) in item.body.items" :key="index" class="exposure item">
              <div class="img">
                <img v-lazy="item.img_url" alt="" :style="{width:'3.44rem',height:'2.8rem'}">
              </div>
              <div class="info bgw align-center">
                <div class="name">{{item.product_name}}</div>
                <div class="brief">{{item.product_brief}}</div>
                <div class="price">
                  {{ item.product_price }}
                  <span style="font-size: .2rem">
                    {{ item.show_price_qi ? '起' : ''}}
                  </span>
                  <span v-if="item.product_price < item.product_org_price" class="price old"><s>{{item.product_org_price}}</s></span>
                </div>
                <div class="buybtn mauto"> 立即购买</div>
              </div>
            </a>
          </div>

          <div v-else-if="item.view_type == 'list_two_type1'" class="list_two_type1 box-flex"
               :style="{backgroundColor:item.body.bg_color}">
            <a @click="toDetail(item)" class="exposure item" v-for="(item,index) in item.body.items" :key="index">
              <div class="img"><img class="big" v-lazy="item.img_url" style="width: 3.6rem;height: 3.6rem;"></div>
              <div class="info">
                <div class="name">{{item.product_name}}</div>
                <div class="brief">{{item.product_brief}}</div>
                <div class="price">
                  {{ item.product_price }}
                  <span v-if="item.product_price < item.product_org_price" class="price old"><s>{{item.product_org_price}}</s></span>
                </div>
              </div>
            </a>
          </div>

          <div v-else-if="item.view_type == 'list_three_type4'" :class="item.view_type"
               :style="{backgroundColor:item.body.bg_color}">
            <div class="goods-list">
              <a @click="toDetail(item)" v-for="(item,index) in item.body.items" :key="index"
                 class="exposure item item-xs">
                <div class="img">
                  <img class="big" v-lazy="item.img_url" style="width: 2.21rem;height: 2.21rem;">
                </div>
                <div class="info-box">
                  <div class="text">
                    <div class="name">{{item.product_name}}</div>
                    <div class="brief">{{item.product_brief}}</div>
                    <div class="price" style="color: rgb(245, 75, 75);">{{item.product_price}}</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </v-card>
    </v-tab-item>
  </div>
</template>

<script>
  import Carousel from '@/components/Carousel.vue'

  export default {
    data() {
      return {
        items: [],
        cells_auto_fill: null,
        divider_line: null,
        list_two_type13: null,
        list_two_type1: null,
        list_one_type14: null,
        list_three_type4: null,
        sections: []
      }
    },
    components: {Carousel},
    props: ['className', 'apiUrl'],
    created() {
      this.axios({
        method: 'get',
        url: `/api/home/${this.apiUrl}.json`
      }).then((res) => {
        if (res.data.result == 'ok') {
          let sections = res.data.data.data.sections
          this.sections = sections
        }
      }).catch((err) => {
        console.log('err' + err)
      })
    },
    methods: {
      toDetail(item) {
        this.$router.push({
          name: 'detail',
          params: {
            id: item.action.path,
            name: item.product_name,
            price: item.product_price,
            imgurl: item.img_url
          }
        })
      }
    },
  }
</script>

<style lang="scss">
  div[class*='card'] > div {
    margin: 0 auto;
  }

  .component-list-main {
    padding-bottom: 60px;
  }

  .component-list-main .cells_auto_fill.multi_cell {
    position: relative;
    margin: 0 auto;
  }

  .component-list-main .cells_auto_fill.multi_cell .items {
    position: absolute;
  }

  .component-list-main .cells_auto_fill .items {
    height: auto !important;
    display: block;
  }

  .component-list-main .divider_line {
    margin: 0 auto;
    border-top: none;
    border-left: none;
    border-right: none;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
  }

  .component-list-main .list_two_type13 {
    padding: 0 .12rem;
    width: 100%;
    overflow: hidden;
    text-align: center;
  }

  .box-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }

  .component-list-main .list_two_type13 .item:first-child {
    margin-right: .12rem;
  }

  .component-list-main .list_two_type13 .item {
    width: 3.4rem;
  }

  .box-flex > *, .box-inline-flex > * {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
  }

  .component-list-main .img {
    position: relative;
    overflow: hidden;
  }

  .component-list-main img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .component-list-main .list_two_type1 .item:first-child {
    margin-right: .04rem;
  }

  .component-list-main .list_two_type1 .item {
    width: 3.6rem;
  }

  .component-list-main .list_two_type1 .img {
    width: 3.6rem;
    height: 3.6rem;
  }

  .component-list-main .info {
    padding: .2rem .27rem;
    text-align: center;
    background-color: white;
  }

  .component-list-main .brief, .component-list-main .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .component-list-main .name {
    font-size: .28rem;
    color: rgba(0, 0, 0, .87);
  }

  .component-list-main .price .old {
    display: inline-block;
    margin: 0 .1rem;
    font-size: .22rem;
    color: rgba(0, 0, 0, .54);
  }

  .price:before {
    content: "\A5";
    position: absolute;
    left: 0;
    top: 0;
    font-size: .76em;
    text-decoration: none;
  }

  .component-list-main .buybtn {
    width: 2rem;
    margin: 0 auto;
    background: #ea625b;
    border-radius: .05rem;
    text-align: center;
    color: #fff;
    font-size: .24rem;
    padding: .16rem 0;
    font-weight: 700;
  }

  .component-list-main .list_one_type14 .item {
    padding: 0 .12rem;
  }

  .component-list-main .list_three_type4 .goods-list {
    padding: 0 .16rem;
  }

  .component-list-main .goods-list {
    padding: 0 .1rem;
    overflow: hidden;
    text-align: left;
  }

  .component-list-main .list_three_type4 .goods-list .item-xs:first-child {
    margin-left: 0;
  }

  .component-list-main .list_three_type4 .goods-list .item-xs {
    width: 2.21rem;
    border-radius: .06rem;
    overflow: hidden;
  }

  .component-list-main .goods-list .item-xs {
    float: left;
    width: 2.24rem;
    margin-left: .12rem;
  }

  .component-list-main .goods-list .item {
    background: #fff;
  }

  .component-list-main .img {
    position: relative;
    overflow: hidden;
  }

  .component-list-main .goods-list .item-xs .info-box {
    height: auto;
    padding: .2rem .1rem;
    text-align: center;
    overflow: hidden;
  }

  .component-list-main .goods-list .item .info-box {
    padding: .28rem;
    color: #000;
  }

  .component-list-main .goods-list .item-xs .info-box .text {
    padding-top: 0;
    padding-right: 0;
    height: auto;
  }

  .component-list-main .goods-list .item-xs .info-box .name {
    font-size: .24rem;
    padding: 0 .12rem;
  }

  .component-list-main .goods-list .item .info-box .name {
    font-size: .32rem;
    font-weight: bolder;
    color: #3c3c3c;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .component-list-main .goods-list .item .info-box .name {
    font-size: .24rem;
    padding: 0 .12rem;
  }

  .component-list-main .goods-list .item-xs .info-box .brief {
    font-size: .2rem;
    line-height: 1.6em;
  }

  .component-list-main .goods-list .item .info-box .brief {
    font-size: .2rem;
    color: #3c3c3c;
    height: 1.5em;
    line-height: 1.5em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .component-list-main .goods-list .item-xs .info-box .price {
    font-size: .28rem;
    text-align: center;
    margin-top: .3em;
    margin-bottom: 0;
  }

  .component-list-main .goods-list .item .info-box .price {
    font-family: Heiti SC, STHeiti;
    font-size: .32rem;
    color: #ff4a48;
    font-weight: 700;
    text-align: right;
    line-height: 1em;
    height: 1.2em;
    white-space: nowrap;
  }

  .component-list-main .price {
    font-size: .28rem;
    color: #ea625b;
    height: 1.5em;
    line-height: 1.5em;
    position: relative;
    display: inline-block;
  }

  .price {
    position: relative;
    padding-left: .5em;
    line-height: 1em;
  }

  .price:before {
    content: "\A5";
    position: absolute;
    left: 0;
    top: 0;
    font-size: .76em;
    text-decoration: none;
  }

  .mall-nav-wrap {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 20%;
    }
  }

  html .app .nav-header .logo img, html .app .nav-header .user-avatar img {
    width: .6rem;
  }
</style>
