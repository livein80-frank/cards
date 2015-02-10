<?php
/**
 * author:frank
 * date:2015-02-10
 * email:fengxuting@gmail.com
 */
session_start() ;
include(__dir__."/include/config.php");
include(__dir__."/models/Cards.php");
include(__dir__."/libraries/Utils.php");
include(__dir__."/libraries/weixin.ex.class.php");

Utils::safeInput() ;


$action = $_REQUEST['action'] ;	

//保存贺卡并返回贺卡id
if($action=="save"){
	$card = array() ;
	$user = $_SESSION['user'] ;
	$card['openid'] = $user['openid'] ;
	$card['nickname'] = !empty($_POST['nickName'])?$_POST['nickName']:$user['nickname'] ;
	$card['headurl'] = !empty($_POST['headUrl'])?$_POST['headUrl']:$user['headimgurl'] ;
	$card['roleid'] = $_POST['roleId'] ;
	$card['greetid'] = $_POST['greetId'] ;

	$cardsModel = new Cards() ;
	$ret = $cardsModel->save($card) ;
	echo json_encode(array('cardId' => $ret)) ;
}


?>