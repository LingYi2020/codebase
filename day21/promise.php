<?php

$code = $_GET['code'];

if ($code == 'a1') {
  echo '{"name":"张三","age":23,"sex":"男"}';
} else if ($code == 'a2'){
  echo '{"name":"李四","age":24,"sex":"男"}';
}  else if ($code == 'a3'){
  echo '{"name":"王五","age":25,"sex":"女"}';
} 



?>