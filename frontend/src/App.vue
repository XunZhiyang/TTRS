<template>
  <div id="app" class="theme-color-green">
    <router-view/>
  </div>
</template>

<script>
  import store from './store'
  export default {
    store,
    name: 'App'
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  @import "style/theme-color";
</style>
