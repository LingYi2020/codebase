// 获取第一个元素子节点
function getFirstChild(dom){
  if (dom.firstElementChild) {
    return dom.firstElementChild
  } else {
    return dom.firstChild
  }
}
// 获取最后一个元素子节点
function getLastChild(dom){
  if (dom.lastElementChild) {
    return dom.lastElementChild
  } else {
    return dom.lastChild
  }
}
// 获取下一个兄弟子节点
function getNextNode(dom){
  if (dom.nextElementSibling) {
    return dom.nextElementSibling
  } else {
    return dom.nextSibling
  }
}
// 获取上一个兄弟子节点
function getPrevNode(dom){
  if (dom.previousElementSibling) {
    return dom.previousElementSibling
  } else {
    return dom.previousSibling
  }
}
// 生成 min~max区间的随机整数
function randomInt(min,max){
  return Math.round(Math.random()*(max-min))+min
}
// 生成随机16进制颜色值
function randomColor(){
  var str = '0123456789abcdef'// 0-15
  var color = '#'
  for (var i = 0, len = 6; i < len; i++){
    var index = randomInt(0,15)
    color += str[index]
  }
  return color
}
// 生成n位随机验证码（数字、字母（大小））
function randomCode(n){
  var num = ''
  for (var i = 0, len = n; i < len; i++){
    do {
      var ascii = randomInt(48,122)
    } while(ascii>57&&ascii<65 || ascii>90&&ascii<97)
    num += String.fromCharCode(ascii)
  }
  return num
}
// 判断数组中是否包含某个值
function has(arr,val){
  for (var i = 0, len = arr.length; i < len; i++){
    if (arr[i] == val) {
      return true
    }
  }
  return false
}
// 数组去重
function norepeat(arr){
  var arr1 = []
  for (var i = 0, len = arr.length; i < len; i++){
    if (!has(arr1,arr[i])) {
      arr1.push(arr[i])
    }
  }
  return arr1
}
// 获取元素样式 兼容IE678
function getStyle(dom,attr){
  if (dom.currentStyle) {
    return dom.currentStyle[attr]
  } else {
    return getComputedStyle(dom)[attr]
  }
}

function byClass(oClass){
  
}