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
        <search-bar class="search" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/Search'

export default {
  components: {
    SearchBar,
  },
}  
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

.container
  height: 100vh
  width: 100vw
  background: $backgroundGrey
.header
  display: flex
  align-items: center
  padding: 7px
  background: #fff
  .blog-post
    width: 35px
    text-align: center
    .icon-fabu
      font-size: 21px
  .blog-search
    flex: 1  
</style>