<?php
// 设置响应头，字符编码
header('Content-Type:text/html;charset=utf-8');

// 1.连接数据库
// 参数：主机名，账号，密码，数据库名
$link = mysqli_connect('localhost','root','taotao','gp05');
if (!$link) {
  die('数据连接失败:'.mysqli_connect_error());
}
// echo '连接成功！';

// 2.编写sql语句
$sql = 'insert into user (name,age,sex,phone) values("马六","26","女","13699990000")';

// 3.执行sql语句
$res = mysqli_query($link,$sql);//查询结果为资源类型

if ($res) {
  echo '添加成功';
} else {
  echo '添加失败';
}

// 4.关闭连接
mysqli_close($link);
?>