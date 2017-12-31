<template>
  <div class="login">

    <div class="logo">
      <img src="../../static/ip.png" alt="">
    </div>
    <h1>欢迎使用</h1>
    <ul>
      <li>
        <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" ref="phoneVal" @change="phoneChange">
        <img src="../../static/iconfont-cha.png" alt="" @click="del">
      </li>
      <li>
        <input type="password" placeholder="密码" v-model="password" ref="passVal" @change="passChange">
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
  import {devPath} from '../js/path'
    export default {
      name: '',
      components: {},
      data() {
          return {
            phone: '',
            password: ''
          }
      },
      mounted:function () {
        this.phone = localStorage.phone;
        this.password = localStorage.password;
      },
      methods:{
        phoneValue:function () {
          return this.$refs.phoneVal.value
        },
        passValue: function () {
          return this.$refs.passVal.value
        },
        login: function () {
          if(this.phoneValue() === ''){
            alert('电话不能为空');
            return false
          }
          if(this.passValue() === ''){
            alert('密码不能为空');
            return false
          }
          //登录校验
          this.$http.get(devPath+'/user_check.jsp',
          {params:{
              user: this.phoneValue(),
              pwd: this.passValue
            }
          }).then((response) => {
            if(response.body.status === 'false'){
              alert('账户或密码错误!');
              return false
            }else {
              this.$router.push({ name: 'part1'})
            }
          },(response) => {
            console.log(response)
          })
        },
        del: function () {
          this.phone = '';
          this.password = '';
          localStorage.phone = '';
          localStorage.password = ''
        },
        phoneChange: function () {
          let phoneReg = /^1[34578]\d{9}$/; //电话正则
          if(phoneReg.test(this.phoneValue()) === false){
            alert('请输入正确的电话号码');
            this.phone = '';
            this.password = '';
            localStorage.phone = '';
            localStorage.password = '';
            return false;
          }else{
            localStorage.phone = this.phone;
          }
        },
        passChange: function () {
          localStorage.password = this.password;
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
        width: 218px;
        height: auto;
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
