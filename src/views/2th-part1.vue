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
            <input type="text" id="name" placeholder="your name" v-model="name">
          </div>
        </li>

        <li>
          <label>性别</label>
          <div class="choseSexy">
            <ul>
              <li v-for="(item, index) in sexImg" @click="choseSex(index)"
                  :class="{circle: index === currentSex}"></li>
            </ul>
          </div>
        </li>

        <li>
          <label>年龄</label>
          <div class="ageBox">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="(item, index) in ageRange" :key="item.id">
                <p @click="choseIt(index)" :class="{'active': currentItem === index}">{{item}}</p>
              </swiper-slide>
            </swiper>
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
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: '',
    components: { MyHead, swiper, swiperSlide},
    data() {
      return {
        name: '',
        sex: '',
        age: '',
        currentSex: '',
        currentItem: '',
        active: false,
        ageRange: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        sexImg:['../../static/boy2.png', '../../static/girl2.png'],
        activeImg: ['../../static/boy.png','../../static/girl.png'],
        swiperOption: {
          slidesPerView : 7.1,
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(0, 1000, false)
    },
    updated: function () {
      localStorage.name = this.name;
      localStorage.sex = this.sex;
      localStorage.age = this.age;
    },
    methods:{
      back:function () {
        this.$router.back();
      },
      go:function () {
        this.$router.push({ name: 'part2'})
      },
      choseSex: function (index) {
        this.currentSex = index;
      },
      choseIt: function (index) {
        this.currentItem = index;
        this.age = this.currentItem;
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
                width: 132px;
                height: 80px;
                border-radius: 40px;
                text-align: center;
              }
              li:nth-of-type(1){
                background: url("../../static/boy2.png")no-repeat center;
                background-size: auto 60px;
              }
              li:nth-of-type(2){
                background: url("../../static/girl2.png")no-repeat center;
                background-size: auto 60px;
              }
              .circle{
                border: 2px solid rgb(255,0,115);
              }
            }
          }
          .ageBox{
            width: 500px;
            height: 80px;
            padding-left: 22px;
            background-color: rgb(240,242,249);
            .swiper-slide{
              margin-top: 16px;
              p{
                width: 48px;
                height: 48px;
                line-height: 48px;
                text-align: center;
                border-radius: 24px;
                background-color: #fff;
                font-size: 24px;
                color: rgb(151,153,171);
              }
              .active{
                color: #fff;
                background-color: rgb(255,0,115);
              }
            }
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
