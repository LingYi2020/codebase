<?php
// 允许任何来源
header("Access-Control-Allow-Origin:*");

/* 
接口文档
url: 'http://localhost/test/GP05/day20/data/post.php'
type: 'post'
params:
  user 账号
  pass 密码
返回值：
  '{"err":1,"msg":"登录成功"}'
*/
// $user = $_POST['user'];
// $pass = $_POST['pass'];
$user = $_REQUEST['user'];
$pass = $_REQUEST['pass'];

// echo $user;
// die();

if ($user === 'xiaocuo' && $pass === '123456') {
  echo '{"err":1,"msg":"登录成功"}';
} else {
  echo '{"err":0,"msg":"账号或密码错误"}';
}

?>