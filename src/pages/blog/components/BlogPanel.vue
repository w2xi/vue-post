<template>
  <div class="blog-panel">
    <ul class="panel-box">
      <li class="panel-item">
        <i class="iconfont icon-share"></i>
        <span class="title">分享</span>
      </li>
      <li class="panel-item">
        <i class="iconfont icon-comment1"></i>
        <span class="title">1212</span>
      </li>
      <li class="panel-item">
        <i class="iconfont icon-good"></i>
        <span class="title">1212</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'

.panel-box
  display: flex
  align-items: center
  background: #fff
  .panel-item
    display: flex
    align-items: center
    padding: 10px 18px
    .iconfont
      font-size: 20px
      margin-right: 3px
      color: #999
    .title
      color: #999
</style>