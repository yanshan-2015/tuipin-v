<!--
样例：
<my-header>
  <div slot="left" class="left">
    <img>
    <span>返回</span>
  </div>
  <p slot="mid" class="mid">{{title}}</p>
  <div slot="right" class="right">
    <img>
    <span>更多</span>
  </div>
</my-header>

-->


<template>
  <div class="Head">
    <slot name="left"></slot>
    <slot name="mid"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>

<style lang="less" scoped="">
  .Head{
    position: relative;
    height: 80px;
    width: 100%;
    .left, .right{
      position: absolute;
      top: 0;
      height: 80px;
      width: 1.6rem;
      line-height: 80px;
      img{
        display: inline-block;
        vertical-align: middle;
      }
      span{
        font-size: 36px;
      }
    }
    .left{
      left: 0;
      text-align: left;
      img{
        width: 28px;
        height: 30px;
        margin-left: 26px;
      }
    }
    .right{
      right: 0;
      text-align: right;
      img{
        margin-right: 30px;
      }
    }
    .mid{
      width: 66%;
      height: 80px;
      margin: 0 auto;
      line-height: 1.2rem;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.48rem;
    }
  }
</style>
