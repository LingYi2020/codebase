// 加载模块
let http = require('http')
// 创建一个服务
let server = http.createServer()
// 监听服务对象的request事件
server.on('request',(req,res)=>{
  // 当前前端有用户请求进来时触发request事件
  // req -> request 请求对象
  // res -> response 响应对象
  console.log('有用户请求进来了。。。')

  // 设置响应头消息
  res.setHeader('Content-Type','text/plain;charset=utf-8')

  // 结束响应，并给前端响应内容
  res.end('hello，你好')
})
// 启动服务（端口号，主机，回调函数）
server.listen(3000,'localhost',()=>{
  console.log('服务器启动成功，访问：http://localhost:3000')
})