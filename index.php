<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>美的冰箱</title>
<style type="text/css">
	html,body{padding: 0px;margin: 0px;}
</style>
<script type="text/javascript">
        if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
            var version = parseFloat(RegExp.$1);
            // if (version > 2.3) {
                var phoneScale = parseInt(window.screen.width) / 640;
                document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
            // } else {
                // var phoneScale = parseInt(window.screen.width) / 640;
                // document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
                //document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
            // }
        } else {
            document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
        }
    </script>
</head>

<body onload="init();" style="background-color:#D4D4D4">
	<canvas id="canvas" width="640" height="960" style="background-color:#000000"></canvas>



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
<script type="text/javascript" src="js/index.js"></script>
<script>
var canvas, stage,loadingUi, mainUi,ani1,ani2,ani3;
var loading_lib = [];
var main_lib = [];
	
var ani1_lib = [{src:"images/ani1_GIF.png", id:"ani1_GIF"},
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
		{src:"images/d1.jpg", id:"d1"},
		{src:"images/duquzhong01.png", id:"duquzhong01"},
		{src:"images/dx.png", id:"dx"},
		{src:"images/headimg.jpg", id:"headimg"},
		{src:"images/lg.jpg", id:"lg"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/LOGO.jpg", id:"LOGO"},
		{src:"images/num1.png", id:"num1"},
		{src:"images/num2.png", id:"num2"},
		{src:"images/num3.png", id:"num3"},
		{src:"images/s1btn.jpg", id:"s1btn"},
		{src:"images/s2btn.jpg", id:"s2btn"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"},
		{src:"images/tu1.png", id:"tu1"},
		{src:"images/wenzi.png", id:"wenzi"},
		{src:"images/woyeyao.png", id:"woyeyao"},
		{src:"sounds/sound01.mp3", id:"sound01"}];
var ani2_lib = [{src:"images/ani2_wt10.png", id:"ani2_wt10"},
		{src:"images/ani2_wt11.png", id:"ani2_wt11"},
		{src:"images/ani2_wt12.png", id:"ani2_wt12"},
		{src:"images/ani2_wt13.png", id:"ani2_wt13"},
		{src:"images/ani2_wt14.png", id:"ani2_wt14"},
		{src:"images/ani2_wt15.png", id:"ani2_wt15"},
		{src:"images/ani2_wt16.png", id:"ani2_wt16"},
		{src:"images/ani2_wt17.png", id:"ani2_wt17"},
		{src:"images/ani2_wt18.png", id:"ani2_wt18"},
		{src:"images/ani2_wt19.png", id:"ani2_wt19"},
		{src:"images/ani2_wt2.png", id:"ani2_wt2"},
		{src:"images/ani2_wt20.png", id:"ani2_wt20"},
		{src:"images/ani2_wt21.png", id:"ani2_wt21"},
		{src:"images/ani2_wt22.png", id:"ani2_wt22"},
		{src:"images/ani2_wt23.png", id:"ani2_wt23"},
		{src:"images/ani2_wt24.png", id:"ani2_wt24"},
		{src:"images/ani2_wt25.png", id:"ani2_wt25"},
		{src:"images/ani2_wt26.png", id:"ani2_wt26"},
		{src:"images/ani2_wt27.png", id:"ani2_wt27"},
		{src:"images/ani2_wt28.png", id:"ani2_wt28"},
		{src:"images/ani2_wt29.png", id:"ani2_wt29"},
		{src:"images/ani2_wt3.png", id:"ani2_wt3"},
		{src:"images/ani2_wt30.png", id:"ani2_wt30"},
		{src:"images/ani2_wt31.png", id:"ani2_wt31"},
		{src:"images/ani2_wt32.png", id:"ani2_wt32"},
		{src:"images/ani2_wt33.png", id:"ani2_wt33"},
		{src:"images/ani2_wt34.png", id:"ani2_wt34"},
		{src:"images/ani2_wt35.png", id:"ani2_wt35"},
		{src:"images/ani2_wt36.png", id:"ani2_wt36"},
		{src:"images/ani2_wt37.png", id:"ani2_wt37"},
		{src:"images/ani2_wt38.png", id:"ani2_wt38"},
		{src:"images/ani2_wt381.png", id:"ani2_wt381"},
		{src:"images/ani2_wt39.png", id:"ani2_wt39"},
		{src:"images/ani2_wt391.png", id:"ani2_wt391"},
		{src:"images/ani2_wt4.png", id:"ani2_wt4"},
		{src:"images/ani2_wt40.png", id:"ani2_wt40"},
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
		{src:"images/ani2_wt5.png", id:"ani2_wt5"},
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
		{src:"images/ani2_wt6.png", id:"ani2_wt6"},
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
		{src:"images/ani2_wt7.png", id:"ani2_wt7"},
		{src:"images/ani2_wt701.png", id:"ani2_wt701"},
		{src:"images/ani2_wt711.png", id:"ani2_wt711"},
		{src:"images/ani2_wt721.png", id:"ani2_wt721"},
		{src:"images/ani2_wt8.png", id:"ani2_wt8"},
		{src:"images/ani2_wt9.png", id:"ani2_wt9"},
		{src:"images/GIF.png", id:"GIF"},
		{src:"images/gif1.png", id:"gif1"},
		{src:"images/x1.png", id:"x1"},
		{src:"images/x2.png", id:"x2"},
		{src:"images/x3.png", id:"x3"}];
var ani3_lib = [{src:"images/haobuhao.png", id:"haobuhao"},
		{src:"images/haobuhao2.png", id:"haobuhao2"},
		{src:"images/shareTxt.png", id:"shareTxt"},
		{src:"images/tipsIcon.png", id:"tipsIcon"}	];
	
		

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

	//initUI(headimg,nickName);
	 initUI();
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
</body>
</html>