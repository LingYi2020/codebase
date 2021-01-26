// 入口文件

// 导入模块
// require([依赖模块列表],回调函数)
// 依赖模块列表：当前应用依赖的模块列表
// 回调函数：在依赖模块加载完成时执行
// 在requirejs中 .js 后缀可以省略不写
// 依赖模块和回调函数的参数一一对应
/* require(['./js/modules/module1.js','./js/modules/module2.js'],function (m1,m2){
  console.log(m1)//不能加载固定名称的模块
  console.log(m2)
}) */

// 模块全局配置（集中管理所有模块，并个模块起别称）
require.config({
  baseUrl: './js',//公共路径
  paths: {//集中引入所有模块
    'm1': 'modules/module1',//模块固定名称 只能用 m1
    'm2': 'modules/module2',//模块没有固定名称，可以随意起名
    'm3': 'modules/module3',//模块没有固定名称，可以随意起名
    // 'jquery': 'lib/jquery-1.8.3'//模块固定名称 只能用 jquery
    'jquery': ['xhttps://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery','lib/jquery-1.8.3']//提供一个备用资源
  }
})

require(['m1','m2'],function (m1,m2){
  console.log(m1)
  console.log(m2)
})

require(['jquery'],function ($){
  $('.btn').click(function (){
    alert('1234')
  })
})
