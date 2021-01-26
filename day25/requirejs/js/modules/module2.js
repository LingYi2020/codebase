// define 用来定义一个模块

/* define({//模块导出的内容
  abc:123456
}) */

define(function (){
  console.log('module2执行。。。')
  var name = '王五'
  var age = 25
  var say = function (){
    console.log('hi，我叫王五')
  }
  return {//模块导出的内容
    'name':name,
    'say': say
  }
})