<?php
/**
 * author:frank
 * date:2015-02-10
 * email:fengxuting@gmail.com
 */
include(__dir__."/include/config.php");
include(__dir__."/models/Cards.php");
include(__dir__."/libraries/Utils.php");
include(__dir__."/libraries/weixin.ex.class.php");

Utils::safeInput() ;

$cardsModel = new Cards() ;

$action = $_REQUEST['action'] ;	

//保存贺卡并返回贺卡id


?>