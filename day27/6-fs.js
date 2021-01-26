// 加载模块
let fs = require('fs')

// 异步读文件
console.log(11111)
fs.readFile('./6-test.txt','utf8',(err,data)=>{
  // err错误对象，读取失败时是一个对象，读取成功时是null
  if (err) {
    console.log('文件读取失败：'+err)
  } else {
    console.log('文件读取成功：'+data)
  }
})
console.log(22222)

// 同步读取文件
// console.log(11111)
// let data = fs.readFileSync('./6-test.txt','utf8')
// console.log(data)
// console.log(222222)