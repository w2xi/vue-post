<template>
  <div class="discover">
  	<search-blog></search-blog>
  </div>
</template>

<script>
import SearchBlog from './components/SearchBlog'

export default {
  components: {
  	SearchBlog,
  },
}  
</script>

<style lang="stylus" scoped="">
.discover
	width: 100vw
	height: 100vh
	background: #efefef
</style>