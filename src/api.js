const BASE_URL = 'http://auth-api.com'

export default {
	base_url: BASE_URL,
	login: '/api/v1.user/login',
	signup: '/api/v1.user/register',
	add_blog: '/api/v1.blog/add',
	upload: '/api/v1.blog/upload',
	blog_list: '/api/v1.blog/read',
	blog_detail: '/api/v1.blog/detail',
  search: '/api/v1.blog/search',
	refresh_token: '/api/v1.token/refresh',
}