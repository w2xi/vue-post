<template>
  <div class="container">
    <!-- header -->
    <div class="header">
      <!-- post blog -->
      <div class="blog-post">
        <i 
          class="iconfont icon-fabu"
          @click="$router.push('/blog-edit')"
        >
        </i>
      </div>
      <!-- search -->
      <div class="blog-search">
        <search-bar />
      </div>
    </div>
    <!-- blog list -->
    <div class="blog-list">
      <div 
        class="blog-item"
        v-for="item of blogList"
        :key="item.id"
      >
        <blog-card 
          :blog="item" 
          @goBlogDetail="goBlogDetail"
        />
        <blog-panel />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/Search'
import BlogCard from './components/BlogCard'
import BlogPanel from './components/BlogPanel'

export default {
  components: {
    BlogPanel,
    BlogCard,
    SearchBar,
  },
  data(){
    return {
      blogList: [],
      count: 10,
    }
  },
  methods: {
    goBlogDetail(id){
      this.$router.push(`/blog-detail/${id}`)
    },
    async getBlogList(){
      const page = Math.ceil(this.blogList.length / this.count) + 1
      const { data: res } = await this.$_axios.get(this.$_api.blog_list, {
        params: {
          page,
          count: this.count,
        }
      })
      if ( res.code !== 10000 ){
        return Toast(res.msg)
      }
      this.blogList = res.data
    }
  },
  created(){
    this.getBlogList()
  },
  activated(){
    console.log('activated')
  },
}  
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

.container
  height: 100vh
  overflow-y: auto
  background: $backgroundGrey
.header
  position: fixed
  top: 0
  width: 100%
  height: 50px
  display: flex
  align-items: center
  box-sizing: border-box
  padding: 0 8px
  background: #fff
  z-index: 10
  .blog-post
    width: 35px
    text-align: center
    .icon-fabu
      font-size: 21px
  .blog-search
    flex: 1  
.blog-list
  margin-top: 60px
  .blog-item + .blog-item
    margin-top: 10px
</style>