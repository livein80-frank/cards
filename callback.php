<?php
session_start() ;
include(__dir__."/include/config.php");
include(__dir__."/include/functions.php");
include(__dir__."/models/Users.php");
include(__dir__."/libraries/weixin.ex.class.php");

$code = $_GET['code'] ;
$state = $_GET['state'] ;
$user = $_SESSION['user'] ;
if(empty($user)&&!empty($code)&&!empty($state)){
	$wxClient = new WeiXinClientV1(AppId,AppSecret);
	/*
	$token = $wxClient->oauth->getAccessTokenByCode($code);
	$openid = $token['openid'] ;
	$wxuser = $wxClient->findUser($openid) ;
	*/
	$access_token = $wxClient->oauth->get('http://w.midea.com/wxuserauth/getuserauth', array('code'=>$code)) ;
	//systemLog($access_token) ;
	//var_dump($access_token) ;
	$openid = $access_token['openid'] ;
	//echo $access_token ;
	//$wxClient->oauth->access_token = $access_token ;
	//$wxuser = $wxClient->findUser($access_token['openid']) ;
	$wxuser = $wxClient->oauth->get("https://api.weixin.qq.com/sns/userinfo",array('access_token'=>$access_token['access_token'],'openid'=>$openid,'lang'=>'zh_CN')) ;
	//var_dump($wxuser) ;
	$userModel = new Users() ;
	$u = $userModel->findByOpenId($openid) ;
	//var_dump($u) ;
	$_SESSION['user'] = $wxuser ;
	$user = $_SESSION['user'] ;
	//如果用户不存在，保存
	if(!$u){
		$userModel->save($wxuser) ;		
	}
	//var_dump($user) ;
	//exit() ;
	//echo "===" ;
}
if(!isset($user['errcode'])){
	header("Location:index.php") ;	
}else{
	echo json_encode($user) ;
}
?>