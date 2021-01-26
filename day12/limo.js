/**
 * 这是李某的工具函数库
 * 可调用内置函数如下：
 * 1. 随机数myRandom(最小值, 最大值, true)
 *    获取最小值到最大值之间的随机数，可获取两端边界值
 *    myRandom(num):获取[0,num]之间的随机数
 *    myRandom(num1, num2):获取[num1, num2]之间的随机数
 *    myRandom(num, true):获取[0, num]之间的小数（保留两位）
 *    myRandom(num1, num2, true):获取[num1, num2]之间的小数（保留两位）
 * . 单属性匀速动画函数 animeAttr(执行运动的dom元素, 需要改变的dom元素属性, 目标值, 速度[可选，默认5])
 *      animateAttr(box,'width',100,10)
 * 
 * . 单属性缓冲动画函数 animeOne(执行运动的dom元素, 需要改变的dom元素属性, 目标值,速度[可选，值越大越慢，默认10])
 *      
 * . 多属性缓冲动画函数 animeJson(执行运动的dom元素, 传入的目标值对象, 速度[可选，值越大越慢，默认10])
 *      aDiv.onclick = function () {
 *        animeJson(this,{
 *          width:1000;
 *          backgroundColor:bule;
 *        });
 *      };
 */
function animateAttr(dom, attr, target, speed){
  if (attr === 'opacity') {
    var current = parseInt( getComputedStyle(dom)[attr]*100 )
    target *= 100
  } else if (attr.indexOf('scroll') !== -1) {
    var current = dom[attr]
  } else {
    var current = parseInt( getComputedStyle(dom)[attr] )
  }
  speed = speed || 10
  if (current > target){
    speed = -Math.abs(speed)
  } else {
    speed = Math.abs(speed)
  }

  clearInterval(dom.timer)
  dom.timer = setInterval(function (){
    current += speed
    if ( Math.abs(target-current) <= Math.abs(speed) ) {
      current = target
      clearInterval(dom.timer)
    }
    if (attr === 'opacity') {
      dom.style[attr] = current/100
    } else if (attr.indexOf('scroll') !== -1) {
      dom[attr] = current
    } else {
      dom.style[attr] = current + 'px'
    }
  },20)
}

function animeOne(obj, attr, value, speed) {
  function getStyle(obj, attr) {
    if (obj.currentStyle) {
      return obj.currentStyle[attr];
    } else {
      return getComputedStyle(obj, false)[attr];
    }
  };
  clearInterval(obj.timer); //防止连续点击出现多个定时器
  obj.timer = setInterval(function () { //为当前对象添加定时器
    var iCur = 0;
    if (attr == 'opacity') { //如果获取的属性值为透明度
      iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100); //获取透明度值
    } else {
      iCur = parseInt(getStyle(obj, attr)); //获取其它属性值
    }
    var iSpeed = iSpeed || (value - iCur) / (speed || 10); //实现缓冲运动
    iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed); //将值取整，以免永远无法达到目标值
    if (iCur == value) { //如果已经达到目标值
      clearInterval(obj.timer); //清除定时器
    } else { //否则
      if (attr == 'opacity') { //如果属性为透明度
        obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')'; //为透明度赋值，分别处理兼容
        obj.style.opacity = (iCur + iSpeed) / 100;
      } else { //设置其它属性的值
        obj.style[attr] = iCur + iSpeed + 'px';
      }
    }
  }, 30)
}

function animeJson (dom, attrObj, ispeed) {
  for (let key in attrObj) {
    let current, target
    if (key == 'opacity') {
      current = parseInt(getComputedStyle(dom)[key]) * 100
      target = attrObj[key] * 100
    } else if (key.indexOf('scroll') != -1) {
      current = dom[key]
      target = attrObj[key]
    } else {
      current = parseInt(getComputedStyle(dom)[key])
      target = attrObj[key]
    }
    attrObj[key] = {
      current: current,
      target: target
    }
  }

  clearInterval(dom.timer)
  dom.timer = setInterval(() => {
    for (let key in attrObj) {
      let attr = attrObj[key]
      let current = attr.current
      let target = attr.target
      let speed = (target - attr.current) / (ispeed || 10)

      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
      attr.current += speed

      if (Math.abs(target - current) <= Math.abs(speed)) {
        attr.current = target
        if (key == 'opacity') {
          dom.style[key] = attr.current / 100
        } else if (key.indexOf('scroll') != -1) {
          dom[key] = attr.current
        } else {
          dom.style[key] = attr.current + 'px'
        }

        // 判断是否结束计数器
        delete attrObj[key]
        for (let k in attrObj) {
          return false
        }
        clearInterval(dom.timer)
      } else {
        if (key == 'opacity') {
          dom.style[key] = attr.current / 100
        } else if (key.indexOf('scroll') != -1) {
          dom[key] = attr.current
        } else {
          dom.style[key] = attr.current + 'px'
        }
      }
    }
  }, 20)
}