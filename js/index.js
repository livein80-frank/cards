//分享的默认地址

var _shareUrl = window.location.href;			

function initUI (_headimgUrl,_nickName) {

	console.log('initUI');

	//用户昵名 和 微信头像 可通过initUI传参的方式 传进来

	var _nickNameStr = _nickName;//"老高";

	var _isUserHead = false;

	var _userheadUrl = _headimgUrl;//"";


	var _userHead = new Image();

	_userHead.onload = function(){

		_isUserHead = true;

	}

	_userHead.src = _userheadUrl;



	//角色的 id

	var roleId = -1;

	//祝福语的 id

	var greetId = 0;

	//祝福语

	var greetArr = ['羊儿到，鸿运照。烦恼的事儿往边靠。羊年无烦恼！',
					'白马乘风去，三羊开泰来。谈笑送祝福，今日我先行。祝君身体棒，财源滚。',
					'鞭炮响，羊年到，喜气洋洋很重要幸福快乐直到老！',
					'新春到，羊儿跳   咩咩叫声福来到    生活“羊”光无限好！'];

	//是否是通过分享进入

	var _isShare = false;	




/**

 * [roleId 选择角色，进入同的动画]

 * @type {Number} 默认值为-1;

 */

	

	var curAni;

	function initMainUI () {

		var _bnt0 = mainUi.ui.btn0,_bnt1 = mainUi.ui.btn1;

		_bnt0.cursor = _bnt1.cursor = "pointer";

		_bnt0.on("click",function() {

			roleId = 0;

			curAni = new lib.aniUI01();

			initAniUI ();

		});

		_bnt1.on("click",function() {

			roleId = 1;

			curAni = new lib.aniUI02();

			initAniUI ();

		});

	}



	/**

	 * [initAniUI 开始制作贺卡]

	 * @return {[type]} [description]

	 */

	function initAniUI () {

		console.log(roleId);	

		curAni.ui.gotoAndPlay("d0");





		Util.MovieClip.addFrameEvent(curAni.ui,"init",aniinitHandle);

		stage.addChild(curAni);

		var _gtMc,_nextBtn,_changeBtn,_changeLock = false;

		function aniinitHandle () {

			// body...

			_changeBtn = curAni.ui.greetMc.changeBtn;

			_nextBtn = curAni.ui.greetMc.nextBtn;

			_gtMc = curAni.ui.greetMc.gtmc;

			if(mainUi && mainUi.parent){

				stage.removeChild(mainUi);	

			}



			_changeBtn.cursor = _nextBtn.cursor = "pointer";

			console.log(_gtMc);



			_changeBtn.on("click",function(){

				if(_changeLock) return;

				_changeLock = true;

				greetId++;

				if(greetId >= greetArr.length){
					greetId = 0;
				}
				// if(greetId>4){greetId=0}
				_gtMc.gotoAndPlay("s"+greetId);
				console.log('greetId-->',greetId);

			});

			Util.MovieClip.addFrameEvent(_gtMc,"s1end",unlock);

			Util.MovieClip.addFrameEvent(_gtMc,"s2end",unlock);

			Util.MovieClip.addFrameEvent(_gtMc,"s3end",unlock);

			Util.MovieClip.addFrameEvent(_gtMc,"s0end",function(){
			 	unlock();
			 	greetId = 0;
			 	_gtMc.gotoAndStop(0);
			 });

			/**

			 * [uolock 解锁状态]

			 * @return {[type]} [description]

			 */

			function unlock(){
				_gtMc.stop();	
				_changeLock = false;
			}



			_nextBtn.on("click",function(){				

				curAni.ui.gotoAndPlay('d2');

			});

		}

		var _kardMc,_nickTxt,_gtInfoTxt,_headMc;

		Util.MovieClip.addFrameEvent(curAni.ui,"d2end",showkard);

		function showkard () {

			curAni.ui.stop();

			

			_kardMc = curAni.ui.kardMc;			

			_nickTxt = _kardMc.nickTxt; 

			_headMc = _kardMc.headMc;

			



			var bm = new createjs.Bitmap(_userHead);

			bm.scaleX = 100/_userHead.width;

			bm.scaleY = 100/_userHead.height;

			_headMc.addChild(bm);

		

			// _kardMc.stop();

			_nickTxt.text = _nickNameStr+"祝你" || "test";

			_kardMc.gtInfoMc.gotoAndStop(greetId+1);

			

			 submitUserInfo();

		}



		/**

		 * [submit 提交用户信息]

		 * @return {[type]} [description]

		 */

		var postUrl = "/card/cardsAction.php?action=save";

		function submitUserInfo () {

			var userdata = {};

			//用户昵名

			userdata.nickName = _nickNameStr;

			//用户头像地址

			userdata.userheadUrl = _userheadUrl;			

			//角色的Id

			userdata.roleId = roleId;

			//祝福语的Id

			userdata.greetId = greetId;



			// _kardMc.play();
			// return;
			$.post(postUrl,userdata,function(data) {
				//提交成功后播放
				var obj = jQuery.parseJSON(data);
				// var obj = jQuery.parseJSON('{"name":"John"}');
				console.log('obj.isSuccess',obj.isSuccess);
				if(obj.isSuccess=='1'){
					//获取分享的地址
					//_shareUrl = obj.linkUrl; 
					_shareUrl = "http://"+window.location.host+"/card/view.php?cardId="+obj.cardId; 
					_kardMc.play();
					console.log('_kardMc.play');
					_shareTitle = "求红包利器" ;
					_shareDesc = "还在喝酸奶舔瓶盖吗？还在干嚼方便面吃辣条吗？还在吃泡面喝汤吗？小编带你一起装B一起飞好么？come，北鼻！" ;
					_shareLink = _shareUrl ;
					_shareImgUrl = "http://"+window.location.host+"/card/images/sharelogo.jpg" ;
					share(_shareTitle,_shareDesc,_shareLink,_shareImgUrl) ;

				}else{
					alert('提交失败,请检查网络!');	
				}
			})	
			// ,function(){
			// 	// 提交失败
			// 	alert('提交失败,请检查网络!');	
			// }		

		}





		//动画结束

		Util.MovieClip.addFrameEvent(curAni.ui.kardMc,"aniend",aniend);
		Util.MovieClip.addFrameEvent(ani3.mc,0,ani3Frame0);	
		function aniend () {

			_kardMc.stop();

			console.log('aniend-->',_isShare);

			if(_isShare==false){

				ani3.alpha = 0;
				stage.addChild(ani3);
				console.log('addChild ani3');

				Util.addTween.to(ani3,.4,{alpha:1,onComplete:onComplete});	

			}

		}
		function ani3Frame0 () {
			ani3.mc.gotoAndStop(roleId);
		}

		function onComplete(){

			if(curAni && curAni.parent){

				stage.removeChild(curAni);

				console.log('removeChild curAni');

			}

		}

		Util.MovieClip.addFrameEvent(ani3,"initAni3",initAni3);

		Util.MovieClip.addFrameEvent(ani3,"ani3End",ani3End);

		

		function initAni3 () {

			ani3.btn.cursor = "pointer";

			ani3.btn.on("click",function() {

				ani3.gotoAndPlay('d0');

			});

		}

		function ani3End () {

			ani3.stop();



			ani3.closeBtn.on('click',function(){

				console.log('ani3End');

				Util.MovieClip.playTo(ani3,0);

			});

		}



	}

	



	//

	initMainUI();

}


