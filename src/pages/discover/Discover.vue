<template>
  <div class="discover">
  	<search-bar></search-bar>
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
.discover
	width: 100vw
	height: 100vh
	background: #fff
</style>