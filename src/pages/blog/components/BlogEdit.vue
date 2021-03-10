<template>
	<div class="container">
		<textarea
			class="content"
			v-model="content"
			autofocus
			maxlength="150"
			wrap="soft"
			placeholder="请随便写点什么吧~"
			required
		>
		</textarea>
		<div class="notice">最多发布九张图片</div>
		<div class="images-wrapper">
			<div class="image-item-box">
				<img class="image" src="@/assets/images/default-avatar.jpg" />
			</div>
			<div class="add-image-padding">
				<div class="add-image" @click="$refs.file.click()">
					<i class="iconfont icon-tianjia"></i>
					<input ref="file" type="file" @change="uploadHandle" multiple hidden>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant'

export default {
	component: {
		[Toast.name]: Toast,
	},
	data(){
		return {
			content: '',
			imageList: [],
			// 允许上传的图片类型
			allowImgType: [
				'image/png', 'image/jpg', 'image/jpeg', 'image/gif',
			],
			// 最大图片上传大小, 5M
			maxImgSize: 1024*1024*5,
			// 做多允许上传的图片数量
			maxImgCounts: 9,
		}
	},
	methods: {
		uploadHandle(e){
			const files = e.target.files
			if ( files.length > this.maxImgCounts ){
				return Toast('最多只能上传9张图片')
			}
			for ( const file of files ){
				if ( !this._validType(file.type) ){
					return Toast('图片类型错误')
				}
				if ( !this._validMaxSize(file.size) ){
					return Toast('图片大小不能超过1M')
				} 
			}
			// convert files to a array-like
			Array.from(files).map((file)=>{
				this.imageList.push(file)
			})
			// solving can't upload same image
			e.target.value = null
			console.log(this.imageList)
		},
		_validType(type){
			return this.allowImgType.indexOf(type) !== -1
		},
		_validMaxSize(size){
			return size <= this.maxImgSize
		}
	},
}	
</script>

<style lang="stylus" scoped>
.container
	overflow: hidden
.content
	width: 100%
	height: 150px
	border: none
	padding: 10px
	font-size: 15px
	color: #aaa
.notice
	padding: 10px
	font-size: 15px
	color: #666

.images-wrapper
	display: flex
	flex-wrap: wrap
.image-item-box, .add-image-padding
	height: 100px
	width: 100px
	padding: 5px
.image-item-box .image, .add-image-padding .add-image
	height: inherit
	width: inherit
.add-image-padding .add-image
	border: 1px dotted #ccc
	box-sizing: border-box
	display: flex
	align-items: center
	justify-content: center
	.icon-tianjia
		font-size: 25px
		color: #ccc
</style>