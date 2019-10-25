import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // 想使用 scrollBehavior 必须用这个 mode
  mode: 'history',
  // 切换路由时内容滑动到底部
  scrollBehavior: () => ({
    y: 0
  }),
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path: '',
          name: 'home',
          component: () => import('@/components/Navbar.vue'),
          meta: {
            title: '首页',
            index: 1,
          },
        },
        {
          path: 'category',
          name: 'category',
          component: () => import('@/components/Category.vue'),
          meta:{
            title: '分类',
            index: 2,
          }
        },
        {
          path: 'shopcart',
          name: 'shopcart',
          component: () => import('@/components/ShopCart.vue'),
          meta:{
            title: '购物车',
            index: 3,
          }
        },
        {
          path: 'mine',
          name: 'mine',
          component: () => import('@/components/Mine.vue'),
          meta:{
            title: '我的',
            index: 4,
          }
        }
      ]
    },{
      path: '/detail/:id/:name/:price/:imgurl',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/login',
      name: 'login',
      // 路由懒加载
      component: () => import('./views/Login.vue')
    },
    {
      path: '/test',
      name: 'test',
      // 路由懒加载
      component: () => import('@/components/Test.vue')
    },
    {
      path: '*',
      name: '404',
      redirect:'/',
    }
  ]
})
