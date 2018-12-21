<template>
  <div class="music-list">
    <div class="back">
      <i class="icon-back"></i>
    </div>
    <h1 class="title">我是大侦探</h1>
    <div class="bg-image"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    bgImage: {
      type: String,
      default: ''
    },
    songs: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'
  .music-list
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background
    .title
      position: absolute
      top: 0
      left: 10%
      text-align: center
      color: $color-text

</style>
