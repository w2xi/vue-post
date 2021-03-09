<template>
  <div>
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

<style lang="stylus" scoped="">
.header
  display: flex
  align-items: center
  .blog-post
    width: 40px
  .blog-search
    flex: 1  
    overflow: hidden
</style>