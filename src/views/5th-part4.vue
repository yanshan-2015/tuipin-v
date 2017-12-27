<template>
  <div class="part4">
    <div class="top">
      <div class="topContain">
        <h1>测试报告</h1>
        <div class="word">
          <p>亲爱的 {{userinfo.name}} 小朋友：</p>
          <p>我们都觉得你表现非常棒，作为奖</p>
          <p>励，告诉你一些关于你的小秘密。</p>
        </div>
        <img src="../../static/kaola.png" alt="">
      </div>
    </div>
    <div class="contain">
      <div class="simpleInfo">
        <img src="../../static/boy3.png" alt="">
        <div class="word">
          <h1>{{userinfo.name}}</h1>
          <h2>{{userinfo.age}}岁</h2>
          <p>测试日期：{{time}}</p>
        </div>
      </div>

      <div class="chart">
        <div class="left">
          <h1><label for="height">身高:</label> <input type="text" id="height" v-model="bar1.series[0].data[1]"> cm</h1>
          <div class="box">
            <IEcharts :option="bar1" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
          </div>
        </div>
        <div class="right">
          <h1><label for="weight">体重:</label> <input type="text" id="weight" readonly v-model="bar2.series[0].data[1]"> kg</h1>
          <div class="box">
            <IEcharts :option="bar2" :loading="loading" @click="onClick"></IEcharts>
          </div>
        </div>
      </div>

      <div class="value">
        <img src="../../static/dashboard.png" alt="">
        <div id="BMI">
          <h1>您的体质指数为：</h1>
          <h2>{{userinfo.BMI}}</h2>
          <div class="sort">
            <span>过轻</span>
            <span>正常</span>
            <span>过重</span>
            <span>肥胖</span>
            <span>过胖</span>
            <span class="active" :style="stable"></span>
          </div>
        </div>
      </div>

      <div class="mattress">
        <div class="word">
          根据身体测量情况，参照30000组青少年儿童成长大数据研究分析，下面的床垫非常适合你，赶紧看看：
        </div>
        <div class="product">
          <ul>
            <li>
              <img src="../../static/IMG_2305.jpg" alt="">
              <div class="describe">
                <h1>维密天使</h1>
                <h2>MKB1-063</h2>
                <p>规格：120*200*30</p>
              </div>
            </li>
            <li>
              <img src="../../static/IMG_2305.jpg" alt="">
              <div class="describe">
                <h1>维密天使</h1>
                <h2>MKB1-063</h2>
                <p>规格：120*200*20</p>
              </div>
            </li>
            <li>
              <img src="../../static/IMG_2305.jpg" alt="">
              <div class="describe">
                <h1>维密天使</h1>
                <h2>MKB1-063</h2>
                <p>规格：120*200*10</p></div>
            </li>
          </ul>
        </div>
      </div>

      <ul class="param">
        <li><h1>{{userinfo.touwei}}</h1><p>头围(cm)</p></li>
        <li><h1>{{userinfo.jingchang}}</h1><p>颈长(cm)</p></li>
        <li><h1>{{userinfo.jingkuan}}</h1><p>颈宽(cm)</p></li>
        <li><h1>{{userinfo.jiankuan}}</h1><p>肩宽(cm)</p></li>
      </ul>

      <div class="pillow">
        <div class="word">
          根据身体测量情况，这几款枕头能够全面贴合、支撑你的小脑袋、肩颈，让你放松舒睡：
        </div>
        <div class="product">
          <ul>
            <li>
              <img src="../../static/IMG_3382-33.jpg" alt="">
              <div class="describe">
                <h1>维密天使</h1>
                <h2>MKB1-063</h2>
                <p>规格：120*200*10</p></div>
            </li>
            <li>
              <img src="../../static/IMG_3382-33.jpg" alt="">
              <div class="describe">
                <h1>维密天使</h1>
                <h2>MKB1-063</h2>
                <p>规格：120*200*10</p></div>
            </li>
            <li>
              <img src="../../static/IMG_3382-33.jpg" alt="">
              <div class="describe">
                <h1>维密天使</h1>
                <h2>MKB1-063</h2>
                <p>规格：120*200*10</p></div>
            </li>
          </ul>
        </div>
      </div>

      <div class="button">
        <p @click="back">返回测试 ></p>
      </div>

    </div>
  </div>
</template>

