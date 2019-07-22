<template>
  <div>
    <search-bar>
      <template v-slot:title>分类</template>
    </search-bar>
    <div class="scroll-container">
      <div class="scroll-left">
        <div class="fixed-box">
          <ul>
            <li class="scroll-left-item" :class="{ active: i.category_id == cateid }" @click="selectItem(i.category_id)"
                v-for="i in data"
                :key="i.category_id">
              <span>{{i.category_name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="scroll-right component-list-main">
        <div v-for="(item1,index) in data" :key="index">

          <div v-for="(item,index) in item1.category_list">

            <div v-if="item.view_type == 'cells_auto_fill'" class="cells_auto_fill">
              <a class="exposure items">
                <img v-for="i in item.body.items" :src="i.img_url" :style="{ height: item.body.h == 0 ? '.8rem' : item.body.h / 100 + 'rem'}" style="height: .8rem; width: 5rem;">
              </a>
            </div>

            <div v-else-if="item.view_type == 'category_title'" :data-id="item1.category_id" class="category_title">
              <span>{{item.body.category_name}}</span>
            </div>

            <div v-else-if="item.view_type == 'category_group'" class="category_group box-flex">
              <div class="box">
                <div v-for="(item,index) in item.body.items" class="product">
                  <a class="exposure item">
                  <div class="img">
                    <img class="big" :src="item.img_url">
                  </div>
                  <div class="name">{{item.product_name}}</div>
                </a></div>
              </div>
            </div>
          </div>


          <!--<v-subheader :data-id="i.category_id">{{i.category_list[0].body.category_name}}</v-subheader>-->
          <!--<v-container fluid grid-list-xs>-->
            <!--<v-layout row wrap>-->
              <!--<v-flex-->
                <!--v-for="(item,index) in i.category_list[1].body.items"-->
                <!--:key="index"-->
                <!--xs4-->
              <!--&gt;-->
                <!--<img-->
                  <!--:src="item.img_url"-->
                  <!--alt="lorem"-->
                  <!--class="image"-->
                  <!--height="100%"-->
                  <!--width="100%"-->
                <!--&gt;-->
              <!--</v-flex>-->
            <!--</v-layout>-->
          <!--</v-container>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchBar from '@/components/SearchBar'
  export default {
    components:{SearchBar},
    data() {
      return {
        cateid: 1,
        data: [],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    created() {
      this.axios.get('/api/category.json').then(res => {
        if (res.status == 200) {
          this.data = res.data.data
          this.cateid = res.data.data[0].category_id
          console.log(res.data.data)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    methods: {
      selectItem(id) {//点击选中左边某一项，并定位右边元素位置
        this.cateid = id
        Array.from(document.querySelectorAll('.category_title')).find((ele) => {
          let eleId = ele.dataset.id
          if (eleId == id) {
            // 下面注释的可行，不过我想换scrollIntoView的方式，简单而好用,不过也有缺陷
            document.querySelector('.scroll-right').scrollTop = ele.offsetTop - ele.offsetHeight
            // ele.scrollIntoView({
            //   block: 'start',
            //   behavior: 'smooth'
            // })
            return true
          }
        })
      }
    },
    mounted() {
      document.querySelector('.scroll-right').addEventListener('scroll', (e) => {
        Array.from(document.querySelectorAll('.category_title')).find((ele) => {
          let deviceH = document.body.offsetHeight - 220
          let top = ele.getBoundingClientRect().top
          if (top > 0 && top < deviceH) {
            this.cateid = ele.dataset.id
            return true
          }
        })
        let active = document.querySelector('.scroll-left .active')
        let activeTop = active.getBoundingClientRect().top
        let leftEle = document.querySelector('.scroll-left .fixed-box')
        let ul = document.querySelector('.scroll-left .fixed-box ul')
        if (activeTop < 30) { //如果左侧选项卡active超出顶部，则始终将active显示在可视区域
          leftEle.scrollTop = leftEle.scrollTop + activeTop - 60
        } else if (activeTop > document.body.offsetHeight - 116) {//如果左侧选项卡active超出底部，则始终将active显示在可视区域
          leftEle.scrollTop = leftEle.scrollTop + active.getBoundingClientRect().bottom - document.body.offsetHeight + 60
        }
      }, true)
    }
  }
</script>

<style lang="scss" scoped>
  .scroll-container {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: calc(100vh - 56px);
    overflow: hidden;
    padding-top: 56px;

    .scroll-left {
      flex: 1;

      .fixed-box {
        position: fixed;
        width: 20vw;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;

        ul {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          text-align: center;
          padding-bottom: 116px;

          .scroll-left-item {
            padding: 10px;
            font-size: .25rem;
            line-height: .56rem;
          }

          .scroll-left-item.active {
            transform: scale(1.2);
            transform-origin: center;
            transition: all .3s;
            color: #fb7d34;
          }
        }
      }
    }

    .scroll-right {
      flex: 4;
      overflow-y: auto;
      padding-bottom: 450px;

      .v-subheader {
        justify-content: center;
      }
    }
  }
  .component-list-main .cells_auto_fill .items {
    height: auto!important;
    display: block;
  }
  .component-list-main img {
    display: block;
    width: 100%;
    height: auto;
  }
  .component-list-main .category_title {
    background: #fff;
    font-size: .28rem;
    text-align: center;
    font-weight: 400;
    margin-top: .2rem;
    height: 1.28rem;
    line-height: 1.28rem;
    overflow: hidden;
  }
  .component-list-main .category_title span {
    position: relative;
  }
  .component-list-main .category_title {
    background: #fff;
    font-size: .28rem;
    text-align: center;
    font-weight: 400;
    margin-top: .2rem;
    height: 1.28rem;
    line-height: 1.28rem;
    overflow: hidden;
  }
  .component-list-main .category_title span:after, .component-list-main .category_title span:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 6.4px;
    width: .4rem;
    border-top: 1px solid #e0e0e0;
    transform: translate3d(-150%,-50%,0);
    -webkit-transform: translate3d(-150%,-50%,0);
  }
  .component-list-main .category_title span:after {
    left: auto;
    right: 0;
    transform: translate3d(150%,-50%,0);
    -webkit-transform: translate3d(150%,-50%,0);
  }
  .component-list-main .category_group {
    background: #fff;
    margin: -.06rem 0 0;
  }
  .box-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }
  .component-list-main .category_group .box {
    width: 100%;
    overflow: hidden;
  }
  .box-flex>*, .box-inline-flex>* {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  .component-list-main .category_group .product {
    float: left;
    width: 33.333333333333336%;
    text-align: center;
    margin-top: .2rem;
    margin-bottom: .3rem;
    overflow: hidden;
  }
  .component-list-main .category_group .product .img {
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
    background: #fff;
    overflow: hidden;
  }
  .component-list-main .img {
    position: relative;
    overflow: hidden;
  }
  .component-list-main .category_group .product .img img {
    width: 100%;
  }
  .component-list-main .category_group .name {
    margin-top: .28rem;
    white-space: nowrap;
    font-size: .23rem;
    color: rgba(0,0,0,.54);
  }
  .component-list-main .brief, .component-list-main .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .component-list-main .category_title {
    background: #fff;
    font-size: .28rem;
    text-align: center;
    font-weight: 400;
    margin-top: .2rem;
    height: 1.28rem;
    line-height: 1.28rem;
    overflow: hidden;
  }
  .component-list-main .category_title span {
    position: relative;
  }

</style>
