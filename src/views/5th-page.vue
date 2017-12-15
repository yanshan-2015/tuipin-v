<template>
    <div class="page4">
      <h1>page4</h1>
      <div class="button">
      </div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>
  .page4{
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
