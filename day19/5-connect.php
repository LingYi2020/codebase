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
$sql = 'select * from user where sex="男"';
// $sql = "select * from user where sex='{$user}'";

// 3.执行sql语句
$res = mysqli_query($link,$sql);//查询结果为资源类型

// 4.解析数据 mysqli_fetch_assoc 每次只能解析出一条数据
// $arr1 = mysqli_fetch_assoc($res);
// $arr2 = mysqli_fetch_assoc($res);
// print_r($arr1);
// print_r($arr2);

// 每次只能解析出一条数据
// $arr = [];
// while($row = mysqli_fetch_assoc($res)){
//   $arr[] = $row;
// }

// 一次性解析出所有数据
$arr = mysqli_fetch_all($res,1);

// echo '<pre>';
// print_r($arr);
// die();

// 获取数组长度
$len = count($arr);

if ($len > 0) {
  // 5.转成 JSON字符串 返回
  echo json_encode($arr,JSON_UNESCAPED_UNICODE);
} else {
  // 5.返回没有数据提示
  echo '暂无数据！';
}

// 6.关闭连接
mysqli_close($link);
?>