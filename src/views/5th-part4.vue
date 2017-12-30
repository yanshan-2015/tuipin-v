<template>
  <div class="part4">
    <div class="top">
      <div class="topContain">
        <h1>智睡小报</h1>
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
            <li v-for="item in mattress">
              <img :src="item.img" alt="">
              <div class="describe">
                <h1>{{ item.name }}</h1>
                <h2>{{ item.module }}</h2>
                <p>{{ item.format }}</p>
              </div>
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
            <li v-for="item in pillow">
              <img :src="item.img" alt="">
              <div class="describe">
                <h1>{{ item.name }}</h1>
                <h2>{{ item.module }}</h2>
                <p>{{ item.format }}</p>
              </div>
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

  let PK={
      PK1:[
        {module: "PKZ1-005", name: "3D定型枕", format: "暂时没有收录", img:'../../static/IMG_3382.jpg'},
        {module: "PKZ1-006", name: "竹炭多功能枕", format: "暂时没有收录", img:'../../static/IMG_3382.jpg'},
        {module: "PKZ1-009", name: "记忆枕", format: "暂时没有收录",img:'../../static/IMG_3382.jpg'}
        ],
      PK2:[
        {module: "PKZ1-007", name: "3D蝶形成长枕", format: "暂时没有收录",img:'../../static/IMG_3382.jpg'},
        {module: "PKZ1-008", name: "竹炭助眠枕", format: "暂时没有收录",img:'../../static/IMG_3382.jpg'},
        {module: "PKZ1-010", name: "记忆枕", format: "暂时没有收录",img:'../../static/IMG_3382.jpg'}
        ],
      PK3:[
        {module: "PKZ1-011", name: "温感按摩枕", format: "暂时没有收录",img:'../../static/IMG_3382.jpg'},
        {module: "PKZ1-012", name: "竹炭按摩枕", format: "暂时没有收录",img:'../../static/IMG_3382.jpg'}
        ],
      PK4:[
        {module: "PKZ1-013", name: "记忆枕", format: "暂时没有收录",img:'../../static/IMG_3382.jpg'},
        {module: "PKZ1-015", name: "蝶形护颈枕", format: "暂时没有收录",img:'../../static/IMG_3382.jpg'}
        ],
      PK5:[
        {module: "PKZ1-016", name: "3D可调节枕", format: "暂时没有收录",img:'../../static/IMG_3382.jpg'},
        {module: "PKZ1-017", name: "竹炭助眠枕", format: "暂时没有收录",img:'../../static/IMG_3382.jpg'}
        ],
    };
  let MK={
      MK1:[
        {module: "MKB1-021A", name: "小独立筒弹簧床垫", format: "12cm 小独立筒",img:'../../static/IMG_2305.jpg'},
        {module: "MKB1-007", name: "独立筒弹簧床垫", format: "18cm 双层独立筒",img:'../../static/IMG_2305.jpg'},
        {module: "MKB1-003A", name: "3D棉床垫", format: "17cm 全3D",img:'../../static/IMG_2305.jpg'}
        ],
      MK2:[
        {module: "MKA1-052A", name: "独立筒弹簧床垫", format: "18cm 独立筒",img:'../../static/IMG_2305.jpg'},
        {module: "MKB1-063", name: "维密天使", format: "18cm 三区五段",img:'../../static/IMG_2305.jpg'},
        {module: "MKB1-007", name: "独立筒弹簧床垫", format: "18cm 双层独立筒",img:'../../static/IMG_2305.jpg'}
        ],
      MK3:[
        {module: "MKC1-059", name: "五段式独立筒弹簧床垫", format: "21cm 五段式独立筒",img:'../../static/IMG_2305.jpg'},
        {module: "MKC1-061", name: "蓝精灵", format: "17cm 三区五段",img:'../../static/IMG_2305.jpg'},
        {module: "MKB1-006B", name: "迷你独立筒弹簧床垫", format: "22cm 迷你独立筒",img:'../../static/IMG_2305.jpg'}
        ],
      MK4:[
        {module: "MKA1-011", name: "标准弹簧床垫", format: "16cm 整网弹簧",img:'../../static/IMG_2305.jpg'},
        {module: "MKC1-062", name: "水立方", format: "16cm 三区五段",img:'../../static/IMG_2305.jpg'},
        {module: "MKC1-060", name: "五段式独立筒弹簧床垫", format: "20cm 五段式独立筒",img:'../../static/IMG_2305.jpg'}
        ]
    };
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
          },
          mattress: '',
          pillow:''
        }
    },
    methods:{
      onReady: function(instance) {
        //console.log('这里写也行')
      },
      back: function () {
        this.$router.push({ name: 'part1'});
      },
      onClick: function (event, instance, echarts) {
        //console.log(event.color);
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

        //年龄判断床垫
        let _this = this;
        function mShow(age) {
          if(age<=3){
            _this.mattress = MK.MK1
          }else if(age>3 && age<=6){
            _this.mattress = MK.MK2
          }else if(age>6 && age<=12){
            _this.mattress = MK.MK3
          }else if(age>12 && age<=18){
            _this.mattress = MK.MK4
          }
        }
        mShow(_this.userinfo.age);
        //年龄判断枕头
        function pShow(age) {
          if(age<=1){
            _this.pillow = PK.PK1
          }else if(age>1 && age<=3){
            _this.pillow = PK.PK2
          }else if(age>3 && age<=6){
            _this.pillow = PK.PK3
          }else if(age>6 && age<=12){
            _this.pillow = PK.PK4
          }else{
            _this.pillow = PK.PK5
          }
        }
        pShow(_this.userinfo.age);
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
              width: 380px;
              height: 260px;
              border-bottom-left-radius: 6px;
              border-top-left-radius: 6px;
            }
            >div{
              display: inline-block;
              vertical-align: top;
              width: 260px;
              margin-top: 30px;
              margin-left: 20px;
              h1{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
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
