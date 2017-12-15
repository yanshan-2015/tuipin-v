<template>
  <div class="page2">
    <h1>page2</h1>
    <div class="button">
      <p @click="login">登 录</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: '',
      components: {},
      data() {
          return {}
      },
      methods:{
        login: function () {
          this.$router.push({path: "page3"})
        }
      }
    }
</script>

<style lang="less" scoped>
  .page2{
    padding-top: 25px;
    h1{
      text-align: center;
      font-size: 36px;
    }
    .button{
      position: absolute;
      bottom: 80px;
      left: 0;
      width: 100%;
      p{
        width: 66%;
        height: 80px;
        margin: 0 auto;
        line-height: 80px;
        text-align: center;
        background-color: coral;
        border-radius: 15px;
        font-size: 36px;
      }
    }
  }
</style>
