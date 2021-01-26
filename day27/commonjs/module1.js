// 加载模块
let m2 = require('./module2')
m2(4,8)

console.log('module1执行。。。')
let name = '张三'
let age = 23
let say = function (){
  console.log('hi~~')
}
// module.exports = say // 模块导出的内容
// module.exports = name // 模块导出的内容
// module.exports = function (){
//   console.log('模块导出的函数。。。')
// } // 模块导出的内容
module.exports = {name,age,say} // 模块导出的内容

// var exports = module.exports//自动完成此步
// exports = say // 导出失败
exports.say = say // 导出say方法
