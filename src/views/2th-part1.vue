<template>
  <div class="part1">
    <div class="contain">
      <div class="header">
        <My-Head>
          <div slot="left" class="left" @click="back">
            <img src="../../static/iconfont-fanhui1.png">
          </div>
        </My-Head>
      </div>

      <h1>Part1</h1>

      <div class="word">
        <p>玩家扮演的不是士兵而是平民，在战火连连的城市中生存。玩家得在城市废墟中寻找食物、武器、零件等任何可以利用的物品。当然，大部分</p>
      </div>

      <ul>
        <li>
          <label for="name">姓名</label>
          <div class="name">
            <input type="text" id="name" placeholder="your name">
          </div>
        </li>

        <li>
          <label>性别</label>
          <div class="choseSexy">
            <ul>
              <li>
                <img :src="maleImg[0]" alt="" @click="male">
              </li>
              <li>
                <img :src="femaleImg[0]" alt="" @click="female">
              </li>
            </ul>
          </div>
        </li>

        <li>
          <label>年龄</label>
          <div class="ageBox">

          </div>
        </li>
      </ul>

      <div class="people">
        <img src="../../static/bigBoy.png" alt="">
      </div>

      <div class="button">
        <p @click="go">继续 ></p>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHead from '../components/Head.vue'

  export default {
    name: '',
    components: { MyHead},
    data() {
      return {
        femaleImg:['../../static/girl.png','../../static/girl2.png'],
        maleImg: ['../../static/boy.png','../../static/boy2.png']
      }
    },
    methods:{
      back:function () {
        this.$router.back();
      },
      go:function () {
        this.$router.push({ name: 'part2'})
      },
      male:function () {

      },
      female:function () {

      }
    }
  }
</script>

<style lang="less" scoped>
  .part1{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(246,247,251);
    .contain{
      width: 100%;
      height: auto;
      background: rgb(246,247,251);
      .header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
      }
      >h1{
        margin-top: 228px;
        margin-left: 30px;
        font-size: 60px;
        font-weight: bold;
        color: rgb(46,59,83);
      }
      .word{
        padding: 50px 0 30px 0;
        margin: 0 120px 0 30px;
        text-align: justify;
        font-size: 32px;
        color: rgb(151,153,171);
      }
      >ul{
        margin: 0 30px;
        li{
          height: 80px;
          margin-bottom: 20px;
          line-height: 80px;
          label{
            float: left;
            font-weight: bold;
            font-size: 32px;
            color: rgb(58,68,74);
          }
          >div{
            float: left;
            margin-left: 30px;
          }
          .name{
            width: 430px;
            background: #fff;
            border-radius: 8px;
            input{
              padding-left: 20px;
              font-size: 32px;
              border: none;
            }
            input::-webkit-input-placeholder{
              color: rgb(151,153,171);
            }
          }
          .choseSexy{
            width: 280px;
            height: 80px;
            border-radius: 40px;
            background-color: #fff;
            ul{
              overflow: hidden;
              li{
                float: left;
                width: 140px;
                height: 80px;
                background-color: coral;
                border-radius: 40px;
                text-align: center;
              }
            }
          }
          .ageBox{
            width: 500px;
            height: 80px;
            background-color: rgb(240,242,249);
          }
        }
      }
      .people{
        margin-top: 40px;
        text-align: center;
        img{
          width: auto;
          height: 445px;
        }
      }
      .button{
        position: absolute;
        right: 30px;
        bottom: 26px;
        text-align: right;
        p{
          font-size: 38px;
          color: rgb(0,136,255)
        }
      }
    }

  }
</style>
