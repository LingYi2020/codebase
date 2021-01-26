// 模块导出内容
console.log( 'module1执行。。。' )

// 不推荐这样导出内容
// export var name = '张三'
// export var age = 23
// export var say =  function (){
//   console.log('hi')
// }


// 错误的写法
// var name = '张三'
// var age = 23
// var say =  function (){
//   console.log('hi')
// }
// export name
// export age
// export say


// 推荐写法
var name = '张三'
var age = 23
var say =  function (){
  console.log('hi')
}
export {name,age,say}


// 修改导出内容的名字（导出的内容使用本来的名字）
function test1(){
  console.log('test1...')
}
function test2(){
  console.log('test2...')
}
export {test1,test2}

// function test1(){
//   console.log('test1...')
// }
// function test2(){
//   console.log('test2...')
// }
// export {
//   test1 as fn1,
//   test2 as fn2,
//   test2 as fn3
// }

// 每个模块都可以有一个默认导出
// var name = '张三'
// var say =  function (){
//   console.log('hi')
// }
// export default say
// export default name
// export default {
//   a:123,
//   b:456
// }
// export default function (){
//   console.log('默认导出的方法。。。')
// }
export default class Cat{
  constructor(){
    this.name = 'cat'
  }
}

// 修改模块内部的数据
setTimeout(()=>{
  name = '李四'
},1000)