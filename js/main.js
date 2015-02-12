(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 960,
	fps: 30,
	color: "#000000",
	manifest: [
		{src:"images/bj.jpg", id:"bj"},
		{src:"images/lg.jpg", id:"lg"},
		{src:"images/s1btn.jpg", id:"s1btn"},
		{src:"images/s2btn.jpg", id:"s2btn"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"},
		{src:"images/wenzi.png", id:"wenzi"}
	]
};



// symbols:



(lib.bj = function() {
	this.initialize(img.bj);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.lg = function() {
	this.initialize(img.lg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,112);


(lib.s1btn = function() {
	this.initialize(img.s1btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,105);


(lib.s2btn = function() {
	this.initialize(img.s2btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,105);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,618);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,618);


(lib.wenzi = function() {
	this.initialize(img.wenzi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,535,369);


(lib.m_元件37 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D5165").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape.setTransform(4.1,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8.1,8.1);


(lib.m_元件36 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE6366").s().p("AheAiQgCgSAbgZQAcgcAogEQAmgDAjAjQAiAhgQAMQgQAMgUgNQgVgNghgCQgfgCgfAQQgPAIgIAAQgIAAgBgIg");
	this.shape.setTransform(18.7,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E58285").s().p("ACJBwQghgUg+gWQg9gXhMAqQhNApgQhEQgQhCA2g2QA2g2BagEQBZgEA+A+QA/A7gTBCQgPAygXAAQgHAAgHgFg");
	this.shape_1.setTransform(19.3,11.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.7,23.5);


(lib.m_元件34 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBFAC").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgNAQAAQARAAAMANQANAMAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape.setTransform(22.5,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9B7F").s().p("AhWBOQg0gagKgpQgLgoAkghQAkggA/gEQA7gFA1AZQAyAbALApQALAogkAgQglAhg+AEIgTABQgxAAgrgWg");
	this.shape_1.setTransform(15.2,10);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.5,20.1);


(lib.m_元件33 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBFAC").s().p("AgdAdQgLgMgBgRQABgQALgMQANgNAQAAQARAAAMANQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgNgMg");
	this.shape.setTransform(7.9,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9B7F").s().p("AhWBOQg0gagKgpQgLgoAkghQAkggA/gEQA7gFA1AZQAyAbALApQALAogkAgQglAhg+AEIgTABQgxAAgrgWg");
	this.shape_1.setTransform(15.2,10);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.5,20.1);


(lib.m_元件31 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#77C5DB").s().p("AiSFfQCDlGg+nzQA+hLBHBLQCQHOhSGcQhpBwg/AAQhNABgTiig");
	this.shape.setTransform(14.8,51.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.6,102.6);


(lib.m_元件30 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#77C5DB").s().p("AivDYQDJgTgEllQhJiDBWhQQBpg9BGA9IAAhSQAZgQAQAPIAACWQAPBmhKA0Qg2JVkwAPQinhuCeiIg");
	this.shape.setTransform(25.3,46.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50.7,92.5);


(lib.m_元件28 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#77C5DB").s().p("ABqFrQjshkg5krQgxkJCig9QgtFhDwB+QCXCMiOBqIgMAAIgMAAg");
	this.shape.setTransform(20,36.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.9,72.7);


(lib.m_元件27 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiMhuIEjAEQgZDTiWAGIgCAAQigAAAujdg");
	this.shape.setTransform(15.2,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoBxQiigPBCjSIEkAbQgrDGiRAAIgIAAg");
	this.shape_1.setTransform(75.6,14);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91.3,25.4);


(lib.m_元件25 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#182C61").s().p("AgPAoQgKgMgCgVQgCgUAGgQQAIgRALgDQAKgDAKANQAKAMACAVQACATgHARQgHARgMADIgEABQgHAAgIgLg");
	this.shape.setTransform(133.1,76.1,1,1,0,0,0,-0.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#182C61").s().p("AgJAxQgNgEgFgRQgGgSAFgSQAEgVAMgMQAMgLAKAEQAMAEAGARQAGASgFATQgEAUgMAMQgJAIgHAAIgGgBg");
	this.shape_1.setTransform(88.5,73.7,1,1,0,0,0,0,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8AE86").s().p("AgHCWQiPiUhci9QBzDXCRBcQB2BCBrhpQgcApghAlQghAdgsAAQgyAAg+gmg");
	this.shape_2.setTransform(199.7,109.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFEE9").s().p("AgVEAQiThchzjXQg/inBcg+QD1AgD7CKQBBAjACBDQgmB7hFBlQhCBBhFAAQgsAAgsgZg");
	this.shape_3.setTransform(203.8,95.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D8AE86").s().p("AjeBeQgXgsgQguQBNCAB+gjQCeg1Cii8QiHCoinBtQgrAMgiAAQhFAAgkgzg");
	this.shape_4.setTransform(31.3,92.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFEE9").s().p("Aj/CJQgrhzgHiAQARhABFgSQELhHD2AgQAiBmg7ByQijC8ieA2QgbAHgYAAQhbAAg9hlg");
	this.shape_5.setTransform(30.7,79);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFEC").s().p("Aj4AhQAfgQApAGQApAZASAsQg6hAhJAFgACeADQA1ABAmAKIhKAMQgjAFgqAkQAYgqAkgWgAgLAAQgHgIgIgHIgIgGQgXgMgWgEQAZgGAfAGQAOATACAXIgEgFgABghTQgbACgQALQAMgXAhACQAXACAPAWQgPgOgZgCg");
	this.shape_6.setTransform(117.5,25.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFFD7").s().p("AiLDRQgdgmAHgyQgGAXgQAUQggAXgpgKQgpgKAEgtIANgkQgbAjgkgKQgegIgNgfQgGglAVgaQAggTAhALQgXg9ASguQAXgfAxgGQApgBAnAbQgSggAQghQAVgeAxAFQAxAHAXAqQgOg1A3gQQA7gPAlAiQAXAggWAcQA9gkApAFQApAGALAjQAMAjgdAoQBZABAbAuQAbAsgSAZQgTAYgugDQArAFAEAiQAHAvgwAZQgxAXgogJQgogKgSgnQgSgnAFAhQAFAhgWAZQgVAYgfABQhCAHgTg/IgIghIgGAfQgCAmgzATQgRAHgPAAQgdAAgTgYgAicghQgSgsgpgZQgpgGgfAQIAMAAQBCAAA1A7gAA7g6QApgkAkgFIBJgMQglgKg1gBQgkAWgYAqgAh2ikQAWAEAXAMIAIAGQAIAHAGAJIAFAGQgCgZgOgTQgPgDgOAAQgOAAgNADgABhjCQgPgWgXgCQghgCgNAXQARgLAbgCQAZACAPAOg");
	this.shape_7.setTransform(121.4,38.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#623C0F").s().p("Ah7gFQA9AIAxAbQAgA0AJA4IgBABQgjh0hzgcgAgyhCQAyAGAyAZQAXAtABA0IgCABQgdhyhdgPgAAjiEQAzgRAdAlQAQAlgLAqQgChWhTgNg");
	this.shape_8.setTransform(180.6,48.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8AE86").s().p("AgTAlQgxgbg9gJQA8gKA+AhQAiA2gFBDQgJg3ggg1gAAsgcQgygZgygGQA+gTA0AlQAbAvgRBAQgBg1gXgtgABygaQALgqgQgkQgdglgzAQIgCAAQA1gkAsAhQAQA0gZAzIgBABIAAgCg");
	this.shape_9.setTransform(181.2,47.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#986E44").s().p("Aj3A3QESiGDdjTQhMExigEUQhaiciphQgAh2ArQBzAeAjB0IACgBQAEhEgjg2QgtgagtAAQgQAAgPADgAgsgQQBdAPAcByIACgBQASg/gcgxQghgXglAAQgVAAgWAHgAB+APIAAABIABgBQAZgxgQg0Qgtghg0AlIABAAQBTANADBUg");
	this.shape_10.setTransform(180.1,43.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#623C0F").s().p("AhHCMQAYg1AxgvQA9gSBGABQiFAJhFBtgAhoA5QAOg0AlgoQA+gQA5ACQhrgBg8BsgAhsh6QAqgfA2AYQhhgBgXBVQgCgsAaghg");
	this.shape_11.setTransform(63.8,37.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#986E44").s().p("Ajqk0QDDD2ESCzQjQA0iKCMQhxktgKk8gAgvBWQg1AwgLBEIACABQBFhtCFgJQgfgKgiAAQgjAAgoALgAhqAJQgqAtAEBCIACABQA9huBrABQghgOgiAAQggAAghALgAiehVQgeAwAPA0IAAABIAAABIABgCQAXhTBgACIACABQgggegjAAQgUAAgUAKg");
	this.shape_12.setTransform(67.8,30.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D8AE86").s().p("AgEAhQBMgXBAAWQhGgBg9ASQgxAvgYA1QALhEA1gwgAg/gqQBBgcBDAeQg5gCg+AQQglAogOA0QgEhBAqgrgAiBgjIAAgBQgQg2AegxQA5gZAyAtIgCgBQg2gYgpAfQgaAhACAsIAAACIAAgBg");
	this.shape_13.setTransform(63.5,36.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CEB982").s().p("AgYBlIgMgCIgBAAIAGhUQhOgbgWhYQBCBRAvAOQA1AHBhhWQg3BhhXAEIgFBUIgJAAg");
	this.shape_14.setTransform(112.1,92.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ADsBQQhQgXgViEIEwA3QgEA/g8AfQghARgoAAQgfAAgjgLgAl7AjQg8gjAChBIFKgZQgkCBhXAQQgcAFgYAAQg3AAgqgZg");
	this.shape_15.setTransform(110.2,76.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF6C3").s().p("AAdEGIAFhTQBagFA2hjQhhBYg3gJQgsgNhChSQAVBYBNAeIgHBTQj5gmmwBzQAMkGCvj8QFIkzIwCcQEJEdAJGnIgBACQlKiEk7AMgAEHBRQBQAYA8gfQA7geAEg/Ikvg3QAVCDBPAYgAmahAQgCBAA9AjQA8AkBYgQQBYgQAkiBg");
	this.shape_16.setTransform(107.4,76.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF1A2").s().p("AJZFQIgGgCIgjgNQg4gWiZgsQiagth3gRQh1gRgHAAQgEAAAEABQmDgMk9COIAIhCQGwh0D7AnIABAAIAMACIAJAAQE5gMFJCEIABgCQgImokJkcQDpBhBoDBQBlC8gZFzg");
	this.shape_17.setTransform(114.3,86);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,234.8,128.5);


(lib.m_元件16 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF6C3").s().p("AhZGIQg9ltB0nMQA4hMAyBLQgyHzBZFEQgxBTgzAAQgwAAg0hQg");
	this.shape.setTransform(11.2,47.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.4,94.6);


(lib.m_元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F7FE").s().p("AgMALQgGgEABgHQgBgFAGgFQAFgGAHAAQAHAAAFAGQAHAFAAAFQAAAHgHAEQgFAGgHAAQgHAAgFgGg");
	this.shape.setTransform(83,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F7FE").s().p("AgPADIANgxQARAqABASQACAWgPAKIgDABQgSAAADgsg");
	this.shape_1.setTransform(90.6,17.4,1,1,0,0,0,-0.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7F7FE").s().p("AgIAWQgVgWgHgfQAoALASALQAUAJgHAVQgKALgLAAQgLAAgLgKg");
	this.shape_2.setTransform(101.3,16.1,1,1,0,0,0,-0.2,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7F7FE").s().p("AgYAXQgLgKAAgNQAAgMALgKQAKgJAOgBQAPABAKAJQALAKAAAMQAAANgLAKQgKAKgPAAQgOAAgKgKg");
	this.shape_3.setTransform(15.9,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7F7FE").s().p("AgcAtQgQgWAUgWQARgUArgfQAEApgRAjQgOAZgSAAQgJAAgKgGg");
	this.shape_4.setTransform(5.4,21.1,1,1,0,0,0,0.8,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7F7FE").s().p("AgKAZQgZgZgIgmQAvANAWANQAYAMgHAZQgMANgOAAQgNAAgOgNg");
	this.shape_5.setTransform(96.7,4,1,1,0,0,0,-0.3,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7F7FE").s().p("AgSARQgIgHAAgKQAAgJAIgHQAIgHAKAAQALAAAIAHQAIAHAAAJQAAAKgIAHQgIAHgLAAQgKAAgIgHg");
	this.shape_6.setTransform(2.8,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7F7FE").s().p("AgYAXQgLgKAAgNQAAgMALgJQAKgKAOAAQAPAAAKAKQALAJAAAMQAAANgLAKQgKAJgPABQgOgBgKgJg");
	this.shape_7.setTransform(14.4,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{x:5.4,y:21.1}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:90.6,y:17.4}},{t:this.shape}]}).to({state:[{t:this.shape_4,p:{x:12.7,y:8.7}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_1,p:{x:86.7,y:9.8}}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,3.4,104.4,22.5);


(lib.m_元件13 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFDCCD").s().p("AAOA2IgBAAQACgGgGg3QgHg6gwh8QBXCsAGDPQgFhCgchGg");
	this.shape.setTransform(27.5,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLEpQiDgShChYQBGiIgEk9IAHgOQAQgdAtALIANAVQAzB9AGA5QAFA6gBAFIAAAAQAcBFAEBBQgFjPhYisQAlAIASAPIALAMQBHB0AlB1QArBiA0A9QgkBDg4ApIgQALQgmAXgeACIgLAAIgggBg");
	this.shape_1.setTransform(29,29.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFDECC").s().p("AhnD8QglgPg7glQgXgNgqgoIArg6QA5hQAMisQAEg2Afg+QAEE9hGCHQBCBYCBATQg3gFg8gXgADpCIQg0g8grhjQglh0hHh0QA4A5AkBnQBECZBLBGQhGBOg2AmQA4gpAkhDg");
	this.shape_2.setTransform(26.5,31.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,59.8);


(lib.m_元件12 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF6C3").s().p("AhcDLQg0gGgmgnQAHhCBOgVQAaASAgACQBfg2BMjwQBDAQgWCHQh6EAiAAAIgTgBg");
	this.shape.setTransform(29.1,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF6C3").s().p("AALEiQhDhIgXi3QgkkaAtgeQAsgfAmAyQgZF+BtBPQAGBXhZAAIgCAAg");
	this.shape_1.setTransform(9.7,29);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47.4,62.7);


(lib.m_元件11 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE6366").s().p("AhhAcQgBgNAcgWQAcgZApgCQAmgBAfAWQAeAUABANQAAANgggIQghgKghABQggAAghANQgQAGgJAAQgIAAAAgHg");
	this.shape.setTransform(20.7,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E58285").s().p("AjWBNQgDg9A3g6QA3g7BYgKQBXgJBMA9QBLA7gEA8QgEA9gngTQgngThMgRQhKgQhhAsQgpATgYAAQgiAAgBgkg");
	this.shape_1.setTransform(21.6,11.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43.2,22.7);


(lib.m_元件9 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9B7F").s().p("ABAAnIg4hLIALAAIA7BLgAANAnIg2hLIALAAIA5BLgAgYAnIg4hLIALAAIA7BLgAhIAnIg4hLIALAAIA7BLgAByAkIg4hKIALAAIA8BKg");
	this.shape.setTransform(12.9,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.8,7.9);


(lib.m_元件8 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAUQgJgEgDgJQgDgIAFgJQAFgJAJgDQAIgDAIAFQAKAFADAJQADAIgGAIQgEAKgJADIgHABQgEAAgGgEg");
	this.shape.setTransform(13.6,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAbQgLgGgEgMQgDgLAFgLQAGgLAMgDQAKgEALAFQAMAGADAMQAEAKgGAMQgFALgMAEIgJABQgGAAgHgDg");
	this.shape_1.setTransform(3.1,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghBBQgcgOgJgeQgJgbAOgcQAPgbAdgJQAcgKAcAPQAbAPAJAdQAJAbgOAcQgOAcgeAJQgLAEgLAAQgQAAgRgKg");
	this.shape_2.setTransform(14.2,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAYQgJgCgEgJQgFgJACgHQACgKAIgGQAIgFAHACQAJACAFAIQAFAJgDAIQgCAJgHAGQgHAEgFAAIgEAAg");
	this.shape_3.setTransform(73.5,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAeQgMgDgGgLQgGgLADgKQADgNAKgHQAKgGAJADQAMACAGAKQAGALgDALQgDAMgKAHQgHAFgHAAIgFAAg");
	this.shape_4.setTransform(83.2,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBJQgcgGgPgbQgPgaAHgcQAHgeAZgRQAZgSAZAHQAcAGAPAaQAPAagHAcQgHAfgZARQgSANgSAAQgHAAgHgCg");
	this.shape_5.setTransform(72.2,7.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86.1,25.3);


(lib.m_元件6 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCASQgFgBgDgGQgBgGABgGQACgIAEgFQAEgEAEABQAFABABAGQADAGgCAGQgCAIgFAEQgDAEgCAAIgBAAg");
	this.shape.setTransform(143.9,63);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#182C61").s().p("AgPBIQgRgDgHgYQgHgYAHgdQAHgeAQgTQAQgSAQADQARAEAHAYQAHAZgHAcQgHAegRATQgNAPgMAAIgGgBgAgCgUQgEAFgCAHQgBAIABAEQADAHAFABQACABAEgFQAFgFACgGQACgHgDgHQgBgGgFgBIgBAAQgFAAgCAEg");
	this.shape_1.setTransform(143.7,63.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZByQgagGgLgmQgLglALguQAKgvAbgeQAZgdAZAGQAbAGALAmQALAlgLAuQgKAvgbAeQgWAYgUAAIgJgBgAgQg3QgRATgHAeQgGAcAGAYQAHAYARAEQAQAEAQgTQARgSAGgfQAHgcgHgYQgHgYgRgEIgFgBQgMAAgOAQg");
	this.shape_2.setTransform(143.8,63.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAPQgFgFgCgHQgDgGACgGQABgHAFgBQAEgBADAEQAFAEADAIQACAFgCAHQgBAHgFABIgCAAQgDAAgCgDg");
	this.shape_3.setTransform(92.7,63.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#182C61").s().p("AgKA7QgTgSgJgeQgJgbAFgZQAFgYAQgFQARgFAQARQASARAJAeQAJAcgEAYQgGAYgQAGIgIABQgNAAgLgNgAgFgYQgFABgBAHQgCAGADAIQACAFAFAFQADAEAEgBQAFgCABgGQACgFgCgHQgDgIgFgEQgCgEgDAAIgCABg");
	this.shape_4.setTransform(92.8,64.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSBcQgcgbgPguQgOgtAHgmQAJgmAZgIQAagIAaAaQAdAcAPAuQAOAtgIAmQgIAngaAIQgFABgGAAQgVAAgUgVgAgVhEQgQAFgFAYQgFAZAJAbQAJAeATASQAPARARgFQAQgGAGgYQAEgYgJgcQgJgegSgRQgMgNgMAAIgJABg");
	this.shape_5.setTransform(92.8,64);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DBC4AC").s().p("AAHALQgGgBgEgDQgGgEgDgDQgEgEADgDQABgDAGAAQAFAAAEAEQAHAEADACQADAFgCADQgBADgFAAIgBAAg");
	this.shape_6.setTransform(200.9,34.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DBC4AC").s().p("AAVAgQgQgBgQgKQgRgKgJgLQgKgOAGgJQAFgJAQABQAQABAQAKQASALAIAKQAJAOgFAJQgFAIgNAAIgDAAg");
	this.shape_7.setTransform(208.4,38.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8AE86").s().p("AAoCeIAegFQApAigTBDQABhcg1gEgAgbCoIAbgEQAWA3goAgQAbgqgkgpgAiIBcQASBHA+gfQgBAKABANQgRAFgNAAQgwAAgChEgABgBpIACgTQA6AaAxg8QggA7gtAAQgPAAgRgGgAgMA3QBAArAfgmIgEAdQgOAGgNAAQgkAAgcgogAiFgSIAKgaQARA7AwANIgKABQgpAAgYgvgAgThSIAeANQAIBCggAgQAcg8gigzgABvgZIADgUQAxAHAihEQgOBShCAAIgGgBgAjGi6QAEBvA9AMIgKAbQhRg0AahigAAhhPQA1gqgfhdQApBiguAsgAhGh7QAjgmgqhcQA0BWgdAyg");
	this.shape_8.setTransform(197.6,62.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7A5836").s().p("AgOCLQgBgNACgLQAEgVAMgLQgMAdAPAaIBugUIAGgtIADgeIAKhbIhSglIgfgOIhJghIgeBIIgKAZIgzB6IgNgHIA2iEIAKgbIAehLIAhAPIAQAFIBYAnIARAGIA/AcIgDAUIgNBuIgBATIgGAvIgVACIgeAEIgpAHIgbADIgaAEIgCgQg");
	this.shape_9.setTransform(193.4,63.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#986E44").s().p("AjJC6IAlhYIAyh5QAbA1AxgHQgxgNgQg7IAdhIIBKAhQAiA0geA8QAjgggJhCIBTAlIgLBcQgfAmhBgrQApA2A0gUIgFAtIhtAUQgRgaAOgdQgOALgEAWQg+AfgThHQAEBWBMgXIACAQIAcgDQAkApgdAqQAqgggYg3IApgHQA1AFAABcQAThEgqghIAVgCIAGguQBDAZAqhOQgxA7g6gaIANhuQBHAEAOhVQgiBEgxgHIg/gbQAtgsgphiQAfBdg0AqIhYgmQAdgyg0hXQArBcgjAnIghgPIgeBLQg+gMgDhvQgaBiBQA0Ig2CEQh7hEAUjeICAhsIEDgmICiCwIAREmIjUDdg");
	this.shape_10.setTransform(195.6,62.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DBC4AC").s().p("AgNAIQgCgDADgFQADgCAGgEQAEgEAGAAQAGAAABADQACADgDAEQgDADgGAEQgEAEgGAAQgGAAgBgDg");
	this.shape_11.setTransform(27.7,35.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DBC4AC").s().p("AgpAYQgFgJAJgNQAJgLARgLQAQgKAQgBQAQgBAFAJQAGAJgKANQgIAMgSAKQgQAKgQABIgDAAQgNAAgFgIg");
	this.shape_12.setTransform(20.4,39.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7A5836").s().p("AgjCGIgcgKIgsgPIgggJIgWgHIADguIACgSIAJhrIACgUIBLgNIAUgCIBngTIASgDIAngGIAQBOIAGAbIAeCIIgPAEIgdh+IgGgbIgRhKIhYAQIgjAIIhhARIgIBbIgCAbIgEAsIBzAqQAYgVgKgfQAMAOAAAWQAAAKgCALIgGAQg");
	this.shape_13.setTransform(34.8,66);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D8AE86").s().p("AgqCUIAcAKQgyAfAXAuQgngmAmgxgAh2B8IAgAJQg7gGgSBYQgHhFA0gWgAATCXQAEgLAAgKQA8ApAjg/QgPA3goAAQgTAAgZgMgAjzAAQApBBBDgMIgCASIgRACQhAAAgZhJgAhyA8IACgbQAZAqBQgbQghAYgfABQgWAAgVgNgAAvAgQA3gEAfg1IAGAZQgfAkgkAAQgMAAgNgEgAgHhLIAjgIQgvArATA/QgeglAXg9gACTgnQBGAAAbhpQAIBihjAigAjJiWQAXBIA2AEIgCAUQhNgMAChUgAgYjgQg1BTAwA0IgUACQgpg0BChVgAB/jqQhABPAdAsIgSADQgVg2BKhIg");
	this.shape_14.setTransform(32.7,63.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#986E44").s().p("AlVBPIBRkVIDViGIESBZIBzCCQgaDYiUAnIgeiKQBjgggIhiQgbBphGAAIgQhOIgnAGQgdgsBAhPQhKBIAVA2IhnATQgwg0A1hTQhCBVApA0IhLANQg2gEgXhIQgCBUBNAMIgJBrQhDAMgphCQAcBUBOgMIgDAuIAWAHQg0AWAHBFQAShYA7AGIAsAPQgmAxAnAmQgXguAygfIAdAJIAEgQQBNAnAWhSQgjA/g8gpQAAgWgMgOQAIAfgWAVIhzgqIAEgsQAzAeA4gqQhQAbgZgqIAIhbIBhgRQgXA7AfAnQgUg/AvgrIBYgQIARBKQgfA1g3AEQAyAQAqgwIAdCAIAVBcIlLBfg");
	this.shape_15.setTransform(34.2,61.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFEC").s().p("AkkAoQAlgUAwAHQAxAdAUA1QhEhMhWAHgAC6AEQA/ABArAMIhWANQgqAHgwArQAcgyAqgagAgOAAQgHgKgKgIIgJgHQgagPgbgEQAegHAkAHQARAXACAcIgGgHgABxhiQgfACgUAOQAOgbAoABQAbADASAaQgSgRgegCg");
	this.shape_16.setTransform(113.7,12.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFFD7").s().p("AikD2QghgsAHg7QgGAbgTAXQgmAagwgLQgxgMAFg1IAQgqQggApgqgMQgkgJgQgkQgGgsAZgeQAmgYAmAPQgbhJAVg1QAbgmA5gHQAygBAtAgQgVgmATgmQAYgkA6AHQA6AHAbAyQgRg/BCgSQBEgTAsApQAbAmgaAhQBIgqAxAFQAwAIANAoQANApghAwQBoABAgA1QAgA1gWAdQgWAdg2gDQAzAFAFAoQAIA4g4AcQg6AcgvgLQgvgLgVguQgWguAGAnQAGAmgaAdQgZAdgkABQhNAJgYhLIgJgmIgHAjQgCAug8AWQgVAIgSAAQghAAgXgcgAi4gnQgUg0gxgdQgwgIgkAUIAOAAQBNAAA+BFgABGhEQAxgrApgGIBXgOQgsgLg/gBQgqAZgcAygAiLjBQAbAEAaAOIAJAHQAKAJAIALIAFAHQgCgegRgWQgSgEgQAAQgRAAgPAEgABzjlQgSgagbgCQgogCgOAbQAUgNAfgCQAeACASAQg");
	this.shape_17.setTransform(118.2,27.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D8AE86").s().p("AiLBIQgbgEgYgJQCNAKBahCQA5g8BcgPQAEAcgjAoQhFBNjBAAIgkgBg");
	this.shape_18.setTransform(210.4,108.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFEE9").s().p("AikCKQgigOgQgfQgBhaAphWQANggAqgXQCsBKBnAcQA2AOAFAcQhcAOg5A/QhNA4h1AAIgkgBg");
	this.shape_19.setTransform(207.8,100.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D8AE86").s().p("AiNgEQgggoAEgcQBTAPAyA8QBQBCB+gKQgVAJgYAEIggABQisAAg+hNg");
	this.shape_20.setTransform(25.5,110.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFEE9").s().p("Ag6BTQgzg/hSgOQAEgcAxgOQBbgcCbhKQAlAXALAgQAmBWgCBaQgOAfgeAOIghABQhoAAhFg4g");
	this.shape_21.setTransform(27.7,102.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CEB982").s().p("AADBTIgDhTQg1gMgrg8QAzAtAzAEQAxgOAqgtQgXAzg1AdIAFBTIgBABIgMABIgKAAg");
	this.shape_22.setTransform(118.8,81.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF1A2").s().p("AsNGTQgWliBni4QBsjAD0hhQiuCyhEDqQgIAbgHAeQgaBxgDB+QABgBAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIALgDIBAgXQEyhoEkALIAJAAIAMgBIACgBQDugjGJBbIA4AOIAcAGIAIBEIgVgJIg5gXQkthulmAKQAEgBgEAAQgIAAh6ASQh9ASigAsQiEAkg/AVIgYAJIglANIgGACIiYBZIgBgWg");
	this.shape_23.setTransform(115.2,73.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFF6C3").s().p("ArBF8QACh+AahxQAHgeAIgcQBFjoCuizQJKicFiEzQCdETAcDvIgcgHIg3gOQmKhbjsAjIgFhUQAzgeAXgzQgqAugvANQg1gEgzgtQArA9A1ANIAFBTQkmgLkyBoIhAAXIgKAEQAAgBgBgBQAAAAAAAAQAAgBAAAAQAAABAAAAg");
	this.shape_24.setTransform(122.3,63.8);

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,229.5,118);


(lib.m_元件5 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFDDA").s().p("AAAkZQgJFUAhDfQhSj1A6k+g");
	this.shape.setTransform(26.5,61.6,1,1,0,0,0,-0.1,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFDDA").s().p("AgrkVQAfFSA7DZQhvjqAVlBg");
	this.shape_1.setTransform(30.9,127.5,1,1,0,0,0,-1.1,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFDDA").s().p("AkZAAQFTAJDfggQiOAvimAAQh4AAiGgYg");
	this.shape_2.setTransform(87.2,104.3,1,1,0,0,0,0.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFDDA").s().p("AkYAAQFSAJDgggQiPAvimAAQh4AAiFgYg");
	this.shape_3.setTransform(86.8,91.5,1,1,0,0,0,0.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDE40B").s().p("AgUKBQiIpCAYrZIAAgJIACAWICWhZIADgBQgnM+CZKRQhkgWg5hRg");
	this.shape_4.setTransform(13.7,90.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFCBF").s().p("ApKMEQgvkzgXkqQLkBfJPh9QgIEWgtE1QlsBRlzAAQjrAAjughgAqVBfIAAgBIgEhIQgTleAQlTQA+gVCEgkQChgtB8gRQB9gSAIAAQAEAAgEABQFjgKEuBuQBLFGABGAIAAA4IAAARIAAABQliBAljAAQk5AAk8gyg");
	this.shape_5.setTransform(89.4,80.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEF27A").s().p("ApgL4QiaqSAos9IADgBIAlgNIAYgJQgQFTATFgIAFBGIAAABQKgBqKZh2IAAgBIAAgRIAAg4QAAmChMlGIA5AXQB/JEiCN7Ql4BPmWAAQjwAAj7gbgApAKxQJmBTJSiDQAtk1AIkWQpPB9rkhfQAXEqAvEzg");
	this.shape_6.setTransform(88.4,88.8);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,161.5,167.6);


(lib.m_元件3 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.424)","rgba(255,255,255,0)"],[0,1],-14.2,0,14.3,0).s().p("EgD3AouQgUAAAAhCMAAAhPXQAAhCAUAAIHvAAQAUAAAABCMAAABPXQAABCgUAAg");
	this.shape.setTransform(26.9,260.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.424)","rgba(255,255,255,0)"],[0,1],-7.4,0,7.5,0).s().p("EgCBAouQgKAAAAhCMAAAhPXQAAhCAKAAIEDAAQAKAAAABCMAAABPXQAABCgKAAg");
	this.shape_1.setTransform(55.4,260.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69.5,521.4);


(lib.m_bjmc = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.bj();
	this.instance.setTransform(-320,-480);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-480,640,960);


(lib.m_补间17 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1ECF4").s().p("Al0gqQEmA7HDAHQiJATh9AAQkJAAjahVg");
	this.shape.setTransform(-30.2,83.9,1,1,0,0,0,-0.4,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3EBF3").s().p("AgBkYQBuE8iYD1QA8jegSlTg");
	this.shape_1.setTransform(49,-42.5,1,1,0,0,0,-0.1,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1ECF4").s().p("AAqkVQAWFBhsDqQA5jZAdlSg");
	this.shape_2.setTransform(49.1,57,1,1,0,0,0,1,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1ECF4").s().p("AkTgWQDbAfFMgKQiFAYh4AAQigAAiKgtg");
	this.shape_3.setTransform(-13.1,17.5,1,1,0,0,0,-0.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1ECF4").s().p("AkTgWQDbAfFMgKQiFAYh4AAQigAAiKgtg");
	this.shape_4.setTransform(-8.1,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7EC1DB").s().p("AqIOAQiox5D6p6QHPirMQCjQBjQRizMYQj/Aej0AAQmFAAlphMgAqhBxIABA4IAAAQIACA6IABATIAAAFQAKELAsEnQJHCBJZhWQArkkAVkbIACgeIAAAAIAEhIIAAgBIAAgBIAFhHIABgcQrQBhpVibIgBBNgAofstQhyFlgOG5QJWCZLQhgQASmygomwQlDhRkcAAQktAAkEBcg");
	this.shape_5.setTransform(-7.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A0DDEF").s().p("ApdM9QgrkngKkLIAAgFIgBgTIgDg6IAAgQIAAg4IABhNQJVCbLQhhIgCAcIgEBHIAAABIAAABIgFBIIABAAIgCAeQgWEbgqEkQjxAijtAAQlkAAlfhNgAqUgPQANm5BzllQH2izKaCoQAnGwgRGyQkVAlkCAAQmeAAlxheg");
	this.shape_6.setTransform(-8.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3FA3C9").s().p("AgzuUQAuAgBvBGIAHBUIAODsQAbLZiDJDQg4BRhhAWQCwsYhhwRg");
	this.shape_7.setTransform(65.9,2.6);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.1,-97.2,158.2,194.5);


(lib.m_补间13 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9B7F").s().p("AhaBQQgygGgJgcQgIgbAlgfQAnghA+gUQA8gTAyAFQAzAGAIAcQAJAbgnAfQgmAhg+AUQgvAPgpAAIgWgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.2,-8.1,30.4,16.3);


(lib.m_补间11 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9B7F").s().p("AhaBQQgygGgJgcQgIgbAlgfQAnghA+gUQA8gTAyAFQAzAGAIAcQAJAbgnAfQgmAhg+AUQgvAPgpAAIgWgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.2,-8.1,30.4,16.3);


(lib.m_补间9 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9B7F").s().p("AgOBDQg7gNglgdQglgbAGgcQAGgcAugLQAvgLA5AOQA7ANAlAdQAlAbgGAcQgGAdguAKQgVAFgYAAQgcAAgfgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.3,-7.5,28.7,15.1);


(lib.m_补间3 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AiACCQhHg7AEiAIAZgQQBLg2DygtQAmBOALBQQAAAwglA5QgmA6haATQgYAFgUAAQg/AAg0grg");
	this.shape.setTransform(-29.8,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AgQCjQhVgKgmg1Qgmg1gCgwQAGhRAehSQDhAWBIAuIAYAMQALCAg9BBQg0A4hGAAQgKAAgMgCg");
	this.shape_1.setTransform(32.2,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmuCGQhGg5AEiCIAZgPQBLg1DzguQAmBOALBQQABAwgmA6QglA5hbATQgXAFgWAAQhAAAg0gsgAErCXQhVgLglg1Qgmg1gDgwQAGhSAfhRQDjAWBIAuIAYAMQALCAg+BBQg0A4hHAAIgXgBg");
	this.shape_2.setTransform(0.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFD").s().p("AleDBQhSgUgkg0QgxhSgDhbIAZgQQgECCBGA5QBGA7BbgUQBbgTAlg5QAmg6gBgwQgLhPgmhPIAagHQAoBRALBTQAHB3hkA7QhLAthBAAQgVAAgVgFgADQCNQhggzAAh2QAFhVAhhUIAYAFQgfBRgGBTQADAvAmA1QAlA1BVALQBVAKA9hBQA+hBgLiAIAYANQACBdgpBVQgeA2hKAeQgbAKgdAAQg1AAg9ggg");
	this.shape_3.setTransform(0.2,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("AnHAmQBQgsDVg1QApgIAkg9QgGA2giAnIgaAIQjyAshLA1IgaAPIgZAQIgyAfQAhgxBRgtgAILA2IgZgNIgYgMQhIgsjjgWIgXgGQgigjgJg1QAmA6AlADQDIAgBMAmQBNAjAhAtg");
	this.shape_4.setTransform(0,-11.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57,-24.3,114.1,48.6);


(lib.m_补间1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AiACCQhHg7AEiAIAZgQQBLg2DygtQAmBOALBQQAAAwglA5QgmA6haATQgYAFgUAAQg/AAg0grg");
	this.shape.setTransform(-29.8,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AgQCjQhVgKgmg1Qgmg1gCgwQAGhRAehSQDhAWBIAuIAYAMQALCAg9BBQg0A4hGAAQgKAAgMgCg");
	this.shape_1.setTransform(32.2,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmuCGQhGg5AEiCIAZgPQBLg1DzguQAmBOALBQQABAwgmA6QglA5hbATQgXAFgWAAQhAAAg0gsgAErCXQhVgLglg1Qgmg1gDgwQAGhSAfhRQDjAWBIAuIAYAMQALCAg+BBQg0A4hHAAIgXgBg");
	this.shape_2.setTransform(0.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFD").s().p("AleDBQhSgUgkg0QgxhSgDhbIAZgQQgECCBGA5QBGA7BbgUQBbgTAlg5QAmg6gBgwQgLhPgmhPIAagHQAoBRALBTQAHB3hkA7QhLAthBAAQgVAAgVgFgADQCNQhggzAAh2QAFhVAhhUIAYAFQgfBRgGBTQADAvAmA1QAlA1BVALQBVAKA9hBQA+hBgLiAIAYANQACBdgpBVQgeA2hKAeQgbAKgdAAQg1AAg9ggg");
	this.shape_3.setTransform(0.2,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("AnHAmQBQgsDVg1QApgIAkg9QgGA2giAnIgaAIQjyAshLA1IgaAPIgZAQIgyAfQAhgxBRgtgAILA2IgZgNIgYgMQhIgsjjgWIgXgGQgigjgJg1QAmA6AlADQDIAgBMAmQBNAjAhAtg");
	this.shape_4.setTransform(0,-11.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57,-24.3,114.1,48.6);


(lib.m_wenzimc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+hKKIAAimICeAAIglpZIomCTIBDlxIGuhXIgWjrIGKh9IAAE3IEagsIAfD+Ik5BMIAAM6IjPCvgAS7KaICiuEIALACIJ3AlIidIBIkfANIgKBhIM8AvIh1EegAYrBnIBtAAIAhhmIiYgQgA2PGkIBBigIKGEQIlsDHgAn2GaIGLjbIA2BAIAnAAIAAhPIF2gOIASl2Il0gQIAAhoIgmACIilDyIAlAnIBIgaIA4BbImnE/IjNjDIB8i9IiwiBIE6p5ID6CKIjLFHIAfAVIB9iiIDCA+IADACIALghIN7giIA2ErIlPgLIAAFgIGFAAIBBDdIxIClIAAjJIgkgIIl7F3gEglUAGUIGTiEIAACwIjbC/gAfPFiIAzpXIq3guIivFBIiEhzIDbqjIETAsIhUDyIOAgpIhlNwgEgkPAB3ICghkIBtCTIhHA7gA2cBxIDVkHIDqCYIldC8gA19o3IgHgTIBKjdICzBhIiJCPg");
	mask.setTransform(-15.9,47.1);

	// 图层 6
	this.instance = new lib.m_元件3();
	this.instance.setTransform(-309.2,-50.6,0.999,0.999,25,0,0,34.7,260.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:275.5,y:153},14).wait(16));

	// 图层 8
	this.instance_1 = new lib.wenzi();
	this.instance_1.setTransform(-267.4,-216.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.4,-216.4,534.9,369);


(lib.m_元件7123213213213213 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.m_元件8();
	this.instance.setTransform(57.9,26.8,1,1,0,0,0,43,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:27.5},2).to({y:26.8},2).wait(1));

	// 图层 1
	this.instance_1 = new lib.m_补间1("synched",0);
	this.instance_1.setTransform(57,24.3);

	this.instance_2 = new lib.m_补间3("synched",0);
	this.instance_2.setTransform(57,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},2).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.1,48.6);


(lib.m_元件35 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.m_元件36();
	this.instance.setTransform(19.4,11.7,1,1,0,0,0,19.4,11.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.7,23.5);


(lib.m_元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.m_元件34();
	this.instance.setTransform(142.3,17.1,1,1,0,0,0,15.2,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88,y:17},19).to({scaleX:1,scaleY:1,y:17.1},20).wait(1));

	// 图层 1
	this.instance_1 = new lib.m_元件33();
	this.instance_1.setTransform(15.2,10.1,1,1,0,0,0,15.2,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.84,scaleY:0.84},19).to({scaleX:1,scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.5,27.1);


(lib.m_元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACeBdQhOgwAjiYIGJAjQgXCwh9ATQgiAFgfAAQhRAAg4gjgAm1BHQhTgrAPibIGdAGQgZDAh2AVQgnAHgkAAQhHAAg4gcg");
	mask.setTransform(50.9,12.9);

	// 图层 1
	this.instance = new lib.m_元件27();
	this.instance.setTransform(56.9,13,1,1,0,0,0,45.6,12.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:49.6,y:12.3},19,cjs.Ease.get(1)).wait(30).to({x:56.9,y:13},20).wait(11));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiIBVQhTgqAPicIGbAHQgZC/h2AWQgnAHgiAAQhHAAg4gdg");
	this.shape.setTransform(20.8,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiTBTQhOgwAjiYIGIAjQgYCwh8ATQgjAFgdAAQhRAAg4gjg");
	this.shape_1.setTransform(81.5,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.8,25.7);


(lib.m_元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.m_补间9("synched",0);
	this.instance.setTransform(155.3,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88},19).to({scaleX:1,scaleY:1},20).wait(1));

	// 图层 1
	this.instance_1 = new lib.m_补间11("synched",0);
	this.instance_1.setTransform(15.2,13.6);

	this.instance_2 = new lib.m_补间13("synched",0);
	this.instance_2.setTransform(15.2,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.9,scaleY:0.9},19).to({_off:true,scaleX:1,scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.7,21.8);


(lib.m_元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.m_元件11();
	this.instance.setTransform(21.6,11.4,1,1,0,0,0,21.6,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.89},4).to({scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.2,22.7);


(lib.m_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.m_元件25();
	this.instance.setTransform(111.1,99.7,1,1,0,0,0,111.3,99.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.8,x:104.6},19).wait(30).to({rotation:0,x:111.1},20).wait(11));

	// 图层 5
	this.instance_1 = new lib.m_元件32();
	this.instance_1.setTransform(97.5,162.2,1,1,0,0,0,78.8,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:13.6,rotation:2.1,x:94.4,y:162.3},19).wait(30).to({regY:13.5,rotation:0,x:97.5,y:162.2},20).wait(11));

	// 图层 6
	this.instance_2 = new lib.m_元件26();
	this.instance_2.setTransform(99,156.3,1,1,0,0,0,50.9,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:50.8,rotation:2.3,x:95.2,y:156.4},19).wait(30).to({regX:50.9,rotation:0,x:99,y:156.3},20).wait(11));

	// 图层 8
	this.instance_3 = new lib.m_元件30();
	this.instance_3.setTransform(68.9,209.2,1,1,0,0,0,25.4,46.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:64.1},19).wait(1).to({regX:8.3,regY:82.9,x:47,y:245.8},0).to({scaleY:1.02},5).to({scaleY:1},5).to({scaleY:1.02},5).to({scaleY:1},5).to({scaleY:1.02},4).to({scaleY:1},4).wait(1).to({regX:25.4,regY:46.3,x:64.1,y:209.2},0).to({x:68.9},20).wait(11));

	// 图层 7
	this.instance_4 = new lib.m_元件28();
	this.instance_4.setTransform(39.4,219.1,1,1,0,0,0,19.9,36.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:35.1},19).wait(30).to({x:39.4},20).wait(11));

	// 图层 9
	this.instance_5 = new lib.m_元件31();
	this.instance_5.setTransform(186.7,238.3,1,1,0,0,0,14.8,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:180.7},19).wait(30).to({x:186.7},20).wait(11));

	// 图层 10
	this.instance_6 = new lib.m_元件35();
	this.instance_6.setTransform(97.2,182.6,1,1,0,0,0,19.4,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:4.8,x:95.4},19).wait(30).to({rotation:0,x:97.2},20).wait(11));

	// 图层 11
	this.instance_7 = new lib.m_元件37();
	this.instance_7.setTransform(103.7,161,1,1,0,0,0,4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:100},19).wait(30).to({x:103.7},20).wait(11));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D5165").s().p("AgdAeQgNgNAAgRQAAgQANgOQANgLAQAAQARAAANALQANAOAAAQQAAARgNANQgNANgRgBQgQABgNgNg");
	this.shape.setTransform(90.8,160.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D5165").s().p("AgdAeQgMgNAAgRQAAgQAMgOQAMgLARAAQASAAAMALQAMAOAAAQQAAARgMANQgMANgSgBQgRABgMgNg");
	this.shape_1.setTransform(90.6,160.6);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D5165").s().p("AgdAeQgNgNAAgRQAAgQANgOQANgLAQAAQASAAAMALQAMAOAAAQQAAARgMANQgMANgSgBQgQABgNgNg");
	this.shape_2.setTransform(90.2,160.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D5165").s().p("AgdAeQgMgNgBgRQABgQAMgOQAMgLARAAQARAAANALQANAOAAAQQAAARgNANQgNANgRgBQgRABgMgNg");
	this.shape_3.setTransform(88.9,160.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D5165").s().p("AgdAeQgNgNABgRQgBgQANgOQAMgLARAAQARAAANALQANAOAAAQQAAARgNANQgNANgRgBQgRABgMgNg");
	this.shape_4.setTransform(87.6,160.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D5165").s().p("AgeAfQgNgNAAgSQAAgRANgOQANgNARAAQASAAANANQAMAOAAARQAAASgMANQgNANgSAAQgRAAgNgNg");
	this.shape_5.setTransform(87.2,160.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D5165").s().p("AgeAgQgOgNAAgTQAAgSAOgOQANgNARAAQATAAANANQANAOAAASQAAATgNANQgNAOgTAAQgRAAgNgOg");
	this.shape_6.setTransform(87.2,160.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D5165").s().p("AgfAhQgOgNAAgUQAAgSAOgPQANgOASAAQATAAANAOQAOAPAAASQAAAUgOANQgNAPgTAAQgSAAgNgPg");
	this.shape_7.setTransform(87.2,160.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D5165").s().p("AggAiQgPgOAAgUQAAgTAPgQQAOgOASABQAUgBANAOQAPAQAAATQAAAUgPAOQgNAPgUAAQgSAAgOgPg");
	this.shape_8.setTransform(87.2,160.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D5165").s().p("AgeAfQgNgNAAgSQAAgSANgNQANgNARAAQASAAANANQANANAAASQAAASgNANQgNAOgSAAQgRAAgNgOg");
	this.shape_9.setTransform(87.2,160.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D5165").s().p("AgfAhQgOgOAAgTQAAgSAOgOQAOgOARAAQATAAANAOQANAOAAASQAAATgNAOQgNAOgTAAQgRAAgOgOg");
	this.shape_10.setTransform(87.2,160.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D5165").s().p("AggAiQgOgOAAgUQAAgTAOgQQAOgNASAAQAUAAANANQAOAQAAATQAAAUgOAOQgNAPgUAAQgSAAgOgPg");
	this.shape_11.setTransform(87.2,160.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D5165").s().p("AgdAeQgNgNAAgRQAAgQANgOQAMgLARAAQARAAANALQANAOAAAQQAAARgNANQgNANgRgBQgRABgMgNg");
	this.shape_12.setTransform(89.4,160.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:90.2}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4,p:{x:87.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:87.5}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4,p:{x:88.5}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_12,p:{x:89.4}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_12,p:{x:90.3}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(5).to({_off:false,x:89.7},0).wait(1).to({x:89.5},0).to({_off:true},1).wait(5).to({_off:false,x:88.3},0).wait(1).to({x:88.1},0).to({_off:true},1).wait(1).to({_off:false,x:87.8},0).to({_off:true},1).wait(32).to({_off:false,x:87.2},0).to({_off:true},1).wait(9).to({_off:false,x:89},0).to({_off:true},1).wait(4).to({_off:false,x:89.9},0).to({_off:true},1).wait(2).to({_off:false,x:90.5},0).to({_off:true},1).wait(1).to({_off:false,x:90.8},0).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1).to({x:90.4},0).to({_off:true},1).wait(1).to({_off:false,x:90.1},0).wait(1).to({x:89.9},0).to({_off:true},1).wait(2).to({_off:false,x:89.3},0).wait(1).to({x:89.1},0).to({_off:true},1).wait(1).to({_off:false,x:88.7},0).wait(1).to({x:88.5},0).to({_off:true},1).wait(2).to({_off:false,x:87.9},0).to({_off:true},1).wait(2).to({_off:false,x:87.4},0).wait(1).to({x:87.2},0).wait(1).to({_off:true},1).wait(4).to({_off:false,scaleX:1.14,scaleY:1.21},0).to({_off:true},1).wait(4).to({_off:false,scaleX:1,scaleY:1},0).to({_off:true},1).wait(4).to({_off:false,scaleX:1.14,scaleY:1.21},0).to({_off:true},1).wait(4).to({_off:false,scaleX:1,scaleY:1},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.14,scaleY:1.21},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1,scaleY:1},0).to({_off:true},1).wait(1).to({_off:false,x:87.4},0).to({_off:true},1).wait(1).to({_off:false,x:87.7},0).wait(1).to({x:87.9},0).wait(1).to({x:88.1},0).wait(1).to({x:88.3},0).to({_off:true},1).wait(1).to({_off:false,x:88.6},0).wait(1).to({x:88.8},0).to({_off:true},1).wait(1).to({_off:false,x:89.2},0).to({_off:true},1).wait(1).to({_off:false,x:89.5},0).wait(1).to({x:89.7},0).to({_off:true},1).wait(1).to({_off:false,x:90.1},0).to({_off:true},1).wait(2).to({_off:false,x:90.6},0).to({_off:true},1).wait(11));

	// 图层 3
	this.instance_8 = new lib.m_补间17("synched",0);
	this.instance_8.setTransform(110.4,285.2,1,1,0,0,0,0,97.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:0.1,rotation:-3.5},19).wait(30).to({startPosition:0},0).to({regX:0,rotation:0},20).wait(11));

	// 图层 12
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#77C5DB").s().p("ABtHrQg1gRAAgcQAAgrBHgrIAXgNQiEl+ANlFQAykLCnDvQg4EpBQGdQAVAFAHAQQAGALAAAqQAAAQgLASIACAIQgXAsgeAAQggAUglAAQgdAAglgLgAjRHrQg1gRAAgcQAAgrBHgrIAKgGQiHmCANlIQAykLCnDvQg4EoBPGbQAjADAKAVQAGALAAAqQAAAegkAjQgpApg2AAQgdAAglgLg");
	this.shape_13.setTransform(104.4,274.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,234.8,324.3);


(lib.m_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.m_元件6();
	this.instance.setTransform(122.4,90.8,1,1,0,0,0,122.4,90.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.94,y:96.5},19).wait(30).to({scaleY:1,y:90.8},20).wait(11));

	// 图层 12
	this.instance_1 = new lib.m_元件14();
	this.instance_1.setTransform(123.3,156.7,1,1,0,0,0,50.8,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// 图层 9
	this.instance_2 = new lib.m_元件13();
	this.instance_2.setTransform(164.3,178.6,1,1,0,0,0,26.5,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:175.1},19).to({scaleY:0.94,rotation:-6.5},10).to({regX:26.6,scaleY:1,rotation:6.1,x:164.4},10).to({regX:26.5,rotation:0,x:164.3},10).to({regX:26.6,rotation:6.1,x:164.4},10).to({regX:26.5,rotation:0,x:164.3,y:178.6},10).wait(11));

	// 图层 10
	this.instance_3 = new lib.m_元件12();
	this.instance_3.setTransform(200.2,196.5,1,1,0,0,0,44.9,31.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.79,y:200.1},19).wait(30).to({scaleY:1,y:196.5},20).wait(11));

	// 图层 4
	this.instance_4 = new lib.m_元件7123213213213213();
	this.instance_4.setTransform(126.2,148.9,1,1,0,0,0,58.5,46.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.91,y:150.3},19).wait(30).to({scaleY:1,y:148.9},20).wait(11));

	// 图层 6
	this.instance_5 = new lib.m_元件9();
	this.instance_5.setTransform(128.8,148.9,1,1,0,0,0,12.9,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.81,y:149.9},19).wait(30).to({scaleY:1,y:148.9},20).wait(11));

	// 图层 7
	this.instance_6 = new lib.m_元件10();
	this.instance_6.setTransform(127.5,165.4,1,1,0,0,0,21.6,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// 图层 8
	this.instance_7 = new lib.m_元件15();
	this.instance_7.setTransform(122.4,152.6,1,1,0,0,0,84.8,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// 图层 11
	this.instance_8 = new lib.m_元件16();
	this.instance_8.setTransform(46.6,173.3,1,1,0,0,0,13.8,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.96,y:176.8},19).wait(30).to({scaleY:1,y:173.3},20).wait(11));

	// 图层 1
	this.instance_9 = new lib.m_元件5();
	this.instance_9.setTransform(117.3,253.6,1,1,0,0,0,80.8,162.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleY:0.97},19).wait(30).to({scaleY:1},20).wait(11));

	// 图层 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF6C3").s().p("AhYAyQgjgjAAgcQAAgqAFgLQAMgYAtAAQAyAABAApQBHAsAAAoQAAAdg1AQQglALgdAAQgzAAgqgpg");
	this.shape.setTransform(135.9,290.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF6C3").s().p("AhYAyQgjgjAAgcQAAgqAFgLQAMgYAtAAQAyAABAApQBHAsAAAoQAAAdg1AQQglALgdAAQgzAAgqgpg");
	this.shape_1.setTransform(103.9,290.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF6C3").s().p("AiEHAQBwnphAlRQCmjvAyELQAOFviqG8QgfAfgZAAQgeAAgWgsg");
	this.shape_2.setTransform(137.5,252.5,1,1,0,0,0,-1.8,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF6C3").s().p("AiEHAQBwnphAlRQCmjvAyELQAOFviqG8QgfAfgZAAQgeAAgWgsg");
	this.shape_3.setTransform(103.9,252.5,1,1,0,0,0,-1.8,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229.5,299.7);


(lib.m_2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{s1:1,s2:7});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}
	this.frame_6 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(8));

	// 图层 2
	this.instance = new lib.s1btn();
	this.instance.setTransform(-124.6,219.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

	// 图层 3
	this.instance_1 = new lib.m_2();
	this.instance_1.setTransform(59.5,139.8,1.783,1.783,0,0,0,117.4,142.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));

	// 图层 1
	this.instance_2 = new lib.t2();
	this.instance_2.setTransform(-124.6,-181.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.1,-181.9,422,648.5);


(lib.m_1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1,"s2":7});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}
	this.frame_6 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(8));

	// 图层 4
	this.instance = new lib.s2btn();
	this.instance.setTransform(0,220.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

	// 图层 2
	this.instance_1 = new lib.m_1();
	this.instance_1.setTransform(148.5,143.2,1.914,1.914,0,0,0,114.7,129.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));

	// 图层 1
	this.instance_2 = new lib.t1();
	this.instance_2.setTransform(0,-180.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-180.9,443,653.6);


(lib.m_mainUI = function() {
	this.initialize();

	// btn0
	this.btn0 = new lib.m_1a();
	this.btn0.setTransform(174.7,741.5,1,1,0,0,0,103.6,218.6);

	// btn1
	this.btn1 = new lib.m_2a();
	this.btn1.setTransform(623.2,742.1,1,1,0,0,0,107.5,217.9);

	// 图层 1
	this.instance = new lib.lg();
	this.instance.setTransform(271.9,0.4);

	this.instance_1 = new lib.m_wenzimc();
	this.instance_1.setTransform(391.1,242);

	this.instance_2 = new lib.m_bjmc();
	this.instance_2.setTransform(546.1,755.4,1,1,0,0,0,155,275.4);
	this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, 10))];
	this.instance_2.cache(-322,-482,644,964);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn1,this.btn0);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.7,-59,848.3,1055.6);


// stage content:
(lib.main = function() {
	this.initialize();

	// ui
	this.ui = new lib.m_mainUI();
	this.ui.setTransform(291.2,466.6,1,1,0,0,0,362.2,466.6);

	this.addChild(this.ui);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(189.3,421,848.3,1055.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;