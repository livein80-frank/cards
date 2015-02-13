<?

define("AppId","wx98e78d22de880f6a");
define("REDIRECT_URI","http://boatinteractive.com/cards/auth.php") ;
function doAuth($returnUrl, $type = "base"){
	header("content-Type: text/html; charset=Utf-8");
	$redirectUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' . AppId . '&redirect_uri=http%3A%2F%2Fw.midea.com%2Fwxuserauth%2Fredirect%3Fthd_url%3D' . urlencode(urlencode($returnUrl)) . '&response_type=code&scope=snsapi_' . $type . '&state=1#wechat_redirect';	
	header("Location: " . $redirectUrl);
}

doAuth(REDIRECT_URI, "snsapi_userinfo") ;
?>