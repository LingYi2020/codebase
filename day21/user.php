<?php
/* 
  url: 'http://localhost/test/GP05/day21/user.php'
  type: 'post'
  params: 
    type: login  登录
          add    注册
    username: 账号
    password: 密码
  return: '{"err":1,"msg":"登录成功"}'
*/

// 设置响应头
header('Content-Type:text/plain;charset=utf-8');

// 接收参数
$type = $_POST['type'];
$username = $_POST['username'];
$password = $_POST['password'];

// 连接数据库
$link = mysqli_connect('localhost','root','taotao','gp05');
if (!$link) {
  echo '{"err":0,"msg":"数据库连接失败"}';
  die();
}

// 判断要登录还是要注册
if ($type == 'login') {//登录
  // 查询sql语句
  $login_sql = "select * from account where username='$username' and password='$password'";
  // 执行sql语句
  $res = mysqli_query($link,$login_sql);
  $res_arr = mysqli_fetch_all($res);
  if (count($res_arr) > 0) {
    echo '{"err":1,"msg":"登录成功"}';
  } else {
    echo '{"err":-1,"msg":"账号或密码错误"}';
  }
} else if ($type == 'add'){//注册
  // 先查询数据库是否已有此账号
  $search_sql = "select * from account where username='$username'";
  // 执行sql语句
  $res1 = mysqli_query($link,$search_sql);
  $res_arr1 = mysqli_fetch_all($res1);
  if (count($res_arr1) > 0) {
    echo '{"err":-2,"msg":"该账号已被占用"}';
  } else {
    // 可以注册 添加数据
    $add_sql = "insert into account(username,password) value('$username','$password')";
    $add_res = mysqli_query($link,$add_sql);
    if ($add_res) {
      echo '{"err":2,"msg":"注册成功"}';
    } else {
      echo '{"err":-3,"msg":"注册失败"}';
    }
  }
} else {
  echo '{"err":-9,"msg":"参数错误"}';
}
// 关闭数据库连接
mysqli_close($link);

?>