<script type="text/babel">
  import IEcharts from 'vue-echarts-v3/src/full.js'
  import { BMIFun, valueRanges } from '../js/components/BMI-index-color'
  export default {
    name: '',
    components: { IEcharts },
    data() {
        return {
          userinfo:{
            name: '',
            age: '',
            BMI: '11',
            touwei: '0',
            jingchang: '0',
            jingkuan: '0',
            jiankuan: '0'
          },
          time:'',
          loading: false,
          stable: {
            left: '0',
            marginLeft:'-8px'
          },
          bar1: {
            xAxis: {
              data: ['最低', '你的', '标准']
            },
            yAxis: {
              show: true,
            },
            series: [{
              label:{
                normal: {
                  show: true,
                  position: 'top',
                  color: '#444',
                }
              },
              name: '身高',
              type: 'bar',
              barWidth: '16',
              data: [110, 120, 154],
              itemStyle: {
                normal: {
                  color: function (params) {
                    let colorList = [
                      '#00D800','#FFBA00','#00D800'
                    ];
                    return colorList[params.dataIndex]
                  }
                },
              },
            }],
            grid:{
              left: '19%',
              height: '120',
              top: '30'
            }
          },
          bar2: {
            xAxis: {
              data: ['最低', '你的', '最高']
            },
            yAxis: {
              position: 'left',
              offset: ''
            },
            series: [{
              name: '体重',
              type: 'bar',
              barWidth: '16',
              zlevel: '2',
              data: [45, 45, 60],
              label:{
                normal: {
                  show: true,
                  position: 'top',
                }
              },
              itemStyle: {
                normal: {
                  color: function (params) {
                    let colorList = [
                      '#00D800','#FFBA00','#00D800'
                    ];
                    return colorList[params.dataIndex]
                  }
                },
              },
            }],
            grid:{
              left: '16%',
              height: '120',
              top: '30'
            }
          }
        }
    },
    methods:{
      onReady: function(instance) {
        console.log('这里写也行')
      },
      back: function () {
        this.$router.push({ name: 'part1'});
      },
      onClick: function (event, instance, echarts) {
        console.log(event.color);
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        //测试日期:
        let times = new Date();
        let thisYear = times.getFullYear();
        let thisMon = times.getMonth()+1;
        let thisDate = times.getDate();
        this.time = thisYear+'年'+thisMon+'月'+thisDate+'日';

        //个人信息：
        this.userinfo.name = localStorage.name || '某某';
        this.userinfo.age = localStorage.age || 0;
        this.userinfo.touwei = localStorage.touwei || 0;
        this.userinfo.jingchang = localStorage.jingchang || 0;
        this.userinfo.jingkuan = localStorage.jingkuan || 0;
        this.userinfo.jiankuan = localStorage.jiankuan || 0;
        //身高：
        this.bar1.series[0].data.splice(1,1,localStorage.height||100);
        //体重：
        this.bar2.series[0].data.splice(1,1,localStorage.weight||50);
        //IBM值:
        let val = BMIFun(this.bar2.series[0].data[1],this.bar1.series[0].data[1]);
        this.userinfo.BMI = val;
        //游标值:
        this.stable.left = valueRanges(val)+'%';
      })
    }
  }
</script>

