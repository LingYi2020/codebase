// 入口文件
// ES6模块默认使用严格模式
// abc = 123//报错
// console.log(abc)

// 导入模块功能
// import {name,age,say} from './module1.js'
// console.log(name)
// say()

// 导入模块功能
// import {test1,test2} from './module1.js'
// test1()
// test2()
// import {fn1,fn2,fn3} from './module1.js'
// fn1()
// fn2()
// fn3()

// 修改导入内容的名字
// import {fn1 as f1,fn2 as f2,fn3 as f3} from './module1.js'
// f1()
// f2()
// f3()

// 导入模块默认导出内容
// import abc from './module1.js'
// console.log( abc )

// 同时导入默认内容和普通内容
// import Cat,{name,age,say} from './module1.js'
// import {name,age,say},Cat from './module1.js'//语法错误
// import {Cat,name,age,say} from './module1.js'//语法错误
// import Cat from './module1.js'//导入默认内容
// import {name,age,say} from './module1.js'
// 同一个模块导入多次，只执行一次
// console.log(name)
// var cat = new Cat()
// console.log( cat.name )

// 一次性导入所有内容
// import * as obj from './module1.js'
// console.log( obj )
// obj.test1()
// var cat1 = new obj.default()
// console.log(cat1.name)
// console.log( obj.name )//'张三'

// 模块内导入的数据是实时更新的
// setTimeout(()=>{
//   console.log( obj.name )//'李四'
// },2000)

// 只要导入并执行
// import './module2.js'

import './jquery-1.8.3.js'
$('.btn').click(function (){
  alert('12347')
})
