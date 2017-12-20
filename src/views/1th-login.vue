<template>
  <div class="login">

    <div class="logo">
      <img src="../../static/ip.png" alt="">
    </div>
    <h1>欢迎使用</h1>
    <ul>
      <li>
        <input type="tel" maxlength="11" placeholder="手机号">
        <img src="../../static/iconfont-cha.png" alt="">
      </li>
      <li>
        <input type="password" placeholder="密码">
      </li>
    </ul>

    <div class="button">
      <p @click="login">登 录</p>
    </div>

    <div class="hint">
      <h2>本应用为慕思儿童专属所有</h2>
      <h2>暂供内部测试</h2>
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
          this.$router.push({path: "part1"})
        }
      }
    }
</script>

<style lang="less" scoped>
  .login{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(246,247,251);
    .logo{
      margin-top: 160px;
      img{
        display: block;
        margin: 0 auto;
      }
    }
    h1{
      margin-top: 40px;
      text-align: center;
      font-size: 48px;
      color: rgb(58,68,74);
    }
    ul{
      width: 610px;
      padding-top: 120px;
      margin: 0 auto;
      li{
        width: 100%;
        height: 80px;
        margin-bottom: 40px;
        border-bottom: 1px solid rgb(204,204,204);
        input{
          display: inline-block;
          width: 500px;
          height: 80px;
          border: none;
          font-size: 40px;
          color: rgb(58,68,74);
          background: none;
          vertical-align: middle ;
        }
        input::-webkit-input-placeholder{
          color: rgb(151,153,171);
        }
        img{
          display: inline-block;
          width: 30px;
          height: 30px;
          padding: 25px 35px;
          vertical-align: middle;
        }
      }
    }
    .button{
      width: 610px;
      margin: 0 auto;
      p{
        width: 100%;
        height: 80px;
        margin: 0 auto;
        line-height: 80px;
        text-align: center;
        background-color: rgba(255,0,115,0.8);
        border-radius: 8px;
        font-size: 38px;
        color: #fff;
      }
    }
    .hint{
      position: absolute;
      bottom: 40px;
      left: 0;
      width: 100%;
      h2{
        text-align: center;
        font-size: 24px;
        color: rgb(151,153,171);
      }
    }
  }
</style>
