// 加载模块
let http = require('http')
let url = require('url')
let fs = require('fs')

// 创建启动服务
http.createServer((req,res)=>{
  // 用户访问 '/blog' 返回 '4-test.html'
  let pathname = url.parse(req.url).pathname
  if (pathname === '/blog') {
    // 读取文件
    fs.readFile('./4-test.html','utf8',(err,data)=>{
      if (err) {
        // 设置响应头消息
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end('找不到你访问的页面 404')
      } else {
        // 设置响应头消息
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end(data)
      }
    })
  }
  else if (pathname === '/test.css'){
    // 读取文件
    fs.readFile('./test.css','utf8',(err,data)=>{
      if (err) {
        // 设置响应头消息
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end('not found css')
      } else {
        // 设置响应头消息
        res.setHeader('Content-Type','text/css;charset=utf-8')
        res.end(data)
      }
    })
  }
  else if (pathname === '/mm.jpg'){
    // 读取文件
    fs.readFile('./mm.jpg',(err,data)=>{
      if (err) {
        // 设置响应头消息
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end('not found img')
      } else {
        // 设置响应头消息
        res.setHeader('Content-Type','image/jpeg')
        res.end(data)
      }
    })
  }
  else {
    // 设置响应头消息
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('欢迎光临~')
  }

}).listen('3003',()=>{
  console.log('服务已启动：http://10.36.138.37:3003')
})