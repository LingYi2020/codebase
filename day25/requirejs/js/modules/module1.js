// define 用来定义一个模块

/* define({//模块导出的内容
  name: '张三',
  age: 23,
  say: function (){
    console.log('hi，我叫张三')
  }
}) */

/* define(function (){
  console.log('module1执行。。。')
  var name = '李四'
  var age = 24
  var say = function (){
    console.log('hi，我叫李四')
  }
  return {//模块导出的内容
    'name':name,
    'say': say
  }
}) */

// define([模块依赖列表],回调函数)
/* define(['./module3.js'],function (m3){
  console.log('module1执行。。。')
  m3.say()
  var m1Data = '12345678'
  return {
    'm1Data':m1Data
  }
}) */

// 'm1'给当前模块起个别称 固定模块名称（不推荐）
define('m1',['m3'],function (m3){
  console.log('module1执行。。。')
  m3.say()
  var m1Data = '12345678'
  return {
    'm1Data':m1Data
  }
})
