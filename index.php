<?php
/**
 * author:frank
 * date:2015-02-09
 * email:fengxuting@gmail.com
 */
session_start() ;

include(__dir__."/include/config.php");
include(__dir__."/include/functions.php");
include(__dir__."/models/Users.php");
include(__dir__."/libraries/weixin.ex.class.php");
require_once __dir__."/libraries/jssdk.php";
$jssdk = new JSSDK('wxfeacbc4d70ea1ee4','46c4b82829ff95ecc87336dffee1c930');
$signPackage = $jssdk->GetSignPackage();

//是否登录
//没有登录进行网页登录，保存用户信息到session及数据库
//已登录显示内容
//unset($_SESSION['user'])  ;

$user = $_SESSION['user'] ;
//var_dump($user) ;exit() ;
if(empty($user)||isset($user['errcode'])){
	//header("Location:".snsapi_url($scope="snsapi_userinfo",AppId,REDIRECT_URI,"test")) ;
	 doAuth(REDIRECT_URI, "userinfo") ;
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
	$redirect_uri = urlencode($redirect_uri) ;
	$url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=".$appid ;
	$url .= "&redirect_uri={$redirect_uri}&response_type=code&scope={$scope}&state={$state}#wechat_redirect" ;

	return $url ;
}

function doAuth($returnUrl, $type = "base"){
	header("content-Type: text/html; charset=Utf-8");
	$redirectUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' . AppId_AUTH . '&redirect_uri=http%3A%2F%2Fw.midea.com%2Fwxuserauth%2Fredirect%3Fthd_url%3D' . urlencode(urlencode($returnUrl)) . '&response_type=code&scope=snsapi_' . $type . '&state=1#wechat_redirect';	
	header("Location: " . $redirectUrl);
}

?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>美的冰箱</title>
<style type="text/css">
	html,body{padding: 0px;margin: 0px;height: 100%;overflow: hidden;}
</style>
<script type="text/javascript">
         function checkScreen(){
	        if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
	            var version = parseFloat(RegExp.$1);
	            if (version > 2.3) {
	                var phoneScale = parseInt(window.screen.width) / 640;
	                document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
	            } else {
	                var phoneScale = parseInt(window.screen.width) / 640;
	                document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
	                //document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
	            }
	        } else {
	            document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
	        }
        }
         checkScreen();
    </script>
</head>

<body onload="init();" style="background-color:#D4D4D4">
	<canvas id="canvas" width="640" height="1500" style="background-color:#000000"></canvas>


<script type="text/javascript" src="js/jquery-2.1.1.js"></script>
<script src="js/easeljs-0.7.1.min.js"></script>
<script src="js/tweenjs-0.5.1.min.js"></script>
<script src="js/movieclip-0.7.1.min.js"></script>
<script src="js/preloadjs-0.4.1.min.js"></script>
<script type="text/javascript" src="js/soundjs-0.5.2.min.js"></script>

<script type="text/javascript" src="js/loading.js"></script>
<script type="text/javascript" src="js/aniUI01.js"></script>
<script type="text/javascript" src="js/aniUI02.js"></script>
<script type="text/javascript" src="js/aniUI03.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/Utils.js"></script>
<script type="text/javascript" src="js/lib.js"></script>
<script type="text/javascript" src="js/index.js?v=0.4"></script>
<script>
var canvas, stage,loadingUi, mainUi,ani1,ani2,ani3;
var nickName = '<?php echo $user['nickname']?>' ;
var headimg = '<?php echo $user['headimgurl']?>' ;
	checkScreen();
function init() {
	canvas = document.getElementById("canvas");
	images = images||{};

	showloading();
	loadMainUI ();
	
}

function showloading () {
	stage = new createjs.Stage(canvas);
	loadingUi = new lib.loading();
	stage.addChild(loadingUi);
	stage.update();
	stage.enableMouseOver();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);	
}
function loadMainUI () {
	lib.properties.manifest = main_lib;
	lib.properties.manifest = lib.properties.manifest.concat(ani1_lib);
	lib.properties.manifest = lib.properties.manifest.concat(ani2_lib);
	lib.properties.manifest = lib.properties.manifest.concat(ani3_lib);		

	// console.log(lib.properties.manifest);

	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
	mainUi = new lib.main();
	// ani1 = new lib.aniUI01();
	// ani2 = new lib.aniUI02();
	ani3 = new lib.aniUI03();

	stage.removeChild(loadingUi);
	stage.addChild(mainUi);
	stage.update();

	initUI(headimg,nickName);
	// initUI();
	// console.log(stage);
	
	stage.addEventListener("click",initSound);	
	
	function initSound(){		
		var theMP3 = createjs.Sound.play("sound01");
		theMP3.play();
		theMP3.pause();
		stage.removeEventListener("click",initSound);
	}
}
function playSound(id, loop) {
	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}
</script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
wx.config({
	appId: '<?php echo $signPackage["appId"];?>',
	timestamp: <?php echo $signPackage["timestamp"];?>,
	nonceStr: '<?php echo $signPackage["nonceStr"];?>',
	signature: '<?php echo $signPackage["signature"];?>',
	jsApiList: [
		// 所有要调用的 API 都要加到这个列表中
		'checkJsApi',
		'onMenuShareTimeline',
		'onMenuShareAppMessage',
	]
});
var _shareTitle = "求红包利器" ;
var _shareDesc = "还在喝酸奶舔瓶盖吗？还在干嚼方便面吃辣条吗？还在吃泡面喝汤吗？小编带你一起装B一起飞好么？come，北鼻！" ;
var _shareLink = _shareUrl ;
var _shareImgUrl = "http://"+window.location.host+"/card/images/sharelogo.jpg" ;
var share = function(_shareTitle,_shareDesc,_shareLink,_shareImgUrl){
	//alert(_shareLink) ;
	wx.ready(function () {
		wx.onMenuShareTimeline({
		title: _shareTitle,
		link: _shareLink,
		imgUrl: _shareImgUrl,
		trigger: function (res) {
			// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			//alert('用户点击分享到朋友圈');
			//alert(_shareUrl) ;
		},
		success: function (res) {
		  //alert('已分享');
		},
		cancel: function (res) {
		  //alert('已取消');
		},
		fail: function (res) {
		  //alert(JSON.stringify(res));
		}
		});
		wx.onMenuShareAppMessage({
		title: _shareTitle,
		desc: _shareDesc,
		link: _shareLink,
		imgUrl: _shareImgUrl,
		trigger: function (res) {
			// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			//alert('用户点击发送给朋友');
		},
		success: function (res) {
		  //alert('已分享');
		},
		cancel: function (res) {
		  //alert('已取消');
		},
		fail: function (res) {
		  //alert(JSON.stringify(res));
		}
		});  	
	});  
}    
share(_shareTitle,_shareDesc,_shareLink,_shareImgUrl) ;
</script>
<script>
var _hmt = _hmt || [];
(function() {
 var hm = document.createElement("script");
 hm.src = "//hm.baidu.com/hm.js?80cb5054afe5cd281a5070e9dc6f7600";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(hm, s);
})();
</script>
</body>
</html>
