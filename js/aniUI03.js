(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1500,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"../images/ani1_GIF.png", id:"ani1_GIF"},
		{src:"../images/ani1_wt10.png", id:"ani1_wt10"},
		{src:"../images/ani1_wt11.png", id:"ani1_wt11"},
		{src:"../images/ani1_wt12.png", id:"ani1_wt12"},
		{src:"../images/ani1_wt13.png", id:"ani1_wt13"},
		{src:"../images/ani1_wt14.png", id:"ani1_wt14"},
		{src:"../images/ani1_wt15.png", id:"ani1_wt15"},
		{src:"../images/ani1_wt16.png", id:"ani1_wt16"},
		{src:"../images/ani1_wt17.png", id:"ani1_wt17"},
		{src:"../images/ani1_wt18.png", id:"ani1_wt18"},
		{src:"../images/ani1_wt19.png", id:"ani1_wt19"},
		{src:"../images/ani1_wt2.png", id:"ani1_wt2"},
		{src:"../images/ani1_wt20.png", id:"ani1_wt20"},
		{src:"../images/ani1_wt21.png", id:"ani1_wt21"},
		{src:"../images/ani1_wt22.png", id:"ani1_wt22"},
		{src:"../images/ani1_wt23.png", id:"ani1_wt23"},
		{src:"../images/ani1_wt24.png", id:"ani1_wt24"},
		{src:"../images/ani1_wt25.png", id:"ani1_wt25"},
		{src:"../images/ani1_wt26.png", id:"ani1_wt26"},
		{src:"../images/ani1_wt27.png", id:"ani1_wt27"},
		{src:"../images/ani1_wt28.png", id:"ani1_wt28"},
		{src:"../images/ani1_wt29.png", id:"ani1_wt29"},
		{src:"../images/ani1_wt3.png", id:"ani1_wt3"},
		{src:"../images/ani1_wt30.png", id:"ani1_wt30"},
		{src:"../images/ani1_wt31.png", id:"ani1_wt31"},
		{src:"../images/ani1_wt32.png", id:"ani1_wt32"},
		{src:"../images/ani1_wt33.png", id:"ani1_wt33"},
		{src:"../images/ani1_wt34.png", id:"ani1_wt34"},
		{src:"../images/ani1_wt35.png", id:"ani1_wt35"},
		{src:"../images/ani1_wt36.png", id:"ani1_wt36"},
		{src:"../images/ani1_wt37.png", id:"ani1_wt37"},
		{src:"../images/ani1_wt38.png", id:"ani1_wt38"},
		{src:"../images/ani1_wt39.png", id:"ani1_wt39"},
		{src:"../images/ani1_wt4.png", id:"ani1_wt4"},
		{src:"../images/ani1_wt40.png", id:"ani1_wt40"},
		{src:"../images/ani1_wt5.png", id:"ani1_wt5"},
		{src:"../images/ani1_wt6.png", id:"ani1_wt6"},
		{src:"../images/ani1_wt7.png", id:"ani1_wt7"},
		{src:"../images/ani1_wt8.png", id:"ani1_wt8"},
		{src:"../images/ani1_wt9.png", id:"ani1_wt9"},
		{src:"../images/ani2_wt381.png", id:"ani2_wt381"},
		{src:"../images/ani2_wt391.png", id:"ani2_wt391"},
		{src:"../images/ani2_wt401.png", id:"ani2_wt401"},
		{src:"../images/ani2_wt411.png", id:"ani2_wt411"},
		{src:"../images/ani2_wt421.png", id:"ani2_wt421"},
		{src:"../images/ani2_wt431.png", id:"ani2_wt431"},
		{src:"../images/ani2_wt441.png", id:"ani2_wt441"},
		{src:"../images/ani2_wt451.png", id:"ani2_wt451"},
		{src:"../images/ani2_wt461.png", id:"ani2_wt461"},
		{src:"../images/ani2_wt471.png", id:"ani2_wt471"},
		{src:"../images/ani2_wt481.png", id:"ani2_wt481"},
		{src:"../images/ani2_wt491.png", id:"ani2_wt491"},
		{src:"../images/ani2_wt501.png", id:"ani2_wt501"},
		{src:"../images/ani2_wt511.png", id:"ani2_wt511"},
		{src:"../images/ani2_wt521.png", id:"ani2_wt521"},
		{src:"../images/ani2_wt531.png", id:"ani2_wt531"},
		{src:"../images/ani2_wt541.png", id:"ani2_wt541"},
		{src:"../images/ani2_wt551.png", id:"ani2_wt551"},
		{src:"../images/ani2_wt561.png", id:"ani2_wt561"},
		{src:"../images/ani2_wt571.png", id:"ani2_wt571"},
		{src:"../images/ani2_wt581.png", id:"ani2_wt581"},
		{src:"../images/ani2_wt591.png", id:"ani2_wt591"},
		{src:"../images/ani2_wt601.png", id:"ani2_wt601"},
		{src:"../images/ani2_wt611.png", id:"ani2_wt611"},
		{src:"../images/ani2_wt621.png", id:"ani2_wt621"},
		{src:"../images/ani2_wt631.png", id:"ani2_wt631"},
		{src:"../images/ani2_wt641.png", id:"ani2_wt641"},
		{src:"../images/ani2_wt651.png", id:"ani2_wt651"},
		{src:"../images/ani2_wt661.png", id:"ani2_wt661"},
		{src:"../images/ani2_wt671.png", id:"ani2_wt671"},
		{src:"../images/ani2_wt681.png", id:"ani2_wt681"},
		{src:"../images/ani2_wt691.png", id:"ani2_wt691"},
		{src:"../images/ani2_wt701.png", id:"ani2_wt701"},
		{src:"../images/ani2_wt711.png", id:"ani2_wt711"},
		{src:"../images/ani2_wt721.png", id:"ani2_wt721"},
		{src:"../images/gif1.png", id:"gif1"},
		{src:"../images/haobuhao.png", id:"haobuhao"},
		{src:"../images/haobuhao2.png", id:"haobuhao2"},
		{src:"../images/shareTxt.png", id:"shareTxt"},
		{src:"../images/tipsIcon.png", id:"tipsIcon"},
		{src:"../images/wenzi.png", id:"wenzi"}
	]
};



