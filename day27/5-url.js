// 加载模块
let url = require('url')

// let urlStr = 'http://localhost:3001/hehe?user=xiaocuo&pass=555666#abcd'
let urlStr = '/hehe?user=xiaocuo&pass=555666'
// 获取url中的某个参数值
function getQueryString(key){
  var url = location.href;
  var searchStr = url.split('?')[1];
  var reg = new RegExp('[&]?'+key+'=([^&#]*)[&]?','i');
  var arr = searchStr.match(reg);
  return (RegExp.$1);
}
// url.parse()方法 将url字符串转成对象
// let res = url.parse(urlStr)//query部分为字符串
// 等同于
// let res = url.parse(urlStr,false)//query部分为字符串
let res = url.parse(urlStr,true)//query部分为对象
console.log( res )
// res =  {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'localhost:3001',
//   port: '3001',
//   hostname: 'localhost',
//   hash: '#abcd',
//   search: '?user=xiaocuo&pass=555666',
//   // query: 'user=xiaocuo&pass=555666',
//   query: { user: 'xiaocuo', pass: '555666'},
//   pathname: '/hehe',
//   path: '/hehe?user=xiaocuo&pass=555666',
//   href: 'http://localhost:3001/hehe?user=xiaocuo&pass=555666#abcd'
// }
// console.log( res.query.user )
// console.log( res.query.pass )


// url.format()方法 将url对象转成字符串
let urlObj =  {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:3002',
  port: '3003',
  hostname: 'localhost',
  hash: '#abcd',
  search: '?user=xiaocuo&pass=555666',
  // query: 'user=xiaocuo&pass=555666',
  query: { user: 'xiaocuo', pass: '555666'},
  pathname: '/hehe',
  path: '/hehe?user=xiaocuo&pass=555666',
  href: 'http://localhost:3003/hehe?user=xiaocuo&pass=555666#abcd'
}
let res2 = url.format(urlObj)
// console.log( res2 )
// http://localhost:3002/hehe?user=xiaocuo&pass=555666#abcd
