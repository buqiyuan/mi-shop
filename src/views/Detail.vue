<template>
  <div class="detail-container">
    <!--头部start-->
    <div class="header-bar">
      <div class="back" @click="$router.go(-1)">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABtElEQVR4Ae2btVYYQBBF4+6eNHHtYk1ccGtx9++AHqdFO6TFpcKdFpcKhwYfBtdZXOftOfcH7urIniIiYAASIAiCIAiCjp8gAEEQBEFnmTCmgnGDoPV40/LoYv5C0DKhtH4UQ9A8PrTxiCKCoEBBTjzOIHnlJBLhFgsV5KTimifyFeRk4h1E5CfIScdDkchLkJPNnNYuKFiQk8dc0h1qyGdOmSBHlSA/g5yr2oNVN0FOLXNLdzQvb6tG5pH2dIenIKeZeaI7HySHDx2CHFWCXAQ5rcwz7RlFT8PKea095eouyOll3mvPSXsLckaYD9qT9q6CnH7mk/aqhrtBzlftZR9JzjjzXXtdzJfkYam5cHiXcSR52GmvrMYxtRuIGWN+ofQMQZtyj3HCFtvdIW0BQeZrfgLX/DIehofiFwgyhxp9CDUQrG4LD6Q7dpcwewVBSLkiab+XeKHss/MXdwMKh5sf3DXMDQgyNy+UonlBloT2FzRQ7Qzvw27BQxMn2oDRSJ4CQfiKsCefWeIgaPOVFAlB+FC343dSN75krucsE85UMu4HegYBCIIgCIIgCIIgCIIgMAMUpMidp52UUAAAAABJRU5ErkJggg=="
          alt="">
      </div>
      <div class="share">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAACm0lEQVRoBe3BT2jWdRwA4M/7vvaOLawORdA6iF6iokNZIkEWRJGJKM46GIanBhoeougfRPQHUogRHQo8VKzVkuEsRpcwKBChk7KEjOaWxRqDyDR633dzTxASe3+87vdeft+X4H2eiK6urv89FQMOm9HQMO0zO1Sic2x0Wtake6Iz7NTQSt2OSM9GDVdStyHSUnHaSiaVIyUD8myPlByW59NIyYw8ZyMlDXnqkZIleeqRknPyTEUqrvKMC/KMRBoe9YN2bIviucWX2nNKOYrlOkMWtKdmfRRJxaB5WT+a00rN9iiS+52Udd6zqtb4RtYp66M41hiTdckhN8ZlHjZsSkPdlBHblKMorvaGv2V9685IT8luv8qa8Xh0gg1OyPrLK3qjKKp2OeKchgXTRmxWin+5yUeWZI24OYpjk59kHbdWjxddkPWde6NIdlrQyrwpWbP2KEWR3KGmPXVvWR1F87X2jFsXxXO7dkx6MNLwnDx/2KsSqfhQnulIyVF5FiMlo/IsRkrelOdspOQhec57WiVSscqMfCfdF6nYrT2f6I80fKw9F72gGsVTNayVX7zkd83O2Bwp2GXKcos+cEOE673vkmZfWBfFU/GAVw0b856n9Md/3OW4ZjWv64vOUfKk3zT72WPRSa7xtgXNjrktOsmtvtJswZBro5MMmNFszh6luMxqT3jXEWOGDOiN4unzmppmJ9wdYZWX/Wm5efuVo3jW+lyzJYcc08qEvkjBI85oz4RSpKDqeRe1Y1+kot+IfHN6Ih2bfC/P1kjJO/IcjJQclWc0UjImz2ikZEieA5GSAXm2REp6zVvJrGqkZb+VDEZqyiZcybhSpKfPhFbG9UZnKNlnznKzBpWik/TY6qBRow7YohpdXV0d9A/qIDTTrnD0UAAAAABJRU5ErkJggg=="
          alt="">
      </div>
    </div>
    <!--头部end-->
    <!--轮播图start-->
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!--轮播图end-->
    <!--商品描述start-->
    <div class="product-detail">
      <div class="product-name">{{$route.params.name}}</div>
      <div class="product-desc">
        <span style="color: #ff4a00; ">「3GB+32GB、4GB+64GB 领券立减50元」	</span>
        4000mAh大电量 / 骁龙632八核处理器 / 6.26"水滴全面屏，德国莱茵 TÜV 认证护眼屏 / 18个月超长质保，康宁第五代大猩猩玻璃盖板 / 支持大字体、大音量模式，收音机、红外遥控功能 /
        1200万AI双摄，1.25μm大像素相机
      </div>
      <div class="product-price">
        {{$route.params.price}}
      </div>
      <div class="product-parameters">
        <div
          class="param-item"
          v-for="i in 14"
          :key="i"
        >
          <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png" alt="">
          <div class="param-name">CPU</div>
          <div class="param-value">骁龙845八核</div>
        </div>
      </div>
      <div class="card-box">
        <ul class="product-benefits">
          <li class="title">领券</li>
          <li class="coupons">{{$route.params.name}} 专属50元优惠券</li>
          <li class="arrow"> ></li>
        </ul>
      </div>
      <div class="card-box">
        <ul class="product-benefits" @click="openSheet">
          <li class="title">已选</li>
          <li class="selected">{{$route.params.name}} 6GB+128GB 梦幻蓝 x 1</li>
          <li class="arrow"> ></li>
        </ul>
        <ul class="product-benefits">
          <li class="title">送至</li>
          <li class="coupons"></li>
          <li class="arrow"> ></li>
        </ul>
      </div>
      <img width="100%"
           src="https://i8.mifile.cn/v1/a1/f4102566-3561-1488-f116-e303bbc6e757.webp?w=1080&h=760&bg=F6F5F7" alt="">
      <img width="100%"
           src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/019e93007332ceb9707d30934060661b.jpg?w=1080&h=1281&bg=8C82A4"
           alt="">
      <img width="100%"
           src="https://i8.mifile.cn/v1/a1/652f7e3e-ee3b-6518-655b-81275642fc45.webp?w=1080&h=971&bg=F8F3FA" alt="">
    </div>
    <!--商品描述end-->
    <bottom-sheet :sheet="sheet" :id="$route.params.id" :imgurl="$route.params.imgurl" :name="$route.params.name"
                  :price="$route.params.price"></bottom-sheet>
    <!--底部start-->
    <footer class="footer-tools">
      <div class="footer-flex">
        <dl class="back-home">
          <dd>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAk1BMVEUAAABxcXFxcXFwcHBxcXFwcHBvb29wcHBwcHBxcXFvb29wcHBubm5vb29vb29wcHBwcHBvb29wcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBycnJwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBvb29vb29wcHBwcHBwcHBubm5wcHB0dHRycnJ2dnY0KzjsAAAALnRSTlMAAgn0mv6+6cEcQdIlEg36rTcy5E0g7tXFu6GPhmwG3Kl4KbSTc1xXR8p/Zyxhwd65kwAAAr1JREFUSMftlumSojAUhYEYQemwg7K4r63dOXn/p5ubbqoVcByw5tfUnNLKMfB5b05AMZ7JJBkv6gt8mRZhKF6ta552uxMNr7DLi82YfVmSHcyKEYeU4CMxkKaQ0wDgQcCBIKXPg2KO5hJ+6XmlD8wjmhrAJjOAHUzyBwbMEjK92U8bsI9kyR+1/yTfc4s2utpZW/066y42NN2H9fb8e521aP0A9l6X7sY8WeuYU/I/q0h16OvJn0OPHGIbZcgK3YwTPQXrBfr6qmrFcPHrGJ6wxxjIrmQ7R64ZEB/JPo15lZB9tPWrJ6FTzGUrZq1m6LzUaXRRipnY4JZpdx8Coin0B/jHGMDIexaJNwIw/ujWnboAr9oxt0JfVhxwp2Qb7EnHvLifNWu8ed5Ch34iez/HwFdJh/1d6D9VaLAqH9wNW81sF0VQHKL25oRzDr+y9Kx+i4Jzjl2zrneJfamUb+8nrRTCjE4vxPfp2xwadqxGsAWX0me+lMjTZuepDQ7k2682XAl7xyTB5q3nEuD54XQNGGRgNXp6s8EYl25IPTsK7BhmTThh8EtB1jqQu7Zg6W5iqLEwxE6tTsb0vjJFVChemN/7VHE1pkunAb+Lc6x2QocaGm347V3Z0zrPj5VahS14NjHCxbaeaMNRTF9eeyuQWdKC3cntTuzAYSznXl3ZXEvWhfWBmm7D25mMoxpOXRVPH8G1OrC1VrysL+wDV3oJfWEajxzs+uWTGHxjmENgXZoVyfa8t7lyqHB/mEzqKIDZDFCz0BgEk9JRBiklWEDJDYPJLqdVPs/LxKNPA2HtTTERehgM179fNToY1jjJ6A939R/+B+EeegyPlz2fD9MujLkwrR7yjCiTswYc2TJz8nEf5e++dMQ9vByBS9VHUknOW08BaQDZV/rfuamwGvXVJu2EOETdu3yAjL+gX1S9Wc5duViwAAAAAElFTkSuQmCC"
              alt="">
          </dd>
          <dd>首页</dd>
        </dl>
        <dl class="shop-cart" @click="toShopCart">
          <dd>
            <div class="shop-cart-icon">
              <span class="bubble">{{cartCount}}</span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABHCAYAAACgTtGvAAADTUlEQVR4AWIsKCiYx8AAaNcegGu7ojCO56K2Gw3q3mZUa1Tbtjmobbsdq+2zbQ2fNYr5/GLbyf/5vRWdc7Ku9t3fzG8Qnnx373WyT5L0PPwYKb0Yh5eQUPGLkpx9fALGr/855hY1Dr1wk3MTsaiXEIBvCD9CJmS33sDkQOYyW9TAZNsV5ayoQnTj8GTYogamA0WwK8rDnDod59qidAb6nShFD/riTCtW4QG3RWV7KOo/JMOPeMtxuBFz8BOSgnCS3AS+832KNU5f7UJ0uVxRr6AcJuRdp0V1I99lUYuRDF+cOAaPohoyV8ui3Az005AMU9KJmXgJMr2iKA8D3bwsh0zWwKLsQE9xVpQ9HIdGW1QJ2uQXTZCictwU1YOCBFhRl0ImWxbldqCfhhTDV9Ru1MqivMypkOErKmvgWc8O9DScPHAXiaLs087BB7mXorajRWlF3YlS9GlDKe5U2Haet14vcpWK+i+MR6Bk/KdQVA9yRVGe59SpSEWsxQe3kS96MdpEUfpHmSg+htmNlxVWVC72JgiiMtBXQMTBY5jYyTk4Q84n8SjY/oogVpNKUTvQKFeULcrZqspAvEfuig6UaBd1ClINW1F56NYoSiZk4hnvyKLsQD8NybYoj2c8jaJKUSu/mWkP60RRnpNr8IpqwA6torLlnQ9pZg1yWZS988nrzlYvyoDtdxLS5c+mWZQpTzsvgS+cW68KECvKpDOeLEpx+4VM+fOUdlEm3PlkUbkgukXlGjDQLx647fSLyorzojJwoUJRxv4r0NG4H4vEHa8bSzEgQYwmtSgTJ++XgbjMDJSrrSiRbJiQTnwLEp6ilsGEfIwCEKWtJ/IXTsbbOAPxlG7k4xdMAglfUX34GjA3fsRGbFG2KFuUjS3KFmWLskXZonx4FPOwGfPxGHyIRoJ4GUuxGdNxu4cvol7Sf3gRB3IF7sX9eAZ9EX6cMg93iOt5FL/ik2itqJdBSYPmKbyOSOYLUZI8BN8VvaKGzytQiN71RKuo872/Xz3HIUXnevSLKsdwKUOk0oYGnevRL2oyhstUKETveqJV1N9Yg8GyDn9EYZjnY7DMxYRoFdWBW/AdStCFEnyPm9GKSKYW1+Ef7EQX8vE+HkEPHKUfkZb5KCDSBwMAAAAASUVORK5CYII=">
            </div>
          </dd>
          <dd>购物车</dd>
        </dl>
        <div class="add-to-cart" @click="openSheet">加入购物车</div>
      </div>
    </footer>
    <!--底部end-->
  </div>
