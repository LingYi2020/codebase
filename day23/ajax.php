<?php

$code = $_REQUEST['code'];
// sleep(6);//睡眠6秒
if ($code == 'abc') {
  echo '{"name":"张三","age":12,"sex":"女"}';
} else {
  echo '{"name":"李四","age":22,"sex":"男"}';
}


?>