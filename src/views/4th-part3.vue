<template>
    <div class="part3">
        <div class="hint">
          <img src="../../static/loading.gif" alt="">
          <p>正在为你分析睡眠密码</p>
        </div>
    </div>
</template>

<script>
  import MyHead from '../components/Head.vue'
  export default {
    name: '',
    components: { MyHead },
    data() {
      return {}
    },
    mounted: function () {
      let  _this= this;
      //设置随机时间
      let randomNum = (1000 + Math.random()*3000).toFixed(0);
      setTimeout(function () {
        _this.$router.push({ name: 'part4'})
      },randomNum);
    }
  }
</script>

<style lang="less" scoped>
  .part3{
    .hint{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 80%;
      height: 415px;
      margin: auto;
      text-align: center;
      img{
        width: 196px;
        height: auto;
      }
      p{
        padding-top: 48px;
        font-size: 38px;
        color: rgb(171,153,171);
      }
    }
  }
</style>
