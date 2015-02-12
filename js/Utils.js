var Util = {};

Util.MovieClip = {
	setButton:function($mc){
		var mc = $mc;
		mc.mouseEnabled = true;
		mc.mouseChildren = false;
		
		//开启 舞台的鼠标over out 状态
		var _stage = mc.getStage();
		_stage .enableMouseOver(20);
		mc.addEventListener("rollover",rollover);
		console.log(mc.timeline.duration);
		function rollover(){
			Util.MovieClip.playTo(mc,mc.timeline.duration);
		}
		mc.addEventListener("rollout",function(){
			Util.MovieClip.playTo(mc,1);
		})		
	},
	playTo:function(mc,frame,attribute){
		var _curFrame = mc.currentFrame;
		var fr = -1;
		if(attribute){
			var _onComplete = attribute.onComplete || null;
			var _onUpdate = attribute.onUpdate || null;
		}
		if(typeof frame == "number"){
			fr = frame ;
		}else{
			fr = Util.MovieClip.labelToFrame(mc,frame);		
		}
		if(fr >= 0){
			var _t = Math.abs(fr-_curFrame)/30;
			if(_curFrame != fr){
				Util.addTween.to(mc,_t,{currentFrame:fr,onUpdate:function(){
					mc.gotoAndStop(mc.currentFrame);
					if(_onUpdate){
						_onUpdate({curFrame:mc.currentFrame,target:mc});
					}
				},onComplete:function(){
					if(_onComplete){
						_onComplete({curFrame:mc.currentFrame,target:mc});
					}
				}});
			}
		}
	},
	addFrameEvent:function(mc,frame,handle){
		var fr = -1;
		if(typeof frame == "number"){
			fr = frame ;
		}else{
			fr = Util.MovieClip.labelToFrame(mc,frame);		
		}
		if(fr >= 0){
			mc.timeline.addTween(createjs.Tween.get(mc).wait(fr).call(handle));
		}
	},
	labelToFrame:function(mc,label){
		var labels = mc.timeline.getLabels(label);
		if(labels .length>0){
			var frame = -1;
			var len = labels .length;
			for (var i =0;i<len;i++) {
				if(labels[i].label == label){
					frame = labels[i].position;
					console.log(frame);
				}
			}
			
		}
		return frame;
	}
};
Util.addTween = {
	to:function(target,duration ,attribute) {
		// body...
		var thisTarget = target;
		var delay = attribute.dalay || 0;
		var onCompleteHandle = attribute.onComplete || null;
		var onUpdateHandle = attribute.onUpdate || null;
		
		createjs.Tween.get(target,{onChange:onChangeHandle,override:true}).wait(delay).to(attribute,duration*1000).call(handleComplete);
		function handleComplete (argument) {
			// body...		
			if(onCompleteHandle){
				onCompleteHandle();
			}
		}
		function  onChangeHandle (e) {
			// body...		
			if(onUpdateHandle){
				onUpdateHandle(e);
			}

		}
	}
}