import Vue from 'vue'
import api from './api'

Vue.filter('capitalize', (value)=>{
	if ( !value )	{
		return ''
	}

	value = value.toString()

	return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('imgPrefix', (value)=>{
	if (!value){
		return require('@/assets/images/default-avatar.jpg')
	}
	
	return api.base_url + value
})