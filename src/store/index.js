import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: localStorage.token || '',
		userId: localStorage.userId || '',
		expireTime: localStorage.expireTime || '',
	},
	mutations: {
		saveUserInfo(state, userInfo){
			localStorage.token = userInfo.token
			localStorage.userId = userInfo.user_id
			localStorage.expireTime = userInfo.expire_time
			state.token = userInfo.token
			state.userId = userInfo.user_id
			state.expireTime = userInfo.expire_time
		},
	},
})

export default store