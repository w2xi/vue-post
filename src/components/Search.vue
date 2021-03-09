<template>
  <div class="search-container">
    <i class="iconfont icon-sousuo search-icon"></i>
    <input class="search-input" v-model="content" placeholder="请随便搜点什么" />
    <button class="search-btn">搜索</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      content: '',
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

.search-container 
  display: flex
  align-items: center
  position: relative
  margin-left: 20px
  margin-right: 10px
  font-size: 13px
  .search-icon
    position: absolute
    top: 50%
    transform: translate(50%, -50%)
  .search-input
    flex: 1
    height: 35px  
    padding-left: 28px
    border-radius: 30px
    border: none
    background: #f5f5f5
  .search-btn
    height: 35px
    width: 60px
    border: none
    border-radius: 30px
    background: $activeGreen
    color: #fff
    
</style>