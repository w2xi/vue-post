<template>
	<div class="blog-container">
		<div class="blog-title">
			<img class="blog-avatar" :src="blogItem.user.avatar | imgPrefix" alt="avatar" />
			<div class="blog-box">
				<div class="blog-username">
					{{ blogItem.user.username }}
				</div>
				<div class="blog-create-at">
					{{ blogItem.create_at }}
				</div>
			</div>
		</div>
		<div class="blog-content">
			{{ blogItem.content }}
		</div>
		<div class="blog-image">
			<img 
				class="image-item" 
				v-for="(image,index) of blogItem.images"
				:src="image | imgPrefix" 
				:key="index"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		blogItem: Object,
	}
}	
</script>

<style lang="stylus" scoped>
.blog-container
	background: #fff
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