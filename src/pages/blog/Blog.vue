<template>
  <div class="container">
    <!-- header -->
    <div class="header">
      <!-- post blog -->
      <div class="blog-post">
        <i class="iconfont icon-fabu"></i>
      </div>
      <!-- search -->
      <div class="blog-search">
        <search-bar />
      </div>
    </div>
    <!-- blog list -->
    <div class="blog-list">
      <div class="blog-item">
        <blog-card />
        <blog-panel />
      </div>
      <div class="blog-item">
        <blog-card />
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
  .blog-item
    background: #fff
    padding: 15px 10px
</style>