(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1500,
	fps: 30,
	color: "#333333",
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
		{src:"../images/ani2_wt10.png", id:"ani2_wt10"},
		{src:"../images/ani2_wt11.png", id:"ani2_wt11"},
		{src:"../images/ani2_wt12.png", id:"ani2_wt12"},
		{src:"../images/ani2_wt13.png", id:"ani2_wt13"},
		{src:"../images/ani2_wt14.png", id:"ani2_wt14"},
		{src:"../images/ani2_wt15.png", id:"ani2_wt15"},
		{src:"../images/ani2_wt16.png", id:"ani2_wt16"},
		{src:"../images/ani2_wt17.png", id:"ani2_wt17"},
		{src:"../images/ani2_wt18.png", id:"ani2_wt18"},
		{src:"../images/ani2_wt19.png", id:"ani2_wt19"},
		{src:"../images/ani2_wt2.png", id:"ani2_wt2"},
		{src:"../images/ani2_wt20.png", id:"ani2_wt20"},
		{src:"../images/ani2_wt21.png", id:"ani2_wt21"},
		{src:"../images/ani2_wt22.png", id:"ani2_wt22"},
		{src:"../images/ani2_wt23.png", id:"ani2_wt23"},
		{src:"../images/ani2_wt24.png", id:"ani2_wt24"},
		{src:"../images/ani2_wt25.png", id:"ani2_wt25"},
		{src:"../images/ani2_wt26.png", id:"ani2_wt26"},
		{src:"../images/ani2_wt27.png", id:"ani2_wt27"},
		{src:"../images/ani2_wt28.png", id:"ani2_wt28"},
		{src:"../images/ani2_wt29.png", id:"ani2_wt29"},
		{src:"../images/ani2_wt3.png", id:"ani2_wt3"},
		{src:"../images/ani2_wt30.png", id:"ani2_wt30"},
		{src:"../images/ani2_wt31.png", id:"ani2_wt31"},
		{src:"../images/ani2_wt32.png", id:"ani2_wt32"},
		{src:"../images/ani2_wt33.png", id:"ani2_wt33"},
		{src:"../images/ani2_wt34.png", id:"ani2_wt34"},
		{src:"../images/ani2_wt35.png", id:"ani2_wt35"},
		{src:"../images/ani2_wt36.png", id:"ani2_wt36"},
		{src:"../images/ani2_wt37.png", id:"ani2_wt37"},
		{src:"../images/ani2_wt38.png", id:"ani2_wt38"},
		{src:"../images/ani2_wt381.png", id:"ani2_wt381"},
		{src:"../images/ani2_wt39.png", id:"ani2_wt39"},
		{src:"../images/ani2_wt391.png", id:"ani2_wt391"},
		{src:"../images/ani2_wt4.png", id:"ani2_wt4"},
		{src:"../images/ani2_wt40.png", id:"ani2_wt40"},
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
		{src:"../images/ani2_wt5.png", id:"ani2_wt5"},
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
		{src:"../images/ani2_wt6.png", id:"ani2_wt6"},
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
		{src:"../images/ani2_wt7.png", id:"ani2_wt7"},
		{src:"../images/ani2_wt701.png", id:"ani2_wt701"},
		{src:"../images/ani2_wt711.png", id:"ani2_wt711"},
		{src:"../images/ani2_wt721.png", id:"ani2_wt721"},
		{src:"../images/ani2_wt8.png", id:"ani2_wt8"},
		{src:"../images/ani2_wt9.png", id:"ani2_wt9"},
		{src:"../images/b1.png", id:"b1"},
		{src:"../images/b2.png", id:"b2"},
		{src:"../images/b3.png", id:"b3"},
		{src:"../images/bai.png", id:"bai"},
		{src:"../images/Bitmap1.png", id:"Bitmap1"},
		{src:"../images/Bitmap2.png", id:"Bitmap2"},
		{src:"../images/Bitmap3.png", id:"Bitmap3"},
		{src:"../images/Bitmap4.png", id:"Bitmap4"},
		{src:"../images/Bitmap5.png", id:"Bitmap5"},
		{src:"../images/bj.jpg", id:"bj"},
		{src:"../images/bu.png", id:"bu"},
		{src:"../images/d1.jpg", id:"d1"},
		{src:"../images/duquzhong01.png", id:"duquzhong01"},
		{src:"../images/dx.png", id:"dx"},
		{src:"../images/GIF.png", id:"GIF"},
		{src:"../images/gif1.png", id:"gif1"},
		{src:"../images/greetpic1.png", id:"greetpic1"},
		{src:"../images/greetpic2.png", id:"greetpic2"},
		{src:"../images/greetpic3.png", id:"greetpic3"},
		{src:"../images/greetpic4.png", id:"greetpic4"},
		{src:"../images/hao.png", id:"hao"},
		{src:"../images/hao2.png", id:"hao2"},
		{src:"../images/headimg.jpg", id:"headimg"},
		{src:"../images/headimg_1.jpg", id:"headimg_1"},
		{src:"../images/jiu.png", id:"jiu"},
		{src:"../images/jiuyibai.png", id:"jiuyibai"},
		{src:"../images/lg.jpg", id:"lg"},
		{src:"../images/logo.png", id:"logo"},
		{src:"../images/LOGO.jpg", id:"LOGO"},
		{src:"../images/num1.png", id:"num1"},
		{src:"../images/num2.png", id:"num2"},
		{src:"../images/num3.png", id:"num3"},
		{src:"../images/role1_p7.png", id:"role1_p7"},
		{src:"../images/s1btn.jpg", id:"s1btn"},
		{src:"../images/s1btn_1.jpg", id:"s1btn_1"},
		{src:"../images/s2btn.jpg", id:"s2btn"},
		{src:"../images/s2btn_1.jpg", id:"s2btn_1"},
		{src:"../images/t1.png", id:"t1"},
		{src:"../images/t2.png", id:"t2"},
		{src:"../images/tu1.png", id:"tu1"},
		{src:"../images/wenzi.png", id:"wenzi"},
		{src:"../images/woyeyao.png", id:"woyeyao"},
		{src:"../images/x1.png", id:"x1"},
		{src:"../images/x2.png", id:"x2"},
		{src:"../images/x3.png", id:"x3"},
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


(lib.ani2_wt10 = function() {
	this.initialize(img.ani2_wt10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt11 = function() {
	this.initialize(img.ani2_wt11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt12 = function() {
	this.initialize(img.ani2_wt12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt13 = function() {
	this.initialize(img.ani2_wt13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt14 = function() {
	this.initialize(img.ani2_wt14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt15 = function() {
	this.initialize(img.ani2_wt15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt16 = function() {
	this.initialize(img.ani2_wt16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt17 = function() {
	this.initialize(img.ani2_wt17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt18 = function() {
	this.initialize(img.ani2_wt18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt19 = function() {
	this.initialize(img.ani2_wt19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt2 = function() {
	this.initialize(img.ani2_wt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt20 = function() {
	this.initialize(img.ani2_wt20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt21 = function() {
	this.initialize(img.ani2_wt21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt22 = function() {
	this.initialize(img.ani2_wt22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt23 = function() {
	this.initialize(img.ani2_wt23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt24 = function() {
	this.initialize(img.ani2_wt24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt25 = function() {
	this.initialize(img.ani2_wt25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt26 = function() {
	this.initialize(img.ani2_wt26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt27 = function() {
	this.initialize(img.ani2_wt27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt28 = function() {
	this.initialize(img.ani2_wt28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt29 = function() {
	this.initialize(img.ani2_wt29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt3 = function() {
	this.initialize(img.ani2_wt3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt30 = function() {
	this.initialize(img.ani2_wt30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt31 = function() {
	this.initialize(img.ani2_wt31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt32 = function() {
	this.initialize(img.ani2_wt32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt33 = function() {
	this.initialize(img.ani2_wt33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt34 = function() {
	this.initialize(img.ani2_wt34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt35 = function() {
	this.initialize(img.ani2_wt35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt36 = function() {
	this.initialize(img.ani2_wt36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt37 = function() {
	this.initialize(img.ani2_wt37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt38 = function() {
	this.initialize(img.ani2_wt38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt381 = function() {
	this.initialize(img.ani2_wt381);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt39 = function() {
	this.initialize(img.ani2_wt39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt391 = function() {
	this.initialize(img.ani2_wt391);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.ani2_wt4 = function() {
	this.initialize(img.ani2_wt4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt40 = function() {
	this.initialize(img.ani2_wt40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


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


(lib.ani2_wt5 = function() {
	this.initialize(img.ani2_wt5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


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


(lib.ani2_wt6 = function() {
	this.initialize(img.ani2_wt6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


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


(lib.ani2_wt7 = function() {
	this.initialize(img.ani2_wt7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


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


(lib.ani2_wt8 = function() {
	this.initialize(img.ani2_wt8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.ani2_wt9 = function() {
	this.initialize(img.ani2_wt9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


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


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,784,674);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,838,646);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,731,663);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,677,643);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1182);


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


(lib.GIF = function() {
	this.initialize(img.GIF);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.gif1 = function() {
	this.initialize(img.gif1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


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


(lib.headimg_1 = function() {
	this.initialize(img.headimg_1);
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


(lib.role1_p7 = function() {
	this.initialize(img.role1_p7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,884,665);


(lib.s1btn = function() {
	this.initialize(img.s1btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,105);


(lib.s1btn_1 = function() {
	this.initialize(img.s1btn_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,105);


(lib.s2btn = function() {
	this.initialize(img.s2btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,105);


(lib.s2btn_1 = function() {
	this.initialize(img.s2btn_1);
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


(lib.x1 = function() {
	this.initialize(img.x1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,496,625);


(lib.x2 = function() {
	this.initialize(img.x2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,655,625);


(lib.x3 = function() {
	this.initialize(img.x3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,517,625);


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


(lib.role2_001 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.gif1();
	this.instance.setTransform(0,0,1.104,1.104);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,552,662.4);


(lib.pic_001 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.role1_p7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,884,665);


(lib.ani2_yjs12a = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.num2();
	this.instance.setTransform(11.4,66);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.4,66,101,143.2);


(lib.ani2_yjs11a = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.num1();
	this.instance.setTransform(39.5,66);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(39.5,66,17.4,143.2);


(lib.ani2_yj56 = function() {
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


(lib.ani2_yj13b = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.num3();
	this.instance.setTransform(11.4,66);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.4,66,101,143.2);


(lib.ani2_yj3 = function() {
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


(lib.ani2_faguang = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgynBViMAAAirDMBlPAAAMAAACrDg");
	this.shape.setTransform(324,800,1,1.461);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,648,1600);


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


(lib.ani2_bjmc = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.bj();
	this.instance.setTransform(-320,-480,1,1.563);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-480,640,1500);


(lib.ani2_ani1 = function() {
	this.initialize();

	// 图层 3
	this.instance = new lib.duquzhong01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.7,0,320.8,36);


(lib.ani2_yj29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("A/3WRMAAAgshMA/vAAAMAAAAshg");
	this.shape.setTransform(204.1,142.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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


(lib.ani1_headMc = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102.5,102.5);


(lib.ani1_gtInfoMc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

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
	this.shape_1.graphics.f("#FFFFFF").s().p("EgncAM0QBTgoAHh0IgsAAIAAjgID+AAIAADgIg8AAIAAB4QAAAUAOAAQAPAAACgRIAGg/IA1ASQgDAggFAcQgIA8gzAAIgcAAQg2AAAAhCIAAiEIggAAQgGCVhmA8QgXghgSgUgEglyAJfICGAAIAAhuIiGAAgALOM5QAthCgBiSIAAi1IFCAAIAAAzIhxAAIgSAoIBvAAIAADBIhNAAIAABYQAAAagLAOQgLAPgWADQgXADgkAAQgEgagHgcIgcAlIgrgjQAhgkAfgzIAtAcQgPAZgTAaQALACAUABQAUgDAAgQIAAhJIhRAAIAAjBIAxAAQAJgUAGgUIhaAAIAACKQAACsgzBMQgdgdgXgPgAOHKdIBpAAIAAgcIhpAAgAOHJWIBpAAIAAgdIhpAAgAUCM6QAMgLAAgRIAAgPQgeATgfAPQgQgagUgbQBKgbA8gzQgwAEgWAEIgQguQA0gXBBhNIA3AVQgpAngqAhIBigFIgcgWIAkghQAuAhAyAtIgoAkIgRgRIg+ADQARAfAWAWQAhgTAfgYIAlAoQgYARgkAUQAdAUAjAMQgWAbgOAbQhggugzhgIgcAbIAAA7IA+gRIgBA6QhMAQghANgAiGNjIAah8IBBAAIglB8gEggqANiIAAh2QgbAcgiAcIgjg8QA+goAdgxIg7AAIAAgyIBTAAIAIgjIh5AAIAAg0ICAAAIADghIhbAAIAAgzIFvAAIAABUIAvAAIAAA0IgvAAIAABVIj6AAQgHAQgKAQIEPAAIAACyIg+AAIAAgVIjCAAIAAAWgA/tMZIDCAAIAAg2IjCAAgA/YJdICoAAIAAgjIigAAQgDATgFAQgA/IIGICYAAIAAghIiVAAIgDAhgAn/NiIAAg9IhrAAIAAguIBrAAIAAgdIhBAAIAAgWQgTARgXARQgVgagSgUQA4geAdgoIgrAAIgUAtIgfgcIAADfIg2AAIAAi9QgSArgZAsQgHgxgHgkQAkg+ARhAIgxAAIAAg5IA1AAIAAhRIA2AAIAABRIArAAIAAA5IgrAAIAAAhIAkAUIAAgYIBSAAIAIgWIhAAAIAAgsIBLAAIADgYIhcAAIAAgrIBgAAIABgkIA9AAQAAASgBASIB7AAIAAArIiAAAIgEAYIB5AAIAAAsIiEAAIgIAWICoAAIAAAsIhQAAQAgAqA1ATQgPAWgSAgQgWgNgSgPIAAARIhAAAIAAAdIBrAAIAAAuIhrAAIAAA9gAnFKKIAAAkIAkAAQgXgagQgiIg1AAQgRAggbAcIAqAAIAAgkgAvoNiIAAhOIhKAAIAAgwQgSAagVAYIghg0IAAB/Ig3AAIAAjKQgPAbgQAWQgFgqgJgtQAkhDAmiQIA7APQgPA7gSAzIAAC6QBJhNAkhmIhTAAIAAg5IB4AAIAAhLIA8AAIAABLICEAAIAAA5IhiAAQAiBhBTBMQgUAdgUAkQgSgUgRgXIAAAvIhMAAIAABOgAusLbIBFAAQgphAgchcgAwsLbIBEAAIAAifQgWBXguBIgEgoqANiIAAigQgRATgTATQgIgjgKghQA3g4Abg4IhNAAIAAg6IBLAAQgggsgSgYIAygfQAWAZAgApIgwAhIBAAAIAAA2QgMAdgTAeQAbAVAkAgIglArIghghIAAC4gARYNOQAZhRAUhgQAjAQAWAGIgrCuQgcgLgfgIgAGrMiQAVACAfAAQAgAAAAgkIAAiLQgtBVhDBEQgUgXgcgUQBYhMA2hsIhqAAIAAg4IB8AAIAAhVIA9AAIAABVIAvAAIAAA4IgvAAIAADsQAAAegMARQgMARgSAEQgTAEhIACQgGgngGgYgACiMxQBbhAAAhbIAAidIAwAAIAACgQAAAWgDAUQAuAyAoAyIgrApQgXgiglgxQgZA7g7ApQgOgVgVgbgAZINNQgTgUAAgaQAAgbATgTQATgSAbAAQAZAAATASQATATAAAbQAAAcgTATQgTASgYAAQgcAAgTgTgAZlMRQgGAGAAAKQAAAHAGAHQAGAGALAAQAJAAAGgGQAHgGAAgJQAAgLgHgFQgHgHgJAAQgKAAgGAIgA3ENfIgLg7QAgABAlAAQAaABAAgaIAAgkQh8BDioAvQgTgogOgWQCFgZBmgrIjmAAIAAg4IA2AAIAAjaIBlAAIAWgqIBIAIIgWAiICbAAIAAC7IAkgfIAmArQgiAcgoAaIAABQQAABKhFACgA48KgIDMAAIAAgcIjMAAgA48JcIDMAAIAAgcIjMAAgA48IXIDMAAIAAgbIjMAAgAJ9NKQAYhGAWhqQAiAPAWAHIgpCtQgfgLgegIgAPfLuIArgZQAdAmAdAwIgwAcQgWgqgfgvgAC1LQIAAkfIDBAAIAAEaIgzAAIAAjmIhbAAIAADrgAROJFIAlgrQAjAaAmAgIgpAxIhFhAgAJ3JDIAmgsQAjAZAlAhIgpAxQghghgkgegATAI5QA0gaAmgkIhBAAIAAgzIB5AAIgPgiIBAgNQAKATAMAcIB2AAIAAAzIhRAAQAxAcAmAcIgiAuQgygng4ghIAageIhxAAIAfAYQg1Axg6AiQgSgagQgTgARaHKIAmgoQA0AlAXATIgqAvQghgggmgfgAKAHIIAmgoQA0AlAXAUIgqAuQghgfgmgggAxaCzQBTgnAHh1IgsAAIAAjeID+AAIAADeIg8AAIAAB5QAAATAOABQAPgBACgRIAGg+IA1ASQgDAggFAcQgIA7gzAAIgcAAQg2AAAAhBIAAiFIggAAQgGCVhmA9QgXghgSgVgAvwggICGAAIAAhuIiGAAgEgnjACwQBSgmAYgqQAXgqADhfIA8AAIgCAgQAOCKCCAoIgkA6QhhgqgihdQgZBahoAwQgXglgPgRgAYnCvQB5gtACheIh4AAIAAg5IDDAAIAAhIIhhAAQgRAhgUAcQgjgZgRgKQAyhLAUhMIA+AOQgIAbgKAaIBIAAIAAhLIBEAAIAABLICZAAIAAA6IiZAAIAABIIC1AAIAAA5Ih/AAIAABdQAAAcATgBIAUAAQANAAAIgLQAHgKAIg9QAfANAcAJQgOBPgQATQgQAVgdAAIgzAAQhLAAAAhGIAAhtIg/AAQgBCJiNA4QgZgdgXgZgEgiEACoQCCgZAlg1IikAAIAAg5IC2AAQACgSABgUIiUAFIgKg5QC7gDC6gMIAMA4IiiAJQAAAUgDAUIDBAAIAAA5IitAAQA4A9B4AMQgVAegTAgQiDgYg1hQQgnBCiSApgAFzDBQAyg3AvhDIj9AAIAAg+IFXAAIAAA4QgzBHhLBcgAiGDjIAah9IBBAAIglB9gA61CbIAugmIAAh9IgqAAIAAg9IBpAAIAAC5QAiApA5gBQBCADDAgEIgVA8QiTAAhogCQhHAAgigqQgnAmgQASgArSDiIAAimQgSAUgTATQgKgvgHgdQA2gzAcg3IhMAAIAAg8IBIAAQgTgggTgbIA2gbQAZAeATAfIguAZIA8AAIAAAzQgSAmgUAhIAAAOIATgNIAcAoIAAgSIEWAAIAADdIg9AAIAAgVIicAAIAAAVIg9AAIAAimIgZAQIgWgsIAADFgAm+CdIAwAAIAAghIgwAAgAoqCdIAwAAIAAghIgwAAgAm+BQIAwAAIAAghIgwAAgAoqBQIAwAAIAAghIgwAAgAyoDhIAAigQgRAUgTATQgIgkgKghQA3g1Abg4IhNAAIAAg7IBLAAQgggsgSgXIAyggQAWAZAgAqIgwAgIBAAAIAAA3QgMAcgTAeQAbAUAkAgIglArIghgiIAAC4gAVoCaQgnAagsAYQgOgZgXgdQA2gWAuggQgNg0gGhPIhcAAIAAAxIBOgLIgCAlIABAZIhNAJIAABbQAAAagMANQgLANgeADQgdACgoAAQgJgpgJgTQAWACAYAAIAJAAQAIgBAEgFQAFgGAAgNIAAg3IhJALIgLhBIBUgIIAAg5IhUAAIAAg7IBUAAIAAgtIhBAFQgCgVgGgmQBngFBegOIAOA5QghAGglADIAAA0IBZAAIgGiCIBBAAQABBDADA/ICXAAIAAA7IiUAAQADAyAHAlQAogmAggsIAyAmQguA6g5AwQASAsAXAAIAGgCQAEgBAGgYQAGgXAFghQAgAVAYAKQgNBFgRAZQgQAZgeAAQhCAAgjhHgEAn0ADMQgTgTAAgbQAAgbATgSQATgTAbAAQAZAAATATQATASAAAbQAAAdgTASQgTASgYABQgcgBgTgTgEAoRACQQgGAHAAAJQAAAIAGAGQAGAHALAAQAJAAAGgHQAHgFAAgKQAAgKgHgGQgHgGgJAAQgKAAgGAHgEAjMACeQAwAEAbAAQAiAAAAgkIAAiCIiIAAIAAg8IESAAIAAA8IhIAAIAACSQAAAlgRAUQgRASgfACQggADg9AAQgHgegKgigEgpAACwQAMgNAAgaIAAidIgrAAIAAg8IBkAAIAAC/IAsgfQABAbAEAoQguAignAogEAg/ADcIAAipQgWAVgXAUQgJgagQgmQBHg7A1hNIA1AiQgUAegYAdIAADrgAPMDcIAAgfIjdAAIAAAfIhHAAIAAmkIFrAAIAAGkgALvB7IDdAAIAAhkIjdAAgALvgmIDdAAIAAhgIjdAAgA4rBrQBWgkATgzIhzAAIAAg1IB5AAIABgwIhpAAIAAg4IBMAAQgbgfgZgZIAughQAaAVAlAkQgYAQgTAQIBEAAQAYgnAbgzIA+AfQgMAOghAtIBBAAIAAA4Ih4AAIAAAwICFAAIAAA1IiKAAIgBAIQBDAgA6AgIgoA5Qg6gog1gdQgeArg+AgIg2gwgEgnZAAhIAwgeQAZAjAZApIgzAfQgWgqgZgjgEgkJABEQAiggAbgjIAuAlQgcAfgmAmgAFJhJIAzgiQAoArAaAhIg3AiQgngygXgagEglBgBPQgeApheAmQgUghgSgUQBTgYAdgiQAcgggBhRIA9AAQgEA8gMAmQBgAvAvAbIgmA0QgngchYgzgACfg/QB6g2BRhsIBZAAIgPAPQBGBfByAxIgqA4Qh2g6hChfQhJBfh4A+QgZgngRgSgApUgRIAAh4IDwAAIAAB4gAoWhAIB1AAIAAgZIh1AAgEgiIgBzQAwgxAWhAIBAAAIgMAiIBqAAIAAA0IhdAAQAYASAbAaIgkAkQgagbgdgYIAfgdIgdAAQgbAsgnAmQgMgagTgdgA/ChnQAvgzAchKIBAAAIgMAiIB/AAIAAA0IhaAAIAmAnIgqAhQgQgWgdggIAXgSIgkAAQgWApgbAhQgUgPghgUgAf8h6QBNg7AkguQAeAUAZAUQgwA4hQA/QgRgZgXgdgA6mjBIA1giQAiAqAgAuIg4AlQgcgrgjgwgAWIivIAngmQA1ArAbAbQgbAYgQARQgigmgqgjgEgpNgC7IAtgiQAkApAfAqQgdATgWAQQgcgqghgqgEgkMgCLQAiglAYgjIAvAeQgdAqghAigEgnYgCyIAtgfQAaAfAdAoIgxAhQgYglgbgkgEAjAgCHIAAg7IDvAAIAAA7gAplieIAAgwIEWAAIAAAwgAzjnNQAdgqAJgtQAIguAAhiIAAiZIFeAAIAADEQAABjABAhQACAgAKABQAEAAACgDQADgDADgTIAFg+QAWALATAHQgHBbgOAYQgOAYgbAAQgkAAgSgnQgSgmAAilIAAh+IjhAAIAAB1QAABYgMA5QgMA5glA4QgWgagZgcgARRnJQAqgXAdgfQAcghAEhAIhoAAIAAg8IBqAAIAAhwIhRAAIAAg8IGaAAIAAA8IhKAAIAABwIBdAAIAAA8IhdAAIAAC9IhCAAIAAi9Ih7AAQgFBUgbAqQgaAqg3AeQgagXgggYgAT9qcIB6AAIAAhwIh6AAgAiGmbIAah9IBBAAIglB9gA3umcIAAiUQg8BThsA5QgUgsgMgRQBLgeAygrIgVAAIAAgMIhWAVIgOg1IBkgTIAAgZIhXAAIAAgvIBXAAIAAgZIA4AAIAACAQAYgZAQgdIAAhUIi6AAIAAgwIC6AAIAAgeIieADIgNgyQDiAACigIIASAwQhQADheACIAAAgIC/AAIAAAwIi/AAIAABYQA4BxCPAkQgTAigOAcQhpgtg9hUIAACOgAM7mdIAAhrIi+AAIAAg4IC+AAIAAgzIiPAAIAAg3ICPAAIAAgzIitAAIAAg3IBrAAIgsgyIAxgiIA+A9IggAXIBWAAQAfgnAegsIBFAeIgxA1IBoAAIAAA3IisAAIAAAzICOAAIAAA3IiOAAIAAAzIC9AAIAAA4Ii9AAIAABrgAalnVQAeADAUAAQAVAAAAgYIAAiOIA+AAIAACDIAVgpIAKAEIgbgqQAXgMAVgOQgRgSgOgUIhfAAQgQATgUASIAsAaIgeArIAQgGIAUAxQg2ARhgAdQgKgagOgcQBFgNBBgVQgagUgZgQQgeAWgkAVQgVgagUgXQBBgcAqglIhmAAIAAgwICPAAQAIgMAGgMIh7AAIAAgvICNAAIAFgZIiiAAIAAgvICpAAIACghIBCAAIgDAhICwAAIAAAvIi4AAIgFAZICuAAIAAAvIi/AAQgEAMgHAMIDsAAIAAAwIhsAAQAtAnBDATQgQAbgOAcQgogQghgWIg7AfQBRAZA8AWIgZA3Qg8gbhYgiIAAAYQAAAcgMAOQgMAOgaABIhHABQgEgcgIgagAmgm9QkUAKgbAKIgeg+QA4goA8hUIiNAAIAAg9IC/AAIAAhBIikAAIAAg8ICkAAIAAhGIBEAAIAABGICmAAIAAA8IimAAIAABBIDDAAIAAA9IjiAAQgsA4gzA4QBjgCBMgEIg0g8IA3giQBABFBDBNIg8AmIgYgegEAn0gGzQgTgSAAgbQAAgbATgTQATgSAbAAQAZAAATASQATASAAAcQAAAcgTASQgTATgYAAQgcAAgTgUgEAoRgHuQgGAGAAAJQAAAJAGAGQAGAHALAAQAJAAAGgHQAHgGAAgJQAAgKgHgHQgHgFgJAAQgKgBgGAIgEAi8gGgIAAiYQg5BLhgA1QgVgegTgYQBagnA+hDIiQAAIAAg8IBmAAQgSgZghgmIAqggIhHAAIAAg8ICjAAIAAgzIBCAAIAAAzICmAAIAAA8IhLAAIAuAiQgfAlgaAYIBtAAIAAA8IiWAAQBABBBbAjQgVAbgUAeQhig0g3hJIAACYgEAj+gKUIBKAAIgpgiQAcgbAcgiIhZAAgEAicgK1IgtAhIBNAAIAAhfIhYAAQAbAbAdAjgEgo9gGgIAAmHIB1AAQALgpAEgUIBPAKIgUAzIDAAAIAAGGIhGAAIAAgcIjyAAIAAAdgEgn2gH+IDyAAIAAhVIjyAAgEgn2gKSIDyAAIAAhVIjyAAgA/JnpQBZAEAhAAQAVgBAIgGQAJgIAEgJQAEgLAChjIkxAAIAPiXIBIAAIgKBdICbAAIAMhwIkEAAIAAg6IFSAAIgRCqIBIAAQgDCGgDAoQgDApgYATQgYAUgoACQgoABhZAAQgGghgKgkgACpm6IAAhDIG7AAIAABDgAwDozQglAxgsAtQgYgagWgWQAygxAngzQglg0gog1IAxgjQAkAtAeAqQAegvAWgxIA3AfQgeA9gmA5QAqA6AhAyIg0ApQgegwgggvgEgiGgINIAAg7IFKAAIAAA7gA1FoqQhEgBAAhBIAAheIA5AAIAAAfQAjgLAjgPIAXAqQgtATgwANIAAAJQAAAWARgBIALAAQANAAAGgIQAFgHACgdQAZAKAYAGQgGAggFAQQgFAPgPAHQgOAIgXABgADapfIAAhBIFXAAIAABBgADFr4IAAhDIGBAAIAABDg");
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


(lib.ani1_元件49 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.greetpic1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,335,132);


(lib.ani2_yj57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ani2_yj56();
	this.instance.setTransform(47.5,109.1,0.097,0.097,0,0,0,47.5,109);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({regY:109.1,scaleX:1.09,scaleY:1.09},6).to({scaleX:0.98,scaleY:0.98},3).to({scaleX:1,scaleY:1},2).wait(35).to({scaleX:1.07,scaleY:1.07},4).to({regX:47.4,regY:109.4,scaleX:0.06,scaleY:0.06},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ani2_wenzimc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+hKKIAAimICeAAIglpZIomCTIBDlxIGuhXIgWjrIGKh9IAAE3IEagsIAfD+Ik5BMIAAM6IjPCvgAS7KaICiuEIALACIJ3AlIidIBIkfANIgKBhIM8AvIh1EegAYrBnIBtAAIAhhmIiYgQgA2PGkIBBigIKGEQIlsDHgAn2GaIGLjbIA2BAIAnAAIAAhPIF2gOIASl2Il0gQIAAhoIgmACIilDyIAlAnIBIgaIA4BbImnE/IjNjDIB8i9IiwiBIE6p5ID6CKIjLFHIAfAVIB9iiIDCA+IADACIALghIN7giIA2ErIlPgLIAAFgIGFAAIBBDdIxIClIAAjJIgkgIIl7F3gEglUAGUIGTiEIAACwIjbC/gAfPFiIAzpXIq3guIivFBIiEhzIDbqjIETAsIhUDyIOAgpIhlNwgEgkPAB3ICghkIBtCTIhHA7gA2cBxIDVkHIDqCYIldC8gA19o3IgHgTIBKjdICzBhIiJCPg");
	mask.setTransform(-15.9,47.1);

	// 图层 6
	this.instance = new lib.ani2_yj3();
	this.instance.setTransform(-309.2,-50.6,0.999,0.999,25,0,0,34.7,260.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:275.5,y:153},14).wait(16));

	// 图层 8
	this.instance_1 = new lib.wenzi();
	this.instance_1.setTransform(-267.4,-216.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.4,-216.4,534.9,369);


(lib.ani2_sanbai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ani2_faguang();
	this.instance.setTransform(154.4,307.5,1,1,0,0,0,324,547.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},3).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.6,-240,648,1600);


(lib.ani2_downtime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.ani2_yjs11a();
	this.instance.setTransform(81.4,131.2,1.423,1.235,0,0,0,61.1,134.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,x:72.4,y:131.1},30,cjs.Ease.get(1)).to({_off:true},1).wait(9));

	// 图层 3
	this.instance_1 = new lib.ani2_yjs12a();
	this.instance_1.setTransform(64.9,132.4,1.423,1.235,0,0,0,61.1,134.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regY:134.9,scaleX:0.4,scaleY:0.4},29,cjs.Ease.get(1)).to({_off:true},1).wait(40));

	// 图层 1
	this.instance_2 = new lib.ani2_yj13b();
	this.instance_2.setTransform(62,135.2,1.423,1.235,0,0,0,61.1,134.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:61,scaleX:0.4,scaleY:0.4,y:135.1},28,cjs.Ease.get(1)).to({_off:true},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,50.2,143.8,176.5);


(lib.ani2_ani1hh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ani2_ani1();
	this.instance.setTransform(72.9,13.9,1,1,0,0,0,72.9,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.531},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,315,36);


(lib.ani2_11231231231 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 15
	this.instance = new lib.ani2_daitoubingGif("synched",0);
	this.instance.setTransform(114.7,152.3,0.613,0.613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-31.8,306.8,368.1);


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
p.nominalBounds = new cjs.Rectangle(-1,-1,341,138);


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


(lib.ani2_gezhongmc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{aniend:651});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_234 = function() {
		playSound("sound01");
	}
	this.frame_665 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(234).call(this.frame_234).wait(431).call(this.frame_665).wait(1));

	// 图层 12
	this.instance = new lib.lg();
	this.instance.setTransform(-114,-480);

	this.instance_1 = new lib.ani2_wenzimc();
	this.instance_1.setTransform(5.1,-238.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},150).wait(516));

	// 图层 5
	this.instance_2 = new lib.ani2_sanbai("synched",0,false);
	this.instance_2.setTransform(1.9,-3.4,1,1,0,0,0,156.8,272);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(245).to({_off:false},0).wait(14).to({regX:0,regY:0,x:-154.9,y:-275.4},0).wait(12).to({startPosition:0},0).wait(15).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(18).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(24).to({startPosition:0},0).wait(19).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(12).to({startPosition:3},0).wait(9).to({startPosition:0},0).wait(71).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(15));

	// 图层 11
	this.instance_3 = new lib.ani2_downtime("synched",0,false);
	this.instance_3.setTransform(0,-34,1.878,1.878,0,0,0,63,128);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150).to({_off:false},0).to({_off:true},90).wait(426));

	// 图层 8
	this.instance_4 = new lib.woyeyao();
	this.instance_4.setTransform(-155.5,231.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(652).to({_off:false},0).wait(14));

	// 图层 9
	this.instance_5 = new lib.ani2_ani1hh();
	this.instance_5.setTransform(-60.1,329.7,1,1,0,0,0,72.9,13.9);

	this.instance_6 = new lib.ani2_yj57();
	this.instance_6.setTransform(-24.3,-143,0.716,0.716);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[]},150).to({state:[{t:this.instance_6}]},502).wait(14));

	// gtInfoMc2
	this.gtInfoMc = new lib.ani1_gtInfoMc();
	this.gtInfoMc.setTransform(25.3,186.9,1,1,0,0,0,279.1,142.1);

	this.timeline.addTween(cjs.Tween.get(this.gtInfoMc).to({_off:true},150).wait(516));

	// headMc
	this.nickTxt = new cjs.Text("", "bold 45px 'Microsoft YaHei'", "#FFFF00");
	this.nickTxt.name = "nickTxt";
	this.nickTxt.lineHeight = 47;
	this.nickTxt.lineWidth = 439;
	this.nickTxt.setTransform(-141.3,-29.8);

	this.headMc = new lib.ani1_headMc();
	this.headMc.setTransform(-197.6,-16.5,1,1,0,0,0,51.3,51.3);

	this.instance_7 = new lib.jiu();
	this.instance_7.setTransform(-110,-141.1);

	this.instance_8 = new lib.yi();
	this.instance_8.setTransform(-100,-81.9);

	this.instance_9 = new lib.bai();
	this.instance_9.setTransform(-94.7,-153.2);

	this.instance_10 = new lib.hao();
	this.instance_10.setTransform(-107.1,-122.2);

	this.instance_11 = new lib.bu();
	this.instance_11.setTransform(-109.2,-136.1);

	this.instance_12 = new lib.hao2();
	this.instance_12.setTransform(-116.4,-121.1);

	this.instance_13 = new lib.jiuyibai();
	this.instance_13.setTransform(-251.7,-202.1);

	this.instance_14 = new lib.ani1_元件1烦烦烦();
	this.instance_14.setTransform(3.3,-311.7,2,2,0,0,0,127.5,73.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headMc},{t:this.nickTxt}]}).to({state:[]},150).to({state:[{t:this.instance_7}]},468).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},12).wait(14));

	// 图层 13
	this.instance_15 = new lib.ani2_wt591();
	this.instance_15.setTransform(-346.1,-82.9,1.318,1.318);

	this.instance_16 = new lib.ani2_wt581();
	this.instance_16.setTransform(-346.1,-82.9,1.318,1.318);

	this.instance_17 = new lib.ani2_wt571();
	this.instance_17.setTransform(-346.1,-82.9,1.318,1.318);

	this.instance_18 = new lib.ani2_wt561();
	this.instance_18.setTransform(-346.1,-82.9,1.318,1.318);

	this.instance_19 = new lib.ani2_wt551();
	this.instance_19.setTransform(-346.1,-82.9,1.318,1.318);

	this.instance_20 = new lib.ani2_wt541();
	this.instance_20.setTransform(-346.1,-82.9,1.318,1.318);

	this.instance_21 = new lib.ani2_wt531();
	this.instance_21.setTransform(-346.1,-82.9,1.318,1.318);

	this.instance_22 = new lib.ani2_wt521();
	this.instance_22.setTransform(-346.1,-82.9,1.318,1.318);

	this.instance_23 = new lib.ani2_wt511();
	this.instance_23.setTransform(-346.1,-82.9,1.318,1.318);

	this.instance_24 = new lib.ani2_wt501();
	this.instance_24.setTransform(-346.1,-82.9,1.318,1.318);

	this.instance_25 = new lib.ani2_wt491();
	this.instance_25.setTransform(-346.1,-82.9,1.318,1.318);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},363).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[]},1).wait(292));

	// 图层 4
	this.instance_26 = new lib.gif1();
	this.instance_26.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_27 = new lib.ani2_wt381();
	this.instance_27.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_28 = new lib.ani2_wt391();
	this.instance_28.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_29 = new lib.ani2_wt401();
	this.instance_29.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_30 = new lib.ani2_wt411();
	this.instance_30.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_31 = new lib.ani2_wt421();
	this.instance_31.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_32 = new lib.ani2_wt431();
	this.instance_32.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_33 = new lib.ani2_wt441();
	this.instance_33.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_34 = new lib.ani2_wt451();
	this.instance_34.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_35 = new lib.ani2_wt461();
	this.instance_35.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_36 = new lib.ani2_wt471();
	this.instance_36.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_37 = new lib.ani2_wt481();
	this.instance_37.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_38 = new lib.ani2_wt491();
	this.instance_38.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_39 = new lib.ani2_wt501();
	this.instance_39.setTransform(-876.6,-557.3,3.429,3.429);

	this.instance_40 = new lib.ani2_daitoubingGif("synched",0);
	this.instance_40.setTransform(424.2,526.6,4.456,4.456);
	this.instance_40._off = true;

	this.instance_41 = new lib.ani2_wt621();
	this.instance_41.setTransform(-1241,-1311.9,4.178,4.178);

	this.instance_42 = new lib.ani2_wt631();
	this.instance_42.setTransform(-1241,-1311.9,4.178,4.178);

	this.instance_43 = new lib.ani2_wt641();
	this.instance_43.setTransform(-1241,-1311.9,4.178,4.178);

	this.instance_44 = new lib.ani2_wt651();
	this.instance_44.setTransform(-1241,-1311.9,4.178,4.178);

	this.instance_45 = new lib.ani2_wt661();
	this.instance_45.setTransform(-1241,-1311.9,4.178,4.178);
	this.instance_45._off = true;

	this.instance_46 = new lib.ani2_wt671();
	this.instance_46.setTransform(-1241,-1311.9,4.178,4.178);

	this.instance_47 = new lib.ani2_wt681();
	this.instance_47.setTransform(-1241,-1311.9,4.178,4.178);
	this.instance_47._off = true;

	this.instance_48 = new lib.ani2_wt691();
	this.instance_48.setTransform(-1241,-1311.9,4.178,4.178);
	this.instance_48._off = true;

	this.instance_49 = new lib.ani2_wt701();
	this.instance_49.setTransform(-1241,-1311.9,4.178,4.178);

	this.instance_50 = new lib.ani2_wt711();
	this.instance_50.setTransform(-1241,-1311.9,4.178,4.178);

	this.instance_51 = new lib.ani2_wt721();
	this.instance_51.setTransform(-1241,-1311.9,4.178,4.178);

	this.instance_52 = new lib.ani2_wt611();
	this.instance_52.setTransform(-366.1,-198.9,1.478,1.478);

	this.instance_53 = new lib.ani2_wt601();
	this.instance_53.setTransform(-366.1,-198.9,1.478,1.478);

	this.instance_54 = new lib.ani2_wt591();
	this.instance_54.setTransform(-366.1,-198.9,1.478,1.478);

	this.instance_55 = new lib.x2();
	this.instance_55.setTransform(-242.2,180.7,1,1,-60);

	this.instance_56 = new lib.x1();
	this.instance_56.setTransform(237.2,-202.5,0.998,0.998,137.6);

	this.instance_57 = new lib.x3();
	this.instance_57.setTransform(-255.4,-148.2,0.999,0.999,21.9);

	this.instance_58 = new lib.ani2_wt591();
	this.instance_58.setTransform(-387,34.5,1.534,1.534);

	this.instance_59 = new lib.ani2_wt581();
	this.instance_59.setTransform(-387,-23.1,1.534,1.534,0,180,0);

	this.instance_60 = new lib.ani2_wt581();
	this.instance_60.setTransform(-387,34.5,1.534,1.534);

	this.instance_61 = new lib.ani2_wt571();
	this.instance_61.setTransform(-387,-23.1,1.534,1.534,0,180,0);

	this.instance_62 = new lib.ani2_wt571();
	this.instance_62.setTransform(-387,34.5,1.534,1.534);

	this.instance_63 = new lib.ani2_wt561();
	this.instance_63.setTransform(-387,-23.1,1.534,1.534,0,180,0);

	this.instance_64 = new lib.ani2_wt561();
	this.instance_64.setTransform(-387,34.5,1.534,1.534);

	this.instance_65 = new lib.ani2_wt551();
	this.instance_65.setTransform(-387,-23.1,1.534,1.534,0,180,0);

	this.instance_66 = new lib.ani2_wt551();
	this.instance_66.setTransform(-387,34.5,1.534,1.534);

	this.instance_67 = new lib.ani2_wt541();
	this.instance_67.setTransform(-387,-23.1,1.534,1.534,0,180,0);

	this.instance_68 = new lib.ani2_wt541();
	this.instance_68.setTransform(-387,34.5,1.534,1.534);

	this.instance_69 = new lib.ani2_wt531();
	this.instance_69.setTransform(-387,-23.1,1.534,1.534,0,180,0);

	this.instance_70 = new lib.ani2_wt531();
	this.instance_70.setTransform(-387,34.5,1.534,1.534);

	this.instance_71 = new lib.ani2_wt521();
	this.instance_71.setTransform(-387,-23.1,1.534,1.534,0,180,0);

	this.instance_72 = new lib.ani2_wt521();
	this.instance_72.setTransform(-387,34.5,1.534,1.534);

	this.instance_73 = new lib.ani2_wt511();
	this.instance_73.setTransform(-387,-23.1,1.534,1.534,0,180,0);

	this.instance_74 = new lib.ani2_wt511();
	this.instance_74.setTransform(-387,34.5,1.534,1.534);

	this.instance_75 = new lib.ani2_wt501();
	this.instance_75.setTransform(-387,34.5,1.534,1.534);

	this.instance_76 = new lib.ani2_wt491();
	this.instance_76.setTransform(-387,34.5,1.534,1.534);

	this.instance_77 = new lib.ani2_wt481();
	this.instance_77.setTransform(-387,34.5,1.534,1.534);

	this.instance_78 = new lib.ani2_wt471();
	this.instance_78.setTransform(-387,34.5,1.534,1.534);

	this.instance_79 = new lib.ani2_wt461();
	this.instance_79.setTransform(-387,34.5,1.534,1.534);

	this.instance_80 = new lib.ani2_wt451();
	this.instance_80.setTransform(-387,34.5,1.534,1.534);

	this.instance_81 = new lib.ani2_wt441();
	this.instance_81.setTransform(-387,34.5,1.534,1.534);

	this.instance_82 = new lib.ani2_wt431();
	this.instance_82.setTransform(-387,34.5,1.534,1.534);

	this.instance_83 = new lib.ani2_wt421();
	this.instance_83.setTransform(-387,34.5,1.534,1.534);

	this.instance_84 = new lib.Bitmap2();
	this.instance_84.setTransform(-409.2,-59);

	this.instance_85 = new lib.Bitmap1();
	this.instance_85.setTransform(-389.4,-132.6);

	this.instance_86 = new lib.Bitmap3();
	this.instance_86.setTransform(-360.3,-139.9);

	this.instance_87 = new lib.Bitmap4();
	this.instance_87.setTransform(-335.6,-135.5);

	this.instance_88 = new lib.Bitmap5();
	this.instance_88.setTransform(-373.7,-525.9);

	this.instance_89 = new lib.ani2_wt661();
	this.instance_89.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_90 = new lib.ani2_wt671();
	this.instance_90.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_91 = new lib.ani2_wt681();
	this.instance_91.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_92 = new lib.ani2_wt691();
	this.instance_92.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_93 = new lib.ani2_wt701();
	this.instance_93.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_94 = new lib.ani2_wt711();
	this.instance_94.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_95 = new lib.ani2_wt721();
	this.instance_95.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_96 = new lib.ani2_wt661();
	this.instance_96.setTransform(-300.4,98.1,1.215,1.215,0,180,0);

	this.instance_97 = new lib.ani2_wt661();
	this.instance_97.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_98 = new lib.ani2_wt671();
	this.instance_98.setTransform(-300.4,98.1,1.215,1.215,0,180,0);

	this.instance_99 = new lib.ani2_wt671();
	this.instance_99.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_100 = new lib.ani2_wt681();
	this.instance_100.setTransform(-300.4,98.1,1.215,1.215,0,180,0);

	this.instance_101 = new lib.ani2_wt681();
	this.instance_101.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_102 = new lib.ani2_wt691();
	this.instance_102.setTransform(-300.4,98.1,1.215,1.215,0,180,0);

	this.instance_103 = new lib.ani2_wt691();
	this.instance_103.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_104 = new lib.ani2_wt701();
	this.instance_104.setTransform(-300.4,98.1,1.215,1.215,0,180,0);

	this.instance_105 = new lib.ani2_wt701();
	this.instance_105.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_106 = new lib.ani2_wt711();
	this.instance_106.setTransform(-300.4,98.1,1.215,1.215,0,180,0);

	this.instance_107 = new lib.ani2_wt711();
	this.instance_107.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_108 = new lib.ani2_wt721();
	this.instance_108.setTransform(-300.4,98.1,1.215,1.215,0,180,0);

	this.instance_109 = new lib.ani2_wt721();
	this.instance_109.setTransform(-300.4,-59.9,1.215,1.215);

	this.instance_110 = new lib.ani2_wt661();
	this.instance_110.setTransform(223.7,242.8,1.215,1.215,0,60,-120);

	this.instance_111 = new lib.ani2_wt661();
	this.instance_111.setTransform(86.9,321.9,1.215,1.215,-120);

	this.instance_112 = new lib.ani2_wt661();
	this.instance_112.setTransform(-220.2,239.5,1.215,1.215,0,150,-30);

	this.instance_113 = new lib.ani2_wt661();
	this.instance_113.setTransform(-299.3,102.7,1.215,1.215,-30);

	this.instance_114 = new lib.ani2_wt671();
	this.instance_114.setTransform(223.7,242.8,1.215,1.215,0,60,-120);

	this.instance_115 = new lib.ani2_wt671();
	this.instance_115.setTransform(86.9,321.9,1.215,1.215,-120);

	this.instance_116 = new lib.ani2_wt671();
	this.instance_116.setTransform(-220.2,239.5,1.215,1.215,0,150,-30);

	this.instance_117 = new lib.ani2_wt671();
	this.instance_117.setTransform(-299.3,102.7,1.215,1.215,-30);

	this.instance_118 = new lib.ani2_wt681();
	this.instance_118.setTransform(223.7,242.8,1.215,1.215,0,60,-120);

	this.instance_119 = new lib.ani2_wt681();
	this.instance_119.setTransform(86.9,321.9,1.215,1.215,-120);

	this.instance_120 = new lib.ani2_wt681();
	this.instance_120.setTransform(-220.2,239.5,1.215,1.215,0,150,-30);

	this.instance_121 = new lib.ani2_wt681();
	this.instance_121.setTransform(-299.3,102.7,1.215,1.215,-30);

	this.instance_122 = new lib.ani2_wt691();
	this.instance_122.setTransform(223.7,242.8,1.215,1.215,0,60,-120);

	this.instance_123 = new lib.ani2_wt691();
	this.instance_123.setTransform(86.9,321.9,1.215,1.215,-120);

	this.instance_124 = new lib.ani2_wt691();
	this.instance_124.setTransform(-220.2,239.5,1.215,1.215,0,150,-30);

	this.instance_125 = new lib.ani2_wt691();
	this.instance_125.setTransform(-299.3,102.7,1.215,1.215,-30);

	this.instance_126 = new lib.ani2_wt701();
	this.instance_126.setTransform(223.7,242.8,1.215,1.215,0,60,-120);

	this.instance_127 = new lib.ani2_wt701();
	this.instance_127.setTransform(86.9,321.9,1.215,1.215,-120);

	this.instance_128 = new lib.ani2_wt701();
	this.instance_128.setTransform(-220.2,239.5,1.215,1.215,0,150,-30);

	this.instance_129 = new lib.ani2_wt701();
	this.instance_129.setTransform(-299.3,102.7,1.215,1.215,-30);

	this.instance_130 = new lib.ani2_wt711();
	this.instance_130.setTransform(223.7,242.8,1.215,1.215,0,60,-120);

	this.instance_131 = new lib.ani2_wt711();
	this.instance_131.setTransform(86.9,321.9,1.215,1.215,-120);

	this.instance_132 = new lib.ani2_wt711();
	this.instance_132.setTransform(-220.2,239.5,1.215,1.215,0,150,-30);

	this.instance_133 = new lib.ani2_wt711();
	this.instance_133.setTransform(-299.3,102.7,1.215,1.215,-30);

	this.instance_134 = new lib.ani2_wt721();
	this.instance_134.setTransform(223.7,242.8,1.215,1.215,0,60,-120);

	this.instance_135 = new lib.ani2_wt721();
	this.instance_135.setTransform(86.9,321.9,1.215,1.215,-120);

	this.instance_136 = new lib.ani2_wt721();
	this.instance_136.setTransform(-220.2,239.5,1.215,1.215,0,150,-30);

	this.instance_137 = new lib.ani2_wt721();
	this.instance_137.setTransform(-299.3,102.7,1.215,1.215,-30);

	this.instance_138 = new lib.ani2_wt641();
	this.instance_138.setTransform(1.9,-148.3,0.262,0.262);

	this.instance_139 = new lib.ani2_wt631();
	this.instance_139.setTransform(1.9,-148.3,0.262,0.262);

	this.instance_140 = new lib.ani2_wt621();
	this.instance_140.setTransform(1.9,-148.3,0.262,0.262);

	this.instance_141 = new lib.ani2_wt611();
	this.instance_141.setTransform(1.9,-148.3,0.262,0.262);

	this.instance_142 = new lib.ani2_wt641();
	this.instance_142.setTransform(33.6,-151.3,0.262,0.262);

	this.instance_143 = new lib.ani2_wt631();
	this.instance_143.setTransform(33.6,-151.3,0.262,0.262);

	this.instance_144 = new lib.ani2_wt621();
	this.instance_144.setTransform(33.6,-151.3,0.262,0.262);

	this.instance_145 = new lib.ani2_wt611();
	this.instance_145.setTransform(33.6,-151.3,0.262,0.262);

	this.instance_146 = new lib.ani2_wt641();
	this.instance_146.setTransform(89.8,-165.7,0.262,0.262);

	this.instance_147 = new lib.ani2_wt631();
	this.instance_147.setTransform(89.8,-165.7,0.262,0.262);

	this.instance_148 = new lib.ani2_wt621();
	this.instance_148.setTransform(89.8,-165.7,0.262,0.262);

	this.instance_149 = new lib.ani2_wt611();
	this.instance_149.setTransform(89.8,-165.7,0.262,0.262);

	this.instance_150 = new lib.ani2_wt641();
	this.instance_150.setTransform(89.8,-166.2,0.262,0.262);

	this.instance_151 = new lib.ani2_wt631();
	this.instance_151.setTransform(89.8,-166.2,0.262,0.262);

	this.instance_152 = new lib.ani2_wt621();
	this.instance_152.setTransform(89.8,-166.2,0.262,0.262);

	this.instance_153 = new lib.ani2_wt611();
	this.instance_153.setTransform(89.8,-166.2,0.262,0.262);

	this.instance_154 = new lib.ani2_wt641();
	this.instance_154.setTransform(90,-165.7,0.262,0.262);

	this.instance_155 = new lib.ani2_wt631();
	this.instance_155.setTransform(90,-165.7,0.262,0.262);

	this.instance_156 = new lib.ani2_wt621();
	this.instance_156.setTransform(90,-165.7,0.262,0.262);

	this.instance_157 = new lib.ani2_wt611();
	this.instance_157.setTransform(90,-165.7,0.262,0.262);

	this.instance_158 = new lib.ani2_wt641();
	this.instance_158.setTransform(90,-165.7,0.262,0.262);

	this.instance_159 = new lib.ani2_wt631();
	this.instance_159.setTransform(90,-165.7,0.262,0.262);

	this.instance_160 = new lib.ani2_wt621();
	this.instance_160.setTransform(90,-165.7,0.262,0.262);

	this.instance_161 = new lib.ani2_wt611();
	this.instance_161.setTransform(90,-165.7,0.262,0.262);

	this.instance_162 = new lib.ani2_wt601();
	this.instance_162.setTransform(-354.3,-246.4,1.467,1.467);

	this.instance_163 = new lib.ani2_wt601();
	this.instance_163.setTransform(-389.2,-295.4,1.159,1.159);

	this.instance_164 = new lib.ani2_wt601();
	this.instance_164.setTransform(-392.8,-297.4,0.818,0.818);

	this.instance_165 = new lib.ani2_wt601();
	this.instance_165.setTransform(-147,-223.6,0.483,0.483);

	this.instance_166 = new lib.ani2_wt601();
	this.instance_166.setTransform(-11.6,-188.4,0.349,0.349);

	this.instance_167 = new lib.ani2_wt601();
	this.instance_167.setTransform(90,-165.7,0.262,0.262);

	this.instance_168 = new lib.ani2_wenzimc();
	this.instance_168.setTransform(5.1,113.6);

	this.instance_169 = new lib.ani2_11231231231();
	this.instance_169.setTransform(-9.8,-57.9,1.235,1.235,0,0,0,114.6,129.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26,p:{scaleX:3.429,scaleY:3.429,x:-876.6,y:-557.3}}]},245).to({state:[{t:this.instance_27,p:{scaleX:3.429,scaleY:3.429,x:-876.6,y:-557.3}}]},1).to({state:[{t:this.instance_28,p:{scaleX:3.429,scaleY:3.429,x:-876.6,y:-557.3}}]},1).to({state:[{t:this.instance_29,p:{scaleX:3.429,scaleY:3.429,x:-876.6,y:-557.3}}]},1).to({state:[{t:this.instance_30,p:{scaleX:3.429,scaleY:3.429,x:-876.6,y:-557.3}}]},1).to({state:[{t:this.instance_31,p:{scaleX:3.429,scaleY:3.429,skewX:0,x:-876.6,y:-557.3}}]},1).to({state:[{t:this.instance_32,p:{scaleX:3.429,scaleY:3.429,skewX:0,x:-876.6,y:-557.3}}]},1).to({state:[{t:this.instance_33,p:{scaleX:3.429,scaleY:3.429,skewX:0,x:-876.6,y:-557.3}}]},1).to({state:[{t:this.instance_34,p:{scaleX:3.429,scaleY:3.429,skewX:0,x:-876.6,y:-557.3}}]},1).to({state:[{t:this.instance_35,p:{scaleX:3.429,scaleY:3.429,skewX:0,x:-876.6,y:-557.3}}]},1).to({state:[{t:this.instance_36,p:{scaleX:3.429,scaleY:3.429,skewX:0,x:-876.6,y:-557.3}}]},1).to({state:[{t:this.instance_37,p:{scaleX:3.429,scaleY:3.429,skewX:0,x:-876.6,y:-557.3}}]},1).to({state:[{t:this.instance_38,p:{scaleX:3.429,scaleY:3.429,skewX:0,x:-876.6,y:-557.3}}]},1).to({state:[{t:this.instance_39,p:{scaleX:3.429,scaleY:3.429,skewX:0,x:-876.6,y:-557.3}}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41,p:{scaleX:4.178,scaleY:4.178,x:-1241,y:-1311.9}}]},1).to({state:[{t:this.instance_42,p:{scaleX:4.178,scaleY:4.178,x:-1241,y:-1311.9}}]},1).to({state:[{t:this.instance_43,p:{scaleX:4.178,scaleY:4.178,x:-1241,y:-1311.9}}]},1).to({state:[{t:this.instance_44,p:{scaleX:4.178,scaleY:4.178,x:-1241,y:-1311.9}}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46,p:{scaleX:4.178,scaleY:4.178,x:-1241,y:-1311.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49,p:{scaleX:4.178,scaleY:4.178,skewX:0,x:-1241,y:-1311.9,skewY:0}}]},1).to({state:[{t:this.instance_50,p:{scaleX:4.178,scaleY:4.178,skewX:0,x:-1241,y:-1311.9,skewY:0}}]},1).to({state:[{t:this.instance_51,p:{scaleX:4.178,scaleY:4.178,skewX:0,x:-1241,y:-1311.9,skewY:0}}]},1).to({state:[{t:this.instance_50,p:{scaleX:4.178,scaleY:4.178,skewX:0,x:-1241,y:-1311.9,skewY:0}}]},1).to({state:[{t:this.instance_49,p:{scaleX:4.178,scaleY:4.178,skewX:0,x:-1241,y:-1311.9,skewY:0}}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_46,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_44,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_43,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_42,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_41,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_52,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_53,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_54,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56,p:{scaleX:0.998,scaleY:0.998,rotation:137.6,x:237.2,y:-202.5}}]},10).to({state:[{t:this.instance_57}]},10).to({state:[{t:this.instance_57},{t:this.instance_55}]},12).to({state:[{t:this.instance_57},{t:this.instance_55},{t:this.instance_56,p:{scaleX:0.998,scaleY:0.998,rotation:137.6,x:237.2,y:-202.5}}]},9).to({state:[{t:this.instance_57},{t:this.instance_55},{t:this.instance_56,p:{scaleX:0.998,scaleY:0.998,rotation:137.6,x:237.2,y:-202.5}}]},11).to({state:[{t:this.instance_58},{t:this.instance_54,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},11).to({state:[{t:this.instance_60},{t:this.instance_59,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_62},{t:this.instance_61,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_64},{t:this.instance_63,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_66},{t:this.instance_65,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_68},{t:this.instance_67,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_70},{t:this.instance_69,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_72},{t:this.instance_71,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_74},{t:this.instance_73,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_75},{t:this.instance_39,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_76},{t:this.instance_38,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_77},{t:this.instance_37,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_78},{t:this.instance_36,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_79},{t:this.instance_35,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_80},{t:this.instance_34,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_81},{t:this.instance_33,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_82},{t:this.instance_32,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_83},{t:this.instance_31,p:{scaleX:1.534,scaleY:1.534,skewX:180,x:-387,y:-23.1}}]},1).to({state:[{t:this.instance_54,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_59,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_61,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_63,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_65,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_67,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_69,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_71,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_73,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_39,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_38,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_37,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_36,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_35,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_34,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_33,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_32,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_31,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_30,p:{scaleX:4.958,scaleY:4.958,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_29,p:{scaleX:4.958,scaleY:4.958,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_28,p:{scaleX:4.958,scaleY:4.958,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_27,p:{scaleX:4.958,scaleY:4.958,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_26,p:{scaleX:4.958,scaleY:4.958,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_26,p:{scaleX:4.958,scaleY:4.958,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_27,p:{scaleX:4.958,scaleY:4.958,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_28,p:{scaleX:4.958,scaleY:4.958,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_29,p:{scaleX:4.958,scaleY:4.958,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_30,p:{scaleX:4.958,scaleY:4.958,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_31,p:{scaleX:4.958,scaleY:4.958,skewX:0,x:-1327.8,y:-1482.7}}]},1).to({state:[{t:this.instance_56,p:{scaleX:3.178,scaleY:3.178,rotation:0,x:-612,y:-953}}]},1).to({state:[{t:this.instance_84}]},20).to({state:[{t:this.instance_85}]},8).to({state:[{t:this.instance_86}]},6).to({state:[{t:this.instance_87}]},7).to({state:[{t:this.instance_88}]},6).to({state:[{t:this.instance_31,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},8).to({state:[{t:this.instance_32,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_33,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_34,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_35,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_36,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_37,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_38,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_39,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_73,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_71,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_69,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_67,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_63,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_61,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_59,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_54,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_53,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_52,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_41,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_42,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_43,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_44,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9}}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56,p:{scaleX:0.998,scaleY:0.998,rotation:137.6,x:237.2,y:-202.5}}]},18).to({state:[{t:this.instance_57}]},7).to({state:[{t:this.instance_89,p:{rotation:0,x:-300.4,y:-59.9,scaleX:1.215,scaleY:1.215}},{t:this.instance_45}]},7).to({state:[{t:this.instance_90,p:{rotation:0,x:-300.4,y:-59.9,scaleX:1.215,scaleY:1.215}},{t:this.instance_46,p:{scaleX:1.215,scaleY:1.215,x:-300.4,y:98.1,skewX:180,skewY:0}}]},1).to({state:[{t:this.instance_91,p:{rotation:0,x:-300.4,y:-59.9,scaleX:1.215,scaleY:1.215}},{t:this.instance_47}]},1).to({state:[{t:this.instance_92,p:{rotation:0,x:-300.4,y:-59.9,scaleX:1.215,scaleY:1.215}},{t:this.instance_48}]},1).to({state:[{t:this.instance_93,p:{rotation:0,x:-300.4,y:-59.9,scaleX:1.215,scaleY:1.215}},{t:this.instance_49,p:{scaleX:1.215,scaleY:1.215,skewX:180,x:-300.4,y:98.1,skewY:0}}]},1).to({state:[{t:this.instance_94,p:{rotation:0,x:-300.4,y:-59.9,scaleX:1.215,scaleY:1.215}},{t:this.instance_50,p:{scaleX:1.215,scaleY:1.215,skewX:180,x:-300.4,y:98.1,skewY:0}}]},1).to({state:[{t:this.instance_95,p:{rotation:0,x:-300.4,y:-59.9,scaleX:1.215,scaleY:1.215}},{t:this.instance_51,p:{scaleX:1.215,scaleY:1.215,skewX:180,x:-300.4,y:98.1,skewY:0}}]},1).to({state:[{t:this.instance_94,p:{rotation:0,x:-300.4,y:-59.9,scaleX:1.215,scaleY:1.215}},{t:this.instance_50,p:{scaleX:1.215,scaleY:1.215,skewX:180,x:-300.4,y:98.1,skewY:0}}]},1).to({state:[{t:this.instance_93,p:{rotation:0,x:-300.4,y:-59.9,scaleX:1.215,scaleY:1.215}},{t:this.instance_49,p:{scaleX:1.215,scaleY:1.215,skewX:180,x:-300.4,y:98.1,skewY:0}}]},1).to({state:[{t:this.instance_97,p:{scaleX:1.215,scaleY:1.215,rotation:0,x:-300.4,y:-59.9}},{t:this.instance_96,p:{scaleX:1.215,scaleY:1.215,skewX:180,skewY:0,x:-300.4,y:98.1}},{t:this.instance_89,p:{rotation:-90,x:-75.6,y:323,scaleX:1.215,scaleY:1.215}},{t:this.instance_45}]},1).to({state:[{t:this.instance_99,p:{scaleX:1.215,scaleY:1.215,rotation:0,x:-300.4,y:-59.9}},{t:this.instance_98,p:{scaleX:1.215,scaleY:1.215,skewX:180,skewY:0,x:-300.4,y:98.1}},{t:this.instance_90,p:{rotation:-90,x:-75.6,y:323,scaleX:1.215,scaleY:1.215}},{t:this.instance_46,p:{scaleX:1.215,scaleY:1.215,x:82.4,y:323,skewX:90,skewY:-90}}]},1).to({state:[{t:this.instance_101,p:{scaleX:1.215,scaleY:1.215,rotation:0,x:-300.4,y:-59.9}},{t:this.instance_100,p:{scaleX:1.215,scaleY:1.215,skewX:180,skewY:0,x:-300.4,y:98.1}},{t:this.instance_91,p:{rotation:-90,x:-75.6,y:323,scaleX:1.215,scaleY:1.215}},{t:this.instance_47}]},1).to({state:[{t:this.instance_103,p:{scaleX:1.215,scaleY:1.215,rotation:0,x:-300.4,y:-59.9}},{t:this.instance_102,p:{scaleX:1.215,scaleY:1.215,skewX:180,skewY:0,x:-300.4,y:98.1}},{t:this.instance_92,p:{rotation:-90,x:-75.6,y:323,scaleX:1.215,scaleY:1.215}},{t:this.instance_48}]},1).to({state:[{t:this.instance_105,p:{scaleX:1.215,scaleY:1.215,rotation:0,x:-300.4,y:-59.9}},{t:this.instance_104,p:{scaleX:1.215,scaleY:1.215,skewX:180,skewY:0,x:-300.4,y:98.1}},{t:this.instance_93,p:{rotation:-90,x:-75.6,y:323,scaleX:1.215,scaleY:1.215}},{t:this.instance_49,p:{scaleX:1.215,scaleY:1.215,skewX:90,x:82.4,y:323,skewY:-90}}]},1).to({state:[{t:this.instance_107,p:{scaleX:1.215,scaleY:1.215,rotation:0,x:-300.4,y:-59.9}},{t:this.instance_106,p:{scaleX:1.215,scaleY:1.215,skewX:180,skewY:0,x:-300.4,y:98.1}},{t:this.instance_94,p:{rotation:-90,x:-75.6,y:323,scaleX:1.215,scaleY:1.215}},{t:this.instance_50,p:{scaleX:1.215,scaleY:1.215,skewX:90,x:82.4,y:323,skewY:-90}}]},1).to({state:[{t:this.instance_109,p:{scaleX:1.215,scaleY:1.215,rotation:0,x:-300.4,y:-59.9}},{t:this.instance_108,p:{scaleX:1.215,scaleY:1.215,skewX:180,skewY:0,x:-300.4,y:98.1}},{t:this.instance_95,p:{rotation:-90,x:-75.6,y:323,scaleX:1.215,scaleY:1.215}},{t:this.instance_51,p:{scaleX:1.215,scaleY:1.215,skewX:90,x:82.4,y:323,skewY:-90}}]},1).to({state:[{t:this.instance_107,p:{scaleX:1.215,scaleY:1.215,rotation:0,x:-300.4,y:-59.9}},{t:this.instance_106,p:{scaleX:1.215,scaleY:1.215,skewX:180,skewY:0,x:-300.4,y:98.1}},{t:this.instance_94,p:{rotation:-90,x:-75.6,y:323,scaleX:1.215,scaleY:1.215}},{t:this.instance_50,p:{scaleX:1.215,scaleY:1.215,skewX:90,x:82.4,y:323,skewY:-90}}]},1).to({state:[{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_97,p:{scaleX:1.214,scaleY:1.214,rotation:-154.3,x:242.7,y:221.8}},{t:this.instance_96,p:{scaleX:1.214,scaleY:1.214,skewX:25.7,skewY:-154.3,x:311,y:79.5}},{t:this.instance_89,p:{rotation:-74.1,x:-155.5,y:289.1,scaleX:1.213,scaleY:1.213}},{t:this.instance_45}]},1).to({state:[{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_99,p:{scaleX:1.214,scaleY:1.214,rotation:-154.3,x:242.7,y:221.8}},{t:this.instance_98,p:{scaleX:1.214,scaleY:1.214,skewX:25.7,skewY:-154.3,x:311,y:79.5}},{t:this.instance_90,p:{rotation:-74.1,x:-155.5,y:289.1,scaleX:1.213,scaleY:1.213}},{t:this.instance_46,p:{scaleX:1.213,scaleY:1.213,x:-3.8,y:332.4,skewX:105.9,skewY:-74.1}}]},1).to({state:[{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_101,p:{scaleX:1.214,scaleY:1.214,rotation:-154.3,x:242.7,y:221.8}},{t:this.instance_100,p:{scaleX:1.214,scaleY:1.214,skewX:25.7,skewY:-154.3,x:311,y:79.5}},{t:this.instance_91,p:{rotation:-74.1,x:-155.5,y:289.1,scaleX:1.213,scaleY:1.213}},{t:this.instance_47}]},1).to({state:[{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_103,p:{scaleX:1.214,scaleY:1.214,rotation:-154.3,x:242.7,y:221.8}},{t:this.instance_102,p:{scaleX:1.214,scaleY:1.214,skewX:25.7,skewY:-154.3,x:311,y:79.5}},{t:this.instance_92,p:{rotation:-74.1,x:-155.5,y:289.1,scaleX:1.213,scaleY:1.213}},{t:this.instance_48}]},1).to({state:[{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_105,p:{scaleX:1.214,scaleY:1.214,rotation:-154.3,x:242.7,y:221.8}},{t:this.instance_104,p:{scaleX:1.214,scaleY:1.214,skewX:25.7,skewY:-154.3,x:311,y:79.5}},{t:this.instance_93,p:{rotation:-74.1,x:-155.5,y:289.1,scaleX:1.213,scaleY:1.213}},{t:this.instance_49,p:{scaleX:1.213,scaleY:1.213,skewX:105.9,x:-3.8,y:332.4,skewY:-74.1}}]},1).to({state:[{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_107,p:{scaleX:1.214,scaleY:1.214,rotation:-154.3,x:242.7,y:221.8}},{t:this.instance_106,p:{scaleX:1.214,scaleY:1.214,skewX:25.7,skewY:-154.3,x:311,y:79.5}},{t:this.instance_94,p:{rotation:-74.1,x:-155.5,y:289.1,scaleX:1.213,scaleY:1.213}},{t:this.instance_50,p:{scaleX:1.213,scaleY:1.213,skewX:105.9,x:-3.8,y:332.4,skewY:-74.1}}]},1).to({state:[{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_109,p:{scaleX:1.214,scaleY:1.214,rotation:-154.3,x:242.7,y:221.8}},{t:this.instance_108,p:{scaleX:1.214,scaleY:1.214,skewX:25.7,skewY:-154.3,x:311,y:79.5}},{t:this.instance_95,p:{rotation:-74.1,x:-155.5,y:289.1,scaleX:1.213,scaleY:1.213}},{t:this.instance_51,p:{scaleX:1.213,scaleY:1.213,skewX:105.9,x:-3.8,y:332.4,skewY:-74.1}}]},1).to({state:[{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_107,p:{scaleX:1.214,scaleY:1.214,rotation:-154.3,x:242.7,y:221.8}},{t:this.instance_106,p:{scaleX:1.214,scaleY:1.214,skewX:25.7,skewY:-154.3,x:311,y:79.5}},{t:this.instance_94,p:{rotation:-74.1,x:-155.5,y:289.1,scaleX:1.213,scaleY:1.213}},{t:this.instance_50,p:{scaleX:1.213,scaleY:1.213,skewX:105.9,x:-3.8,y:332.4,skewY:-74.1}}]},1).to({state:[{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_105,p:{scaleX:1.214,scaleY:1.214,rotation:-154.3,x:242.7,y:221.8}},{t:this.instance_104,p:{scaleX:1.214,scaleY:1.214,skewX:25.7,skewY:-154.3,x:311,y:79.5}},{t:this.instance_93,p:{rotation:-74.1,x:-155.5,y:289.1,scaleX:1.213,scaleY:1.213}},{t:this.instance_49,p:{scaleX:1.213,scaleY:1.213,skewX:105.9,x:-3.8,y:332.4,skewY:-74.1}}]},1).to({state:[{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_103,p:{scaleX:1.214,scaleY:1.214,rotation:-154.3,x:242.7,y:221.8}},{t:this.instance_102,p:{scaleX:1.214,scaleY:1.214,skewX:25.7,skewY:-154.3,x:311,y:79.5}},{t:this.instance_92,p:{rotation:-74.1,x:-155.5,y:289.1,scaleX:1.213,scaleY:1.213}},{t:this.instance_48}]},1).to({state:[{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_101,p:{scaleX:1.214,scaleY:1.214,rotation:-154.3,x:242.7,y:221.8}},{t:this.instance_100,p:{scaleX:1.214,scaleY:1.214,skewX:25.7,skewY:-154.3,x:311,y:79.5}},{t:this.instance_91,p:{rotation:-74.1,x:-155.5,y:289.1,scaleX:1.213,scaleY:1.213}},{t:this.instance_47}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46,p:{scaleX:1.478,scaleY:1.478,x:-366.1,y:-198.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9,skewY:0}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9,skewY:0}}]},1).to({state:[{t:this.instance_51,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9,skewY:0}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9,skewY:0}}]},1).to({state:[{t:this.instance_49,p:{scaleX:1.478,scaleY:1.478,skewX:0,x:-366.1,y:-198.9,skewY:0}}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_46,p:{scaleX:0.273,scaleY:0.273,x:-2.5,y:-150,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_44,p:{scaleX:0.273,scaleY:0.273,x:-2.5,y:-150}}]},1).to({state:[{t:this.instance_43,p:{scaleX:0.273,scaleY:0.273,x:-2.5,y:-150}}]},1).to({state:[{t:this.instance_138,p:{scaleX:0.262,scaleY:0.262,x:1.9,y:-148.3}},{t:this.instance_43,p:{scaleX:0.349,scaleY:0.349,x:-99.7,y:-171.1}}]},1).to({state:[{t:this.instance_139,p:{scaleX:0.262,scaleY:0.262,x:1.9,y:-148.3}},{t:this.instance_42,p:{scaleX:0.349,scaleY:0.349,x:-99.7,y:-171.1}}]},1).to({state:[{t:this.instance_140,p:{scaleX:0.262,scaleY:0.262,x:1.9,y:-148.3}},{t:this.instance_41,p:{scaleX:0.349,scaleY:0.349,x:-99.7,y:-171.1}}]},1).to({state:[{t:this.instance_141,p:{scaleX:0.262,scaleY:0.262,x:1.9,y:-148.3}},{t:this.instance_52,p:{scaleX:0.349,scaleY:0.349,x:-99.7,y:-171.1}}]},1).to({state:[{t:this.instance_142,p:{scaleX:0.262,scaleY:0.262,x:33.6,y:-151.3}},{t:this.instance_138,p:{scaleX:0.349,scaleY:0.349,x:-68,y:-174.1}},{t:this.instance_43,p:{scaleX:0.483,scaleY:0.483,x:-203.4,y:-209.2}}]},1).to({state:[{t:this.instance_143,p:{scaleX:0.262,scaleY:0.262,x:33.6,y:-151.3}},{t:this.instance_139,p:{scaleX:0.349,scaleY:0.349,x:-68,y:-174.1}},{t:this.instance_42,p:{scaleX:0.483,scaleY:0.483,x:-203.4,y:-209.2}}]},1).to({state:[{t:this.instance_144,p:{scaleX:0.262,scaleY:0.262,x:33.6,y:-151.3}},{t:this.instance_140,p:{scaleX:0.349,scaleY:0.349,x:-68,y:-174.1}},{t:this.instance_41,p:{scaleX:0.483,scaleY:0.483,x:-203.4,y:-209.2}}]},1).to({state:[{t:this.instance_145,p:{scaleX:0.262,scaleY:0.262,x:33.6,y:-151.3}},{t:this.instance_141,p:{scaleX:0.349,scaleY:0.349,x:-68,y:-174.1}},{t:this.instance_52,p:{scaleX:0.483,scaleY:0.483,x:-203.4,y:-209.2}}]},1).to({state:[{t:this.instance_146,p:{scaleX:0.262,scaleY:0.262,x:89.8,y:-165.7}},{t:this.instance_142,p:{scaleX:0.349,scaleY:0.349,x:-11.8,y:-188.5}},{t:this.instance_138,p:{scaleX:0.483,scaleY:0.483,x:-147.3,y:-223.6}},{t:this.instance_43,p:{scaleX:0.818,scaleY:0.818,x:-393,y:-297.5}}]},1).to({state:[{t:this.instance_147,p:{scaleX:0.262,scaleY:0.262,x:89.8,y:-165.7}},{t:this.instance_143,p:{scaleX:0.349,scaleY:0.349,x:-11.8,y:-188.5}},{t:this.instance_139,p:{scaleX:0.483,scaleY:0.483,x:-147.3,y:-223.6}},{t:this.instance_42,p:{scaleX:0.818,scaleY:0.818,x:-393,y:-297.5}}]},1).to({state:[{t:this.instance_148,p:{scaleX:0.262,scaleY:0.262,x:89.8,y:-165.7}},{t:this.instance_144,p:{scaleX:0.349,scaleY:0.349,x:-11.8,y:-188.5}},{t:this.instance_140,p:{scaleX:0.483,scaleY:0.483,x:-147.3,y:-223.6}},{t:this.instance_41,p:{scaleX:0.818,scaleY:0.818,x:-393,y:-297.5}}]},1).to({state:[{t:this.instance_149,p:{scaleX:0.262,scaleY:0.262,x:89.8,y:-165.7}},{t:this.instance_145,p:{scaleX:0.349,scaleY:0.349,x:-11.8,y:-188.5}},{t:this.instance_141,p:{scaleX:0.483,scaleY:0.483,x:-147.3,y:-223.6}},{t:this.instance_52,p:{scaleX:0.818,scaleY:0.818,x:-393,y:-297.5}}]},1).to({state:[{t:this.instance_150,p:{scaleX:0.262,scaleY:0.262,x:89.8,y:-166.2}},{t:this.instance_146,p:{scaleX:0.349,scaleY:0.349,x:-11.8,y:-188.9}},{t:this.instance_142,p:{scaleX:0.483,scaleY:0.483,x:-147.3,y:-224.1}},{t:this.instance_138,p:{scaleX:0.818,scaleY:0.818,x:-393,y:-297.9}},{t:this.instance_43,p:{scaleX:1.159,scaleY:1.159,x:-389.5,y:-295.9}}]},1).to({state:[{t:this.instance_151,p:{scaleX:0.262,scaleY:0.262,x:89.8,y:-166.2}},{t:this.instance_147,p:{scaleX:0.349,scaleY:0.349,x:-11.8,y:-188.9}},{t:this.instance_143,p:{scaleX:0.483,scaleY:0.483,x:-147.3,y:-224.1}},{t:this.instance_139,p:{scaleX:0.818,scaleY:0.818,x:-393,y:-297.9}},{t:this.instance_42,p:{scaleX:1.159,scaleY:1.159,x:-389.5,y:-295.9}}]},1).to({state:[{t:this.instance_152,p:{scaleX:0.262,scaleY:0.262,x:89.8,y:-166.2}},{t:this.instance_148,p:{scaleX:0.349,scaleY:0.349,x:-11.8,y:-188.9}},{t:this.instance_144,p:{scaleX:0.483,scaleY:0.483,x:-147.3,y:-224.1}},{t:this.instance_140,p:{scaleX:0.818,scaleY:0.818,x:-393,y:-297.9}},{t:this.instance_41,p:{scaleX:1.159,scaleY:1.159,x:-389.5,y:-295.9}}]},1).to({state:[{t:this.instance_153,p:{scaleX:0.262,scaleY:0.262,x:89.8,y:-166.2}},{t:this.instance_149,p:{scaleX:0.349,scaleY:0.349,x:-11.8,y:-188.9}},{t:this.instance_145,p:{scaleX:0.483,scaleY:0.483,x:-147.3,y:-224.1}},{t:this.instance_141,p:{scaleX:0.818,scaleY:0.818,x:-393,y:-297.9}},{t:this.instance_52,p:{scaleX:1.159,scaleY:1.159,x:-389.5,y:-295.9}}]},1).to({state:[{t:this.instance_154,p:{scaleX:0.262,scaleY:0.262,x:90,y:-165.7}},{t:this.instance_150,p:{scaleX:0.349,scaleY:0.349,x:-11.6,y:-188.4}},{t:this.instance_146,p:{scaleX:0.483,scaleY:0.483,x:-147,y:-223.6}},{t:this.instance_142,p:{scaleX:0.818,scaleY:0.818,x:-392.8,y:-297.4}},{t:this.instance_138,p:{scaleX:1.159,scaleY:1.159,x:-389.2,y:-295.4}},{t:this.instance_43,p:{scaleX:1.467,scaleY:1.467,x:-354.3,y:-246.4}}]},1).to({state:[{t:this.instance_155,p:{scaleX:0.262,scaleY:0.262,x:90,y:-165.7}},{t:this.instance_151,p:{scaleX:0.349,scaleY:0.349,x:-11.6,y:-188.4}},{t:this.instance_147,p:{scaleX:0.483,scaleY:0.483,x:-147,y:-223.6}},{t:this.instance_143,p:{scaleX:0.818,scaleY:0.818,x:-392.8,y:-297.4}},{t:this.instance_139,p:{scaleX:1.159,scaleY:1.159,x:-389.2,y:-295.4}},{t:this.instance_42,p:{scaleX:1.467,scaleY:1.467,x:-354.3,y:-246.4}}]},1).to({state:[{t:this.instance_156,p:{scaleX:0.262,scaleY:0.262,x:90,y:-165.7}},{t:this.instance_152,p:{scaleX:0.349,scaleY:0.349,x:-11.6,y:-188.4}},{t:this.instance_148,p:{scaleX:0.483,scaleY:0.483,x:-147,y:-223.6}},{t:this.instance_144,p:{scaleX:0.818,scaleY:0.818,x:-392.8,y:-297.4}},{t:this.instance_140,p:{scaleX:1.159,scaleY:1.159,x:-389.2,y:-295.4}},{t:this.instance_41,p:{scaleX:1.467,scaleY:1.467,x:-354.3,y:-246.4}}]},1).to({state:[{t:this.instance_157,p:{scaleX:0.262,scaleY:0.262,x:90,y:-165.7}},{t:this.instance_153,p:{scaleX:0.349,scaleY:0.349,x:-11.6,y:-188.4}},{t:this.instance_149,p:{scaleX:0.483,scaleY:0.483,x:-147,y:-223.6}},{t:this.instance_145,p:{scaleX:0.818,scaleY:0.818,x:-392.8,y:-297.4}},{t:this.instance_141,p:{scaleX:1.159,scaleY:1.159,x:-389.2,y:-295.4}},{t:this.instance_52,p:{scaleX:1.467,scaleY:1.467,x:-354.3,y:-246.4}}]},1).to({state:[{t:this.instance_158},{t:this.instance_154,p:{scaleX:0.349,scaleY:0.349,x:-11.6,y:-188.4}},{t:this.instance_150,p:{scaleX:0.483,scaleY:0.483,x:-147,y:-223.6}},{t:this.instance_146,p:{scaleX:0.818,scaleY:0.818,x:-392.8,y:-297.4}},{t:this.instance_142,p:{scaleX:1.159,scaleY:1.159,x:-389.2,y:-295.4}},{t:this.instance_138,p:{scaleX:1.467,scaleY:1.467,x:-354.3,y:-246.4}},{t:this.instance_43,p:{scaleX:1.873,scaleY:1.873,x:-311.7,y:-180.2}}]},1).to({state:[{t:this.instance_159},{t:this.instance_155,p:{scaleX:0.349,scaleY:0.349,x:-11.6,y:-188.4}},{t:this.instance_151,p:{scaleX:0.483,scaleY:0.483,x:-147,y:-223.6}},{t:this.instance_147,p:{scaleX:0.818,scaleY:0.818,x:-392.8,y:-297.4}},{t:this.instance_143,p:{scaleX:1.159,scaleY:1.159,x:-389.2,y:-295.4}},{t:this.instance_139,p:{scaleX:1.467,scaleY:1.467,x:-354.3,y:-246.4}},{t:this.instance_42,p:{scaleX:1.873,scaleY:1.873,x:-311.7,y:-180.2}}]},1).to({state:[{t:this.instance_160},{t:this.instance_156,p:{scaleX:0.349,scaleY:0.349,x:-11.6,y:-188.4}},{t:this.instance_152,p:{scaleX:0.483,scaleY:0.483,x:-147,y:-223.6}},{t:this.instance_148,p:{scaleX:0.818,scaleY:0.818,x:-392.8,y:-297.4}},{t:this.instance_144,p:{scaleX:1.159,scaleY:1.159,x:-389.2,y:-295.4}},{t:this.instance_140,p:{scaleX:1.467,scaleY:1.467,x:-354.3,y:-246.4}},{t:this.instance_41,p:{scaleX:1.873,scaleY:1.873,x:-311.7,y:-180.2}}]},1).to({state:[{t:this.instance_161},{t:this.instance_157,p:{scaleX:0.349,scaleY:0.349,x:-11.6,y:-188.4}},{t:this.instance_153,p:{scaleX:0.483,scaleY:0.483,x:-147,y:-223.6}},{t:this.instance_149,p:{scaleX:0.818,scaleY:0.818,x:-392.8,y:-297.4}},{t:this.instance_145,p:{scaleX:1.159,scaleY:1.159,x:-389.2,y:-295.4}},{t:this.instance_141,p:{scaleX:1.467,scaleY:1.467,x:-354.3,y:-246.4}},{t:this.instance_52,p:{scaleX:1.873,scaleY:1.873,x:-311.7,y:-180.2}}]},1).to({state:[{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_53,p:{scaleX:1.873,scaleY:1.873,x:-311.7,y:-180.2}}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56,p:{scaleX:0.998,scaleY:0.998,rotation:137.6,x:237.2,y:-202.5}}]},5).to({state:[{t:this.instance_57}]},6).to({state:[]},5).to({state:[{t:this.instance_169},{t:this.instance_168}]},34).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(259).to({_off:false},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({scaleX:4.21,scaleY:4.21,x:139.8,y:158.6},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).to({_off:true},1).wait(380));
	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(290).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false,scaleX:1.48,scaleY:1.48,x:-366.1,y:-198.9},0).to({_off:true},1).wait(196).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false,scaleX:1.22,scaleY:1.22,skewX:180,x:-300.4,y:98.1},0).to({_off:true},1).wait(8).to({_off:false,skewX:90,skewY:-90,x:82.4,y:323},0).to({_off:true},1).wait(7).to({_off:false,scaleX:1.21,scaleY:1.21,skewX:105.9,skewY:-74.1,x:-3.8,y:332.4},0).to({_off:true},1).wait(10).to({_off:false,scaleX:1.48,scaleY:1.48,skewX:0,skewY:0,x:-366.1,y:-198.9},0).to({_off:true},1).wait(12).to({_off:false,scaleX:0.27,scaleY:0.27,x:-2.5,y:-150},0).to({_off:true},1).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(292).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false,scaleX:1.48,scaleY:1.48,x:-366.1,y:-198.9},0).to({_off:true},1).wait(233).to({_off:false,scaleX:1.22,scaleY:1.22,skewX:180,x:-300.4,y:98.1},0).to({_off:true},1).wait(8).to({_off:false,skewX:90,skewY:-90,x:82.4,y:323},0).to({_off:true},1).wait(7).to({_off:false,scaleX:1.21,scaleY:1.21,skewX:105.9,skewY:-74.1,x:-3.8,y:332.4},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,scaleX:1.48,scaleY:1.48,skewX:0,skewY:0,x:-366.1,y:-198.9},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-2.5,y:-150},0).to({_off:true},1).wait(93));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(293).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:-366.1,y:-198.9},0).to({_off:true},1).wait(235).to({_off:false,scaleX:1.22,scaleY:1.22,skewX:180,x:-300.4,y:98.1},0).to({_off:true},1).wait(8).to({_off:false,skewX:90,skewY:-90,x:82.4,y:323},0).to({_off:true},1).wait(7).to({_off:false,scaleX:1.21,scaleY:1.21,skewX:105.9,skewY:-74.1,x:-3.8,y:332.4},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,scaleX:1.48,scaleY:1.48,skewX:0,skewY:0,x:-366.1,y:-198.9},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(95));

	// 图层 14
	this.instance_170 = new lib.dx();
	this.instance_170.setTransform(-319.9,305.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_170).to({_off:true},150).wait(516));

	// 图层 2
	this.instance_171 = new lib.bj();
	this.instance_171.setTransform(-320,-480,1,1.563);

	this.timeline.addTween(cjs.Tween.get(this.instance_171).wait(666));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-445.7,-539.4,765.8,1559.5);


(lib.ani2_d1_mc = function() {
	this.initialize();

	// nextBtn
	this.nextBtn = new lib.ani2_yj29();
	this.nextBtn.setTransform(462.4,434,0.601,0.299,0,0,0,204.1,142.2);
	new cjs.ButtonHelper(this.nextBtn, 0, 1, 2, false, new lib.ani2_yj29(), 3);

	// changeBtn
	this.changeBtn = new lib.ani2_yj29();
	this.changeBtn.setTransform(166.4,434,0.601,0.299,0,0,0,204.1,142.2);
	new cjs.ButtonHelper(this.changeBtn, 0, 1, 2, false, new lib.ani2_yj29(), 3);

	// 图层 2
	this.gtmc = new lib.ani1_元件48();
	this.gtmc.setTransform(320,248.4,1.91,1.91,0,0,0,167.5,79);

	// 图层 1
	this.instance = new lib.d1();

	this.addChild(this.instance,this.gtmc,this.changeBtn,this.nextBtn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,645,1500);


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


(lib.ani2_mc_dh1 = function(mode,startPosition,loop) {
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
	this.kardMc = new lib.ani2_gezhongmc();
	this.kardMc.setTransform(333.4,480);
	this.kardMc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kardMc).wait(12).to({_off:false},0).wait(8));

	// 图层 5
	this.instance = new lib.role2_001();
	this.instance.setTransform(321.8,1255.9,1,1,0,0,0,275.9,331.2);
	this.instance._off = true;

	this.instance_1 = new lib.ani2_daitoubingGif();
	this.instance_1.setTransform(321.9,806.7,1.104,1.104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:793.9},6).to({y:803.9},3).to({_off:true},1).wait(9));

	// greetMc
	this.greetMc = new lib.ani2_d1_mc();
	this.greetMc.setTransform(332.8,-1035.6,1,1,0,0,0,320,480);
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

	this.instance_4 = new lib.ani2_wenzimc();
	this.instance_4.setTransform(333.1,242);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},11).wait(9));

	// 图层 6
	this.instance_5 = new lib.ani2_bjmc();
	this.instance_5.setTransform(488.1,755.4,1,1,0,0,0,155,275.4);
	this.instance_5.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, 10))];
	this.instance_5.cache(-322,-482,644,1504);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.7,-59,886.1,1563.1);


// stage content:
(lib.aniUI02 = function() {
	this.initialize();

	// ui
	this.ui = new lib.ani2_mc_dh1();
	this.ui.setTransform(265,450.9,1,1,0,0,0,278.1,450.9);

	this.addChild(this.ui);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(189.2,691,886.1,1563.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;