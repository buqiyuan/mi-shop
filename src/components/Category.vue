<template>
  <div>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="white" flat>
            <v-btn icon light>
              <v-icon color="grey darken-2">arrow_back</v-icon>
            </v-btn>

            <v-toolbar-title class="grey--text text--darken-4">Albums</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon light>
              <v-icon color="grey darken-2">search</v-icon>
            </v-btn>
          </v-toolbar>

        </v-card>
      </v-flex>
    </v-layout>
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
      <div class="scroll-right">
        <div v-for="(i,index) in data" :key="index">
          <v-subheader :data-id="i.category_id">{{i.category_list[0].body.category_name}}</v-subheader>
          <v-container fluid grid-list-xs>
            <v-layout row wrap>
              <v-flex
                v-for="(item,index) in i.category_list[1].body.items"
                :key="index"
                xs4
              >
                <img
                  :src="item.img_url"
                  alt="lorem"
                  class="image"
                  height="100%"
                  width="100%"
                >
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
          console.log(res.data.data[0].category_list)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    methods: {
      selectItem(id) {//点击选中左边某一项，并定位右边元素位置
        this.cateid = id
        Array.from(document.querySelectorAll('.v-subheader')).find((ele) => {
          let eleId = ele.dataset.id
          if (eleId == id) {
            document.querySelector('.scroll-right').scrollTop = ele.offsetTop - ele.offsetHeight
            return true
          }
        })
      }
    },
    mounted() {
      document.querySelector('.scroll-right').addEventListener('scroll', (e) => {
        Array.from(document.querySelectorAll('.v-subheader')).find((ele) => {
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
        } else if (activeTop > document.body.offsetHeight-116) {//如果左侧选项卡active超出底部，则始终将active显示在可视区域
          leftEle.scrollTop =  leftEle.scrollTop +active.getBoundingClientRect().bottom - document.body.offsetHeight + 60
        }
      }, true)
    }
  }
</script>

<style lang="scss" scoped>
  .v-toolbar {
    position: fixed;
  }

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
</style>
