<template>
	<div class="blog-container">
		<div class="blog-title">
			<img class="blog-avatar" src="@/assets/images/default-avatar.jpg" alt="avatar" />
			<div class="blog-box">
				<div class="blog-username">
					w2xi
				</div>
				<div class="blog-create-at">
					2021-3-9 21:31
				</div>
			</div>
		</div>
		<div class="blog-content">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis magnam, quo veniam eligendi, quisquam et autem natus reprehenderit. Delectus necessitatibus saepe labore adipisci pariatur exercitationem sunt blanditiis dignissimos sapiente voluptatem?
		</div>
		<div class="blog-image">
			<img class="image-item" src="@/assets/images/default-avatar.jpg" alt="">
			<img class="image-item" src="@/assets/images/default-avatar.jpg" alt="">
			<img class="image-item" src="@/assets/images/default-avatar.jpg" alt="">
			<img class="image-item" src="@/assets/images/default-avatar.jpg" alt="">
			<img class="image-item" src="@/assets/images/default-avatar.jpg" alt="">
		</div>
	</div>
</template>

<script>
export default {

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