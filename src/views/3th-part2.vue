<template>
    <div class="part3">
      <div class="header">
        <My-Head>
          <div slot="left" class="left" @click="back">
            <img src="../../static/iconfont-fanhui1.png">
          </div>
        </My-Head>
      </div>

      <h1>Part2</h1>

      <div class="word">
        <p>玩家扮演的不是士兵而是平民，在战火连连的城市中生存。玩家得在城市废墟中寻找食物、武器、零件等任何可以利用的物品。当然，大部分。</p>
      </div>

      <ul class="info">
        <li>
          <label for="height">身高</label>
          <div class="bg"><input v-model="height" ref="input1" @change="change1" type="number" id="height" placeholder="你的身高 45~191">cm</div>
        </li>
        <li>
          <label for="weight">体重</label>
          <div class="bg"><input v-model="weight" ref="input2" @change="change2" type="number" id="weight" placeholder="你的体重 2.4~46.9">kg</div></li>
        <li>
          <label for="jiankuan">肩宽</label>
          <div class="bg"><input v-model="jiankuan" ref="input3" @change="change3" type="number" id="jiankuan" placeholder="两肩之间的距离 15~50">cm</div></li>
        <li>
          <label for="touwei">头围</label>
          <div class="bg"><input v-model="touwei" ref="input4" @change="change4" type="number" id="touwei" placeholder="头直径最大处绕一圈 15~50">cm</div></li>
        <li>
          <label for="jingchang">颈长</label>
          <div class="bg"><input v-model="jingchang" ref="input5" @change="change5" type="number" id="jingchang" placeholder="脖子长度 3~20">cm</div></li>
        <li>
          <label for="jingkuan">颈宽</label>
          <div class="bg"><input v-model="jingkuan" ref="input6" @change="change6" type="number" id="jingkuan" placeholder="脖子长度 3~20">cm</div></li>
      </ul>

      <div class="button">
        <p @click="go">开始分析 ></p>
      </div>
    </div>
</template>

<script>
    import MyHead from '../components/Head.vue'
    export default {
      name: '',
      components: { MyHead },
      data() {
        return {
          height: '',
          weight: '',
          jiankuan: '',
          touwei: '',
          jingchang: '',
          jingkuan: ''
        }
      },
      /*updated:function () {
        localStorage.weight = this.weight;
        localStorage.jiankuan = this.jiankuan;
        localStorage.touwei = this.touwei;
        localStorage.jingchang = this.jingchang;
        localStorage.jingkuan = this.jingkuan;

      },*/
      methods:{
        go: function () {
          this.$router.push({ name: 'part3'});
          let  _this= this;
          //设置随机时间
          let randomNum = (1000 + Math.random()*3000).toFixed(0);
          setTimeout(function () {
            _this.$router.push({ name: 'part4'})
          },randomNum)
        },
        back:function () {
          this.$router.back();
        },
        change1:function () {
          if(45.4<this.$refs.input1.value && this.$refs.input1.value<=191.1){
            localStorage.height = this.height;
          }else {
            alert('输入值不在范围内');
            this.height = ''
          }
        },
        change2:function () {
          if(2.4<this.$refs.input2.value && this.$refs.input2.value<=46.9){
            localStorage.weight = this.weight;
          }else {
            alert('输入值不在范围内');
            this.weight = ''
          }
        },
        change3:function () {
          if(15<this.$refs.input3.value && this.$refs.input3.value<=50){
            localStorage.jiankuan = this.jiankuan;
          }else {
            alert('输入值不在范围内');
            this.jiankuan = ''
          }
        },
        change4:function () {
          if(15<this.$refs.input4.value && this.$refs.input4.value<=50){
            localStorage.touwei = this.touwei;
          }else {
            alert('输入值不在范围内');
            this.touwei = ''
          }
        },
        change5:function () {
          if(3<this.$refs.input5.value && this.$refs.input5.value<=20){
            localStorage.jingchang = this.jingchang;
          }else {
            alert('输入值不在范围内');
            this.jingchang = ''
          }
        },
        change6:function () {
          if(3<this.$refs.input6.value && this.$refs.input6.value<=20){
            localStorage.jingkuan = this.jingkuan;
          }else {
            alert('输入值不在范围内');
            this.jingkuan = ''
          }
        }
      }
    }
</script>

<style lang="less" scoped>
  .part3{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(246,247,251);
    .header{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
    >h1{
      margin-top: 138px;
      margin-left: 30px;
      font-size: 60px;
      font-weight: bold;
      color: rgb(46,59,83);
    }
    .word{
      padding: 50px 0 30px 0;
      margin: 0 30px;
      text-align: justify;
      font-size: 32px;
      color: rgb(151,153,171);
    }
    .info{
      margin: 30px 30px 0;
      li{
        height: 80px;
        margin-bottom: 20px;
        line-height: 80px;
        label{
          float: left;
          font-size: 32px;
          font-weight: bold;
          color: rgb(58,68,74);
        }
        div{
          float: left;
          width: 430px;
          margin-left: 80px;
          background-color: #fff;
          border-radius: 8px;
          font-size: 32px;
          color: rgb(58,68,74);
          input{
            width: 350px;
            height: 80px;
            border: none;
            padding-left: 15px;
            font-size: 32px;
            color: rgb(58,68,74);
          }
          input::-webkit-input-placeholder{
            font-size: 28px;
            color: rgb(151,153,171);
          }
        }
      }
    }
    .button{
      position: absolute;
      bottom: 26px;
      right: 30px;
      text-align: right;
      p{
        font-size: 38px;
        color: rgb(0,136,255)
      }
    }
  }
</style>
