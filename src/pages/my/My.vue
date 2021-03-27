<template>
	<div class="people">
		<div class="profile-header">
			<div class="avatar-awapper">
				<img class="user-avatar" :src="userInfo.avatar | imgPrefix" alt="avatar" />
			</div>
			<div class="basic-info">
				<div class="user-username">{{ userInfo.username }}</div>
				<div class="user-bio">{{ userInfo.bio }}</div>
			</div>
			<div class="profile">
				<i class="iconfont">&#xe609;</i>
			</div>
		</div>
	</div>	
</template>

<script>
export default {
	data(){
		return {
			userInfo: {
				username: 'w2xi',
				avatar: '',
				bio: 'Talk is cheap, show me the code.',
			},
		}
	},
}	
</script>

<style lang="stylus" scoped>
.people
	height: 100vh
.profile-header
	display: flex
	padding: 80px 10px 10px
	background: #fff
	.avatar-awapper
		width: 80px
		height: 80px
		.user-avatar
			width: 80px
			height: 80px
			border-radius: 50%
	.basic-info
		width: 150px
		margin-left: 15px
		font-size: 17px
		position: relative
		.user-username
			margin-top: 10px
			letter-spacing: .5px
		.user-bio
			position: absolute
			bottom: 5px
			font-size: 14px
			color: #aaa
			letter-spacing: .5px
	.profile
		flex: 1
		display: flex
		align-items: center
		flex-direction: row-reverse
		.iconfont
			font-size: 20px
			padding: 10px
</style>
