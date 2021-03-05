import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home'
import MyPage  from '@/pages/my/MyPage'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/my',
      name: 'My',
      component: MyPage
    },
  ]
})