import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
})

router.beforeEach((to, from, next)=>{
	// check if auth is required on the route
	// ( including nested rotues ).
	const authRequired = to.matched.some(route=>route.meta.authRequired)
	// if auth isn't required for the route, just continue.
	if ( !authRequired )	return next()
	// if auth is required and the user is logged in...
	if ( store.state.userId ){
		// todo
		return next()
	}
	// if auth is required and the user is not currently loged in,
	// redirect to login.
	redirectToLogin()

	function redirectToLogin(){
		// pass the original route to the login component
		next({ name: 'login', query: { redirectFrom: to.fullPath } })
	}
})

export default router