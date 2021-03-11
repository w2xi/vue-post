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
			<div 
				v-show="imgSrcList.length"
				class="image-item-box" 
				v-for="(item,index) of imgSrcList"
				:key="index"
			>
				<div class="icon-delete-box">
					<i class="iconfont icon-shanchu"></i>
				</div>
				<img class="image" :src="item" />
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
			imgSrcList: [],
			imgFileList: [],
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
			if ( files.length > this.maxImgCounts || this.imgFileList.length > this.maxImgCounts ){
				return Toast('最多只能上传9张图片')
			}
			
			for ( const file of files ){
				if ( !this._validType(file.type) ){
					return Toast('图片类型错误')
				}
				if ( !this._validMaxSize(file.size) ){
					return Toast('图片大小不能超过1M')
				}
				const reader = new FileReader()
				// Starts reading the contents of the specified Blob, once finished, the result attribute contains a data: URL representing the file's data.
				reader.readAsDataURL(file)
				// A handler for the load event. This event is triggered each time the reading operation is successfully completed.
				reader.onload = ()=>{
					this.imgSrcList.push(reader.result)
				}
				this.imgFileList.push(file)
			}
			// solving can't upload the same image
			e.target.value = null
		},
		// validate image type
		_validType(type){
			return this.allowImgType.indexOf(type) !== -1
		},
		// validate image size
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
.image-item-box
	position: relative
	.icon-delete-box
		position: absolute
		top: 5px
		right: 5px
	.icon-delete-box .icon-shanchu
		position: absolute
		top: 5px
		right: 5px
		color: #fff
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