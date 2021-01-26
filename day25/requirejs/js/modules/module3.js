// define 用来定义一个模块

define(function (){
  console.log('module3执行。。。')
  return {//模块导出的内容
    'name':'马六',
    'say': function (){
      console.log('我是马六')
    }
  }
})