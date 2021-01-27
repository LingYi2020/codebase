// gulp的配置文件
// let gulp = require('gulp')
// console.log( gulp )//{...}
// gulp.task()

let {task,src,dest,watch,series,parallel} = require('gulp')

// 创建任务
// task('任务名称','回调函数，该任务要做的事情')
task('task1',(done)=>{
  console.log('任务执行。。。111')
  done()//告诉后面的任务，结束当前异步任务完成
})
task('task2',(done)=>{
  console.log('任务执行。。。222')
  done()//告诉后面的任务，结束当前异步任务完成
})
task('task3',async ()=>{
  console.log('任务执行。。。333')
})
exports.task4 = async ()=>{// gulp4推荐创建任务的方式
  console.log('任务执行。。。444')
}
// 默认任务
task('default',async ()=>{
  console.log('执行默认任务。。。')
})

// task()用于创建任务
// src()用于读取数据流
// pipe()管道方法用于操作数据流
// dest()用于文件写入，存储文件
task('html',async ()=>{
  // 处理html（拷贝数据到dist目录）
  // 如果有多个匹配规则，则写在数组中
  // src(['./views/index.html','./views/list.html'])
  // 只有一个匹配规则，直接传入字符串参数
  // src('./views/*.html')//匹配views中的所有html文件
  // src('./views/*.*')//匹配views中的所有文件
  src('./views/**/*.*')//匹配views中及子目录中的所有文件
  // src(['./views/**/*.*','!./views/list.html'])//匹配views中及子目录中的所有文件，除了list.html
  .pipe(dest('./dist'))
})

task('watch',async ()=>{
  // 监听views中的所有文件变化，文件变化时执行html任务
  watch('./views/**/*.*',series('html'))
  watch('./views/**/*.*',parallel('html'))
  // series用于组合任务，顺序执行
  // parallel用于组合任务，乱序执行
})

