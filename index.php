<?php
/**
 * author:frank
 * date:2015-02-09
 * email:fengxuting@gmail.com
 */
session_start() ;

include(__dir__."/include/config.php");
include(__dir__."/models/Users.php");
include(__dir__."/libraries/weixin.ex.class.php");

//是否登录
//没有登录进行网页登录，保存用户信息到session及数据库
//已登录显示内容
$code = $_GET['code'] ;
$state = $_GET['state'] ;
//echo "state:".$state ;
//echo "<br/>";
//echo "code:".$code ;
//echo "<br/>";

$user = $_SESSION['user'] ;
if(empty($user)&&!empty($code)&&!empty($state)){
	$wxClient = new WeiXinClientV1(AppId,AppSecret);
	$token = $wxClient->oauth->getAccessTokenByCode($code);

	$openid = $token['openid'] ;
	$wxuser = $wxClient->findUser($openid) ;
	$userModel = new Users() ;
	$u = $userModel->findByOpenId($openid) ;
	//如果用户不存在，保存
	if(!empty($u)){
		$userModel->save($wxuser) ;		
	}
	$_SESSION['user'] = $wxuser ;
	$user = $_SESSION['user'] ;
	//var_dump($wxuser) ;
}
//var_dump($user) ;
//unset($_SESSION['user']) ;
if(empty($user)){
	header("Location:".snsapi_url($scope="snsapi_userinfo",AppId,REDIRECT_URI,"test")) ;
}
/**
 * echo snsapi_url($scope="snsapi_userinfo",AppId,REDIRECT_URI,"test") ;
 * 
 * @param  [type] $scope        [snsapi_base snsapi_userinfo]
 * @param  [type] $appid        [description]
 * @param  [type] $redirect_uri [description]
 * @param  [type] $state        [description]
 */
function snsapi_url($scope="snsapi_userinfo",$appid,$redirect_uri,$state){
	//http%3A%2F%2Fwww.naifenyun.com%2Fwechat%2Fcallback
	$redirect_uri = urlencode($redirect_uri) ;
	$url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=".$appid ;
	$url .= "&redirect_uri={$redirect_uri}&response_type=code&scope={$scope}&state={$state}#wechat_redirect" ;

	return $url ;
}
var_dump($user) ;
echo snsapi_url($scope="snsapi_userinfo",AppId,REDIRECT_URI,"test") ;
?>

<script type="text/javascript" src="http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js"></script>
<script>
$(function(){
	var d = {'nickName':'frank','headUrl':'http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46','roleId':'1','greetId':'2'} ;
	//$.post('cardsAction.php?action=save',d,function(data){
	//	console.log(data) ;
	//}) ;
}) ;
</script>