// symbols:



(lib.ani1_GIF = function() {
	this.initialize(img.ani1_GIF);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt10 = function() {
	this.initialize(img.ani1_wt10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt11 = function() {
	this.initialize(img.ani1_wt11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt12 = function() {
	this.initialize(img.ani1_wt12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt13 = function() {
	this.initialize(img.ani1_wt13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt14 = function() {
	this.initialize(img.ani1_wt14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt15 = function() {
	this.initialize(img.ani1_wt15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt16 = function() {
	this.initialize(img.ani1_wt16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt17 = function() {
	this.initialize(img.ani1_wt17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt18 = function() {
	this.initialize(img.ani1_wt18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt19 = function() {
	this.initialize(img.ani1_wt19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt2 = function() {
	this.initialize(img.ani1_wt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt20 = function() {
	this.initialize(img.ani1_wt20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt21 = function() {
	this.initialize(img.ani1_wt21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt22 = function() {
	this.initialize(img.ani1_wt22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt23 = function() {
	this.initialize(img.ani1_wt23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt24 = function() {
	this.initialize(img.ani1_wt24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt25 = function() {
	this.initialize(img.ani1_wt25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt26 = function() {
	this.initialize(img.ani1_wt26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt27 = function() {
	this.initialize(img.ani1_wt27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt28 = function() {
	this.initialize(img.ani1_wt28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt29 = function() {
	this.initialize(img.ani1_wt29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt3 = function() {
	this.initialize(img.ani1_wt3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt30 = function() {
	this.initialize(img.ani1_wt30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt31 = function() {
	this.initialize(img.ani1_wt31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt32 = function() {
	this.initialize(img.ani1_wt32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt33 = function() {
	this.initialize(img.ani1_wt33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt34 = function() {
	this.initialize(img.ani1_wt34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt35 = function() {
	this.initialize(img.ani1_wt35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt36 = function() {
	this.initialize(img.ani1_wt36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt37 = function() {
	this.initialize(img.ani1_wt37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt38 = function() {
	this.initialize(img.ani1_wt38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt39 = function() {
	this.initialize(img.ani1_wt39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt4 = function() {
	this.initialize(img.ani1_wt4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt40 = function() {
	this.initialize(img.ani1_wt40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt5 = function() {
	this.initialize(img.ani1_wt5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt6 = function() {
	this.initialize(img.ani1_wt6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt7 = function() {
	this.initialize(img.ani1_wt7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt8 = function() {
	this.initialize(img.ani1_wt8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani1_wt9 = function() {
	this.initialize(img.ani1_wt9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt381 = function() {
	this.initialize(img.ani2_wt381);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt391 = function() {
	this.initialize(img.ani2_wt391);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt401 = function() {
	this.initialize(img.ani2_wt401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt411 = function() {
	this.initialize(img.ani2_wt411);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt421 = function() {
	this.initialize(img.ani2_wt421);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt431 = function() {
	this.initialize(img.ani2_wt431);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt441 = function() {
	this.initialize(img.ani2_wt441);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt451 = function() {
	this.initialize(img.ani2_wt451);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt461 = function() {
	this.initialize(img.ani2_wt461);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt471 = function() {
	this.initialize(img.ani2_wt471);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt481 = function() {
	this.initialize(img.ani2_wt481);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt491 = function() {
	this.initialize(img.ani2_wt491);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt501 = function() {
	this.initialize(img.ani2_wt501);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt511 = function() {
	this.initialize(img.ani2_wt511);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt521 = function() {
	this.initialize(img.ani2_wt521);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt531 = function() {
	this.initialize(img.ani2_wt531);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt541 = function() {
	this.initialize(img.ani2_wt541);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt551 = function() {
	this.initialize(img.ani2_wt551);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt561 = function() {
	this.initialize(img.ani2_wt561);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt571 = function() {
	this.initialize(img.ani2_wt571);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt581 = function() {
	this.initialize(img.ani2_wt581);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt591 = function() {
	this.initialize(img.ani2_wt591);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt601 = function() {
	this.initialize(img.ani2_wt601);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt611 = function() {
	this.initialize(img.ani2_wt611);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt621 = function() {
	this.initialize(img.ani2_wt621);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt631 = function() {
	this.initialize(img.ani2_wt631);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt641 = function() {
	this.initialize(img.ani2_wt641);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt651 = function() {
	this.initialize(img.ani2_wt651);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt661 = function() {
	this.initialize(img.ani2_wt661);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt671 = function() {
	this.initialize(img.ani2_wt671);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt681 = function() {
	this.initialize(img.ani2_wt681);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt691 = function() {
	this.initialize(img.ani2_wt691);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt701 = function() {
	this.initialize(img.ani2_wt701);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt711 = function() {
	this.initialize(img.ani2_wt711);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt721 = function() {
	this.initialize(img.ani2_wt721);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.gif1 = function() {
	this.initialize(img.gif1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.haobuhao = function() {
	this.initialize(img.haobuhao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,441,254);


(lib.haobuhao2 = function() {
	this.initialize(img.haobuhao2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,435,263);


(lib.shareTxt = function() {
	this.initialize(img.shareTxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,149);


(lib.tipsIcon = function() {
	this.initialize(img.tipsIcon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,840);


(lib.wenzi = function() {
	this.initialize(img.wenzi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,535,369);


(lib.xhgGif = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ani1_GIF();
	this.instance.setTransform(-275,-200);

	this.instance_1 = new lib.ani1_wt2();
	this.instance_1.setTransform(-275,-200);

	this.instance_2 = new lib.ani1_wt3();
	this.instance_2.setTransform(-275,-200);

	this.instance_3 = new lib.ani1_wt4();
	this.instance_3.setTransform(-275,-200);

	this.instance_4 = new lib.ani1_wt5();
	this.instance_4.setTransform(-275,-200);

	this.instance_5 = new lib.ani1_wt6();
	this.instance_5.setTransform(-275,-200);

	this.instance_6 = new lib.ani1_wt7();
	this.instance_6.setTransform(-275,-200);

	this.instance_7 = new lib.ani1_wt8();
	this.instance_7.setTransform(-275,-200);

	this.instance_8 = new lib.ani1_wt9();
	this.instance_8.setTransform(-275,-200);

	this.instance_9 = new lib.ani1_wt10();
	this.instance_9.setTransform(-275,-200);

	this.instance_10 = new lib.ani1_wt11();
	this.instance_10.setTransform(-275,-200);

	this.instance_11 = new lib.ani1_wt12();
	this.instance_11.setTransform(-275,-200);

	this.instance_12 = new lib.ani1_wt13();
	this.instance_12.setTransform(-275,-200);

	this.instance_13 = new lib.ani1_wt14();
	this.instance_13.setTransform(-275,-200);

	this.instance_14 = new lib.ani1_wt15();
	this.instance_14.setTransform(-275,-200);

	this.instance_15 = new lib.ani1_wt16();
	this.instance_15.setTransform(-275,-200);

	this.instance_16 = new lib.ani1_wt17();
	this.instance_16.setTransform(-275,-200);

	this.instance_17 = new lib.ani1_wt18();
	this.instance_17.setTransform(-275,-200);

	this.instance_18 = new lib.ani1_wt19();
	this.instance_18.setTransform(-275,-200);

	this.instance_19 = new lib.ani1_wt20();
	this.instance_19.setTransform(-275,-200);

	this.instance_20 = new lib.ani1_wt21();
	this.instance_20.setTransform(-275,-200);

	this.instance_21 = new lib.ani1_wt22();
	this.instance_21.setTransform(-275,-200);

	this.instance_22 = new lib.ani1_wt23();
	this.instance_22.setTransform(-275,-200);

	this.instance_23 = new lib.ani1_wt24();
	this.instance_23.setTransform(-275,-200);

	this.instance_24 = new lib.ani1_wt25();
	this.instance_24.setTransform(-275,-200);

	this.instance_25 = new lib.ani1_wt26();
	this.instance_25.setTransform(-275,-200);

	this.instance_26 = new lib.ani1_wt27();
	this.instance_26.setTransform(-275,-200);

	this.instance_27 = new lib.ani1_wt28();
	this.instance_27.setTransform(-275,-200);

	this.instance_28 = new lib.ani1_wt29();
	this.instance_28.setTransform(-275,-200);

	this.instance_29 = new lib.ani1_wt30();
	this.instance_29.setTransform(-275,-200);

	this.instance_30 = new lib.ani1_wt31();
	this.instance_30.setTransform(-275,-200);

	this.instance_31 = new lib.ani1_wt32();
	this.instance_31.setTransform(-275,-200);

	this.instance_32 = new lib.ani1_wt33();
	this.instance_32.setTransform(-275,-200);

	this.instance_33 = new lib.ani1_wt34();
	this.instance_33.setTransform(-275,-200);

	this.instance_34 = new lib.ani1_wt35();
	this.instance_34.setTransform(-275,-200);

	this.instance_35 = new lib.ani1_wt36();
	this.instance_35.setTransform(-275,-200);

	this.instance_36 = new lib.ani1_wt37();
	this.instance_36.setTransform(-275,-200);

	this.instance_37 = new lib.ani1_wt38();
	this.instance_37.setTransform(-275,-200);

	this.instance_38 = new lib.ani1_wt39();
	this.instance_38.setTransform(-275,-200);

	this.instance_39 = new lib.ani1_wt40();
	this.instance_39.setTransform(-275,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275,-200,600,600);


(lib.aniUI03_56 = function() {
	this.initialize();

	// 图层 1
	this.text = new cjs.Text("我要微信红包", "20px 'Microsoft YaHei'");
	this.text.lineHeight = 22;
	this.text.setTransform(28.9,23.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApxBoQkDhwAAihQAAiiEDhyQEEhyFtAAQFuAAEDByQEEByAACiQAAChkEBwQkDBzluAAQhkAAl2FVQAll1i8hTg");
	this.shape.setTransform(88.6,56.1);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,177.1,112.2);


(lib.aniUI03_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.haobuhao();

	this.instance_1 = new lib.haobuhao2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,441,254);


(lib.aniUI03_3 = function() {
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


(lib.aniUI03_2 = function() {
	this.initialize();

	// 图层 3
	this.instance = new lib.tipsIcon();
	this.instance.setTransform(-101,-351.8);

	// 图层 1
	this.instance_1 = new lib.shareTxt();
	this.instance_1.setTransform(6.9,-57.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101,-351.8,639.9,839.9);


(lib.aniUI03_1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.851)").s().p("Egx/B1MMAAAjqXMBj+AAAMAAADqXg");
	this.shape.setTransform(320,750);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1500);


(lib.aniUI03_45asdasdas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtBkIgDgSIAbABQAOAAAAgPIAAgnIhUAtIgJgQQArgUAygcIAAg4IhaAAIAAgOIBaAAIAAglIAPAAIAAAlIBaAAIAAAOIhaAAIAAANQAKAXAOARQAWgRASgWIAPAMQgZAXgUAQQAZAdAiARQgIAJgEAHQg1gfgcgyIAABKQAAAagZAAIgcAAgAmXBiIgDgSQAYACARAAQAUAAACgTQACgVABgiIiSAAIAHhGIARAAIgGA5IBaAAIAHhGIh+AAIAAgPICQAAIgIBVIAmAAQgBAtgCAaQgCAggjABIgogBgAF5BfQgeAAAAgdIAAhbQgKAOgLALQgFgHgFgHQAjgnARgtIARAEIgJAUIB2AAQgBBKgCAaQgDAigfAAIgdgBIgEgRIAeACQATAAACgVQACgXAAg7IhtAAIgPAaIBVAAIAAA6IhKAAIAAAmQAAARARAAIBfAAQAUAAADgNQADgMACgSIAQAGQgCASgDAMQgFAWgeAAgAFsAKIA6AAIAAgeIg6AAgACwBaIAAgQIA8AAIAAiJIgxAAIAAgQIB0AAIAAAQIgxAAIAACJIA5AAIAAAQgAk1BaIAAgRIBQAAIAAioIATAAIAAA/IBUAAIAAAQIhUAAIAABZIBlAAIAAARgABsBDIBOgRIgBAQIhJASgAoHA2IAAgQICaAAIAAAQgABuAZQARgRARgWIggACIgEgNQAXgeAUgsIAQAGQgUAmgTAcIAZAAIARgdIAQAIQgbAqgZAcIAzgIIgBAQIhGAKgAhPgYIAMgJQARAQARASIgOALQgPgRgRgTgAAbhXIAKgKQAUALALAKIgLANIgegYg");
	this.shape.setTransform(59,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgtBkIgDgSIAbABQAOAAAAgPIAAgnIhUAtIgJgQQArgUAygcIAAg4IhaAAIAAgOIBaAAIAAglIAPAAIAAAlIBaAAIAAAOIhaAAIAAANQAKAXAOARQAWgRASgWIAPAMQgZAXgUAQQAZAdAiARQgIAJgEAHQg1gfgcgyIAABKQAAAagZAAIgcAAgAmXBiIgDgSQAYACARAAQAUAAACgTQACgVABgiIiSAAIAHhGIARAAIgGA5IBaAAIAHhGIh+AAIAAgPICQAAIgIBVIAmAAQgBAtgCAaQgCAggjABIgogBgAF5BfQgeAAAAgdIAAhbQgKAOgLALQgFgHgFgHQAjgnARgtIARAEIgJAUIB2AAQgBBKgCAaQgDAigfAAIgdgBIgEgRIAeACQATAAACgVQACgXAAg7IhtAAIgPAaIBVAAIAAA6IhKAAIAAAmQAAARARAAIBfAAQAUAAADgNQADgMACgSIAQAGQgCASgDAMQgFAWgeAAgAFsAKIA6AAIAAgeIg6AAgACwBaIAAgQIA8AAIAAiJIgxAAIAAgQIB0AAIAAAQIgxAAIAACJIA5AAIAAAQgAk1BaIAAgRIBQAAIAAioIATAAIAAA/IBUAAIAAAQIhUAAIAABZIBlAAIAAARgABsBDIBOgRIgBAQIhJASgAoHA2IAAgQICaAAIAAAQgABuAZQARgRARgWIggACIgEgNQAXgeAUgsIAQAGQgUAmgTAcIAZAAIARgdIAQAIQgbAqgZAcIAzgIIgBAQIhGAKgAhPgYIAMgJQARAQARASIgOALQgPgRgRgTgAAbhXIAKgKQAUALALAKIgLANIgegYg");
	this.shape_1.setTransform(59,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("ApNCzIAAlmISbAAIAAFmg");
	this.shape_2.setTransform(59,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ApNCzIAAlmISbAAIAAFmg");
	this.shape_3.setTransform(59,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// 图层 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.302)").s().p("ApNCzIAAlmISbAAIAAFmg");
	this.shape_4.setTransform(62.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,122,40.9);


(lib.aniUI03_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("Egf3AiwMAAAhFgMA/vAAAMAAABFgg");
	this.shape.setTransform(204.1,222.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ani2_daitoubingGif = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.gif1();
	this.instance.setTransform(-250,-300);

	this.instance_1 = new lib.ani2_wt381();
	this.instance_1.setTransform(-250,-300);

	this.instance_2 = new lib.ani2_wt391();
	this.instance_2.setTransform(-250,-300);

	this.instance_3 = new lib.ani2_wt401();
	this.instance_3.setTransform(-250,-300);

	this.instance_4 = new lib.ani2_wt411();
	this.instance_4.setTransform(-250,-300);

	this.instance_5 = new lib.ani2_wt421();
	this.instance_5.setTransform(-250,-300);

	this.instance_6 = new lib.ani2_wt431();
	this.instance_6.setTransform(-250,-300);

	this.instance_7 = new lib.ani2_wt441();
	this.instance_7.setTransform(-250,-300);

	this.instance_8 = new lib.ani2_wt451();
	this.instance_8.setTransform(-250,-300);

	this.instance_9 = new lib.ani2_wt461();
	this.instance_9.setTransform(-250,-300);

	this.instance_10 = new lib.ani2_wt471();
	this.instance_10.setTransform(-250,-300);

	this.instance_11 = new lib.ani2_wt481();
	this.instance_11.setTransform(-250,-300);

	this.instance_12 = new lib.ani2_wt491();
	this.instance_12.setTransform(-250,-300);

	this.instance_13 = new lib.ani2_wt501();
	this.instance_13.setTransform(-250,-300);

	this.instance_14 = new lib.ani2_wt511();
	this.instance_14.setTransform(-250,-300);

	this.instance_15 = new lib.ani2_wt521();
	this.instance_15.setTransform(-250,-300);

	this.instance_16 = new lib.ani2_wt531();
	this.instance_16.setTransform(-250,-300);

	this.instance_17 = new lib.ani2_wt541();
	this.instance_17.setTransform(-250,-300);

	this.instance_18 = new lib.ani2_wt551();
	this.instance_18.setTransform(-250,-300);

	this.instance_19 = new lib.ani2_wt561();
	this.instance_19.setTransform(-250,-300);

	this.instance_20 = new lib.ani2_wt571();
	this.instance_20.setTransform(-250,-300);

	this.instance_21 = new lib.ani2_wt581();
	this.instance_21.setTransform(-250,-300);

	this.instance_22 = new lib.ani2_wt591();
	this.instance_22.setTransform(-250,-300);

	this.instance_23 = new lib.ani2_wt601();
	this.instance_23.setTransform(-250,-300);

	this.instance_24 = new lib.ani2_wt611();
	this.instance_24.setTransform(-250,-300);

	this.instance_25 = new lib.ani2_wt621();
	this.instance_25.setTransform(-250,-300);

	this.instance_26 = new lib.ani2_wt631();
	this.instance_26.setTransform(-250,-300);

	this.instance_27 = new lib.ani2_wt641();
	this.instance_27.setTransform(-250,-300);

	this.instance_28 = new lib.ani2_wt651();
	this.instance_28.setTransform(-250,-300);

	this.instance_29 = new lib.ani2_wt661();
	this.instance_29.setTransform(-250,-300);

	this.instance_30 = new lib.ani2_wt671();
	this.instance_30.setTransform(-250,-300);

	this.instance_31 = new lib.ani2_wt681();
	this.instance_31.setTransform(-250,-300);

	this.instance_32 = new lib.ani2_wt691();
	this.instance_32.setTransform(-250,-300);

	this.instance_33 = new lib.ani2_wt701();
	this.instance_33.setTransform(-250,-300);

	this.instance_34 = new lib.ani2_wt711();
	this.instance_34.setTransform(-250,-300);

	this.instance_35 = new lib.ani2_wt721();
	this.instance_35.setTransform(-250,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-300,500,600);


(lib.aniUI03wenzi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2jHgIAAh7IB1AAIgbm7ImWBsIAxkQIE+hBIgQitIEihcIAADmIDQghIAYC7IjoA5IAAJhIiZCCgAN/HsIB3qYIAIABIHTAbIh1F7IjTAJIgHBIIJjAjIhWDTgASPBMIBQAAIAZhMIhxgLgAwbE2IAwh2IHeDJIkOCTgAlzEvIEliiIAnAvIAdAAIAAg6IEUgKIANkUIkTgMIAAhNIgbABIAXhGIACACIAIgZIKSgZIAnDdIj3gIIAAEEIEgAAIAwCjIsqB6IAAiUIgagGIkYEUgA7kEqIEphhIAACCIiiCNgAXFEGIAmm7IoCgiIiCDtIhhhUICinzIDLAgIg+CzIKXgeIhLKJgAnoBnIBciLIiBhfIDonUIC4BmIiWDyIAXAPIBch4ICQAuIgXBGIh6CzIAbAdIA1gTIAqBDIk5DsgA6xBYIB2hKIBQBtIg0ArgAwlBTICejBICsBvIkBCLgAwOmjIgFgOIA3ijICEBIIhlBpg");
	mask.setTransform(217.8,151.9);

	// 图层 6
	this.instance = new lib.aniUI03_3();
	this.instance.setTransform(-117.1,121.5,0.999,0.999,25,0,0,34.7,260.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:437.6,y:279},14).wait(16));

	// 图层 3
	this.instance_1 = new lib.wenzi();
	this.instance_1.setTransform(27.5,-22.3,0.757,0.757);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.5,-22.3,405,279.3);


(lib.aniUI03_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.aniUI03_56();
	this.instance.setTransform(47.5,109.1,0.097,0.097,0,0,0,47.5,109);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({regY:109.1,scaleX:1.09,scaleY:1.09},6).to({scaleX:0.98,scaleY:0.98},3).to({scaleX:1,scaleY:1},2).wait(35).to({scaleX:1.07,scaleY:1.07},4).to({regX:47.4,regY:109.4,scaleX:0.06,scaleY:0.06},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ani1_1 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.xhgGif();
	this.instance.setTransform(120.7,146.1,0.502,0.502,0,0,0,24.9,100);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.9,-4.5,301.2,301.2);


(lib.aniUI03212321 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 5
	this.instance = new lib.ani1_1();
	this.instance.setTransform(122.3,142.8,1.23,1.23,0,0,0,114.6,129.3);

	this.instance_1 = new lib.ani2_daitoubingGif();
	this.instance_1.setTransform(103.7,169.4,0.613,0.613);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-21.9,374,373);


// stage content:
(lib.aniUI03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{initAni3:0,d0:1,ani3End:9});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// closeBtn
	this.closeBtn = new lib.aniUI03_29();
	this.closeBtn.setTransform(0,0,1.568,3.367);
	this.closeBtn._off = true;
	new cjs.ButtonHelper(this.closeBtn, 0, 1, 2, false, new lib.aniUI03_29(), 3);

	this.timeline.addTween(cjs.Tween.get(this.closeBtn).wait(9).to({_off:false},0).wait(1));

	// 图层 4
	this.instance = new lib.aniUI03_2();
	this.instance.setTransform(320,445.2,1,1,0,0,0,226.1,45.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(9));

	// 图层 3
	this.instance_1 = new lib.aniUI03_1();
	this.instance_1.setTransform(319.3,567.5,1,1,0,0,0,319.3,567.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:1},8).wait(1));

	// btn
	this.btn = new lib.aniUI03_45asdasdas();
	this.btn.setTransform(202.5,754.9,2.06,2.06);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.aniUI03_45asdasdas(), 3);

	this.instance_2 = new lib.aniUI03_10();
	this.instance_2.setTransform(238,78.8,1,1,0,0,0,127.4,73.3);

	this.instance_3 = new lib.aniUI03_57();
	this.instance_3.setTransform(269.7,271.5,1.475,1.475);

	this.instance_4 = new lib.aniUI03wenzi();
	this.instance_4.setTransform(372.6,604.3,1.238,1.238,0,0,0,260.9,136.8);

	this.mc = new lib.aniUI03212321();
	this.mc.setTransform(312.9,432.1,1.37,1.37,0,0,0,117.4,142.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC0000","#FF3333"],[0,1],0,-747.9,0,748).s().p("Egx/B1MMAAAjqXMBj+AAAMAAADqXg");
	this.shape.setTransform(320,750);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.mc},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.btn}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49.1,750,910.9,1500);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;