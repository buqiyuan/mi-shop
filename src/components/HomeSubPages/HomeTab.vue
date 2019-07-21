<template>
  <div class="home-container">
    <v-tab-item>
      <v-card :class="className" class="component-list-main">
        <Carousel :items="items" v-show="items.length"></Carousel>
      </v-card>
    </v-tab-item>
    <div style="display: none" class="list_three_type4 list_three_type4_template">
      <div class="goods-list">
        <a class="exposure item item-xs">
          <div class="img">
            <img class="big" style="width: 2.21rem;height: 2.21rem;">
          </div>
          <div class="info-box">
            <div class="text">
              <div class="name">扫地机器人1S</div>
              <div class="brief">看得明白扫得彻底</div>
              <div class="price" style="color: rgb(245, 75, 75);">1999</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div style="display: none" class="list_two_type1 list_two_type1_template box-flex">
      <a class="exposure item">
        <div class="img"><img class="big" style="width: 3.6rem;height: 3.6rem;"></div>
        <div class="info">
          <div class="name">米家互联网空调（一级能效）</div>
          <div class="brief">1.5匹，全直流变频</div>
          <div class="price">2299<span class="price old"><s>2699</s></span></div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import Carousel from '@/components/Carousel.vue'

  export default {
    data() {
      return {
        items: [],
        mallNav: [],
        tabs: [],
        sections: []
      }
    },
    components: {Carousel},
    props: ['className', 'apiUrl'],
    mounted() {
      this.$nextTick(() => {
        this.axios({
          method: 'get',
          url: `/api/home/${this.apiUrl}.json`
        }).then((res) => {
          if (res.data.result == 'ok') {
            let card = document.querySelector('.' + this.className)
            let data = res.data.data
            let sections = data.data.sections
            console.log(sections)
            sections.forEach((item, index) => {//遍历页面需要的所有数据
              if (item.view_type == "gallery") {//判断是否有轮播图
                this.items = item.body.items
              } else if (item.view_type == 'cells_auto_fill') {
                let div = document.createElement('div')
                div.style.width = item.body.w / 100 + 'rem'
                div.style.height = item.body.h / 100 + 'rem'
                div.classList.add(item.view_type, 'multi_cell')
                item.body.items.forEach((item, index) => {//遍历每一节点的数据
                  let a = document.createElement('a')
                  a.classList.add('items')
                  a.style.left = item.x / 100 + 'rem'
                  a.style.top = item.y / 100 + 'rem'
                  let img = document.createElement('img')
                  img.style.width = a.style.width = item.w / 100 + 'rem'
                  img.style.height = a.style.height = item.h / 100 + 'rem'
                  img.src = item.img_url
                  a.appendChild(img)
                  div.appendChild(a)
                })
                card.appendChild(div)
              } else if (item.view_type == "divider_line") {//画线
                let div = document.createElement('div')
                div.style.height = item.body.line_height / 100 + 'rem';
                div.style.borderBottom = item.body.line_height / 100 + 'rem solid ' + item.body.line_color;
                div.style.backgroundColor = item.body.line_color;
                card.appendChild(div)
              } else if (item.view_type == "list_two_type13") {
                let div = document.createElement('div')
                div.classList.add(item.view_type, 'box-flex')
                div.style.backgroundColor = item.body.bg_color;
                item.body.items.forEach((item, index) => {
                  let divImg = document.createElement('div')
                  let img = document.createElement('img')
                  let a = document.createElement('a')
                  divImg.classList.add('img')
                  a.classList.add('exposure', 'item')
                  img.style.width = '3.44rem'
                  img.style.height = '2.8rem'
                  img.src = item.img_url
                  divImg.appendChild(img)
                  a.appendChild(divImg)
                  div.appendChild(a)
                })
                card.appendChild(div)
              } else if (item.view_type == "list_two_type1") {
                let divClone = document.querySelector('.list_two_type1_template').cloneNode(true)
                divClone.style.display = 'flex'
                divClone.style.backgroundColor = item.body.bg_color
                item.body.items.forEach((item, index) => {
                  let a = divClone.querySelector('a').cloneNode(true)
                  a.querySelector('.img img').src = item.img_url
                  a.querySelector('.info .name').innerText = item.product_name
                  a.querySelector('.info .brief').innerText = item.product_brief
                  a.querySelector('.info .price').firstChild.textContent = item.product_price
                  if (item.product_price < item.product_org_price) {
                    a.querySelector('.info .price .price.old s').innerText = item.product_org_price
                  }else {
                    a.querySelector('.info .price .price.old').style.display = 'none'
                  }
                  divClone.appendChild(a)
                })
                divClone.classList.remove('list_two_type1_template')
                divClone.removeChild(divClone.firstElementChild)
                card.appendChild(divClone)
              } else if (item.view_type == "list_one_type14") {
                let div = document.createElement('div')
                div.classList.add(item.view_type, 'box-flex')
                div.style.backgroundColor = item.body.bg_color;
                item.body.items.forEach((item, index) => {
                  let divImg = document.createElement('div')
                  let img = document.createElement('img')
                  let a = document.createElement('a')
                  divImg.classList.add('img')
                  a.classList.add('exposure', 'item')
                  img.style.width = '6.96rem'
                  img.style.height = '4.36rem'
                  img.src = item.img_url
                  divImg.appendChild(img)
                  a.appendChild(divImg)
                  div.appendChild(a)
                })
                card.appendChild(div)
              } else if (item.view_type == 'list_three_type4') {
                let divClone = document.querySelector('.list_three_type4_template').cloneNode(true)
                divClone.style.display = 'block'
                divClone.style.backgroundColor = item.body.bg_color
                let goodsList = divClone.querySelector('.goods-list')
                item.body.items.forEach((item, index) => {
                  let a = goodsList.querySelector('a').cloneNode(true)
                  a.querySelector('.img img').src = item.img_url
                  a.querySelector('.info-box .name').innerText = item.product_name
                  a.querySelector('.info-box .brief').innerText = item.product_brief
                  a.querySelector('.info-box .price').innerText = item.product_price
                  goodsList.appendChild(a)
                })
                divClone.classList.remove('list_three_type4_template')
                goodsList.removeChild(goodsList.firstElementChild)
                card.appendChild(divClone)
              }
            })

          }
        }).catch((err) => {
          console.log('err' + err)
        })
      })
    }
  }
</script>

<style lang="scss">
  div[class*='card'] > div{
    margin: 0 auto;
  }
  .component-list-main {
    padding-bottom: 60px;
  }

  .component-list-main .cells_auto_fill.multi_cell {
    position: relative;
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
    text-align: left;
  }
  .component-list-main .brief, .component-list-main .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .component-list-main .name {
    font-size: .28rem;
    color: rgba(0,0,0,.87);
  }
  .component-list-main .price .old {
    display: inline-block;
    margin: 0 .1rem;
    font-size: .22rem;
    color: rgba(0,0,0,.54);
  }
  .price:before {
    content: "\A5";
    position: absolute;
    left: 0;
    top: 0;
    font-size: .76em;
    text-decoration: none;
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
