<?php
/**
 * author:frank
 * date:2015-02-09
 * email:fengxuting@gmail.com
 */
include(__dir__."/include/config.php");
include(__dir__."/include/functions.php");
include(__dir__."/models/Cards.php");
include(__dir__."/libraries/Utils.php");
include(__dir__."/libraries/weixin.ex.class.php");
require_once __dir__."/libraries/jssdk.php";
$jssdk = new JSSDK('wxfeacbc4d70ea1ee4','46c4b82829ff95ecc87336dffee1c930');
$signPackage = $jssdk->GetSignPackage();
Utils::safeInput() ;
$cardModel = new Cards() ;
$cardId = $_GET['cardId'] ;
$card = $cardModel->findCardId($cardId) ;
//var_dump($card) ;
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>我的贺卡</title>
<style type="text/css">
	html,body{padding: 0px;margin: 0px; }
	.app{height: 100%;width:100%;overflow: hidden;background-color: #000000;}
</style>
	<script type="text/javascript">
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
    </script>
</head>

<body onload="init();"  class="app">
	<div class="box" style="width:100%;height:100%;overflow:hidden">
		<canvas id="canvas" style="background-color:#000000 ;" width='640' height='1200'></canvas>
	</div>
	<script type="text/javascript" src="js/jquery-2.1.1.js"></script>

	<script src="js/easeljs-0.7.1.min.js"></script>
	<script src="js/tweenjs-0.5.1.min.js"></script>
	<script src="js/movieclip-0.7.1.min.js"></script>
	<script src="js/preloadjs-0.4.1.min.js"></script>
	<script src="js/soundjs-0.5.2.min.js"></script>
	<script type="text/javascript" src="js/loading.js"></script>
	<script type="text/javascript" src="js/kardUI1.js"></script>
	<script type="text/javascript" src="js/kardUI2.js"></script>
	<script type="text/javascript" src="js/Utils.js"></script>
	<script type="text/javascript" src="js/lib.js"></script>
	<script type="text/javascript" src="js/view.js"></script>

	<script>
	var canvas, stage,loadingUi, ani1,ani2;
	var _userheadUrl = '<?php echo $card->head_img?>';
	var _nickNameStr = '<?php echo $card->username?>' ;
	var _roleId = '<?php echo $card->role?>' ;
	var _greetId = '<?php echo $card->greet?>' ;

	function init() {
		canvas = document.getElementById("canvas");
		images = images||{};


		showloading();
		loadMainUI ();
	}
	$(function(){
		$(window).on("resize",function(){
			$(".box").css({'height':window.innerHeight});
			// $("#canvas").css('height':window.innerHeight,"overflow":"hidden");
			console.log(window.innerHeight);		
		}).resize();
		// console.log('test');
	})
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
		lib.properties.manifest = kardui1;
		lib.properties.manifest = lib.properties.manifest.concat(kardui2);

		console.log(lib.properties.manifest);

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
		ani1 = new lib.kardUI1();
		ani2 = new lib.kardUI2();

		stage = new createjs.Stage(canvas);
		//stage.addChild(exportRoot);
		stage.update();

		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);

		// initUI("images/ani1_wt2.png","_nickNameStr",Number(1),Number(2));
		initUI (_userheadUrl,_nickNameStr,_roleId,_greetId) ;

		stage.removeChild(loadingUi);
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
		createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, 10000);
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
var _shareLink = window.location.href ;
var _shareImgUrl = "http://"+window.location.host+"/cards/images/sharelogo.jpg" ;
var share = function(_shareTitle,_shareDesc,_shareLink,_shareImgUrl){
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