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
	html,body{padding: 0px;margin: 0px;height: 100%;overflow: hidden;}
</style>
<script type="text/javascript">
        if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
            var version = parseFloat(RegExp.$1);
                var phoneScale = parseInt(window.screen.width) / 640;
                document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
        } else {
            document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
        }
    </script>
</head>

<body  style="background-color:#D4D4D4">
	<canvas id="canvas" width="640" height="1500" style="background-color:#000000"></canvas>
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
	<script type="text/javascript" src="js/view.js"></script>

	<script>
	$(function(){
		init() ;
	}) ;
	var canvas, stage,loadingUi, ani1,ani2;
	var _userheadUrl = '<?php echo $card->head_img?>';
	var _nickNameStr = '<?php echo $card->username?>' ;
	var _roleId = '<?php echo $card->role?>' ;
	var _greetId = '<?php echo $card->greet?>' ;
	var kardui1 = [
		{src:"images/ani1_GIF.png", id:"ani1_GIF"},
		{src:"images/ani1_wt10.png", id:"ani1_wt10"},
		{src:"images/ani1_wt11.png", id:"ani1_wt11"},
		{src:"images/ani1_wt12.png", id:"ani1_wt12"},
		{src:"images/ani1_wt13.png", id:"ani1_wt13"},
		{src:"images/ani1_wt14.png", id:"ani1_wt14"},
		{src:"images/ani1_wt15.png", id:"ani1_wt15"},
		{src:"images/ani1_wt16.png", id:"ani1_wt16"},
		{src:"images/ani1_wt17.png", id:"ani1_wt17"},
		{src:"images/ani1_wt18.png", id:"ani1_wt18"},
		{src:"images/ani1_wt19.png", id:"ani1_wt19"},
		{src:"images/ani1_wt2.png", id:"ani1_wt2"},
		{src:"images/ani1_wt20.png", id:"ani1_wt20"},
		{src:"images/ani1_wt21.png", id:"ani1_wt21"},
		{src:"images/ani1_wt22.png", id:"ani1_wt22"},
		{src:"images/ani1_wt23.png", id:"ani1_wt23"},
		{src:"images/ani1_wt24.png", id:"ani1_wt24"},
		{src:"images/ani1_wt25.png", id:"ani1_wt25"},
		{src:"images/ani1_wt26.png", id:"ani1_wt26"},
		{src:"images/ani1_wt27.png", id:"ani1_wt27"},
		{src:"images/ani1_wt28.png", id:"ani1_wt28"},
		{src:"images/ani1_wt29.png", id:"ani1_wt29"},
		{src:"images/ani1_wt3.png", id:"ani1_wt3"},
		{src:"images/ani1_wt30.png", id:"ani1_wt30"},
		{src:"images/ani1_wt31.png", id:"ani1_wt31"},
		{src:"images/ani1_wt32.png", id:"ani1_wt32"},
		{src:"images/ani1_wt33.png", id:"ani1_wt33"},
		{src:"images/ani1_wt34.png", id:"ani1_wt34"},
		{src:"images/ani1_wt35.png", id:"ani1_wt35"},
		{src:"images/ani1_wt36.png", id:"ani1_wt36"},
		{src:"images/ani1_wt37.png", id:"ani1_wt37"},
		{src:"images/ani1_wt38.png", id:"ani1_wt38"},
		{src:"images/ani1_wt39.png", id:"ani1_wt39"},
		{src:"images/ani1_wt4.png", id:"ani1_wt4"},
		{src:"images/ani1_wt40.png", id:"ani1_wt40"},
		{src:"images/ani1_wt5.png", id:"ani1_wt5"},
		{src:"images/ani1_wt6.png", id:"ani1_wt6"},
		{src:"images/ani1_wt7.png", id:"ani1_wt7"},
		{src:"images/ani1_wt8.png", id:"ani1_wt8"},
		{src:"images/ani1_wt9.png", id:"ani1_wt9"},
		{src:"images/b1.png", id:"b1"},
		{src:"images/b2.png", id:"b2"},
		{src:"images/b3.png", id:"b3"},
		{src:"images/bj.jpg", id:"bj"},
		{src:"images/duquzhong01.png", id:"duquzhong01"},
		{src:"images/dx.png", id:"dx"},
		{src:"images/headimg.jpg", id:"headimg"},
		{src:"images/lg.jpg", id:"lg"},
		{src:"images/num1.png", id:"num1"},
		{src:"images/num2.png", id:"num2"},
		{src:"images/num3.png", id:"num3"},
		{src:"images/wenzi.png", id:"wenzi"},
		{src:"images/woyeyao.png", id:"woyeyao"},
		{src:"sounds/sound01.mp3", id:"sound01"}];
	var kardui2 = [{src:"images/ani2_wt381.png", id:"ani2_wt381"},
		{src:"images/ani2_wt391.png", id:"ani2_wt391"},
		{src:"images/ani2_wt401.png", id:"ani2_wt401"},
		{src:"images/ani2_wt411.png", id:"ani2_wt411"},
		{src:"images/ani2_wt421.png", id:"ani2_wt421"},
		{src:"images/ani2_wt431.png", id:"ani2_wt431"},
		{src:"images/ani2_wt441.png", id:"ani2_wt441"},
		{src:"images/ani2_wt451.png", id:"ani2_wt451"},
		{src:"images/ani2_wt461.png", id:"ani2_wt461"},
		{src:"images/ani2_wt471.png", id:"ani2_wt471"},
		{src:"images/ani2_wt481.png", id:"ani2_wt481"},
		{src:"images/ani2_wt491.png", id:"ani2_wt491"},
		{src:"images/ani2_wt501.png", id:"ani2_wt501"},
		{src:"images/ani2_wt511.png", id:"ani2_wt511"},
		{src:"images/ani2_wt521.png", id:"ani2_wt521"},
		{src:"images/ani2_wt531.png", id:"ani2_wt531"},
		{src:"images/ani2_wt541.png", id:"ani2_wt541"},
		{src:"images/ani2_wt551.png", id:"ani2_wt551"},
		{src:"images/ani2_wt561.png", id:"ani2_wt561"},
		{src:"images/ani2_wt571.png", id:"ani2_wt571"},
		{src:"images/ani2_wt581.png", id:"ani2_wt581"},
		{src:"images/ani2_wt591.png", id:"ani2_wt591"},
		{src:"images/ani2_wt601.png", id:"ani2_wt601"},
		{src:"images/ani2_wt611.png", id:"ani2_wt611"},
		{src:"images/ani2_wt621.png", id:"ani2_wt621"},
		{src:"images/ani2_wt631.png", id:"ani2_wt631"},
		{src:"images/ani2_wt641.png", id:"ani2_wt641"},
		{src:"images/ani2_wt651.png", id:"ani2_wt651"},
		{src:"images/ani2_wt661.png", id:"ani2_wt661"},
		{src:"images/ani2_wt671.png", id:"ani2_wt671"},
		{src:"images/ani2_wt681.png", id:"ani2_wt681"},
		{src:"images/ani2_wt691.png", id:"ani2_wt691"},
		{src:"images/ani2_wt701.png", id:"ani2_wt701"},
		{src:"images/ani2_wt711.png", id:"ani2_wt711"},
		{src:"images/ani2_wt721.png", id:"ani2_wt721"},
		{src:"images/gif1.png", id:"gif1"},	
		{src:"images/x1.png", id:"x1"},
		{src:"images/x2.png", id:"x2"},
		{src:"images/x3.png", id:"x3"}];
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

		//initUI();
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
		createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
	}
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