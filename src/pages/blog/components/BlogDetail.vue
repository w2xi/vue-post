<template>
	<div class="container">
		<div class="blog-detail">
			<blog-card :blog="blog" />
		</div>
	</div>
</template>

<script>
import BlogCard from './BlogCard'

export default {
	components: {
		BlogCard,
	},
	data(){
		return {
			blog: null,
		}
	},
	watch: {
		// $route(to, from){
		// 	const blogId = this.$route.params.id
		// 	if ( blogId ){
		// 		this.getBlogDetail(blogId)
		// 	}
		// }
	},
	methods: {
		async getBlogDetail(id){
			const {data: res} = await this.$_axios.get(this.$_api.blog_detail, { params: {
				id,
			} });
			if ( res.code !== 10000 ){
				return Toast(res.msg)
			}
			this.blog = res.data
		}
	},
	created(){
		const blogId = this.$route.params.id
			if ( blogId ){
				this.getBlogDetail(blogId)
			}
	},
}
</script>

<style lang="stylus" scoped>

</style>