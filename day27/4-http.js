// 加载模块
let http = require('http')
// 创建一个服务，并监听request事件
http.createServer((req,res)=>{
  if (req.url == '/favicon.ico') {
    return // 不处理该请求
  }
  // 当前有用户请求进来时触发request事件
  // 当前前端有用户请求进来时触发request事件
  // req -> request 请求对象
  // res -> response 响应对象
  console.log('有用户请求进来了。。。')
  // http://localhost:3001/hehe?user=xiaocuo&pass=555666#abcd
  // console.log( req.url )//端口后之后所有内容（不包含哈希值）

  if (req.url == '/hehe') {
    // 结束响应，并返回内容给前端
    res.end('hello nodejs')
  }

  // 设置响应头消息
  res.setHeader('Content-Type','text/plain;charset=utf-8')

  // 结束响应，并返回内容给前端
  res.end('欢迎光临~~123')

}).listen(3001,'localhost',()=>{
  console.log('服务已启动，访问：http://localhost:3001')
})
