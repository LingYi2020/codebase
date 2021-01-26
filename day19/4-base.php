<?php
// 设置响应头，字符编码
header('Content-type:text/html;charset=utf-8');

// 关闭错误报告
error_reporting(0);

// 单行注释
# 单行注释
/* 
  多行注释
  内容可以换行
*/
// php语句末尾一定要写分号
// 声明变量 $+变量名
// $a = 123;
// $b = 'abc';
// $c = [11,22,33,'hello'];

// 输出语句
// echo $a;
// die('程序结束，并返回值');
// echo $c;
// echo '<h1>标题1</h1>';
// echo '<pre>';
// print_r($c);
// var_dump($c);

// php中的变量区分大小写
// 关键字，类，函数，语句等不区分大小写，echo  ECHO   if  IF
// $t = 1;
// $T = 2;

// $x = 5;
// function test(){
//   // global $x;//使用全局的变量$x
//   $y = 8;
//   // echo $x;
//   echo $GLOBALS[x];
//   echo '<br>';
//   echo $y;
// }
// test();
// echo $x;
// echo $y;//访问不到


// 超全局变量: $GLOBALS  $_GET  $_POST  $_REQUEST ...
// echo '<pre>';
// print_r($GLOBALS[x]);

// $user = $_GET['user'];//用户账号
// $pass = $_GET['pass'];//用户密码
// if ($user == 'xiaocuo'&& $pass == '123456'){
//   echo '登录成功';
// } else {
//   echo '账号或密码错误';
// }


// 字符串
// 字符串拼接使用点 .
$str1 = 'hello';
$str2 = "world";
// echo $str1.' '.$str2;
// echo '单引号字符串 $str1';
// echo "双引号字符串 $str1";
$str3 = <<<tt
  多行字符串<br>
  内容可以随意换行<br>
tt;
//标识符必须顶格写
// echo $str3;


// 数组：索引数组和关联数组

// 索引数组
$arr1 = ['a1','a2','a3','a4'];
$arr2 = array(11,22,33,44);
$arr3 = [];
$arr3[0] = 'v1';
$arr3[1] = 'v2';
$arr3[5] = 'v5';

// echo '<pre>';
// print_r($arr3);
// var_dump($arr2);

// foreach($arr1 as $val){
//   echo $val;
// }

// foreach($arr1 as $index=>$val){
//   echo '<pre>';
//   echo $index.'-----'.$val;
// }

// 关联数组
$arr4 = array(
  'key1'=>'value1',
  'key2'=>'value2',
  'key3'=>'value3',
  'key4'=>'value4'
);
// echo $arr4['key2'];
$arr5 = [];
$arr5['a1'] = '111';
$arr5['a2'] = '222';
$arr5['a3'] = '333';
$arr5['a4'] = '444';
// echo '<pre>';
// print_r($arr5);

// foreach($arr4 as $val){
//   echo '<pre>';
//   echo $val;
// }

// foreach($arr4 as $index=>$val){
//   echo '<pre>';
//   echo $index.' ----- '.$val;
// }

// 多维数组
$arr6 = [];
$arr6[] = array('a1'=>'数据1','a2'=>'数据2','a3'=>'数据3');
$arr6[] = array('a1'=>'数据4','a2'=>'数据5','a3'=>'数据6');
$arr6[] = array('a1'=>'数据7','a2'=>'数据8','a3'=>'数据9');
// echo '<pre>';
// print_r($arr6);

// 将php数组转成JSON字符串
// echo json_encode($arr1);//'["a1","a2","a3","a4"]'
// echo json_encode($arr4);//'{"key1":"value1","key2":"value2","key3":"value3","key4":"value4"}'
// echo json_encode($arr6);//将中文进行unicode编码
// echo json_encode($arr6,JSON_UNESCAPED_UNICODE);//不对中文进行unicode编码
// '[{"a1":"数据1","a2":"数据2","a3":"数据3"},{"a1":"数据4","a2":"数据5","a3":"数据6"},{"a1":"数据7","a2":"数据8","a3":"数据9"}]'

// 将JSON字符串转成php数组
$json = '{"name":"张三","age":23,"sex":"女"}';
print_r( json_decode($json,1) );

?>