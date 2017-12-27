/**
 * Created by yanshan on 2017/7/18.
 */
//BMI计算方式，x代表体重，y代表身高
let BMIFun = function (x, y) {
    let height = y/100;
    return (x/(height*height)).toFixed(1);
};
//指数计算方式，x代表肩宽，y代表臀围
let Index = function (x, y) {
    let result;
    if(x-y>0){
        result = (x/y-1)*100;
    }else{
        result = (y/x-1)*100;
    }
    return indexCompare(result);
};
//计算承重区域颜色，x代表体重，y代表身高
let Color = function (x, y) {
    let height = y/100;
    let result = (x/(height*height)).toFixed(2);
    return colorCompare(result);
};

//辅助函数
function indexCompare(n) {
    if(0<=n && n<=10 ){
        return 1
    }
    else if(10<n && n<=15){
        return 2
    }
    else if(15<n && n<=20){
        return 3
    }
    else if(20<n && n<=30){
        return 4
    }
    else if(30<n){
        return 5
    }
}
function colorCompare(n) {
    if(0<=n && n<=20){
        return '蓝'
    }
    else if(20<n && n<=24){
        return '绿'
    }
    else if(24<n && n<=28){
        return '橙'
    }
    else if(28<n){
        return '红'
    }
}
function valueRanges(x) {
  if(x>100) {
    x =100;
    return x
  }
  if(x<18.5){
    return x*(20/18.5).toFixed(1);
  }
  else if(18.5<=x && x<25){
    return 20+(x-18.5)*(20/6.5).toFixed(1);
  }
  else if(25<=x && x<30){
    return 40+(x-25)*(20/5).toFixed(1);
  }
  else if(30<=x && x<35){
    return 60+(x-30)*(20/5).toFixed(1);
  }
  else if(35<=x){
    return 80+(x-35)*(20/65).toFixed(1)
  }
}
export { BMIFun, Index, Color, valueRanges}
