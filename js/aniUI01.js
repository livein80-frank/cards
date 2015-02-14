(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1500,
	fps: 30,
	color: "#003399",
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
		{src:"../images/b1.png", id:"b1"},
		{src:"../images/b2.png", id:"b2"},
		{src:"../images/b3.png", id:"b3"},
		{src:"../images/bai.png", id:"bai"},
		{src:"../images/bj.jpg", id:"bj"},
		{src:"../images/bu.png", id:"bu"},
		{src:"../images/d1.png", id:"d1"},
		{src:"../images/duquzhong01.png", id:"duquzhong01"},
		{src:"../images/dx.png", id:"dx"},
		{src:"../images/gif1.png", id:"gif1"},
		{src:"../images/greetBg.png", id:"greetBg"},
		{src:"../images/greetpic1.png", id:"greetpic1"},
		{src:"../images/greetpic2.png", id:"greetpic2"},
		{src:"../images/greetpic3.png", id:"greetpic3"},
		{src:"../images/greetpic4.png", id:"greetpic4"},
		{src:"../images/hao.png", id:"hao"},
		{src:"../images/hao2.png", id:"hao2"},
		{src:"../images/headimg.jpg", id:"headimg"},
		{src:"../images/jiu.png", id:"jiu"},
		{src:"../images/jiuyibai.png", id:"jiuyibai"},
		{src:"../images/lg.jpg", id:"lg"},
		{src:"../images/logo.png", id:"logo"},
		{src:"../images/LOGO.jpg", id:"LOGO"},
		{src:"../images/num1.png", id:"num1"},
		{src:"../images/num2.png", id:"num2"},
		{src:"../images/num3.png", id:"num3"},
		{src:"../images/role1_p1.png", id:"role1_p1"},
		{src:"../images/role1_p2.png", id:"role1_p2"},
		{src:"../images/role1_p3.png", id:"role1_p3"},
		{src:"../images/role1_p4.png", id:"role1_p4"},
		{src:"../images/role1_p5.png", id:"role1_p5"},
		{src:"../images/role1_p6.png", id:"role1_p6"},
		{src:"../images/role1_p7.png", id:"role1_p7"},
		{src:"../images/s1btn.jpg", id:"s1btn"},
		{src:"../images/s2btn.jpg", id:"s2btn"},
		{src:"../images/t1.png", id:"t1"},
		{src:"../images/t2.png", id:"t2"},
		{src:"../images/tu1.png", id:"tu1"},
		{src:"../images/wenzi.png", id:"wenzi"},
		{src:"../images/woyeyao.png", id:"woyeyao"},
		{src:"../images/yi.png", id:"yi"},
		{src:"../sounds/sound01.mp3", id:"sound01"}
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


(lib.b1 = function() {
	this.initialize(img.b1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,464,522);


(lib.b2 = function() {
	this.initialize(img.b2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,466,522);


(lib.b3 = function() {
	this.initialize(img.b3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,522);


(lib.bai = function() {
	this.initialize(img.bai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,205);


(lib.bj = function() {
	this.initialize(img.bj);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.bu = function() {
	this.initialize(img.bu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,205);


(lib.d1 = function() {
	this.initialize(img.d1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1500);


(lib.duquzhong01 = function() {
	this.initialize(img.duquzhong01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,36);


(lib.dx = function() {
	this.initialize(img.dx);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,320);


(lib.gif1 = function() {
	this.initialize(img.gif1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.greetBg = function() {
	this.initialize(img.greetBg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,132);


(lib.greetpic1 = function() {
	this.initialize(img.greetpic1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,132);


(lib.greetpic2 = function() {
	this.initialize(img.greetpic2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,132);


(lib.greetpic3 = function() {
	this.initialize(img.greetpic3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,132);


(lib.greetpic4 = function() {
	this.initialize(img.greetpic4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,132);


(lib.hao = function() {
	this.initialize(img.hao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,198);


(lib.hao2 = function() {
	this.initialize(img.hao2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,185);


(lib.headimg = function() {
	this.initialize(img.headimg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.jiu = function() {
	this.initialize(img.jiu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,195);


(lib.jiuyibai = function() {
	this.initialize(img.jiuyibai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,510,293);


(lib.lg = function() {
	this.initialize(img.lg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,112);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,278);


(lib.LOGO = function() {
	this.initialize(img.LOGO);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,100);


(lib.num1 = function() {
	this.initialize(img.num1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,143);


(lib.num2 = function() {
	this.initialize(img.num2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,143);


(lib.num3 = function() {
	this.initialize(img.num3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,143);


(lib.role1_p1 = function() {
	this.initialize(img.role1_p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,735,1145);


(lib.role1_p2 = function() {
	this.initialize(img.role1_p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,598);


(lib.role1_p3 = function() {
	this.initialize(img.role1_p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,708,604);


(lib.role1_p4 = function() {
	this.initialize(img.role1_p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,753,594);


(lib.role1_p5 = function() {
	this.initialize(img.role1_p5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,792,526);


(lib.role1_p6 = function() {
	this.initialize(img.role1_p6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,413,465);


(lib.role1_p7 = function() {
	this.initialize(img.role1_p7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,884,665);


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


(lib.tu1 = function() {
	this.initialize(img.tu1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,618);


(lib.wenzi = function() {
	this.initialize(img.wenzi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,535,369);


(lib.woyeyao = function() {
	this.initialize(img.woyeyao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,165);


(lib.yi = function() {
	this.initialize(img.yi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,60);


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


(lib.role_001 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.role1_p6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,413,465);


(lib.pic_001 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.role1_p7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,884,665);


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


(lib.greetMc4 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.greetpic4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,335,150.8);


(lib.greetMc3 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.greetpic3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,335,132);


(lib.ani1_pBtn = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.woyeyao();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,299,165);


(lib.ani1_headMc = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102.5,102.5);


(lib.ani1_gtInfoMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(252.2,125.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(268.4,101.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(249,109);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(280.1,121.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,558.2,284.1);


(lib.ani1_faguang = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgynBViMAAAirDMBlPAAAMAAACrDg");
	this.shape.setTransform(324,800,1,1.461);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,648,1600);


(lib.ani1_元件49111 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.greetpic2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,335.1,132.1);


(lib.ani1_元件1烦烦烦 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF6C3").s().p("ACTEoQgggQgDgcQgBgNAagEQAVgGADgCIAJgXQAEgQAAgZQAAgUgJhCIg7AAQgZABgPgJQgWgIgLgMQgMgOgDgSQAAgYAegbQAXgJAiAAQAdADATAAIAAACQAGguAhgwIAMgpQgBgGgbABQhJAGgRAAQhXgLgVhEQAFg8CagEQAmAAAvAEQBAARAJATQArAdAEA3QAAAdgZAcQgVAggUAbQgbAdgDAGQAWAAAOgDQAIgDAPAAQAZABARADQAuAFAAAOQAAAXgcAlQgIANgKAIIgLAHQgZAJgQADIgdAAQAGAmADBEQAAAxgEAsQAAAog7AAQgZAAgogUgAimEkQgRgJABgRQACgWAEgQIgHAAQgngEglgMQgZgHgegOQgtgegCgfQAAhUAhhTQAEgVAEgHIADAAQghgCgJgJQgigWABgoQAJgUAagLQAdgRAdAAIALAAIAPgwQAoggA1gFQAuATAAAaQgBAagEAOIAbAAQBZAAAMAbQAfAbABASQAAAcgoAUQgpAYg6AEQgbAAgYgEQghBhgJAzQABAcAbAGQAEADAPAAQAGgfAHhIQAQglAbAAQAjAEAKAXQAXAcAAAaQgCAbgLAdQAQgEAUgIQAdABAAAbQAAAdg1ARQgQAHgNACQgVBFgUAMQgPAIgRAAQgNAAgKgIg");
	this.shape.setTransform(215.4,112.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF6C3").s().p("AgcEbQgRgJgDgKQAAgKAKgLQAHgMAFgLQAFgIAAg9IgHgwIgIghQAAgRALgVQAKgSAPgDQAfAAAFAJQAEADANA7QALA5ALBwQAAAWgTAJQgVAKgUAAQgPAAgcgJgACmCcQgfgagNgcQgGgPAAgTQAEgOAUgEQAVgDALAAQApAAAvAMQAfAXADAeQACANAAASQAAASgTAIQgUAMgWAAQgcAAgpgZgAkoB5QADgPAcgcQAagvAogoQAwg4A3gvQg3gFhAgUQhTgXgFg4QAFgfAjgVQBCgXAgAAQAhAABHALQA2AFBAADIBlAMQBTADAWADQAhAPAIAnQAAAXgkAPQgVAPghAGQgjAEggAJQgfAGggACQgiAAggADQABAAAAAGQAAAQgHAOQgGAUgHAIQgHAXgyAjQhOA+gmAZQgyAxguAEQgaAAAAgYg");
	this.shape_1.setTransform(132.9,117.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF6C3").s().p("ACaE0QgigQgDgdQAAgOAagFQAWgGADgCIAKgXQAEgRAAgbQAAgUgKhFIg8AAQgbAAgQgJQgXgIgLgMQgNgPgCgSQAAgaAegcQAYgJAkAAQAeADAUAAIAAACQAGgwAigyIANgrQgBgFgcAAQhNAHgRAAQhbgMgWhIQAFg9ChgEQAoAAAxADQBDASAJAUQAtAeAFA6QAAAegcAdQgVAigVAcQgcAdgEAHQAYAAAOgDQAJgDAQAAQBbADAAAVQAAAXgdAnQgMAUgTAJQgZAJgRAEIgeAAQAGAnADBIQAAAzgEAuQAAApg9AAQgaAAgqgVgAiuEwQgQgJAAgSQACgWAFgSIgHAAQgqgDgmgNQgagHgfgPQgvgfgCghQAAhXAihXQAFgWAEgHIADAAQgigDgKgJQgjgWAAgqQAKgWAbgLQAegRAfAAIALAAIAQgyQApgiA3gFQAxAUAAAbQgCAbgEAPIAcAAQBdAAAMAcQAiAcAAASQAAAegpAVQgrAZg8AEQgcAAgagEQgjBlgJA1QACAdAbAHQAFADAQAAQAGghAIhLQAPgnAdAAQAlAFAKAYQAYAdAAAcQgCAbgMAfQAQgEAVgIQAfAAAAAdQAAAeg4ARQgQAIgOACQgVBIgWAMQgPAJgSAAQgNAAgMgJg");
	this.shape_2.setTransform(46.8,113.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF6C3").s().p("AgnFiQgdgEgqgMQghgHgNgjQAFgdAjAAQAdAFAyADQA1AHAvAAQAXAABJgNQAsgLAFgUQAAikgUgeQgPgQg6AAQhagIgXAAQgRAAguAIQg4AKgSABIAAACQAAAZgGAdQANgDAWAAQBHAAAcAHQApAJAAAiQAAAniZAAQgZAAgHgEIgEAeQgJBKgMARQgSAagoAAQgkAAgagmQgMgdgGg9QgFg1AAhcQAAhRBJAAQAgAAARALQAPgTA0gIIAUgDQgagSAAguQAEgeAPgTQg3gHhCgUQhbgcgHg8QAHggAngVQBGgbAjAAQAkAABPAMQA9AHBIAEQA3AHA5ADQBfAEAXAEQAjAPAJAsQAAAdgmAMQgXARgmAIQglADgjALIhCAIQgoAAgpAEQgNAEgEAAQgCALgIAXQgOApgXASQgGAIgIAFIATgBQCKAABrAKQBVAIAIAmQASAuACDLQAAA6hLAZQhEAah9AAQgvAAgqgEg");
	this.shape_3.setTransform(211.4,35.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF6C3").s().p("Al1ABQAAg0CTgQQByAACTgGQBOAABBAIQBKAGA+AKQA5AWADArQAAAYhDATQhJANg1AAQh6ACheAAQlSgPAAg6g");
	this.shape_4.setTransform(121,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF6C3").s().p("AhZE2QgdgBgHgQQADgKACgSIALgOIAAAAIAAAAQgDgMgLgZIgMgfQgNgegKgeQgOACgXgEIgBADQgDAYg6AQQgvAMgdhUQgZhfABgLQAGgnAogSQAggBAqAlQAXAGAZBYIABAFQAQAAAhgJQAygNAEgMQARgKgJgfQgDgJgMABQgLgBgvANQgegBgRgNQgPAAgGgYQgIgdAtgWQANgEA9gDIA7gDQAfABAXBZQAMAtgQAWQgQAcgnAOIgUAGQAOAIAQAnQASAqATBCQAGAUgMAMQgMAPgSAFQgQAEgWAAIgJAAgAjfElQgbgKgEgPQgFgWAKgcQAKgUAPgVQALgHALgDQATgFAJAaQARAZACAIQAGAXgQAZQgNAXgRAFIgIABQgJAAgLgFgAAlDBQgOgCgPgIQgagNgIgbQADglAYgIQBGgPAVAfQAAhLAHg/QADgSAGgNIgJACQglAGgYgFQghgJgFgZQABgbApgPQApgLAggLIAJhFQAEgTAUgGQAXAEANARQASAYADANQACAHgDACIAxgOQA9gMALAqQACATgPAKQgLAKgPAIIhSAdIAAAKQgDA1gMArQgGAtgNAlQgYA2gIAKQgJAGgLADQgNAAgHgMIgCAGQgHASgQAEQgKADgKAAQgIAAgIgCgAECCRQgZgOgKglQgFgRgFhQQABggADgUQAOgNASgFQAYACALAPQASAOAEARQADALgFAhIACArQAEANAMAMQAEADAigGQAggIAFAUQAKAjhaAYQgpAAgSgKgAllhTQgSgFgVgdQgIgqArgRIBSgOQgHgQgKgjQgBgSATgWQAmgWAYgGQAZgCAYALQAhAHAGAXQAHAaAAAPIBGgTQANgDATAIQALAEAEAOQADAOgXAXQgKAUgMAIQgzAnhFATQhoAcgxAAQgbAAgLgJgADvjIQgMgDgNgHQgagOgIgfQACgaAWgKQBJgMAPA6QAEANgHAOQgFAPgNADQgIACgHAAQgJAAgIgCg");
	this.shape_5.setTransform(39.2,34.3,1,1,0,0,0,-0.7,-3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF6C3").s().p("ACaFAQgZgEgkgaQgegVABgcQACgNAaAAQAVgDAEgCIANgUQAGgQADgZQADgTAChCIg6gJQgZgEgOgLQgVgMgIgNQgKgPABgQQAEgaAggWQAYgGAjAFQAcAJATADQAMgsAogqIASgmQAAgGgbgEQhKgFgQgCQhWgagLhGQAOg6CcAUQAlAGAuALQA9AaAFAVQAnAjgEA3QgFAdgeAXQgZAdgYAXQgfAYgEAHQAWADAOgBQAJgCAPACIAoAKQAtAMgCANQgDAVgiAjQgKAMgMAGIgMAFQgZAFgRABIgcgEQAAAlgIBFQgHAwgLAsQgFAggnAAQgJAAgLgCgAjCD6QgNgCgJgKQgPgMADgQQAFgVAHgQIgHgBQgmgJgigSQgZgLgagTQgogjACggQAOhQAshQQAIgUAEgGIAEABQgggIgIgKQgegbAGgnQANgTAbgHQAfgMAdAEIALACIAWgtQAsgaA1AEQArAZgEAbQgFAZgGANIAaAEQBYANAGAdQAeAfgDASQgEAcgqAOQgtARg6gFQgagEgYgHQgwBcgQAvQgDAcAZAKQAEAEAPACQALgeAShDQAVgkAbAFQAiAKAGAYQASAdgEAaQgGAZgPAcQAQgCAVgEQAfAFgEAbQgFAdg6AIQgQAFgNAAQgfBBgWAIQgMAFgLAAIgJgBg");
	this.shape_6.setTransform(215.4,112.2,1,1,0,0,0,-0.8,-2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF6C3").s().p("AAVEdQgTgGgCgJQgBgKAFgMQAGgNADgNQAEgIgJg8IgLguQgKgWgDgKQgCgQAHgXQAHgTAPgGQAfgFAGAJQAFACAUA5QATA3AbBtQADAWgQALQgUANgUADIgKABQgNAAgWgEgAkKCkQABgQAXgfQATgyAigvQAog9Avg2Qg4AEhCgMQhVgLgNg3QAAgfAggZQA+ghAggFQAhgEBHAAQA2gCBAgGIBlgEQBTgJAXAAQAiALAOAlQADAWgiAUQgSASggALQgiAJgeANQgeALgfAHQgiAFgfAHIACAGQACAQgFAOQgDAVgGAKQgEAXgsArQhDBIgjAdQgpA4guALIgHAAQgTAAgDgUgADECEQgigWgRgZQgIgOgDgTQACgOATgHIAfgIQApgGAwAFQAiASAHAeQAFANACARQADASgSAKQgSAQgWADIgKAAQgaAAgkgPg");
	this.shape_7.setTransform(132.9,117.3,1,1,0,0,0,0.9,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF6C3").s().p("ADCFLQgagBgpgZQgggSgCgeQABgNAbgDQAWgEADgCQAEgFAIgSQAEgRACgaQABgVgEhEIg9gEQgagCgPgKQgXgKgKgNQgMgPgBgTQABgZAhgaQAYgIAkACQAeAGAUABQAKguAkgwIAQgpQAAgGgdgCQhNACgRgBQhcgSgPhJQAJg9ChAHQAnACAxAIQBCAVAHAVQAsAhAAA6QgCAegdAaQgYAhgWAbQgeAbgEAIQAXABAOgCQAKgDAQABQBbAJgCAVQgBAVggAnQgOATgTAIQgZAIgSADIgegCQAEAmgCBIQgDAzgHAuQgCAmgzAAIgLgBgAiuEiQgOgBgLgJQgQgLABgRQAEgWAGgRIgHgBQgpgGglgQQgagIgegRQgtgiAAghQAHhXAmhUQAHgXAEgGIAEAAQgigFgJgJQgigZADgqQALgVAcgJQAfgPAfACIALAAIATgxQArgeA4gCQAvAXgCAbQgDAbgFAPIAcABQBcAHALAcQAfAfgBASQgCAegrASQgsAWg8AAQgcgCgZgFQgqBhgMA1QAAAeAaAIQAEADARABQAIggAMhKQATgkAdACQAkAHAJAXQAVAegCAbQgEAcgNAeQAQgDAWgHQAgACgBAdQgCAeg8AOQgQAGgOABQgZBHgXALQgOAHgPAAIgEgBg");
	this.shape_8.setTransform(46.8,113.6,1,1,0,0,0,-0.5,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF6C3").s().p("AgvFuQgtgKgrgOQgbgLgngVQgdgPgFgkQAMgbAiAIQAaALAxAOQA0AUAtAKQAUAGBKADQAuAAAJgSQAmifgMgiQgMgTg4gOQhVgcgVgGQgTgEgugDQg5gCgRgDIgBABQgGAZgMAaQANAAAWAFQBFAQAZAPQAoASgIAhQgJAmiXgkQgYgGgGgFIgKAcQgaBGgQAOQgXAVgngJQgjgIgQgsQgGgfAJg9QAGg0AVhXQAUhRBHARQAgAHAMAPQAUgPA0AEIAVACQgWgYALgtQALgdATgOQg0gTg8gkQhSgvAHg9QAOgdArgLQBLgLAiAIQAiAIBKAfQA4AVBHAUQA0AUA3AQQBbAaAVAJQAfAWgBAtQgHAcgoAEQgaAKgmgBQglgFglADIhCgHQgngJgpgGIgQAAIgUAeQgVAkgbANQgHAGgJAEIASACQCHAhBlAgQBRAcgBAmQAGAzgsDGQgNA5hPAGQgTADgWAAQg/AAhYgWg");
	this.shape_9.setTransform(211.4,35.9,1,1,0,0,0,-1.5,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF6C3").s().p("AlyAxQgHg0CPgiQBxgOCRgXQBOgKBCAAQBJgEA/ADQA7AOAIAtQADAYhAAYQhHAWg0AHQh5ARhdAMQhqAIhJAAQifAAgFgng");
	this.shape_10.setTransform(121,34.7,1,1,0,0,0,-0.2,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF6C3").s().p("AipE4QgbgJgDgRIAMgZIAOgMQAAgMgEgbIgEghQgFgggBggQgOgCgWgKQABAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgJAXg8AAQgxAAgHhZQABhiAFgLQAPgjAsgIQAfAIAeAuQAWAMAABbIAAAFQAPAEAiAAQA0AAAIgJQASgGAAgjQAAgHgMgCQgLgDgxAAQgcgJgNgRQgPgEAAgZQAAgeAygJQANAAA8AMIA6AMQAcAJAABbQAAAxgTARQgYAWgqADIgVABQAMAMAFApQAHAtABBFQAAAUgOAJQgQAMgTAAQgUAAgagIgAkmEEQgXgQAAgQQAAgWARgZQAPgQAUgRQAMgEAMAAQATAAADAcQAJAdAAAHQAAAYgWAUQgTATgRAAQgNAAgNgLgADQDyQgUgTAAgnQAAgSAQhQQAJgfAJgSQAQgJATAAQAXAJAGARQAOARAAASQAAAMgOAgIgKAqQAAANAKAPQADAEAhADQAiAAAAAWQAAAkhdAAQgogLgPgPgAgPDoQgNgGgMgMQgZgTAAgdQAMgjAcAAQBFADANAkQAShJAYg8QAIgRAKgMIgKAAQgmgDgWgKQgdgRAAgaQAKgZArgEQArAAAigCIAahBQAJgRAVAAQAVAJAIAUQALAcAAANQAAAIgDAAIAzAAQA9AEAAArQgDATgRAGQgNAHgQAEIhYAEIgCAKQgRAzgXAoQgRAqgWAgQglAugLAIQgKAEgLAAQgNgEgDgNIgFAFQgLAPgQAAQgSAAgPgIgAEYhgQgKgGgLgKQgWgVAAggQAKgYAXgDQBKAHAAA8QAAANgLAMQgJANgNAAQgRAAgOgJgAlGiJQgQgKgNghQAEgrAugFIBSAHQgDgQAAglQADgSAZgQQAqgLAYAAQAZAEAVARQAeAQAAAXQAAAcgFAOIBIAAQANAAAQANQAKAGAAAOQAAAPgdAQQgPARgLAFQg7AZhIAAQimAAgYgfg");
	this.shape_11.setTransform(39.2,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},6).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254.8,146.6);


(lib.ani1_元件56 = function() {
	this.initialize();

	// 图层 1
	this.text = new cjs.Text("我要微信红包", "20px 'Microsoft YaHei'");
	this.text.lineHeight = 22;
	this.text.setTransform(36.3,-75.2,2.416,2.416);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3oD9QpykSAAmGQAAmGJykVQJzkTN1AAQN2AAJyETQJzEVAAGGQAAGGpzESQpyEUt2AAQj0AAuGM5QBXuFnFjIg");
	this.shape.setTransform(180.5,3.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.4,-131.9,427.9,271);


(lib.ani1_元件49 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.greetpic1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,335,132);


(lib.ani1_元件41 = function() {
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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF6C3").s().p("AhcDLQg0gGgmgnQAHhCBOgVQAaASAgACQBfg2BMjwQBDAQgWCHQh6EAiAAAIgTgBg");
	this.shape_3.setTransform(46.6,58.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF6C3").s().p("AALEiQhDhIgXi3QgkkaAtgeQAsgfAmAyQgZF+BtBPQAGBXhZAAIgCAAg");
	this.shape_4.setTransform(27.1,45.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.9,79.2);


(lib.ani1_元件40 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE6366").s().p("AgYA+QgXgeACgaQAIgrAUgdQAigSAdASQACAkgWAkQAZAWgKAgQgOAQgSAAQgOAAgTgOg");
	this.shape.setTransform(7.2,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E58285").s().p("AgqBkQgagsgFgwQANg7AYgwQA/gVAtAaQADAzgbAzQAhAygKAaQgZAagmAAQgWAAgcgKg");
	this.shape_1.setTransform(7.4,11);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.8,22.1);


(lib.ani1_元件13b = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.num3();
	this.instance.setTransform(11.4,66);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.4,66,101,143.2);


(lib.ani1_元件12a = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.num2();
	this.instance.setTransform(11.4,66);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.4,66,101,143.2);


(lib.ani1_元件11a = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.num1();
	this.instance.setTransform(39.5,66);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(39.5,66,17.4,143.2);


(lib.ani1_元件9 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9B7F").s().p("ABAAnIg4hLIALAAIA7BLgAANAnIg2hLIALAAIA5BLgAgYAnIg4hLIALAAIA7BLgAhIAnIg4hLIALAAIA7BLgAByAkIg4hKIALAAIA8BKg");
	this.shape.setTransform(12.9,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.8,7.9);


(lib.ani1_元件3 = function() {
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


(lib.ani1_bjmc = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.bj();
	this.instance.setTransform(-320,-480,1,1.563);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-480,640,1500);


(lib.ani1_我擦擦 = function() {
	this.initialize();

	// 图层 3
	this.instance = new lib.duquzhong01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.7,0,320.8,36);


(lib.ani1_补间20 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai4gyQAKgHA6gHQA5gIAZgBIAugDQAXgCAagBIAwgBQAWAAAUACIAmAFQAiBFggBBQjTgDiiAXQgthEArg/g");
	this.shape.setTransform(45.2,8,1,1,0,0,0,-3.2,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjQgZQAvgMBigLQA3gUAngrQgVAzgeAHQAagDAdgBQBGgeAbgpQgMAtgxAYQAeAAAdABQA6gcApguQgOAogxAjIAnACQAsBQgpBUQjVgOjBAmQg2hIAshWg");
	this.shape_1.setTransform(48.1,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjIg3IAmgJQAVgEAWgCIAygDQAbgCAXAAIAwgCQAZgBA8ACQA7ACAMAFQAyA9goBGQingHjZAXQgnhAAchFg");
	this.shape_2.setTransform(-19.6,9.6,1,1,0,0,0,3.3,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjSgqIAmgGQg0gegTgmQAvAqA+AWIA8gGQg0gUgSgrQAhAmBKAXQAegBAbAAQgggEgagxQAsAnA6AOQBmACAyAIQA1BRgwBNQjJgUjaAjQgyhPAmhVg");
	this.shape_3.setTransform(-23.3,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF6C3").s().p("AhiGwQg9ltB0nMQA5hMAyBLQgyHzBqFHg");
	this.shape_4.setTransform(-76.3,82.8,1,1,0,0,0,0.1,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCASQgFgBgDgGQgBgGABgGQACgIAEgFQAEgEAEABQAFABABAGQADAGgCAGQgCAIgFAEQgDAEgCAAIgBAAg");
	this.shape_5.setTransform(29.2,-66.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#182C61").s().p("AgPBIQgRgDgHgYQgHgYAHgdQAHgeAQgTQAQgSAQADQARAEAHAYQAHAZgHAcQgHAegRATQgNAPgMAAIgGgBgAgCgUQgEAFgCAHQgBAIABAEQADAHAFABQACABAEgFQAFgFACgGQACgHgDgHQgBgGgFgBIgBAAQgFAAgCAEg");
	this.shape_6.setTransform(29,-65.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZByQgagGgLgmQgLglALguQAKgvAbgeQAZgdAZAGQAbAGALAmQALAlgLAuQgKAvgbAeQgWAYgUAAIgJgBgAgQg3QgRATgHAeQgGAcAGAYQAHAYARAEQAQAEAQgTQARgSAGgfQAHgcgHgYQgHgYgRgEIgFgBQgMAAgOAQg");
	this.shape_7.setTransform(29.1,-65.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCAPQgFgFgCgHQgDgGACgGQABgHAFgBQAEgBADAEQAFAEADAIQACAGgCAGQgBAHgFABIgCAAQgDAAgCgDg");
	this.shape_8.setTransform(-22,-65.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#182C61").s().p("AgKA7QgTgSgJgeQgJgbAFgZQAFgYAQgFQARgFAQARQASARAJAeQAJAcgEAYQgGAYgQAGIgIABQgNAAgLgNgAgFgYQgFABgBAHQgCAGADAIQACAFAFAFQADAEAEgBQAFgCABgGQACgFgCgHQgDgIgFgEQgCgEgDAAIgCABg");
	this.shape_9.setTransform(-21.9,-65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSBcQgcgbgPguQgOgtAHgmQAJgmAZgIQAagIAaAaQAdAcAPAuQAOAtgIAmQgIAngaAIQgFABgGAAQgVAAgUgVgAgVhEQgQAFgFAYQgFAZAJAbQAJAeATASQAPARARgFQAQgGAGgYQAEgYgJgcQgJgegSgRQgMgNgMAAIgJABg");
	this.shape_10.setTransform(-21.9,-65.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DBC4AC").s().p("AAHALQgGgBgEgDQgGgEgDgDQgEgEADgDQABgDAGAAQAFAAAEAEQAHAEADACQADAFgCADQgBADgFAAIgBAAg");
	this.shape_11.setTransform(86.2,-94.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DBC4AC").s().p("AAVAgQgQgBgQgKQgRgKgJgLQgKgOAGgJQAFgJAQABQAQABAQAKQASALAIAKQAJAOgFAJQgEAIgOAAIgDAAg");
	this.shape_12.setTransform(93.7,-90.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#986E44").s().p("AjJC6IAlhYIAyh5QAbA1AxgHQgxgNgQg7IAdhIIBKAhQAiA0geA8QAjgggJhCIBTAlIgLBcQgfAmhBgrQApA2A0gUIgFAtIhtAUQgRgaAOgdQgOALgEAWQg+AfgThHQAEBWBMgXIACAQIAcgDQAkApgdAqQAqgggYg3IApgHQA1AFAABcQAThEgqghIAVgCIAGguQBDAZAqhOQgxA7g6gaIANhuQBHAEAOhVQgiBEgxgHIg/gbQAtgsgphiQAfBdg0AqIhYgmQAdgyg0hXQArBcgjAnIghgPIgeBLQg+gMgDhvQgaBiBQA0Ig2CEQh7hEAUjeICAhsIEDgmICiCwIAREmIjUDdg");
	this.shape_13.setTransform(80.9,-66.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D8AE86").s().p("AAoCeIAegFQApAigTBDQABhcg1gEgAgbCoIAbgEQAWA4goAfQAbgqgkgpgAiIBcQASBHA+gfQgBAKABANQgRAFgNAAQgwAAgChEgABgBpIACgTQA6AZAxg7QggA7gtAAQgPAAgRgGgAgMA3QBAArAfgmIgEAdQgOAGgNAAQgkAAgcgogAiFgSIAKgaQARA7AwANIgKABQgpAAgYgvgAgThSIAeANQAIBCggAgQAcg7gig0gABvgZIADgTQAxAGAihEQgOBShCAAIgGgBgAjGi6QAEBvA9ANIgKAbQhRg1AahigAAhhPQA1gqgfhdQApBiguAsgAhGh7QAjgngqhbQA0BWgdAyg");
	this.shape_14.setTransform(82.9,-67);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7A5836").s().p("AgOCLQgBgNABgLQAFgVAMgLQgMAdAPAaIBvgVIAEgtIAEgdIAKhbIhSglIgggOIhIgiIgdBIIgLAaIgzB6IgNgHIA2iEIALgbIAdhLIAiAPIAPAFIBXAnIARAGIBAAcIgDAUIgMBuIgDATIgFAvIgVACIgeAEIgqAHIgbADIgaAEIgBgQg");
	this.shape_15.setTransform(78.7,-65.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DBC4AC").s().p("AgNAIQgCgDADgFQADgCAGgEQAEgEAGAAQAGAAABADQACADgDAEQgDADgGAEQgEAEgGAAQgGAAgBgDg");
	this.shape_16.setTransform(-87,-94.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DBC4AC").s().p("AgpAYQgFgJAJgNQAJgLARgLQAQgKAQgBQAQgBAFAJQAGAJgKANQgIAMgSAKQgQAKgQABIgDAAQgNAAgFgIg");
	this.shape_17.setTransform(-94.3,-89.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#986E44").s().p("AlVBPIBRkUIDViHIESBaIBzCBQgaDYiUAoIgeiLQBjgggIhiQgbBphGgBIgQhNIgnAGQgdgsBAhPQhKBIAVA2IhnATQgwg0A1hTQhCBVApA0IhLANQg2gEgXhIQgCBUBNAMIgJBrQhDAMgphCQAcBUBOgMIgDAuIAWAHQg0AWAHBFQAShYA7AHIAsAOQgmAxAnAmQgXguAygfIAdAJIAEgQQBNAnAWhSQgjBAg8grQAAgVgMgOQAIAfgWAVIhzgqIAEgsQAzAeA4gqQhQAbgZgqIAIhbIBhgRQgXA6AfAoQgUg/AvgrIBYgQIARBKQgfA1g3AEQAyAQAqgwIAdCAIAVBbIlLBgg");
	this.shape_18.setTransform(-80.5,-67.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D8AE86").s().p("AgqCUIAcAKQgyAfAXAuQgngmAmgxgAh2B8IAgAKQg7gHgSBYQgHhFA0gWgAATCXQAEgMAAgKQA8ArAjhAQgPA3goAAQgTAAgZgMgAjzAAQApBBBDgMIgCASIgRACQhAAAgZhJgAhyA8IACgbQAZAqBQgbQghAYgfAAQgWAAgVgMgAAvAgQA3gEAfg1IAGAZQgfAkgkAAQgMAAgNgEgAgHhLIAjgIQgvArATA/QgegmAXg8gACTgoQBGABAbhpQAIBihjAigAjJiWQAXBIA2AEIgCAUQhNgMAChUgAgYjgQg1BTAwA0IgUACQgpg0BChVgAB/jqQhABPAdAsIgSADQgVg2BKhIg");
	this.shape_19.setTransform(-82,-65.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7A5836").s().p("AgjCGIgcgKIgsgOIgggKIgWgHIADguIACgSIAJhrIACgUIBLgNIAUgCIBngTIASgDIAngGIAQBNIAGAcIAeCJIgPADIgdh+IgGgbIgRhKIhYAQIgjAIIhhARIgIBbIgCAbIgEAsIBzAqQAYgVgKgfQAMAOAAAVQAAAKgCAMIgGAQg");
	this.shape_20.setTransform(-79.9,-63.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFFD7").s().p("AikD2QghgsAHg7QgGAbgTAXQgmAagwgLQgxgMAFg1IAQgqQggApgqgMQgkgJgQgkQgGgsAZgeQAmgYAmAPQgbhJAVg1QAbgmA5gHQAygBAtAgQgVgmATgmQAYgkA6AHQA6AHAbAyQgRg/BCgSQBEgTAsApQAbAmgaAhQBIgqAxAFQAwAIANAoQANApghAwQBoABAgA1QAgA1gWAdQgWAdg2gDQAzAFAFAoQAIA4g4AcQg6AcgvgLQgvgLgVguQgWguAGAnQAGAmgaAdQgZAdgkABQhNAJgYhLIgJgmIgHAjQgCAug8AWQgVAIgSAAQghAAgXgcgAi4gnQgUg0gxgdQgwgIgkAUIAOAAQBNAAA+BFgABGhEQAxgrApgGIBXgOQgsgLg/gBQgqAZgcAygAiLjBQAbAEAaAOIAJAHQAKAJAIALIAFAHQgCgegRgWQgSgEgQAAQgRAAgPAEgABzjlQgSgagbgCQgogCgOAbQAUgNAfgCQAeACASAQg");
	this.shape_21.setTransform(3.5,-101.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFEC").s().p("AkjAoQAjgUAxAHQAwAdAVA1QhEhMhVAHgAC6AEQA/ABAsAMIhXANQgpAHgyArQAcgyArgagAgNAAQgJgKgJgIIgJgHQgbgPgagEQAegHAkAHQAQAXACAcIgEgHgABxhiQgfACgVAOQAPgbAoABQAaADATAaQgSgRgegCg");
	this.shape_22.setTransform(-1,-116.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D8AE86").s().p("AiLBIQgbgEgXgJQCMAKBahCQA4g8BdgPQAFAcgkAoQhFBNjBAAIgkgBg");
	this.shape_23.setTransform(95.7,-21);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFEE9").s().p("AikCKQgigOgQgfQgBhaAphWQANggAqgXQCsBKBnAcQA2AOAFAcQhcAOg5A/QhNA4h1AAIgkgBg");
	this.shape_24.setTransform(93.1,-28.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D8AE86").s().p("AiNgEQgggoAEgcQBTAPAyA8QBQBCB+gKQgVAJgYAEIggABQisAAg+hNg");
	this.shape_25.setTransform(-89.2,-18.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFEE9").s().p("Ag6BTQgzg/hSgOQAEgcAxgOQBbgcCbhKQAlAXALAgQAmBWgCBaQgOAfgeAOIghABQhoAAhFg4g");
	this.shape_26.setTransform(-87,-26.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF1A2").s().p("Aq8iHQBsjAD0hhQkVEcgJGoQAAgBABAAQAAAAAAAAQAAABAAAAQAAABAAAAQFZiDFIAMIAJAAIAMgBIACgBQEGgmHFByIAIBEQlMiPmVALQAEgBgEAAQgIAAh6ASQh9ASigAtQihArg6AWIglANIgGACIiYBZQgblzBri9g");
	this.shape_27.setTransform(0.5,-55.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CEB982").s().p("AADBTIgDhTQg1gLgrg+QAzAuAzAEQAxgOAqgtQgXAzg1AdIAFBTIgBABIgMABIgKAAg");
	this.shape_28.setTransform(4.1,-47.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF6C3").s().p("ArBF8QAImnEWkdQJKicFiEzQCdETAcDvQnEhzkFAmIgFhUQAzgeAXgzQgqAugvANQg1gEgzgtQArA9A1ANIAFBTQlJgMlZCEQAAgBgBgBQAAAAAAAAQAAgBAAAAQAAABAAAAg");
	this.shape_29.setTransform(7.6,-65.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF9B7F").s().p("AgOBDQg7gNglgdQglgbAGgcQAGgcAugLQAvgLA5AOQA7ANAlAdQAlAbgGAcQgGAdguAKQgVAFgYAAQgcAAgfgIg");
	this.shape_30.setTransform(81.1,19.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9B7F").s().p("AhaBQQgygGgJgcQgIgbAlgfQAnghA+gUQA8gTAyAFQAzAGAIAcQAJAbgnAfQgmAhg+AUQgvAPgpAAIgWgBg");
	this.shape_31.setTransform(-62,26);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEFDDA").s().p("AAAkZQgJFUAhDfQhSj1A6k+g");
	this.shape_32.setTransform(-51.7,23.3,1,1,0,0,0,-0.1,0.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEFDDA").s().p("AgrkVQAfFSA7DZQhvjqAVlBg");
	this.shape_33.setTransform(-47.2,89.4,1,1,0,0,0,-1.1,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEFDDA").s().p("AkZAAQFTAJDfggQiOAvimAAQh4AAiGgYg");
	this.shape_34.setTransform(9,66,1,1,0,0,0,0.2,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEFDDA").s().p("AkZAAQFTAJDgggQiPAvimAAQh4AAiGgYg");
	this.shape_35.setTransform(8.6,53.3,1,1,0,0,0,0.2,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEFCBF").s().p("ApKNrQgvkzgXkqQLkBfJPh9QgIEWgtE0QlsBRlzAAQjrAAjugggAqVDGIAAgCIgEhIQgbnkApnNQKmisIBCyQCIGYABIFIAAA4IAAAQIAAABQliBAljAAQk5AAk8gxg");
	this.shape_36.setTransform(11.2,32);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEF27A").s().p("ApfOxQi6sYBgwSQMeimHaCpQEBJ4imR7Ql5BPmWAAQjwAAj6gbgAo/NqQJmBTJSiDQAtk1AIkWQpPB9rkhfQAXEqAvEzgAqAs2QgpHNAbHlIAEBIIAAABQKhBqKZh4IAAgBIAAgRIAAg4QgBoEiImZQkFhakuAAQkmAAlOBUg");
	this.shape_37.setTransform(10.1,32.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FDE40B").s().p("AgUMuQiIpCAYrZIANjsIAHhUQBxhHAuggQheQRC4MYQhkgVg5hSg");
	this.shape_38.setTransform(-64.5,34.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FEF27A").ss(1,1,1).p("ACrhQQAdBPA9A8QkMgXj9AsQBdhUAohHg");
	this.shape_39.setTransform(10.9,-18.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FDE40B").s().p("Ah+hLIEpgEQAdBOA8A8QkLgWj9AsQBehVAohHg");
	this.shape_40.setTransform(10.9,-18.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF9B7F").s().p("ABAAnIg4hLIALAAIA7BLgAANAnIg2hLIALAAIA5BLgAgYAnIg4hLIALAAIA7BLgAhIAnIg4hLIALAAIA7BLgAByAkIg4hKIALAAIA8BKg");
	this.shape_41.setTransform(14.1,15.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AnfAaQCbh4CcBrIgNAdQiYhgiWBngADSAdIgMgcQCOhrCMB4IAEAXQiIhniKBfg");
	this.shape_42.setTransform(9.1,-19.9);

	this.addChild(this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.7,-129.2,229.5,258.6);


(lib.ani1_元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("A/3WRMAAAgshMA/vAAAMAAAAshg");
	this.shape.setTransform(204.1,142.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ani1_哈哈哈哈 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ani1_我擦擦();
	this.instance.setTransform(72.9,13.9,1,1,0,0,0,72.9,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.531},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,315,36);


(lib.ani1_wenzimc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+hKKIAAimICeAAIglpZIomCTIBDlxIGuhXIgWjrIGKh9IAAE3IEagsIAfD+Ik5BMIAAM6IjPCvgAS7KaICiuEIALACIJ3AlIidIBIkfANIgKBhIM8AvIh1EegAYrBnIBtAAIAhhmIiYgQgA2PGkIBBigIKGEQIlsDHgAn2GaIGLjbIA2BAIAnAAIAAhPIF2gOIASl2Il0gQIAAhoIgmACIilDyIAlAnIBIgaIA4BbImnE/IjNjDIB8i9IiwiBIE6p5ID6CKIjLFHIAfAVIB9iiIDCA+IADACIALghIN7giIA2ErIlPgLIAAFgIGFAAIBBDdIxIClIAAjJIgkgIIl7F3gEglUAGUIGTiEIAACwIjbC/gAfPFiIAzpXIq3guIivFBIiEhzIDbqjIETAsIhUDyIOAgpIhlNwgEgkPAB3ICghkIBtCTIhHA7gA2cBxIDVkHIDqCYIldC8gA19o3IgHgTIBKjdICzBhIiJCPg");
	mask.setTransform(-15.9,47.1);

	// 图层 6
	this.instance = new lib.ani1_元件3();
	this.instance.setTransform(-309.2,-50.6,0.999,0.999,25,0,0,34.7,260.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:275.5,y:153},14).wait(16));

	// 图层 8
	this.instance_1 = new lib.wenzi();
	this.instance_1.setTransform(-267.4,-216.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.4,-216.4,534.9,369);


(lib.ani1_sanbai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ani1_faguang();
	this.instance.setTransform(154.4,307.5,1,1,0,0,0,324,547.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},3).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.6,-240,648,1600);


(lib.ani1_11231231231 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.xhgGif("synched",0);
	this.instance.setTransform(138,156.7,0.576,0.576,0,0,0,24.9,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.8,-16.1,345.7,345.7);


(lib.ani1_元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ani1_元件56();
	this.instance.setTransform(47.5,109.1,0.097,0.097,0,0,0,47.5,109);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({regY:109.1,scaleX:1.09,scaleY:1.09},6).to({scaleX:0.98,scaleY:0.98},3).to({scaleX:1,scaleY:1},2).wait(35).to({scaleX:1.07,scaleY:1.07},4).to({regX:47.4,regY:109.4,scaleX:0.06,scaleY:0.06},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ani1_元件48 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:1,s1end:11,s2:12,s2end:24,s3:25,s3end:40,s0:41,s0end:58});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}
	this.frame_58 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13).call(this.frame_24).wait(16).call(this.frame_40).wait(18).call(this.frame_58).wait(6));

	// 图层 7
	this.instance = new lib.ani1_元件49();
	this.instance.setTransform(507.5,79,1,1,0,0,0,167.5,79);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({x:144.5},11).to({x:167.5},6).wait(6));

	// 图层 6
	this.instance_1 = new lib.greetMc4();
	this.instance_1.setTransform(507.5,79,1,1,0,0,0,167.5,79);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({x:144.5},10).to({x:167.5},5).to({x:-195.5},18).wait(6));

	// 图层 5
	this.instance_2 = new lib.greetMc3();
	this.instance_2.setTransform(507.5,79,1,1,0,0,0,167.5,79);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({x:144.5},8).to({x:167.5},4).to({x:-217.5},16).to({_off:true},1).wait(23));

	// 图层 2
	this.instance_3 = new lib.ani1_元件49111();
	this.instance_3.setTransform(507.5,79,1,1,0,0,0,167.5,79);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({x:144.5},7,cjs.Ease.get(1)).to({x:167.5},3).to({x:-205.5},13).to({_off:true},1).wait(39));

	// 图层 1
	this.instance_4 = new lib.ani1_元件49();
	this.instance_4.setTransform(167.5,79,1,1,0,0,0,167.5,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:-205.5},9,cjs.Ease.get(1)).to({_off:true},1).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,335,132);


(lib.ani1_元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.ani1_元件40();
	this.instance.setTransform(131.3,169.6,1,1,0,0,0,7.4,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.86,scaleY:0.86},14).to({scaleX:1,scaleY:1},15).wait(11));

	// 图层 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACbAfQAFgRALgPQAKgGA6gIQA5gHAZgBIAwgDQAXgDAbAAIAvgBQAWgBAUACIAmAGQAOAaADAcQjVgxjDAxgAoyAfIAGgTIAmgJQAVgDAWgBIAygDQAbgCAXAAIAygCQAZgBA8ACQA7ACAMAFQANAOAHARQjYgojFAog");
	this.shape.setTransform(127.4,131.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACZAyIAAgCQgCgjAXggQAJgHA6gHQA6gIAYgBIAwgDQAXgCAbgBIAvgBQAWAAAUACIAmAFQAXAsgHAuIAAACQjhhCi6BCgAo1AyIAAgCQABgbALgaIAmgJQAUgEAXgBIAxgEQAbgCAYAAIAxgBQAagCA7ACQA8ACALAGQAbAeABAkIAAACQjVg9jVA9g");
	this.shape_1.setTransform(127.1,133.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ao1AIQABgYALgcIAmgJQAUgEAXgCIAxgDQAbgCAYAAIAxgCQAagBA7ACQA8ACALAFQAbAhABAhQACAggTAhQiogHjbAXQgXgnABgqgACZAIQgCghAXgiQAJgGA6gIQA6gHAYgBIAwgDQAXgDAbAAIAvgBQAWgBAUACIAmAGQAXAugHArQgDAWgKAWQjWgCihAXQgWghgBggg");
	this.shape_2.setTransform(127.1,137.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(23));

	// 图层 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbAlQgPgNgDgUQgCgSAMgQQANgPATgCQARgCAOANQAPANACAUQACASgMAQQgMAPgTACIgEABQgPAAgMgMg");
	this.shape_3.setTransform(156.2,133.9,1,1,0,0,0,-0.1,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghAiQgNgOAAgUQAAgTANgOQAOgOATAAQATAAAOAOQAOAOAAATQAAAUgOAOQgOAOgTAAQgTAAgOgOg");
	this.shape_4.setTransform(83.2,135.7,1,1,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(40));

	// 图层 4
	this.instance_1 = new lib.ani1_元件9();
	this.instance_1.setTransform(130,155.2,1,1,0,0,0,12.9,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// 图层 6
	this.instance_2 = new lib.ani1_元件41();
	this.instance_2.setTransform(196.5,206.3,1,1,0,0,0,60.4,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-4.5},19).to({rotation:0},20).wait(1));

	// 图层 1
	this.instance_3 = new lib.ani1_补间20();
	this.instance_3.setTransform(114.7,129.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229.5,258.6);


(lib.ani1_2 = function() {
	this.initialize();

	// 图层 4
	this.instance = new lib.ani2_daitoubingGif();
	this.instance.setTransform(104.6,151.4,0.606,0.606,0,0,0,-0.1,-0.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.8,-30.3,303,363.6);


(lib.ani1_1 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.xhgGif();
	this.instance.setTransform(120.7,146.1,0.502,0.502,0,0,0,24.9,100);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.9,-4.5,301.2,301.2);


(lib.ani1_倒计时 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.ani1_元件11a();
	this.instance.setTransform(81.4,131.2,1.423,1.235,0,0,0,61.1,134.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,x:72.4,y:131.1},30,cjs.Ease.get(1)).to({_off:true},1).wait(9));

	// 图层 3
	this.instance_1 = new lib.ani1_元件12a();
	this.instance_1.setTransform(64.9,132.4,1.423,1.235,0,0,0,61.1,134.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regY:134.9,scaleX:0.4,scaleY:0.4},29,cjs.Ease.get(1)).to({_off:true},1).wait(40));

	// 图层 1
	this.instance_2 = new lib.ani1_元件13b();
	this.instance_2.setTransform(62,135.2,1.423,1.235,0,0,0,61.1,134.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:61,scaleX:0.4,scaleY:0.4,y:135.1},28,cjs.Ease.get(1)).to({_off:true},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,50.2,143.8,176.5);


(lib.ani1_gezhongmc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{aniend:643});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_237 = function() {
		playSound("sound01");
	}
	this.frame_657 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(237).call(this.frame_237).wait(420).call(this.frame_657).wait(1));

	// 图层 12
	this.instance = new lib.lg();
	this.instance.setTransform(-114,-480);

	this.instance_1 = new lib.ani1_wenzimc();
	this.instance_1.setTransform(5.1,-238.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},150).wait(508));

	// 图层 5
	this.instance_2 = new lib.ani1_sanbai("synched",0,false);
	this.instance_2.setTransform(1.9,-3.4,1,1,0,0,0,156.8,272);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(245).to({_off:false},0).wait(14).to({regX:0,regY:0,x:-154.9,y:-275.4},0).wait(12).to({startPosition:0},0).wait(15).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(18).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(24).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(12).to({startPosition:3},0).wait(9).to({startPosition:0},0).wait(78).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(15));

	// 图层 11
	this.instance_3 = new lib.ani1_倒计时("synched",0,false);
	this.instance_3.setTransform(0,-34,1.878,1.878,0,0,0,63,128);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150).to({_off:false},0).to({_off:true},90).wait(418));

	// gtInfoMc
	this.gtInfoMc = new lib.ani1_gtInfoMc();
	this.gtInfoMc.setTransform(25.3,186.9,1,1,0,0,0,279.1,142.1);

	this.instance_4 = new lib.ani1_pBtn();
	this.instance_4.setTransform(-6,313.7,1,1,0,0,0,149.5,82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gtInfoMc}]}).to({state:[]},150).to({state:[{t:this.instance_4}]},494).wait(14));

	// 图层 9
	this.instance_5 = new lib.ani1_元件57();
	this.instance_5.setTransform(-24.3,-143,0.716,0.716);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(644).to({_off:false},0).wait(14));

	// headMc
	this.nickTxt = new cjs.Text("", "bold 45px 'Microsoft YaHei'", "#FFFF00");
	this.nickTxt.name = "nickTxt";
	this.nickTxt.lineHeight = 47;
	this.nickTxt.lineWidth = 439;
	this.nickTxt.setTransform(-141.3,-29.8);

	this.headMc = new lib.ani1_headMc();
	this.headMc.setTransform(-197.6,-16.5,1,1,0,0,0,51.3,51.3);

	this.instance_6 = new lib.jiu();
	this.instance_6.setTransform(-110,-141.1);

	this.instance_7 = new lib.yi();
	this.instance_7.setTransform(-100,-81.9);

	this.instance_8 = new lib.bai();
	this.instance_8.setTransform(-94.7,-153.2);

	this.instance_9 = new lib.hao();
	this.instance_9.setTransform(-107.1,-122.2);

	this.instance_10 = new lib.bu();
	this.instance_10.setTransform(-109.2,-136.1);

	this.instance_11 = new lib.hao2();
	this.instance_11.setTransform(-116.4,-121.1);

	this.instance_12 = new lib.jiuyibai();
	this.instance_12.setTransform(-251.7,-202.1);

	this.instance_13 = new lib.ani1_元件1烦烦烦();
	this.instance_13.setTransform(3.3,-311.7,2,2,0,0,0,127.5,73.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headMc},{t:this.nickTxt}]}).to({state:[]},150).to({state:[{t:this.instance_6}]},452).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},11).wait(14));

	// 图层 13
	this.instance_14 = new lib.ani1_GIF();
	this.instance_14.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_15 = new lib.ani1_wt2();
	this.instance_15.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_16 = new lib.ani1_wt3();
	this.instance_16.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_17 = new lib.ani1_wt4();
	this.instance_17.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_18 = new lib.ani1_wt5();
	this.instance_18.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_19 = new lib.ani1_wt6();
	this.instance_19.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_20 = new lib.ani1_wt7();
	this.instance_20.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_21 = new lib.ani1_wt8();
	this.instance_21.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_22 = new lib.ani1_wt9();
	this.instance_22.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_23 = new lib.ani1_wt10();
	this.instance_23.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_24 = new lib.ani1_wt11();
	this.instance_24.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_25 = new lib.ani1_wt12();
	this.instance_25.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_26 = new lib.ani1_wt13();
	this.instance_26.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_27 = new lib.ani1_wt14();
	this.instance_27.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_28 = new lib.ani1_wt15();
	this.instance_28.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_29 = new lib.ani1_wt16();
	this.instance_29.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_30 = new lib.ani1_wt17();
	this.instance_30.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_31 = new lib.ani1_wt18();
	this.instance_31.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_32 = new lib.ani1_wt19();
	this.instance_32.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_33 = new lib.ani1_wt20();
	this.instance_33.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_34 = new lib.ani1_wt21();
	this.instance_34.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_35 = new lib.ani1_wt22();
	this.instance_35.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_36 = new lib.ani1_wt23();
	this.instance_36.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_37 = new lib.ani1_wt24();
	this.instance_37.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_38 = new lib.ani1_wt25();
	this.instance_38.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_39 = new lib.ani1_wt26();
	this.instance_39.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_40 = new lib.ani1_wt27();
	this.instance_40.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.instance_41 = new lib.ani1_wt28();
	this.instance_41.setTransform(-377.4,-62.2,1.441,1.441,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},351).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24,p:{scaleX:1.388,scaleY:1.388,skewX:0,x:-356.8,y:-161.3}}]},1).to({state:[{t:this.instance_24,p:{scaleX:1.441,scaleY:1.441,skewX:180,x:-377.4,y:-62.2}}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:-62.2}}]},1).to({state:[{t:this.instance_31,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:-62.2}}]},1).to({state:[{t:this.instance_32,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:-62.2}}]},1).to({state:[{t:this.instance_33,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:-62.2}}]},1).to({state:[{t:this.instance_34,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:-62.2}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:-62.2}}]},1).to({state:[{t:this.instance_36,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:-62.2}}]},1).to({state:[{t:this.instance_37,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:-62.2}}]},1).to({state:[{t:this.instance_38,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:-62.2}}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[]},1).to({state:[{t:this.instance_30,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:67.2}}]},139).to({state:[{t:this.instance_31,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:67.2}}]},1).to({state:[{t:this.instance_32,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:67.2}}]},1).to({state:[{t:this.instance_33,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:67.2}}]},1).to({state:[{t:this.instance_34,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:67.2}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:67.2}}]},1).to({state:[{t:this.instance_36,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:67.2}}]},1).to({state:[{t:this.instance_37,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:67.2}}]},1).to({state:[{t:this.instance_38,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:67.2}}]},1).to({state:[]},1).wait(130));

	// 图层 4
	this.instance_42 = new lib.ani1_哈哈哈哈();
	this.instance_42.setTransform(-60.1,329.7,1,1,0,0,0,72.9,13.9);

	this.instance_43 = new lib.ani1_GIF();
	this.instance_43.setTransform(-855.2,-470,3.22,3.22);
	this.instance_43._off = true;

	this.instance_44 = new lib.ani1_wt2();
	this.instance_44.setTransform(-855.2,-470,3.22,3.22);
	this.instance_44._off = true;

	this.instance_45 = new lib.ani1_wt3();
	this.instance_45.setTransform(-855.2,-470,3.22,3.22);
	this.instance_45._off = true;

	this.instance_46 = new lib.ani1_wt4();
	this.instance_46.setTransform(-855.2,-470,3.22,3.22);
	this.instance_46._off = true;

	this.instance_47 = new lib.ani1_wt5();
	this.instance_47.setTransform(-855.2,-470,3.22,3.22);
	this.instance_47._off = true;

	this.instance_48 = new lib.ani1_wt6();
	this.instance_48.setTransform(-855.2,-470,3.22,3.22);
	this.instance_48._off = true;

	this.instance_49 = new lib.ani1_wt7();
	this.instance_49.setTransform(-855.2,-470,3.22,3.22);
	this.instance_49._off = true;

	this.instance_50 = new lib.ani1_wt8();
	this.instance_50.setTransform(-855.2,-470,3.22,3.22);
	this.instance_50._off = true;

	this.instance_51 = new lib.ani1_wt9();
	this.instance_51.setTransform(-855.2,-470,3.22,3.22);
	this.instance_51._off = true;

	this.instance_52 = new lib.ani1_wt10();
	this.instance_52.setTransform(-855.2,-470,3.22,3.22);
	this.instance_52._off = true;

	this.instance_53 = new lib.ani1_wt11();
	this.instance_53.setTransform(-855.2,-470,3.22,3.22);
	this.instance_53._off = true;

	this.instance_54 = new lib.ani1_wt12();
	this.instance_54.setTransform(-855.2,-470,3.22,3.22);
	this.instance_54._off = true;

	this.instance_55 = new lib.ani1_wt13();
	this.instance_55.setTransform(-855.2,-470,3.22,3.22);
	this.instance_55._off = true;

	this.instance_56 = new lib.ani1_wt14();
	this.instance_56.setTransform(-855.2,-470,3.22,3.22);
	this.instance_56._off = true;

	this.instance_57 = new lib.ani1_wt15();
	this.instance_57.setTransform(-886.4,-997.2,3.954,3.954);

	this.instance_58 = new lib.ani1_wt16();
	this.instance_58.setTransform(-886.4,-997.2,3.954,3.954);

	this.instance_59 = new lib.ani1_wt17();
	this.instance_59.setTransform(-886.4,-997.2,3.954,3.954);
	this.instance_59._off = true;

	this.instance_60 = new lib.ani1_wt18();
	this.instance_60.setTransform(-886.4,-997.2,3.954,3.954);

	this.instance_61 = new lib.ani1_wt19();
	this.instance_61.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_62 = new lib.ani1_wt20();
	this.instance_62.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_63 = new lib.ani1_wt21();
	this.instance_63.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_64 = new lib.ani1_wt22();
	this.instance_64.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_65 = new lib.ani1_wt23();
	this.instance_65.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_66 = new lib.ani1_wt24();
	this.instance_66.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_67 = new lib.ani1_wt25();
	this.instance_67.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_68 = new lib.ani1_wt26();
	this.instance_68.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_69 = new lib.ani1_wt27();
	this.instance_69.setTransform(-356.8,-161.3,1.388,1.388);

	this.instance_70 = new lib.b1();
	this.instance_70.setTransform(-161.7,169.5,0.999,0.999,-65.7);

	this.instance_71 = new lib.b2();
	this.instance_71.setTransform(182.8,-209.4,0.998,0.998,143.1);

	this.instance_72 = new lib.b3();
	this.instance_72.setTransform(-230.4,-74.8,0.998,0.998,31.1);

	this.instance_73 = new lib.ani1_wt28();
	this.instance_73.setTransform(-377.4,73.6,1.441,1.441);

	this.instance_74 = new lib.ani1_wt29();
	this.instance_74.setTransform(-377.4,73.6,1.441,1.441);

	this.instance_75 = new lib.ani1_wt30();
	this.instance_75.setTransform(-377.4,73.6,1.441,1.441);

	this.instance_76 = new lib.ani1_wt31();
	this.instance_76.setTransform(-377.4,73.6,1.441,1.441);

	this.instance_77 = new lib.ani1_wt32();
	this.instance_77.setTransform(-377.4,73.6,1.441,1.441);

	this.instance_78 = new lib.ani1_wt33();
	this.instance_78.setTransform(-377.4,73.6,1.441,1.441);

	this.instance_79 = new lib.ani1_wt34();
	this.instance_79.setTransform(-377.4,73.6,1.441,1.441);

	this.instance_80 = new lib.ani1_wt35();
	this.instance_80.setTransform(-377.4,73.6,1.441,1.441);

	this.instance_81 = new lib.ani1_wt36();
	this.instance_81.setTransform(-377.4,73.6,1.441,1.441);

	this.instance_82 = new lib.ani1_wt37();
	this.instance_82.setTransform(-377.4,73.6,1.441,1.441);

	this.instance_83 = new lib.ani1_wt38();
	this.instance_83.setTransform(-377.4,73.6,1.441,1.441);

	this.instance_84 = new lib.ani1_wt39();
	this.instance_84.setTransform(-377.4,73.6,1.441,1.441);

	this.instance_85 = new lib.ani1_wt40();
	this.instance_85.setTransform(-377.4,73.6,1.441,1.441);

	this.instance_86 = new lib.role1_p5();
	this.instance_86.setTransform(-398.2,-2);

	this.instance_87 = new lib.role1_p4();
	this.instance_87.setTransform(-382,-94.3);

	this.instance_88 = new lib.role1_p3();
	this.instance_88.setTransform(-354.9,-112);

	this.instance_89 = new lib.role1_p2();
	this.instance_89.setTransform(-331.5,-114.2);

	this.instance_90 = new lib.role1_p1();
	this.instance_90.setTransform(-370.4,-508.5);

	this.instance_91 = new lib.ani1_wt7();
	this.instance_91.setTransform(-44.7,315.4,1.141,1.141,-90);

	this.instance_92 = new lib.ani1_wt7();
	this.instance_92.setTransform(-292.8,67.2,1.141,1.141,0,180,0);

	this.instance_93 = new lib.ani1_wt7();
	this.instance_93.setTransform(-292.8,-29,1.141,1.141);

	this.instance_94 = new lib.ani1_wt6();
	this.instance_94.setTransform(-44.7,315.4,1.141,1.141,-90);

	this.instance_95 = new lib.ani1_wt6();
	this.instance_95.setTransform(-292.8,67.2,1.141,1.141,0,180,0);

	this.instance_96 = new lib.ani1_wt6();
	this.instance_96.setTransform(-292.8,-29,1.141,1.141);

	this.instance_97 = new lib.ani1_wt5();
	this.instance_97.setTransform(-44.7,315.4,1.141,1.141,-90);

	this.instance_98 = new lib.ani1_wt5();
	this.instance_98.setTransform(-292.8,67.2,1.141,1.141,0,180,0);

	this.instance_99 = new lib.ani1_wt5();
	this.instance_99.setTransform(-292.8,-29,1.141,1.141);

	this.instance_100 = new lib.ani1_wt4();
	this.instance_100.setTransform(-44.7,315.4,1.141,1.141,-90);

	this.instance_101 = new lib.ani1_wt4();
	this.instance_101.setTransform(-292.8,67.2,1.141,1.141,0,180,0);

	this.instance_102 = new lib.ani1_wt4();
	this.instance_102.setTransform(-292.8,-29,1.141,1.141);

	this.instance_103 = new lib.ani1_wt3();
	this.instance_103.setTransform(-44.7,315.4,1.141,1.141,-90);

	this.instance_104 = new lib.ani1_wt3();
	this.instance_104.setTransform(-292.8,67.2,1.141,1.141,0,180,0);

	this.instance_105 = new lib.ani1_wt3();
	this.instance_105.setTransform(-292.8,-29,1.141,1.141);

	this.instance_106 = new lib.ani1_wt2();
	this.instance_106.setTransform(-44.7,315.4,1.141,1.141,-90);

	this.instance_107 = new lib.ani1_wt2();
	this.instance_107.setTransform(-292.8,67.2,1.141,1.141,0,180,0);

	this.instance_108 = new lib.ani1_wt2();
	this.instance_108.setTransform(-292.8,-29,1.141,1.141);

	this.instance_109 = new lib.ani1_GIF();
	this.instance_109.setTransform(-44.7,315.4,1.141,1.141,-90);

	this.instance_110 = new lib.ani1_GIF();
	this.instance_110.setTransform(-292.8,67.2,1.141,1.141,0,180,0);

	this.instance_111 = new lib.ani1_GIF();
	this.instance_111.setTransform(-292.8,-29,1.141,1.141);

	this.instance_112 = new lib.ani1_GIF();
	this.instance_112.setTransform(193.1,251.7,1.141,1.141,0,60,-120);

	this.instance_113 = new lib.ani1_GIF();
	this.instance_113.setTransform(109.9,299.9,1.141,1.141,-120);

	this.instance_114 = new lib.ani1_GIF();
	this.instance_114.setTransform(-229.1,209,1.141,1.141,0,150,-30);

	this.instance_115 = new lib.ani1_GIF();
	this.instance_115.setTransform(-277.3,125.6,1.141,1.141,-30);

	this.instance_116 = new lib.ani1_wt2();
	this.instance_116.setTransform(193.1,251.7,1.141,1.141,0,60,-120);

	this.instance_117 = new lib.ani1_wt2();
	this.instance_117.setTransform(109.9,299.9,1.141,1.141,-120);

	this.instance_118 = new lib.ani1_wt2();
	this.instance_118.setTransform(-229.1,209,1.141,1.141,0,150,-30);

	this.instance_119 = new lib.ani1_wt2();
	this.instance_119.setTransform(-277.3,125.6,1.141,1.141,-30);

	this.instance_120 = new lib.ani1_wt3();
	this.instance_120.setTransform(193.1,251.7,1.141,1.141,0,60,-120);

	this.instance_121 = new lib.ani1_wt3();
	this.instance_121.setTransform(109.9,299.9,1.141,1.141,-120);

	this.instance_122 = new lib.ani1_wt3();
	this.instance_122.setTransform(-229.1,209,1.141,1.141,0,150,-30);

	this.instance_123 = new lib.ani1_wt3();
	this.instance_123.setTransform(-277.3,125.6,1.141,1.141,-30);

	this.instance_124 = new lib.ani1_wt4();
	this.instance_124.setTransform(193.1,251.7,1.141,1.141,0,60,-120);

	this.instance_125 = new lib.ani1_wt4();
	this.instance_125.setTransform(109.9,299.9,1.141,1.141,-120);

	this.instance_126 = new lib.ani1_wt4();
	this.instance_126.setTransform(-229.1,209,1.141,1.141,0,150,-30);

	this.instance_127 = new lib.ani1_wt4();
	this.instance_127.setTransform(-277.3,125.6,1.141,1.141,-30);

	this.instance_128 = new lib.ani1_wt5();
	this.instance_128.setTransform(193.1,251.7,1.141,1.141,0,60,-120);

	this.instance_129 = new lib.ani1_wt5();
	this.instance_129.setTransform(109.9,299.9,1.141,1.141,-120);

	this.instance_130 = new lib.ani1_wt5();
	this.instance_130.setTransform(-229.1,209,1.141,1.141,0,150,-30);

	this.instance_131 = new lib.ani1_wt5();
	this.instance_131.setTransform(-277.3,125.6,1.141,1.141,-30);

	this.instance_132 = new lib.ani1_wt6();
	this.instance_132.setTransform(193.1,251.7,1.141,1.141,0,60,-120);

	this.instance_133 = new lib.ani1_wt6();
	this.instance_133.setTransform(109.9,299.9,1.141,1.141,-120);

	this.instance_134 = new lib.ani1_wt6();
	this.instance_134.setTransform(-229.1,209,1.141,1.141,0,150,-30);

	this.instance_135 = new lib.ani1_wt6();
	this.instance_135.setTransform(-277.3,125.6,1.141,1.141,-30);

	this.instance_136 = new lib.ani1_wt7();
	this.instance_136.setTransform(193.1,251.7,1.141,1.141,0,60,-120);

	this.instance_137 = new lib.ani1_wt7();
	this.instance_137.setTransform(109.9,299.9,1.141,1.141,-120);

	this.instance_138 = new lib.ani1_wt7();
	this.instance_138.setTransform(-229.1,209,1.141,1.141,0,150,-30);

	this.instance_139 = new lib.ani1_wt7();
	this.instance_139.setTransform(-277.3,125.6,1.141,1.141,-30);

	this.instance_140 = new lib.ani1_wt8();
	this.instance_140.setTransform(-123.7,290.4,1.139,1.139,-74.1);

	this.instance_141 = new lib.ani1_wt8();
	this.instance_141.setTransform(290.9,104.1,1.14,1.14,0,25.7,-154.3);

	this.instance_142 = new lib.ani1_wt8();
	this.instance_142.setTransform(249.3,190.6,1.14,1.14,-154.3);

	this.instance_143 = new lib.ani1_wt8();
	this.instance_143.setTransform(193.1,251.7,1.141,1.141,0,60,-120);

	this.instance_144 = new lib.ani1_wt8();
	this.instance_144.setTransform(109.9,299.9,1.141,1.141,-120);

	this.instance_145 = new lib.ani1_wt8();
	this.instance_145.setTransform(-229.1,209,1.141,1.141,0,150,-30);

	this.instance_146 = new lib.ani1_wt8();
	this.instance_146.setTransform(-277.3,125.6,1.141,1.141,-30);

	this.instance_147 = new lib.ani1_wt9();
	this.instance_147.setTransform(-123.7,290.4,1.139,1.139,-74.1);

	this.instance_148 = new lib.ani1_wt9();
	this.instance_148.setTransform(290.9,104.1,1.14,1.14,0,25.7,-154.3);

	this.instance_149 = new lib.ani1_wt9();
	this.instance_149.setTransform(249.3,190.6,1.14,1.14,-154.3);

	this.instance_150 = new lib.ani1_wt9();
	this.instance_150.setTransform(193.1,251.7,1.141,1.141,0,60,-120);

	this.instance_151 = new lib.ani1_wt9();
	this.instance_151.setTransform(109.9,299.9,1.141,1.141,-120);

	this.instance_152 = new lib.ani1_wt9();
	this.instance_152.setTransform(-229.1,209,1.141,1.141,0,150,-30);

	this.instance_153 = new lib.ani1_wt9();
	this.instance_153.setTransform(-277.3,125.6,1.141,1.141,-30);

	this.instance_154 = new lib.ani1_wt10();
	this.instance_154.setTransform(-123.7,290.4,1.139,1.139,-74.1);

	this.instance_155 = new lib.ani1_wt10();
	this.instance_155.setTransform(290.9,104.1,1.14,1.14,0,25.7,-154.3);

	this.instance_156 = new lib.ani1_wt10();
	this.instance_156.setTransform(249.3,190.6,1.14,1.14,-154.3);

	this.instance_157 = new lib.ani1_wt10();
	this.instance_157.setTransform(193.1,251.7,1.141,1.141,0,60,-120);

	this.instance_158 = new lib.ani1_wt10();
	this.instance_158.setTransform(109.9,299.9,1.141,1.141,-120);

	this.instance_159 = new lib.ani1_wt10();
	this.instance_159.setTransform(-229.1,209,1.141,1.141,0,150,-30);

	this.instance_160 = new lib.ani1_wt10();
	this.instance_160.setTransform(-277.3,125.6,1.141,1.141,-30);

	this.instance_161 = new lib.ani1_wt11();
	this.instance_161.setTransform(-123.7,290.4,1.139,1.139,-74.1);

	this.instance_162 = new lib.ani1_wt11();
	this.instance_162.setTransform(290.9,104.1,1.14,1.14,0,25.7,-154.3);

	this.instance_163 = new lib.ani1_wt11();
	this.instance_163.setTransform(249.3,190.6,1.14,1.14,-154.3);

	this.instance_164 = new lib.ani1_wt11();
	this.instance_164.setTransform(193.1,251.7,1.141,1.141,0,60,-120);

	this.instance_165 = new lib.ani1_wt11();
	this.instance_165.setTransform(109.9,299.9,1.141,1.141,-120);

	this.instance_166 = new lib.ani1_wt11();
	this.instance_166.setTransform(-229.1,209,1.141,1.141,0,150,-30);

	this.instance_167 = new lib.ani1_wt11();
	this.instance_167.setTransform(-277.3,125.6,1.141,1.141,-30);

	this.instance_168 = new lib.ani1_wenzimc();
	this.instance_168.setTransform(5.1,113.6);

	this.instance_169 = new lib.ani1_11231231231();
	this.instance_169.setTransform(-9.8,-57.9,1.235,1.235,0,0,0,114.6,129.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_42}]}).to({state:[]},150).to({state:[{t:this.instance_43}]},95).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57,p:{scaleX:3.954,scaleY:3.954,x:-886.4,y:-997.2}}]},1).to({state:[{t:this.instance_58,p:{scaleX:3.954,scaleY:3.954,x:-886.4,y:-997.2}}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60,p:{scaleX:3.954,scaleY:3.954,x:-886.4,y:-997.2}}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57,p:{scaleX:3.923,scaleY:3.923,x:-1214.9,y:-1205.5}}]},1).to({state:[{t:this.instance_58,p:{scaleX:3.923,scaleY:3.923,x:-1214.9,y:-1205.5}}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60,p:{scaleX:1.388,scaleY:1.388,x:-356.8,y:-161.3}}]},1).to({state:[{t:this.instance_61,p:{scaleX:1.388,scaleY:1.388,x:-356.8,y:-161.3}}]},1).to({state:[{t:this.instance_62,p:{scaleX:1.388,scaleY:1.388,x:-356.8,y:-161.3}}]},1).to({state:[{t:this.instance_63,p:{scaleX:1.388,scaleY:1.388,x:-356.8,y:-161.3}}]},1).to({state:[{t:this.instance_64,p:{scaleX:1.388,scaleY:1.388,x:-356.8,y:-161.3}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.388,scaleY:1.388,x:-356.8,y:-161.3}}]},1).to({state:[{t:this.instance_66,p:{scaleX:1.388,scaleY:1.388,x:-356.8,y:-161.3}}]},1).to({state:[{t:this.instance_67,p:{scaleX:1.388,scaleY:1.388,x:-356.8,y:-161.3}}]},1).to({state:[{t:this.instance_68,p:{scaleX:1.388,scaleY:1.388,x:-356.8,y:-161.3}}]},1).to({state:[{t:this.instance_69,p:{scaleX:1.388,scaleY:1.388,x:-356.8,y:-161.3}}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71,p:{scaleX:0.998,scaleY:0.998,rotation:143.1,x:182.8,y:-209.4}}]},6).to({state:[{t:this.instance_72}]},6).to({state:[{t:this.instance_72},{t:this.instance_70}]},10).to({state:[{t:this.instance_72},{t:this.instance_70},{t:this.instance_71,p:{scaleX:0.998,scaleY:0.998,rotation:143.1,x:182.8,y:-209.4}}]},9).to({state:[{t:this.instance_72},{t:this.instance_70},{t:this.instance_71,p:{scaleX:0.998,scaleY:0.998,rotation:143.1,x:182.8,y:-209.4}}]},9).to({state:[{t:this.instance_73,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:73.6}}]},11).to({state:[{t:this.instance_74,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:73.6}}]},1).to({state:[{t:this.instance_75,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:73.6}}]},1).to({state:[{t:this.instance_76,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:73.6}}]},1).to({state:[{t:this.instance_77,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:73.6}}]},1).to({state:[{t:this.instance_78,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:73.6}}]},1).to({state:[{t:this.instance_79,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:73.6}}]},1).to({state:[{t:this.instance_80,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:73.6}}]},1).to({state:[{t:this.instance_81,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:73.6}}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_81,p:{scaleX:1.441,scaleY:1.441,x:-377.4,y:73.6}}]},1).to({state:[{t:this.instance_81,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_80,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_79,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_78,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_77,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_76,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_75,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_74,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_73,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_69,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_68,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_67,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_66,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_65,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_64,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_63,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_62,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_61,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_60,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_58,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_57,p:{scaleX:4.656,scaleY:4.656,x:-1296.8,y:-1356.5}}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_71,p:{scaleX:3.441,scaleY:3.441,rotation:0.3,x:-658.1,y:-901.1}}]},1).to({state:[{t:this.instance_86}]},22).to({state:[{t:this.instance_87}]},5).to({state:[{t:this.instance_88}]},7).to({state:[{t:this.instance_89}]},5).to({state:[{t:this.instance_90}]},5).to({state:[{t:this.instance_50}]},12).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57,p:{scaleX:1.388,scaleY:1.388,x:-356.8,y:-161.3}}]},1).to({state:[{t:this.instance_58,p:{scaleX:1.388,scaleY:1.388,x:-356.8,y:-161.3}}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71,p:{scaleX:0.998,scaleY:0.998,rotation:143.1,x:182.8,y:-209.4}}]},20).to({state:[{t:this.instance_72}]},4).to({state:[{t:this.instance_67,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:-29}}]},5).to({state:[{t:this.instance_68,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:-29}}]},1).to({state:[{t:this.instance_69,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:-29}}]},1).to({state:[{t:this.instance_73,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:-29}}]},1).to({state:[{t:this.instance_74,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:-29}}]},1).to({state:[{t:this.instance_75,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:-29}}]},1).to({state:[{t:this.instance_76,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:-29}}]},1).to({state:[{t:this.instance_77,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:-29}}]},1).to({state:[{t:this.instance_78,p:{scaleX:1.141,scaleY:1.141,x:-292.8,y:-29}}]},1).to({state:[{t:this.instance_93,p:{scaleX:1.141,scaleY:1.141,rotation:0,x:-292.8,y:-29}},{t:this.instance_92,p:{scaleX:1.141,scaleY:1.141,skewX:180,skewY:0,x:-292.8,y:67.2}},{t:this.instance_91,p:{scaleX:1.141,scaleY:1.141,rotation:-90,x:-44.7,y:315.4}},{t:this.instance_49}]},1).to({state:[{t:this.instance_96,p:{scaleX:1.141,scaleY:1.141,rotation:0,x:-292.8,y:-29}},{t:this.instance_95,p:{scaleX:1.141,scaleY:1.141,skewX:180,skewY:0,x:-292.8,y:67.2}},{t:this.instance_94,p:{scaleX:1.141,scaleY:1.141,rotation:-90,x:-44.7,y:315.4}},{t:this.instance_48}]},1).to({state:[{t:this.instance_99,p:{scaleX:1.141,scaleY:1.141,rotation:0,x:-292.8,y:-29}},{t:this.instance_98,p:{scaleX:1.141,scaleY:1.141,skewX:180,skewY:0,x:-292.8,y:67.2}},{t:this.instance_97,p:{scaleX:1.141,scaleY:1.141,rotation:-90,x:-44.7,y:315.4}},{t:this.instance_47}]},1).to({state:[{t:this.instance_102,p:{scaleX:1.141,scaleY:1.141,rotation:0,x:-292.8,y:-29}},{t:this.instance_101,p:{scaleX:1.141,scaleY:1.141,skewX:180,skewY:0,x:-292.8,y:67.2}},{t:this.instance_100,p:{scaleX:1.141,scaleY:1.141,rotation:-90,x:-44.7,y:315.4}},{t:this.instance_46}]},1).to({state:[{t:this.instance_105,p:{scaleX:1.141,scaleY:1.141,rotation:0,x:-292.8,y:-29}},{t:this.instance_104,p:{scaleX:1.141,scaleY:1.141,skewX:180,skewY:0,x:-292.8,y:67.2}},{t:this.instance_103,p:{scaleX:1.141,scaleY:1.141,rotation:-90,x:-44.7,y:315.4}},{t:this.instance_45}]},1).to({state:[{t:this.instance_108,p:{scaleX:1.141,scaleY:1.141,rotation:0,x:-292.8,y:-29}},{t:this.instance_107,p:{scaleX:1.141,scaleY:1.141,skewX:180,skewY:0,x:-292.8,y:67.2}},{t:this.instance_106,p:{scaleX:1.141,scaleY:1.141,rotation:-90,x:-44.7,y:315.4}},{t:this.instance_44}]},1).to({state:[{t:this.instance_111,p:{scaleX:1.141,scaleY:1.141,rotation:0,x:-292.8,y:-29}},{t:this.instance_110,p:{scaleX:1.141,scaleY:1.141,skewX:180,skewY:0,x:-292.8,y:67.2}},{t:this.instance_109,p:{scaleX:1.141,scaleY:1.141,rotation:-90,x:-44.7,y:315.4}},{t:this.instance_43}]},1).to({state:[{t:this.instance_111,p:{scaleX:1.141,scaleY:1.141,rotation:0,x:-292.8,y:-29}},{t:this.instance_110,p:{scaleX:1.141,scaleY:1.141,skewX:180,skewY:0,x:-292.8,y:67.2}},{t:this.instance_109,p:{scaleX:1.141,scaleY:1.141,rotation:-90,x:-44.7,y:315.4}},{t:this.instance_43}]},1).to({state:[{t:this.instance_115},{t:this.instance_114,p:{scaleX:1.141,scaleY:1.141,skewX:150,skewY:-30,x:-229.1,y:209}},{t:this.instance_113,p:{scaleX:1.141,scaleY:1.141,rotation:-120,x:109.9,y:299.9}},{t:this.instance_112,p:{scaleX:1.141,scaleY:1.141,skewX:60,skewY:-120,x:193.1,y:251.7}},{t:this.instance_111,p:{scaleX:1.14,scaleY:1.14,rotation:-154.3,x:249.3,y:190.6}},{t:this.instance_110,p:{scaleX:1.14,scaleY:1.14,skewX:25.7,skewY:-154.3,x:290.9,y:104.1}},{t:this.instance_109,p:{scaleX:1.139,scaleY:1.139,rotation:-74.1,x:-123.7,y:290.4}},{t:this.instance_43}]},1).to({state:[{t:this.instance_119},{t:this.instance_118,p:{scaleX:1.141,scaleY:1.141,skewX:150,skewY:-30,x:-229.1,y:209}},{t:this.instance_117,p:{scaleX:1.141,scaleY:1.141,rotation:-120,x:109.9,y:299.9}},{t:this.instance_116,p:{scaleX:1.141,scaleY:1.141,skewX:60,skewY:-120,x:193.1,y:251.7}},{t:this.instance_108,p:{scaleX:1.14,scaleY:1.14,rotation:-154.3,x:249.3,y:190.6}},{t:this.instance_107,p:{scaleX:1.14,scaleY:1.14,skewX:25.7,skewY:-154.3,x:290.9,y:104.1}},{t:this.instance_106,p:{scaleX:1.139,scaleY:1.139,rotation:-74.1,x:-123.7,y:290.4}},{t:this.instance_44}]},1).to({state:[{t:this.instance_123},{t:this.instance_122,p:{scaleX:1.141,scaleY:1.141,skewX:150,skewY:-30,x:-229.1,y:209}},{t:this.instance_121,p:{scaleX:1.141,scaleY:1.141,rotation:-120,x:109.9,y:299.9}},{t:this.instance_120,p:{scaleX:1.141,scaleY:1.141,skewX:60,skewY:-120,x:193.1,y:251.7}},{t:this.instance_105,p:{scaleX:1.14,scaleY:1.14,rotation:-154.3,x:249.3,y:190.6}},{t:this.instance_104,p:{scaleX:1.14,scaleY:1.14,skewX:25.7,skewY:-154.3,x:290.9,y:104.1}},{t:this.instance_103,p:{scaleX:1.139,scaleY:1.139,rotation:-74.1,x:-123.7,y:290.4}},{t:this.instance_45}]},1).to({state:[{t:this.instance_127},{t:this.instance_126,p:{scaleX:1.141,scaleY:1.141,skewX:150,skewY:-30,x:-229.1,y:209}},{t:this.instance_125,p:{scaleX:1.141,scaleY:1.141,rotation:-120,x:109.9,y:299.9}},{t:this.instance_124,p:{scaleX:1.141,scaleY:1.141,skewX:60,skewY:-120,x:193.1,y:251.7}},{t:this.instance_102,p:{scaleX:1.14,scaleY:1.14,rotation:-154.3,x:249.3,y:190.6}},{t:this.instance_101,p:{scaleX:1.14,scaleY:1.14,skewX:25.7,skewY:-154.3,x:290.9,y:104.1}},{t:this.instance_100,p:{scaleX:1.139,scaleY:1.139,rotation:-74.1,x:-123.7,y:290.4}},{t:this.instance_46}]},1).to({state:[{t:this.instance_131},{t:this.instance_130,p:{scaleX:1.141,scaleY:1.141,skewX:150,skewY:-30,x:-229.1,y:209}},{t:this.instance_129,p:{scaleX:1.141,scaleY:1.141,rotation:-120,x:109.9,y:299.9}},{t:this.instance_128,p:{scaleX:1.141,scaleY:1.141,skewX:60,skewY:-120,x:193.1,y:251.7}},{t:this.instance_99,p:{scaleX:1.14,scaleY:1.14,rotation:-154.3,x:249.3,y:190.6}},{t:this.instance_98,p:{scaleX:1.14,scaleY:1.14,skewX:25.7,skewY:-154.3,x:290.9,y:104.1}},{t:this.instance_97,p:{scaleX:1.139,scaleY:1.139,rotation:-74.1,x:-123.7,y:290.4}},{t:this.instance_47}]},1).to({state:[{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_96,p:{scaleX:1.14,scaleY:1.14,rotation:-154.3,x:249.3,y:190.6}},{t:this.instance_95,p:{scaleX:1.14,scaleY:1.14,skewX:25.7,skewY:-154.3,x:290.9,y:104.1}},{t:this.instance_94,p:{scaleX:1.139,scaleY:1.139,rotation:-74.1,x:-123.7,y:290.4}},{t:this.instance_48}]},1).to({state:[{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_93,p:{scaleX:1.14,scaleY:1.14,rotation:-154.3,x:249.3,y:190.6}},{t:this.instance_92,p:{scaleX:1.14,scaleY:1.14,skewX:25.7,skewY:-154.3,x:290.9,y:104.1}},{t:this.instance_91,p:{scaleX:1.139,scaleY:1.139,rotation:-74.1,x:-123.7,y:290.4}},{t:this.instance_49}]},1).to({state:[{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_50}]},1).to({state:[{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_51}]},1).to({state:[{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_52}]},1).to({state:[{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_53}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_109,p:{scaleX:0.246,scaleY:0.246,rotation:0,x:3.5,y:-141.6}},{t:this.instance_43}]},1).to({state:[{t:this.instance_106,p:{scaleX:0.246,scaleY:0.246,rotation:0,x:3.5,y:-141.6}},{t:this.instance_44}]},1).to({state:[{t:this.instance_103,p:{scaleX:0.246,scaleY:0.246,rotation:0,x:3.5,y:-141.6}},{t:this.instance_45}]},1).to({state:[{t:this.instance_100,p:{scaleX:0.246,scaleY:0.246,rotation:0,x:3.5,y:-141.6}},{t:this.instance_46}]},1).to({state:[{t:this.instance_110,p:{scaleX:0.246,scaleY:0.246,skewX:0,skewY:0,x:35.3,y:-144.6}},{t:this.instance_109,p:{scaleX:0.328,scaleY:0.328,rotation:0,x:-65.8,y:-165.2}},{t:this.instance_43}]},1).to({state:[{t:this.instance_107,p:{scaleX:0.246,scaleY:0.246,skewX:0,skewY:0,x:35.3,y:-144.6}},{t:this.instance_106,p:{scaleX:0.328,scaleY:0.328,rotation:0,x:-65.8,y:-165.2}},{t:this.instance_44}]},1).to({state:[{t:this.instance_104,p:{scaleX:0.246,scaleY:0.246,skewX:0,skewY:0,x:35.3,y:-144.6}},{t:this.instance_103,p:{scaleX:0.328,scaleY:0.328,rotation:0,x:-65.8,y:-165.2}},{t:this.instance_45}]},1).to({state:[{t:this.instance_101,p:{scaleX:0.246,scaleY:0.246,skewX:0,skewY:0,x:35.3,y:-144.6}},{t:this.instance_100,p:{scaleX:0.328,scaleY:0.328,rotation:0,x:-65.8,y:-165.2}},{t:this.instance_46}]},1).to({state:[{t:this.instance_111,p:{scaleX:0.246,scaleY:0.246,rotation:0,x:91.4,y:-159}},{t:this.instance_110,p:{scaleX:0.328,scaleY:0.328,skewX:0,skewY:0,x:-9.7,y:-179.6}},{t:this.instance_109,p:{scaleX:0.453,scaleY:0.453,rotation:0,x:-144.3,y:-211.4}},{t:this.instance_43}]},1).to({state:[{t:this.instance_108,p:{scaleX:0.246,scaleY:0.246,rotation:0,x:91.4,y:-159}},{t:this.instance_107,p:{scaleX:0.328,scaleY:0.328,skewX:0,skewY:0,x:-9.7,y:-179.6}},{t:this.instance_106,p:{scaleX:0.453,scaleY:0.453,rotation:0,x:-144.3,y:-211.4}},{t:this.instance_44}]},1).to({state:[{t:this.instance_105,p:{scaleX:0.246,scaleY:0.246,rotation:0,x:91.4,y:-159}},{t:this.instance_104,p:{scaleX:0.328,scaleY:0.328,skewX:0,skewY:0,x:-9.7,y:-179.6}},{t:this.instance_103,p:{scaleX:0.453,scaleY:0.453,rotation:0,x:-144.3,y:-211.4}},{t:this.instance_45}]},1).to({state:[{t:this.instance_102,p:{scaleX:0.246,scaleY:0.246,rotation:0,x:91.4,y:-159}},{t:this.instance_101,p:{scaleX:0.328,scaleY:0.328,skewX:0,skewY:0,x:-9.7,y:-179.6}},{t:this.instance_100,p:{scaleX:0.453,scaleY:0.453,rotation:0,x:-144.3,y:-211.4}},{t:this.instance_46}]},1).to({state:[{t:this.instance_112,p:{scaleX:0.246,scaleY:0.246,skewX:0,skewY:0,x:91.4,y:-159.5}},{t:this.instance_111,p:{scaleX:0.328,scaleY:0.328,rotation:0,x:-9.7,y:-180.1}},{t:this.instance_110,p:{scaleX:0.453,scaleY:0.453,skewX:0,skewY:0,x:-144.3,y:-211.8}},{t:this.instance_109,p:{scaleX:0.768,scaleY:0.768,rotation:0,x:-387.9,y:-277.1}},{t:this.instance_43}]},1).to({state:[{t:this.instance_116,p:{scaleX:0.246,scaleY:0.246,skewX:0,skewY:0,x:91.4,y:-159.5}},{t:this.instance_108,p:{scaleX:0.328,scaleY:0.328,rotation:0,x:-9.7,y:-180.1}},{t:this.instance_107,p:{scaleX:0.453,scaleY:0.453,skewX:0,skewY:0,x:-144.3,y:-211.8}},{t:this.instance_106,p:{scaleX:0.768,scaleY:0.768,rotation:0,x:-387.9,y:-277.1}},{t:this.instance_44}]},1).to({state:[{t:this.instance_120,p:{scaleX:0.246,scaleY:0.246,skewX:0,skewY:0,x:91.4,y:-159.5}},{t:this.instance_105,p:{scaleX:0.328,scaleY:0.328,rotation:0,x:-9.7,y:-180.1}},{t:this.instance_104,p:{scaleX:0.453,scaleY:0.453,skewX:0,skewY:0,x:-144.3,y:-211.8}},{t:this.instance_103,p:{scaleX:0.768,scaleY:0.768,rotation:0,x:-387.9,y:-277.1}},{t:this.instance_45}]},1).to({state:[{t:this.instance_124,p:{scaleX:0.246,scaleY:0.246,skewX:0,skewY:0,x:91.4,y:-159.5}},{t:this.instance_102,p:{scaleX:0.328,scaleY:0.328,rotation:0,x:-9.7,y:-180.1}},{t:this.instance_101,p:{scaleX:0.453,scaleY:0.453,skewX:0,skewY:0,x:-144.3,y:-211.8}},{t:this.instance_100,p:{scaleX:0.768,scaleY:0.768,rotation:0,x:-387.9,y:-277.1}},{t:this.instance_46}]},1).to({state:[{t:this.instance_113,p:{scaleX:0.246,scaleY:0.246,rotation:0,x:91.7,y:-159}},{t:this.instance_112,p:{scaleX:0.328,scaleY:0.328,skewX:0,skewY:0,x:-9.4,y:-179.6}},{t:this.instance_111,p:{scaleX:0.453,scaleY:0.453,rotation:0,x:-144,y:-211.3}},{t:this.instance_110,p:{scaleX:0.768,scaleY:0.768,skewX:0,skewY:0,x:-387.6,y:-276.6}},{t:this.instance_109,p:{scaleX:1.089,scaleY:1.089,rotation:0,x:-381.9,y:-265.8}},{t:this.instance_43}]},1).to({state:[{t:this.instance_117,p:{scaleX:0.246,scaleY:0.246,rotation:0,x:91.7,y:-159}},{t:this.instance_116,p:{scaleX:0.328,scaleY:0.328,skewX:0,skewY:0,x:-9.4,y:-179.6}},{t:this.instance_108,p:{scaleX:0.453,scaleY:0.453,rotation:0,x:-144,y:-211.3}},{t:this.instance_107,p:{scaleX:0.768,scaleY:0.768,skewX:0,skewY:0,x:-387.6,y:-276.6}},{t:this.instance_106,p:{scaleX:1.089,scaleY:1.089,rotation:0,x:-381.9,y:-265.8}},{t:this.instance_44}]},1).to({state:[{t:this.instance_121,p:{scaleX:0.246,scaleY:0.246,rotation:0,x:91.7,y:-159}},{t:this.instance_120,p:{scaleX:0.328,scaleY:0.328,skewX:0,skewY:0,x:-9.4,y:-179.6}},{t:this.instance_105,p:{scaleX:0.453,scaleY:0.453,rotation:0,x:-144,y:-211.3}},{t:this.instance_104,p:{scaleX:0.768,scaleY:0.768,skewX:0,skewY:0,x:-387.6,y:-276.6}},{t:this.instance_103,p:{scaleX:1.089,scaleY:1.089,rotation:0,x:-381.9,y:-265.8}},{t:this.instance_45}]},1).to({state:[{t:this.instance_125,p:{scaleX:0.246,scaleY:0.246,rotation:0,x:91.7,y:-159}},{t:this.instance_124,p:{scaleX:0.328,scaleY:0.328,skewX:0,skewY:0,x:-9.4,y:-179.6}},{t:this.instance_102,p:{scaleX:0.453,scaleY:0.453,rotation:0,x:-144,y:-211.3}},{t:this.instance_101,p:{scaleX:0.768,scaleY:0.768,skewX:0,skewY:0,x:-387.6,y:-276.6}},{t:this.instance_100,p:{scaleX:1.089,scaleY:1.089,rotation:0,x:-381.9,y:-265.8}},{t:this.instance_46}]},1).to({state:[{t:this.instance_114,p:{scaleX:0.246,scaleY:0.246,skewX:0,skewY:0,x:91.7,y:-159}},{t:this.instance_113,p:{scaleX:0.328,scaleY:0.328,rotation:0,x:-9.4,y:-179.6}},{t:this.instance_112,p:{scaleX:0.453,scaleY:0.453,skewX:0,skewY:0,x:-144,y:-211.3}},{t:this.instance_111,p:{scaleX:0.768,scaleY:0.768,rotation:0,x:-387.6,y:-276.6}},{t:this.instance_110,p:{scaleX:1.089,scaleY:1.089,skewX:0,skewY:0,x:-381.9,y:-265.8}},{t:this.instance_109,p:{scaleX:1.378,scaleY:1.378,rotation:0,x:-345.1,y:-209.1}},{t:this.instance_43}]},1).to({state:[{t:this.instance_118,p:{scaleX:0.246,scaleY:0.246,skewX:0,skewY:0,x:91.7,y:-159}},{t:this.instance_117,p:{scaleX:0.328,scaleY:0.328,rotation:0,x:-9.4,y:-179.6}},{t:this.instance_116,p:{scaleX:0.453,scaleY:0.453,skewX:0,skewY:0,x:-144,y:-211.3}},{t:this.instance_108,p:{scaleX:0.768,scaleY:0.768,rotation:0,x:-387.6,y:-276.6}},{t:this.instance_107,p:{scaleX:1.089,scaleY:1.089,skewX:0,skewY:0,x:-381.9,y:-265.8}},{t:this.instance_106,p:{scaleX:1.378,scaleY:1.378,rotation:0,x:-345.1,y:-209.1}},{t:this.instance_44}]},1).to({state:[{t:this.instance_122,p:{scaleX:0.246,scaleY:0.246,skewX:0,skewY:0,x:91.7,y:-159}},{t:this.instance_121,p:{scaleX:0.328,scaleY:0.328,rotation:0,x:-9.4,y:-179.6}},{t:this.instance_120,p:{scaleX:0.453,scaleY:0.453,skewX:0,skewY:0,x:-144,y:-211.3}},{t:this.instance_105,p:{scaleX:0.768,scaleY:0.768,rotation:0,x:-387.6,y:-276.6}},{t:this.instance_104,p:{scaleX:1.089,scaleY:1.089,skewX:0,skewY:0,x:-381.9,y:-265.8}},{t:this.instance_103,p:{scaleX:1.378,scaleY:1.378,rotation:0,x:-345.1,y:-209.1}},{t:this.instance_45}]},1).to({state:[{t:this.instance_126,p:{scaleX:0.246,scaleY:0.246,skewX:0,skewY:0,x:91.7,y:-159}},{t:this.instance_125,p:{scaleX:0.328,scaleY:0.328,rotation:0,x:-9.4,y:-179.6}},{t:this.instance_124,p:{scaleX:0.453,scaleY:0.453,skewX:0,skewY:0,x:-144,y:-211.3}},{t:this.instance_102,p:{scaleX:0.768,scaleY:0.768,rotation:0,x:-387.6,y:-276.6}},{t:this.instance_101,p:{scaleX:1.089,scaleY:1.089,skewX:0,skewY:0,x:-381.9,y:-265.8}},{t:this.instance_100,p:{scaleX:1.378,scaleY:1.378,rotation:0,x:-345.1,y:-209.1}},{t:this.instance_46}]},1).to({state:[{t:this.instance_130,p:{scaleX:0.246,scaleY:0.246,skewX:0,skewY:0,x:91.7,y:-159}},{t:this.instance_129,p:{scaleX:0.328,scaleY:0.328,rotation:0,x:-9.4,y:-179.6}},{t:this.instance_128,p:{scaleX:0.453,scaleY:0.453,skewX:0,skewY:0,x:-144,y:-211.3}},{t:this.instance_99,p:{scaleX:0.768,scaleY:0.768,rotation:0,x:-387.6,y:-276.6}},{t:this.instance_98,p:{scaleX:1.089,scaleY:1.089,skewX:0,skewY:0,x:-381.9,y:-265.8}},{t:this.instance_97,p:{scaleX:1.378,scaleY:1.378,rotation:0,x:-345.1,y:-209.1}},{t:this.instance_47}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71,p:{scaleX:0.998,scaleY:0.998,rotation:143.1,x:182.8,y:-209.4}}]},4).to({state:[{t:this.instance_72}]},5).to({state:[]},5).to({state:[{t:this.instance_169},{t:this.instance_168}]},42).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(245).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,scaleX:4.18,scaleY:4.18,x:-661.8,y:-696.6},0).to({_off:true},1).wait(212).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).wait(1).to({_off:true},1).wait(60).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:90,skewY:-90,x:51.5,y:315.4},0).wait(2).to({scaleX:1.14,scaleY:1.14,skewX:105.9,skewY:-74.1,x:-31.4,y:316.7},0).to({_off:true},1).wait(10).to({_off:false,scaleX:1.39,scaleY:1.39,skewX:0,skewY:0,x:-356.8,y:-161.3},0).to({_off:true},1).wait(10).to({_off:false,scaleX:0.26,scaleY:0.26,x:-0.8,y:-143},0).to({_off:true},1).wait(4).to({_off:false,scaleX:0.33,scaleY:0.33,x:-97.6,y:-162.2},0).to({_off:true},1).wait(3).to({_off:false,scaleX:0.45,scaleY:0.45,x:-200.4,y:-197},0).to({_off:true},1).wait(3).to({_off:false,scaleX:0.77,scaleY:0.77,x:-387.9,y:-276.7},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.09,scaleY:1.09,x:-382.2,y:-266.3},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.38,scaleY:1.38,x:-345.1,y:-209.1},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.76,scaleY:1.76,x:-300,y:-132.6},0).to({_off:true},1).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(246).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,scaleX:4.18,scaleY:4.18,x:-661.8,y:-696.6},0).to({_off:true},1).wait(210).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(58).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:90,skewY:-90,x:51.5,y:315.4},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:105.9,skewY:-74.1,x:-31.4,y:316.7},0).to({_off:true},1).wait(10).to({_off:false,scaleX:1.39,scaleY:1.39,skewX:0,skewY:0,x:-356.8,y:-161.3},0).to({_off:true},1).wait(10).to({_off:false,scaleX:0.26,scaleY:0.26,x:-0.8,y:-143},0).to({_off:true},1).wait(4).to({_off:false,scaleX:0.33,scaleY:0.33,x:-97.6,y:-162.2},0).to({_off:true},1).wait(3).to({_off:false,scaleX:0.45,scaleY:0.45,x:-200.4,y:-197},0).to({_off:true},1).wait(3).to({_off:false,scaleX:0.77,scaleY:0.77,x:-387.9,y:-276.7},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.09,scaleY:1.09,x:-382.2,y:-266.3},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.38,scaleY:1.38,x:-345.1,y:-209.1},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.76,scaleY:1.76,x:-300,y:-132.6},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(247).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,scaleX:4.18,scaleY:4.18,x:-661.8,y:-696.6},0).to({_off:true},1).wait(208).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(56).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:90,skewY:-90,x:51.5,y:315.4},0).to({_off:true},1).wait(5).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:105.9,skewY:-74.1,x:-31.4,y:316.7},0).to({_off:true},1).wait(10).to({_off:false,scaleX:1.39,scaleY:1.39,skewX:0,skewY:0,x:-356.8,y:-161.3},0).to({_off:true},1).wait(10).to({_off:false,scaleX:0.26,scaleY:0.26,x:-0.8,y:-143},0).to({_off:true},1).wait(4).to({_off:false,scaleX:0.33,scaleY:0.33,x:-97.6,y:-162.2},0).to({_off:true},1).wait(3).to({_off:false,scaleX:0.45,scaleY:0.45,x:-200.4,y:-197},0).to({_off:true},1).wait(3).to({_off:false,scaleX:0.77,scaleY:0.77,x:-387.9,y:-276.7},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.09,scaleY:1.09,x:-382.2,y:-266.3},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.38,scaleY:1.38,x:-345.1,y:-209.1},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.76,scaleY:1.76,x:-300,y:-132.6},0).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(248).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,scaleX:4.18,scaleY:4.18,x:-661.8,y:-696.6},0).to({_off:true},1).wait(8).to({_off:false,scaleX:3.95,scaleY:3.95,x:-886.4,y:-997.2},0).to({_off:true},1).wait(14).to({_off:false,scaleX:3.92,scaleY:3.92,x:-1214.9,y:-1205.5},0).to({_off:true},1).wait(182).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(54).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:90,skewY:-90,x:51.5,y:315.4},0).to({_off:true},1).wait(7).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:105.9,skewY:-74.1,x:-31.4,y:316.7},0).to({_off:true},1).wait(10).to({_off:false,scaleX:1.39,scaleY:1.39,skewX:0,skewY:0,x:-356.8,y:-161.3},0).to({_off:true},1).wait(10).to({_off:false,scaleX:0.26,scaleY:0.26,x:-0.8,y:-143},0).to({_off:true},1).wait(4).to({_off:false,scaleX:0.33,scaleY:0.33,x:-97.6,y:-162.2},0).to({_off:true},1).wait(3).to({_off:false,scaleX:0.45,scaleY:0.45,x:-200.4,y:-197},0).to({_off:true},1).wait(3).to({_off:false,scaleX:0.77,scaleY:0.77,x:-387.9,y:-276.7},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.09,scaleY:1.09,x:-382.2,y:-266.3},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.38,scaleY:1.38,x:-345.1,y:-209.1},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.76,scaleY:1.76,x:-300,y:-132.6},0).to({_off:true},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(249).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,scaleX:4.18,scaleY:4.18,x:-661.8,y:-696.6},0).to({_off:true},1).wait(8).to({_off:false,scaleX:3.95,scaleY:3.95,x:-886.4,y:-997.2},0).to({_off:true},1).wait(14).to({_off:false,scaleX:3.92,scaleY:3.92,x:-1214.9,y:-1205.5},0).to({_off:true},1).wait(180).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(52).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:90,skewY:-90,x:51.5,y:315.4},0).to({_off:true},1).wait(9).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:105.9,skewY:-74.1,x:-31.4,y:316.7},0).to({_off:true},1).wait(10).to({_off:false,scaleX:1.39,scaleY:1.39,skewX:0,skewY:0,x:-356.8,y:-161.3},0).to({_off:true},1).wait(10).to({_off:false,scaleX:0.26,scaleY:0.26,x:-0.8,y:-143},0).to({_off:true},1).wait(24).to({_off:false,scaleX:1.76,scaleY:1.76,x:-300,y:-132.6},0).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(250).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,scaleX:4.18,scaleY:4.18,x:-661.8,y:-696.6},0).to({_off:true},1).wait(8).to({_off:false,scaleX:3.95,scaleY:3.95,x:-886.4,y:-997.2},0).to({_off:true},1).wait(14).to({_off:false,scaleX:3.92,scaleY:3.92,x:-1214.9,y:-1205.5},0).to({_off:true},1).wait(178).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:90,skewY:-90,x:51.5,y:315.4},0).to({_off:true},1).wait(11).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:105.9,skewY:-74.1,x:-31.4,y:316.7},0).to({_off:true},1).wait(10).to({_off:false,scaleX:1.39,scaleY:1.39,skewX:0,skewY:0,x:-356.8,y:-161.3},0).to({_off:true},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(251).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,scaleX:4.18,scaleY:4.18,x:-661.8,y:-696.6},0).to({_off:true},1).wait(8).to({_off:false,scaleX:3.95,scaleY:3.95,x:-886.4,y:-997.2},0).to({_off:true},1).wait(14).to({_off:false,scaleX:3.92,scaleY:3.92,x:-1214.9,y:-1205.5},0).to({_off:true},1).wait(176).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(48).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:90,skewY:-90,x:51.5,y:315.4},0).to({_off:true},1).wait(13).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:105.9,skewY:-74.1,x:-31.4,y:316.7},0).to({_off:true},1).wait(10).to({_off:false,scaleX:1.39,scaleY:1.39,skewX:0,skewY:0,x:-356.8,y:-161.3},0).to({_off:true},1).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(252).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,scaleX:4.18,scaleY:4.18,x:-661.8,y:-696.6},0).to({_off:true},1).wait(8).to({_off:false,scaleX:3.95,scaleY:3.95,x:-886.4,y:-997.2},0).to({_off:true},1).wait(14).to({_off:false,scaleX:3.92,scaleY:3.92,x:-1214.9,y:-1205.5},0).to({_off:true},1).wait(117).to({_off:false,scaleX:4.66,scaleY:4.66,x:-1296.8,y:-1356.5},0).to({_off:true},1).wait(56).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(62).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:105.9,skewY:-74.1,x:-31.4,y:316.7},0).to({_off:true},1).wait(10).to({_off:false,scaleX:1.39,scaleY:1.39,skewX:0,skewY:0,x:-356.8,y:-161.3},0).to({_off:true},1).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(253).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,scaleX:4.18,scaleY:4.18,x:-661.8,y:-696.6},0).to({_off:true},1).wait(8).to({_off:false,scaleX:3.95,scaleY:3.95,x:-886.4,y:-997.2},0).to({_off:true},1).wait(14).to({_off:false,scaleX:3.92,scaleY:3.92,x:-1214.9,y:-1205.5},0).to({_off:true},1).wait(115).to({_off:false,scaleX:4.66,scaleY:4.66,x:-1296.8,y:-1356.5},0).to({_off:true},1).wait(73).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(62).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:105.9,skewY:-74.1,x:-31.4,y:316.7},0).to({_off:true},1).wait(10).to({_off:false,scaleX:1.39,scaleY:1.39,skewX:0,skewY:0,x:-356.8,y:-161.3},0).to({_off:true},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(254).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,scaleX:4.18,scaleY:4.18,x:-661.8,y:-696.6},0).to({_off:true},1).wait(8).to({_off:false,scaleX:3.95,scaleY:3.95,x:-886.4,y:-997.2},0).to({_off:true},1).wait(14).to({_off:false,scaleX:3.92,scaleY:3.92,x:-1214.9,y:-1205.5},0).to({_off:true},1).wait(113).to({_off:false,scaleX:4.66,scaleY:4.66,x:-1296.8,y:-1356.5},0).to({_off:true},1).wait(75).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(62).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:105.9,skewY:-74.1,x:-31.4,y:316.7},0).to({_off:true},1).wait(10).to({_off:false,scaleX:1.39,scaleY:1.39,skewX:0,skewY:0,x:-356.8,y:-161.3},0).to({_off:true},1).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(255).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,scaleX:4.18,scaleY:4.18,x:-661.8,y:-696.6},0).to({_off:true},1).wait(8).to({_off:false,scaleX:3.95,scaleY:3.95,x:-886.4,y:-997.2},0).to({_off:true},1).wait(14).to({_off:false,scaleX:3.92,scaleY:3.92,x:-1214.9,y:-1205.5},0).to({_off:true},1).wait(111).to({_off:false,scaleX:4.66,scaleY:4.66,x:-1296.8,y:-1356.5},0).to({_off:true},1).wait(77).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(62).to({_off:false,scaleX:1.14,scaleY:1.14,skewX:105.9,skewY:-74.1,x:-31.4,y:316.7},0).to({_off:true},1).wait(10).to({_off:false,scaleX:1.39,scaleY:1.39,skewX:0,skewY:0,x:-356.8,y:-161.3},0).to({_off:true},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(256).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,scaleX:4.18,scaleY:4.18,x:-661.8,y:-696.6},0).to({_off:true},1).wait(8).to({_off:false,scaleX:3.95,scaleY:3.95,x:-886.4,y:-997.2},0).to({_off:true},1).wait(14).to({_off:false,scaleX:3.92,scaleY:3.92,x:-1214.9,y:-1205.5},0).to({_off:true},1).wait(109).to({_off:false,scaleX:4.66,scaleY:4.66,x:-1296.8,y:-1356.5},0).to({_off:true},1).wait(79).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(173));
	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(257).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false,scaleX:3.95,scaleY:3.95,x:-886.4,y:-997.2},0).to({_off:true},1).wait(14).to({_off:false,scaleX:3.92,scaleY:3.92,x:-1214.9,y:-1205.5},0).to({_off:true},1).wait(107).to({_off:false,scaleX:4.66,scaleY:4.66,x:-1296.8,y:-1356.5},0).to({_off:true},1).wait(81).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(172));
	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(258).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false,scaleX:3.95,scaleY:3.95,x:-886.4,y:-997.2},0).to({_off:true},1).wait(14).to({_off:false,scaleX:3.92,scaleY:3.92,x:-1214.9,y:-1205.5},0).to({_off:true},1).wait(105).to({_off:false,scaleX:4.66,scaleY:4.66,x:-1296.8,y:-1356.5},0).to({_off:true},1).wait(83).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(171));
	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(284).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false,scaleX:3.92,scaleY:3.92,x:-1214.9,y:-1205.5},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(98).to({_off:false,scaleX:4.66,scaleY:4.66,x:-1296.8,y:-1356.5},0).to({_off:true},1).wait(89).to({_off:false,scaleX:1.39,scaleY:1.39,x:-356.8,y:-161.3},0).to({_off:true},1).wait(168));

	// 图层 14
	this.instance_170 = new lib.dx();
	this.instance_170.setTransform(-319.9,305.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_170).to({_off:true},150).wait(508));

	// 图层 2
	this.instance_171 = new lib.bj();
	this.instance_171.setTransform(-320,-480,1,1.563);

	this.timeline.addTween(cjs.Tween.get(this.instance_171).wait(658));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-445.7,-539.4,765.8,1559.5);