<style lang="less" scoped>
  .part4{
    background-color: rgb(246,247,251);
    .top{
      background: url("../../static/top.png")no-repeat center;
      background-size: 100% auto;
      .topContain{
        position: relative;
        padding: 190px 30px 120px;
        h1{
          font-weight: bold;
          font-size: 60px;
          color: #fff;
        }
        .word{
          padding-top: 50px;
          p{
            line-height: 48px;
            font-size: 32px;
            color: #fff;
          }
        }
        img{
          position: absolute;
          right: 30px;
          top: 190px;
          width: 200px;

        }
      }
    }
    .contain{
      padding: 60px 30px 0;
      .simpleInfo{
        position: relative;
        height: 140px;
        margin: 0 0 30px 30px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(151,153,171,0.1);
        img{
          position: absolute;
          top: 10px;
          left: -30px;
          width: 120px;
          height: 120px;
        }
        .word{
          padding-top: 20px;
          margin-left: 132px;
          h1{
            display: inline-block;
            font-weight: bold;
            font-size: 32px;
            color: rgb(58,68,74);
            margin-bottom: 15px;
          }
          h2{
            float: right;
            padding-right: 30px;
          }
          h2,p{
            font-size: 28px;
            color: rgb(151,153,171);
          }
        }
      }
      .chart{
        height: 470px;
        .left,.right{
          float: left;
          width: 49%;
          height: 470px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(151,153,171,0.1);
          h1{
            margin-top: 30px;
            border-left: 8px solid #ff5177;
            font-size: 32px;
            color: rgb(151,153,171);
            label{
              display: inline-block;
              margin-left: 16px;
              font-style: normal;
              font-weight: bold;
              font-size: 32px;
              color: rgb(58,68,74);
            }
            input{
              display: inline-block;
              height: 41px;
              line-height: 41px;
              text-align: right;
              font-size: 32px;
              color: rgb(151,153,171);
              border: none;
            }
          }
          .box{
            height: 100%;
            padding: 0 0 0 22px;
          }
        }
        .left{

        }
        .right{
          margin-left: 2%;
        }
      }
      .value{
        height: 200px;
        margin-top: 30px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(151,153,171,0.1);
        overflow: auto;
        >img{
          display: inline-block;
          float: left;
          vertical-align: middle;
          width: 118px;
          height: 136px;
          padding: 32px 30px 32px 18px;
        }
      }
      .mattress{
        margin-top: 50px;
      }
      .pillow{
        margin-top: 30px;
      }
      .mattress,.pillow{
        >.word{
          font-size: 32px;
          color: rgb(58,68,74);
          line-height: 48px;
          text-align: justify;
        }
        ul{
          margin-top: 30px;
          li{
            height: 260px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(151,153,171,0.1);
            margin-bottom: 10px;
            img{
              display: inline-block;
              vertical-align: top;
              width: 400px;
              height: 260px;
              border-bottom-left-radius: 6px;
              border-top-left-radius: 6px;
            }
            >div{
              display: inline-block;
              vertical-align: top;
              margin-top: 30px;
              margin-left: 20px;
              h1{
                font-weight: bold;
                font-size: 32px;
                color: rgb(46,59,83);
                margin-bottom: 20px;
              }
              h2{
                font-size: 32px;
                color: rgb(58,68,74);
              }
              p{
                margin-top: 65px;
                font-size: 26px;
                color: rgb(58,68,74);
              }
            }
          }
        }
      }
      .param{
        margin-top: 100px;
        height: 150px;
        li{
          float: left;
          height: 150px;
          width: 150px;
          text-align: center;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(151,153,171,0.1);
          h1{
            font-weight: bold;
            font-size: 80px;
            color: rgb(46,59,83);
            border-bottom: 1px solid rgb(204,204,204);
          }
          p{
            padding: 10px 0;
            font-size: 28px;
            color: rgb(58,68,74);
          }
        }
        li:nth-of-type(2){
          margin-left: 30px;
        }
        li:nth-of-type(3){
          margin-left: 30px;
        }
        li:nth-of-type(4){
          margin-left: 30px;
        }
      }

      .button{
        margin-top: 30px;
        padding-bottom: 50px;
        p{
          text-align: right;
          font-size: 38px;
          color: rgb(0,136,255)
        }
      }
    }
  }
  #BMI{
    float: left;
    margin-top: 24px;
    h1{
      font-weight: bold;
      font-size: 24px;
      color: rgb(58,68,74);
    }
    h2{
      font-weight: bold;
      font-size: 70px;
      color: rgb(255,0,115);
    }
    .sort{
      position: relative;
      height: 54px;
      margin-top: -6px;
      span{
        display: block;
        float: left;
        width: 93px;
        height: 28px;
        text-align: center;
        font-size: 20px;
        color: #fff;
      }
      span:nth-of-type(1){
        background-color: rgb(109,222,192);
      }
      span:nth-of-type(2){
        background-color: rgb(159,244,79);
      }
      span:nth-of-type(3){
        background-color: rgb(255,186,0);
      }
      span:nth-of-type(4){
        background-color: rgb(255,110,64);
      }
      span:nth-of-type(5){
        background-color: rgb(255,81,119);
      }
      .active{
        position: absolute;
        width: 16px;
        height: 16px;
        top: 28px;
        left: -8px;
        background: url("../../static/tri.png")no-repeat center;
        background-size: 100% 100%;
      }
    }
  }
  #height{
    width: 60px;
  }
  #weight{
    width: 45px;
  }
</style>
