import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home'
<<<<<<< HEAD
import MyPage  from '@/pages/my/MyPage'
=======
import MyPage from '@/pages/my/My'
import Login from '@/components/Login'
import Miss from '@/components/Miss'
>>>>>>> 048b05c7c89189d817477a0fa393df4a730d4361

Vue.use(VueRouter)

export default new VueRouter({
<<<<<<< HEAD
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
=======
	routes: [
		{
			path: '/home',
			name: 'Home',
			component: Home,
			alias: '/',
		},
		{
			path: '/my',
			name: 'My',
			component: MyPage,
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
		},
		{
			path: '*',
			name: 'Miss',
			component: Miss,
		},
	]
>>>>>>> 048b05c7c89189d817477a0fa393df4a730d4361
})