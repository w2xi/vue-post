<template>
	<div class="blog-container" v-if="blog">
		<div class="blog-title">
			<img class="blog-avatar" :src="blog.user.avatar | imgPrefix" alt="avatar" />
			<div class="blog-box">
				<div class="blog-username">
					{{ blog.user.username }}
				</div>
				<div class="blog-create-at">
					{{ blog.create_at }}
				</div>
			</div>
		</div>
		<div class="blog-content" @click="goBlogDetail(blog.id)">
			{{ blog.content }}
		</div>
		<div class="blog-image" @click.prevent="goBlogDetail(blog.id)">
			<img 
				class="image-item" 
				v-for="(image,index) of blog.images"
				:src="image | imgPrefix" 
				:key="index"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		blog: Object,
	},
	methods: {
		goBlogDetail(id){
			this.$emit('goBlogDetail', id);
		},
	},
}	
</script>

<style lang="stylus" scoped>
.blog-container
	background: #fff
	padding: 10px
.blog-title
	display: flex
	align-items: center
	.blog-avatar
		height: 40px
		width: 40px
		border-radius: 50%
	.blog-box
		flex: 1
		margin-left: 12px
		.blog-username
			font-size: 15px
			margin-bottom: 5px
		.blog-create-at
			color: #999
.blog-content
	margin-top: 10px
	font-size: 15px
	line-height: 1.5
	space-letter: .5
	letter-spacing: .6px
.blog-image
	display: flex
	flex-wrap: wrap
	margin-top: 10px
	.image-item
		width: 100px
		height: 100px
	.image-item
		border-radius: 8px
		margin-right: 5px
		margin-bottom: 5px
</style> 	