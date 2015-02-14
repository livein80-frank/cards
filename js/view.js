function initUI (_userheadUrl,_nickNameStr,_roleId,_greetId) {
	var curAni ;
	if(_roleId == 0){
		curAni = ani1; 	
	}else{
		curAni = ani2;
	}	
	curAni.kardMc.gotoAndPlay(2);
	curAni.kardMc.nickTxt.text = _nickNameStr +" 祝你" || "test";
	curAni.kardMc.gtInfoMc.gotoAndStop(_greetId+1);
	var img = new Image();
	img.onload = function() {
		var bm = new createjs.Bitmap(img);
		bm.scaleX = 100/img.width;
		bm.scaleY = 100/img.height;
		curAni.kardMc.headMc.addChild(bm);
	}
	img.src = _userheadUrl;

	Util.MovieClip.addFrameEvent(curAni.kardMc,"aniend",aniend);
		function aniend () {
			curAni.kardMc.stop();
			var btn = curAni.kardMc.btn;

			btn.addEventListener("click",function(){
				window.open("./index.php","_self");
			});
		}
	stage.addChild(curAni);				 
}