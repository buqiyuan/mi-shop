import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      redirect:'/home',
      children:[
        {
          path: 'home',
          name: 'home',
          component: () => import('@/components/Navbar.vue')
        },
        {
          path: 'category',
          name: 'category',
          component: () => import('@/components/Category.vue')
        },
        {
          path: 'shopcart',
          name: 'shopcart',
          component: () => import('@/components/ShopCart.vue')
        },
        {
          path: 'mine',
          name: 'mine',
          component: () => import('@/components/Mine.vue')
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
    }
  ]
})
