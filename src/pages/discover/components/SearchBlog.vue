<template>
	<div class="search-bar">
		<div class="search-input">
			<i class="iconfont icon-sousuo icon-search"></i>
			<input class="input" v-model="content" placeholder="请随便搜点什么" />
		</div>
		<div class="search-button">
			<span class="button">搜索</span>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			content: '',
		}
	},
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

.search-bar
	height: 50px
	position: fixed
	top: 0
	width: 100%
	display: flex
	align-items: center
	padding: 0 7px
	background: #efefef
	font-size: 14px
	box-sizing: border-box
	.search-input
		flex: 1
		display: flex
		align-items: center
		position: relative
		.icon-search
			position: absolute
			left: 12px
		.input 
			width: 100%
			border: none
			color: #333
			padding-left: 30px 
	.search-input .input, .search-button
		height: 30px
		border-radius: 15px
	.search-button
		width: 40px
		line-height: 30px
		margin-left: 6px
		background: $activeBlue
		color: #fff
		text-align: center
		padding: 0 10px 
</style>