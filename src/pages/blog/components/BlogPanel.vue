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

.blog-panel
  background: #fff
  padding-left: 10px
.panel-box
  display: flex
  align-items: center
  .panel-item
    display: flex
    align-items: center
    padding: 10px 0
    .iconfont
      font-size: 20px
      margin-right: 3px
      color: #999
    .title
      color: #999
  .panel-item + .panel-item
    padding-left: 35px
</style>