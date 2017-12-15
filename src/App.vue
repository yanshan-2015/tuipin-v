<template>
  <div id="app">
    <div class="top"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .top{
    position: fixed;
    left: 0;
    top: 0;
    height: 25px;
    width: 100%;
    background-color: #050505;
  }
}
</style>
