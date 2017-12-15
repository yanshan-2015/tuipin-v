<template>
    <div class="index">
      <div class="contain">
        <h1>推品-儿童</h1>
        <div class="dialog">
          <ul>
            <li><label for="phone">手机号：</label><input type="tel" id="phone" name="phone"></li>
            <li><label for="password">密码：</label><input type="tel" id="password" name="password"></li>
          </ul>
        </div>
        <div class="button">
          <p @click="login">登 录</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'index',
      components: {},
      data() {
          return {
            title: 'cli'
          }
      },
      methods:{
        login: function () {
          this.$router.push({path: "page1"})
        }
      }
    }
</script>

<style lang="less" scoped>
  .index{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
    .contain{
      width: 100%;
      height: 100%;
      background: url("../assets/timg2.jpg")no-repeat;
      background-size: cover;
      h1{
        padding-top: 140px;
        text-align: center;
        font-size: 48px;
        color: coral;
      }
      .dialog{
        width: 74%;
        height: 300px;
        margin: 180px auto 0;
        border-radius: 15px;
        background: rgba(230,230,230,0.6);
        ul{
          padding-top: 50px;
          width:80%;
          margin: 0 auto;
          li{
            height: 100px;
            line-height: 100px;
            font-size: 32px;
            label{
              display: inline-block;
              width: 31%;
              text-align: right;
              color: coral;
            }
            input{
              width: 66%;
              height: 50px;
              padding-left: 3%;
              border: none;
              border-radius: 6px;
              background-color: beige;
            }
          }
        }
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
  }
</style>
