<template>
  <div id="app">
    <home-header></home-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import HomeHeader from 'components/header/m-header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'
export default {
  name: 'App',
  components: {
    HomeHeader,
    Tab,
    Player
  }
}
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"
#app
  color: $color-theme
</style>
