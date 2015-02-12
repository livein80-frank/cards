function initUI () {
	var _nickNameStr = "老高";
	var _isUserHead = false;
	var _userheadUrl = "";
	var _userHead = new Image();
	_userHead.onload = function(){
		_isUserHead = true;
	}
	//角色的 id
	var roleId = 1;
	//祝福语的 id
	var greetId = 0;
	//祝福语
	var greetArr = ['羊儿到，鸿运照。烦恼的事儿往边靠。羊年无烦恼！',
					'白马乘风去，三羊开泰来。谈笑送祝福，今日我先行。祝君身体棒，财源滚。'];


	console.log('roleId-->',roleId);
	var curAni ;
	if(roleId == 0){
		curAni = ani1; 	
	}else{
		curAni = ani2;
	}	
	curAni.kardMc.gotoAndPlay(2);
	curAni.kardMc.nickTxt.text = _nickNameStr +" 祝你" || "test";
	curAni.kardMc.gtInfoMc.gotoAndPlay(greetId);
	var img = new Image();
	img.onload = function() {
		curAni.kardMc.headMc.addChild(img);
	}
	stage.addChild(curAni);				 
}