</template>

<script>
  import BottomSheet from '@/components/BottomSheet.vue'

  export default {
    components: {BottomSheet},
    data() {
      return {
        sheet: false,
        items: [
          {
            src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/22f848793321e402255af4eba8037da5.jpg'
          },
          {
            src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5d7a0341d88c0edebc8269b301161e9.jpg'
          },
          {
            src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/36df28faaada581e8cdd530eeef817b9.jpg'
          },
          {
            src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8742a9e44d82ef8c8a60483c4e4bacbd.jpg'
          }
        ]
      }
    },
    computed: {
      cartCount() {
        return this.$store.getters.getCartTotal
      }
    },
    methods: {
      openSheet() {//打开操作表
        this.$store.commit('setSheetStatus')
      },
      toShopCart(){//跳转购物车页面
        this.$router.push('/shopcart')
      }
    }
  }
</script>

<style lang="scss">
  .detail-container {
    .header-bar {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      width: 100%;
      height: 50px;

      .back, .share {
        position: absolute;
        top: .2rem;
        width: .6rem;
        height: .6rem;
        border-radius: 50%;
        background: rgba(0, 0, 0, .6);
        padding: 5px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .back {
        left: .2rem;
      }

      .share {
        right: .2rem;
      }
    }

    .v-carousel__controls {
      background: transparent;
    }

    .product-detail {
      max-width: 7.2rem;
      margin: 0 auto;
      padding: 0 .2rem 1.2rem;
      text-align: left;

      & > div {
        margin: 10px 0;
      }

      .product-name {
        padding: .32rem .03rem 0;
        text-align: left;
        color: black;
        font-size: .4rem;
      }

      .product-desc {
      }

      .product-price {
        position: relative;
        line-height: 1em;
        color: #ff6700;
        font-size: .48rem;
      }

      .product-parameters {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        text-align: center;

        .param-item {
          display: flex;
          flex: 1;
          width: 25%;
          border-right: 1px solid #ccc;
          min-width: 1.68rem;
          padding: 0 .08rem;
          flex-direction: column;

          img {
            display: block;
            margin: 0 auto;
            width: .4rem;
            height: .4rem;
          }

          div {
            color: #676767;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            &.param-name {
              font-size: .24rem;
            }

            &.param-value {
              font-size: .18rem;
            }
          }
        }
      }

      .card-box {
        .product-benefits {
          display: flex;
          padding: 0 .32rem;
          background-color: #fafafa;
          border-radius: .16rem;

          li {
            line-height: 45px !important;
            font-size: .24rem !important;
            color: rgba(0, 0, 0, .54);

            &:nth-child(1) {
              flex: 1;
            }

            &:nth-child(2) {
              flex: 5;
              text-align: left;
            }

            &:nth-child(3) {
              flex: 1;
            }

            &.title {
              flex: 1;
            }

            &.coupons {
              color: #f66;
              font-size: .18rem !important;
            }

            &.arrow {
              flex: 1;
              text-align: right;
            }
          }
        }
      }
    }

    .footer-tools {
      position: fixed;
      left: 50%;
      bottom: 10px;
      z-index: 200;
      padding: .3rem;
      width: 90%;
      transform: translateX(-50%);
      background-color: rgba(255, 255, 255, .95);
      border: 1px solid #e5e5e5;
      border-radius: .16rem;
      overflow: hidden;
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px rgba(0, 0, 0, .14), 0 1px 10px rgba(0, 0, 0, .12);

      .footer-flex {
        display: flex;

        dd {
          img {
            width: .4rem;
            height: .4rem;
          }
        }

        .back-home {
          flex: 1;
        }

        .shop-cart {
          flex: 1;
          text-align: center;

          dd {
            position: relative;

            .shop-cart-icon {
              position: relative;
              margin: 0 auto;
              width: .4rem;
              color: rgba(0, 0, 0, .54);

              .bubble {
                position: absolute;
                top: -.08rem;
                right: -.1rem;
                width: .28rem;
                height: .28rem;
                text-align: center;
                border-radius: 100%;
                background-color: red;
                color: white;
              }
            }
          }
        }

        .add-to-cart {
          flex: 4;
          text-align: center;
          line-height: 0.73rem;
          color: white;
          font-size: .28rem;
          background: #ff6700;
          border-radius: 50px;
        }
      }
    }
  }
</style>
