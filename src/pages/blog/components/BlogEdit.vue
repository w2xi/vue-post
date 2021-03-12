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
				<div 
					class="icon-delete-box"
					@click="removeImageItem(index)"
				>
					<i class="iconfont icon-shanchu"></i>
				</div>
				<img class="image" :src="item" />
			</div>
			<div class="add-image-padding">
				<div 
					v-show="showAddImgIcon"
					class="add-image" 
					@click="$refs.file.click()"
				>
					<i class="iconfont icon-tianjia"></i>
					<input 
						ref="file" 
						type="file" 
						@change="uploadHandle" 
						multiple 
						hidden
					>
				</div>
			</div>
		</div>
		<div class="footer">
			<button @click="submitHandle">发布</button>
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
	computed: {
		showAddImgIcon(){
			return this.imgFileList.length < this.maxImgCounts
		},
	},
	methods: {
		async submitHandle(){
			if ( !this.content.trim() ){
				return Toast('请随便写点什么吧')
			}
			if ( this.imgFileList.length < 1 ) {
				return Toast('请选择要上传的图片')
			}
			if ( this.imgFileList.length > this.maxImgCounts ){
				return Toast('最多只能上传9张图片')
			}
			Toast.loading({
        duration: 0,
        message: '发布中...',
        forbidClick: true,
      });
			const formData = new FormData()
			const config = {
				headers: { 'Content-Type': 'multipart/form-data' }
			}
			Array.from(this.imgFileList).map((file)=>{
				formData.append('file[]', file);
			})
			const {data: res} = await this.$_axios.post(this.$_api.upload, formData, config)
			console.log(res)
			if ( res.code !== 10000 ){
				Toast.fail('发布失败')
				Toast.clear()
				return
			}
			// 上传成功的图片  
			const images = res.data
			// 提交
			this.$_axios.post(this.$_api.add_blog, {
				images,
				content: this.content,
			}).then((res)=>{
				Toast.success('发布成功')
				Toast.clear()
				this.$router.push('/blog')
			}).catch(err=>{
				Toast.fail('发布失败')
				Toast.clear()
			})
		},
		removeImageItem(index){
			this.imgSrcList.splice(index, 1)
			this.imgFileList.splice(index, 1)
		},
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
@import '~@/assets/styles/variables.styl'

.container
	overflow: hidden
.content
	width: 100%
	height: 150px
	border: none
	padding: 10px
	font-size: 15px
	color: #666
	box-sizing: border-box
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
		height: 20px
		width: 20px
		border-bottom-left-radius: 15px
		background: rgba(0,0,0,.7)
	.icon-delete-box .icon-shanchu
		position: absolute
		top: 2px 
		right: 2px
		font-size: 12px
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
button	
	position: fixed
	bottom: 20px
	right: 20px
	padding: 10px 20px
	font-size: 13px
	border-radius: 15px
	border: none
	background: $activeGreen
	color: #fff
</style>