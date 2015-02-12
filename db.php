<?php
include(__dir__."/include/config.php");
include(__dir__."/include/functions.php");
include(__dir__."/models/Users.php");
include(__dir__."/libraries/weixin.ex.class.php");

$userModel = new Users() ;
$u = $userModel->findByOpenId("1") ;
var_dump($u) ;
?>