/*
已失效
var imgUrl = "http://"+window.location.host+"/cards/images/logo.png";
var lineLink = _shareUrl;
var descContent = '美的冰箱，求红包';
var shareTitle = '美的冰箱，求红包';
var appid = '';
 
function shareFriend() {
	WeixinJSBridge.invoke('sendAppMessage',{
		"appid": appid,
		"img_url": imgUrl,
		"img_width": "200",
		"img_height": "200",
		"link": lineLink,
		"desc": descContent,
		"title": shareTitle
	}, function(res) {
		//_report('send_msg', res.err_msg);
	})
}
function shareTimeline() {
	WeixinJSBridge.invoke('shareTimeline',{
		"img_url": imgUrl,
		"img_width": "200",
		"img_height": "200",
		"link": lineLink,
		"desc": descContent,
		"title": shareTitle
	}, function(res) {
		   //_report('timeline', res.err_msg);
		   //alert(res.err_msg) ;
		   alert(2) ;
	});
}
$(function(){
	// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
	document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
		// 发送给好友
		WeixinJSBridge.on('menu:share:appmessage', function(argv){
			shareFriend();
		});
		// 分享到朋友圈
		WeixinJSBridge.on('menu:share:timeline', function(argv){
			shareTimeline();
			alert(1) ;
			$("body").remove() ;
		});
	}, false);	
}) ;
*/