(lib.ani1_d1_mc = function() {
	this.initialize();

	// nextBtn
	this.nextBtn = new lib.ani1_元件29();
	this.nextBtn.setTransform(462.4,434,0.601,0.299,0,0,0,204.1,142.2);
	new cjs.ButtonHelper(this.nextBtn, 0, 1, 2, false, new lib.ani1_元件29(), 3);

	// changeBtn
	this.changeBtn = new lib.ani1_元件29();
	this.changeBtn.setTransform(166.4,434,0.601,0.299,0,0,0,204.1,142.2);
	new cjs.ButtonHelper(this.changeBtn, 0, 1, 2, false, new lib.ani1_元件29(), 3);

	// gtmc
	this.gtmc = new lib.ani1_元件48();
	this.gtmc.setTransform(320,248.4,1.91,1.91,0,0,0,167.5,79);

	// 图层 1
	this.instance = new lib.d1();

	this.addChild(this.instance,this.gtmc,this.changeBtn,this.nextBtn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1500);


(lib.ani1_2a = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.s1btn();
	this.instance.setTransform(-124.6,219.1);

	// 图层 3
	this.instance_1 = new lib.ani1_2();
	this.instance_1.setTransform(59.5,139.8,1.783,1.783,0,0,0,117.4,142.6);

	// 图层 1
	this.instance_2 = new lib.t2();
	this.instance_2.setTransform(-124.6,-181.9);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-233.3,-181.9,543,664.3);


(lib.ani1_1a = function() {
	this.initialize();

	// 图层 4
	this.instance = new lib.s2btn();
	this.instance.setTransform(0,220.6);

	// 图层 2
	this.instance_1 = new lib.ani1_1();
	this.instance_1.setTransform(148.5,143.2,1.914,1.914,0,0,0,114.7,129.3);

	// 图层 1
	this.instance_2 = new lib.t1();
	this.instance_2.setTransform(0,-180.9);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128.2,-180.9,580,647.9);


(lib.ani1_mc_dh1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{init:11,d2end:19,d0:1,d2:12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(8).call(this.frame_19).wait(1));

	// kardMc
	this.kardMc = new lib.ani1_gezhongmc();
	this.kardMc.setTransform(333.4,480);
	this.kardMc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kardMc).wait(12).to({_off:false},0).wait(8));

	// 图层 5
	this.instance = new lib.ani1_元件39();
	this.instance.setTransform(335.8,752.2,1.799,1.799,0,0,0,114.7,129.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({_off:true},1).wait(8));

	// 图层 10
	this.instance_1 = new lib.role_001();
	this.instance_1.setTransform(335.9,1200.3,1,1,0,0,0,206.5,232.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:740.8},6).to({y:752.2},3).to({_off:true},1).wait(9));

	// greetMc
	this.greetMc = new lib.ani1_d1_mc();
	this.greetMc.setTransform(332.8,-1021.6,1,1,0,0,0,320,480);
	this.greetMc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.greetMc).wait(1).to({_off:false},0).to({y:504.6},6).to({y:480},4).to({_off:true},1).wait(8));

	// 图层 9
	this.btn0 = new lib.ani1_1a();
	this.btn0.setTransform(116.7,741.5,1,1,0,0,0,103.6,218.6);

	this.btn1 = new lib.ani1_2a();
	this.btn1.setTransform(565.3,742.1,1,1,0,0,0,107.5,217.9);

	this.instance_2 = new lib.pic_001();
	this.instance_2.setTransform(326.8,674.6,1,1,0,0,0,442,332.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.btn0}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},9).to({state:[]},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({y:1292.6},9).to({_off:true},1).wait(9));

	// 图层 1
	this.instance_3 = new lib.lg();
	this.instance_3.setTransform(214,0.4);

	this.instance_4 = new lib.ani1_wenzimc();
	this.instance_4.setTransform(333.1,242);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},11).wait(9));

	// 图层 6
	this.instance_5 = new lib.ani1_bjmc();
	this.instance_5.setTransform(488.1,755.4,1,1,0,0,0,155,275.4);
	this.instance_5.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, 10))];
	this.instance_5.cache(-322,-482,644,1504);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},11).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.7,-59,886.1,1563.1);


// stage content:



(lib.aniUI01 = function() {
	this.initialize();

	// 图层 1
	this.ui = new lib.ani1_mc_dh1();
	this.ui.setTransform(265,450.9,1,1,0,0,0,278.1,450.9);

	this.addChild(this.ui);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(189.2,691,886.1,1563.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;