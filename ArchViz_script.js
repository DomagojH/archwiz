var cnv;

let b1_m_1;
let img1_m_1;
let b1_m_2;
let img1_m_2;
let b1_l_1;
let img1_lr_1;
let img1_lr_2;
let b1_l_2;
let b1_r_1;
let b1_r_2;
let b2_m_1;
let img2_m_1;
let b2_m_2;
let img2_m_2;
let b2_l_1;
let img2_lr_1;
let b2_l_2;
let b2_r_1;
let b2_r_2;
let b3_m_1;
let img3_m_1;
let b3_m_2;
let img3_m_2;
let b3_l_1;
let img3_lr_1;
let b3_l_2;
let img3_lr_2;
let b3_r_1;
let b3_r_2;

let bl1 = 1;
let bl2 = 0;
let bl3 = 0;
let bl4 = 0;
let bl5 = 0;
let bl6 = 0;
let bl7 = 0;
let bl8 = 0;
let bl9 = 0;

let p_1;
let b_1_1;
let b_1_2;
let b_1_3;
let p_2;
let b_2_1;
let b_2_2;
let b_2_3;
let p_3;
let b_3_1;
let b_3_2;
let b_3_3;
let p_4;
let b_4_1;
let b_4_2;
let b_4_3;
let p_5;
let b_5_1;
let b_5_2;
let b_5_3;
let p_6;
let b_6_1;
let b_6_2;
let b_6_3;
let p_7;
let b_7_1;
let b_7_2;
let b_7_3;
let p_8;
let b_8_1;
let b_8_2;
let b_8_3;
let p_9;
let b_9_1;
let b_9_2;
let b_9_3;

let font;
let textures = true;
let project = 0;

function preload() {
	b1_m_1 = loadModel("models/1_M_1.obj");
	img1_m_1 = loadImage('textures/1_M_1.png');
	b1_m_2 = loadModel("models/1_M_2.obj");
	img1_m_2 = loadImage('textures/1_M_2.png');
	b1_l_1 = loadModel("models/1_L_1.obj");
	img1_lr_1 = loadImage('textures/1_LR_1.png');
  img1_lr_2 = loadImage('textures/1_LR_2.png');
	b1_l_2 = loadModel("models/1_L_2.obj");
	b1_r_1 = loadModel("models/1_R_1.obj");
	b1_r_2 = loadModel("models/1_R_2.obj");
	b2_m_1 = loadModel("models/2_M_1.obj");
	img2_m_1 = loadImage('textures/2_M_1.png');
	b2_m_2 = loadModel("models/2_M_2.obj");
	img2_m_2 = loadImage('textures/2_M_2.png');
	b2_l_1 = loadModel("models/2_L_1.obj");
	img2_lr_1 = loadImage('textures/2_LR_1.png');
	b2_l_2 = loadModel("models/2_L_2.obj");
	b2_r_1 = loadModel("models/2_R_1.obj");
	b2_r_2 = loadModel("models/2_R_2.obj");
	img2_lr_2 = loadImage('textures/2_LR_2.png');
  b3_m_1 = loadModel("models/3_M_1.obj");
  img3_m_1 = loadImage('textures/3_M_1.png');
  b3_m_2 = loadModel("models/3_M_2.obj");
  img3_m_2 = loadImage('textures/3_M_2.png');
  b3_l_1 = loadModel("models/3_L_1.obj");
  img3_lr_1 = loadImage('textures/3_LR_1.png');
  b3_l_2 = loadModel("models/3_L_2.obj");
  img3_lr_2 = loadImage('textures/3_LR_2.png');
  b3_r_1 = loadModel("models/3_R_1.obj");
  b3_r_2 = loadModel("models/3_R_2.obj");

  font=loadFont("fonts/Roboto-Light.ttf");

  if (project != 1) {
    document.getElementById("rightMenuUI").style.visibility = "hidden";
    const uiList = document.querySelectorAll('[id=UI]');
      for (let i = 0; i < uiList.length; i++) {
    uiList[i].style.visibility = "hidden";
    } 
  }
}

function makeButtons() {
	p_1 = createP('Foyer');
  p_1.addClass("textUI");
  p_1.id('UI');
  p_1.parent('canvas_add');
  p_1.position(450, -740, "relative");
	b_1_1 = createButton('/');
  	b_1_1.addClass("disabledButton");
    b_1_1.id('UI');
    b_1_1.style('padding', '1px 8px 1px 8px');
  	b_1_1.mousePressed(b_1_1_down);
    b_1_1.parent('canvas_add');
    b_1_1.position(500, -775, "relative");
  	b_1_2 = createButton('A');
  	b_1_2.parent('canvas_add');
    b_1_2.position(505, -775, "relative");
    b_1_2.addClass("enabledButton");
    b_1_2.id('UI');
  	b_1_2.mousePressed(b_1_2_down);
  	b_1_3 = createButton('B');
  	b_1_3.parent('canvas_add');
    b_1_3.position(510, -775, "relative");
  	b_1_3.addClass("disabledButton");
    b_1_3.id('UI');
  	b_1_3.mousePressed(b_1_3_down);

  	p_2 = createP('1st floor, left room');
  p_2.parent('canvas_add');
  p_2.id('UI');
  p_2.addClass("textUI");
  p_2.position(360, -785, "relative");
  b_2_1 = createButton('/');
  b_2_1.addClass("enabledButton");
    b_2_1.style('padding', '1px 8px 1px 8px');
    b_2_1.mousePressed(b_2_1_down);
    b_2_1.parent('canvas_add');
    b_2_1.id('UI');
    b_2_1.position(500, -820, "relative");
    b_2_2 = createButton('A');
    b_2_2.parent('canvas_add');
    b_2_2.id('UI');
    b_2_2.position(505, -820, "relative");
    b_2_2.addClass("disabledButton");
    b_2_2.mousePressed(b_2_2_down);
    b_2_3 = createButton('B');
    b_2_3.parent('canvas_add');
    b_2_3.id('UI');
    b_2_3.position(510, -820, "relative");
    b_2_3.addClass("disabledButton");
    b_2_3.mousePressed(b_2_3_down);

  	p_3 = createP('1st floor, right room');
  p_3.parent('canvas_add');
  p_3.id('UI');
  p_3.addClass("textUI");
  p_3.position(350, -830, "relative");
  b_3_1 = createButton('/');
    b_3_1.addClass("enabledButton");
    b_3_1.id('UI');
    b_3_1.style('padding', '1px 8px 1px 8px');
    b_3_1.mousePressed(b_3_1_down);
    b_3_1.parent('canvas_add');
    b_3_1.position(500, -865, "relative");
    b_3_2 = createButton('A');
    b_3_2.parent('canvas_add');
    b_3_2.id('UI');
    b_3_2.position(505, -865, "relative");
    b_3_2.addClass("disabledButton");
    b_3_2.mousePressed(b_3_2_down);
    b_3_3 = createButton('B');
    b_3_3.parent('canvas_add');
    b_3_3.id('UI');
    b_3_3.position(510, -865, "relative");
    b_3_3.addClass("disabledButton");
    b_3_3.mousePressed(b_3_3_down);

  	p_4 = createP('2nd floor, middle room');
  p_4.parent('canvas_add');
  p_4.id('UI');
  p_4.addClass("textUI");
  p_4.position(329, -875, "relative");
  b_4_1 = createButton('/');
    b_4_1.addClass("enabledButton");
    b_4_1.id('UI');
    b_4_1.style('padding', '1px 8px 1px 8px');
    b_4_1.mousePressed(b_4_1_down);
    b_4_1.parent('canvas_add');
    b_4_1.position(500, -910, "relative");
    b_4_2 = createButton('A');
    b_4_2.parent('canvas_add');
    b_4_2.id('UI');
    b_4_2.position(505, -910, "relative");
    b_4_2.addClass("disabledButton");
    b_4_2.mousePressed(b_4_2_down);
    b_4_3 = createButton('B');
    b_4_3.parent('canvas_add');
    b_4_3.id('UI');
    b_4_3.position(510, -910, "relative");
    b_4_3.addClass("disabledButton");
    b_4_3.mousePressed(b_4_3_down);

  	p_5 = createP('2nd floor, left room');
  p_5.parent('canvas_add');
  p_5.id('UI');
  p_5.addClass("textUI");
  p_5.position(354, -920, "relative");
  b_5_1 = createButton('/');
    b_5_1.addClass("enabledButton");
    b_5_1.id('UI');
    b_5_1.style('padding', '1px 8px 1px 8px');
    b_5_1.mousePressed(b_5_1_down);
    b_5_1.parent('canvas_add');
    b_5_1.position(500, -955, "relative");
    b_5_2 = createButton('A');
    b_5_2.parent('canvas_add');
    b_5_2.id('UI');
    b_5_2.position(505, -955, "relative");
    b_5_2.addClass("disabledButton");
    b_5_2.mousePressed(b_5_2_down);
    b_5_3 = createButton('B');
    b_5_3.parent('canvas_add');
    b_5_3.id('UI');
    b_5_3.position(510, -955, "relative");
    b_5_3.addClass("disabledButton");
    b_5_3.mousePressed(b_5_3_down);

  	p_6 = createP('2nd floor, right room');
    p_6.parent('canvas_add');
    p_6.id('UI');
    p_6.addClass("textUI");
    p_6.position(345, -965, "relative");
    b_6_1 = createButton('/');
    b_6_1.addClass("enabledButton");
    b_6_1.id('UI');
    b_6_1.style('padding', '1px 8px 1px 8px');
    b_6_1.mousePressed(b_6_1_down);
    b_6_1.parent('canvas_add');
    b_6_1.position(500, -1000, "relative");
    b_6_2 = createButton('A');
    b_6_2.parent('canvas_add');
    b_6_2.position(505, -1000, "relative");
    b_6_2.addClass("disabledButton");
    b_6_2.id('UI');
    b_6_2.mousePressed(b_6_2_down);
    b_6_3 = createButton('B');
    b_6_3.parent('canvas_add');
    b_6_3.id('UI');
    b_6_3.position(510, -1000, "relative");
    b_6_3.addClass("disabledButton");
    b_6_3.mousePressed(b_6_3_down);

    p_7 = createP('Roof, middle');
    p_7.parent('canvas_add');
    p_7.id('UI');
    p_7.addClass("textUI");
    p_7.position(399, -1010, "relative");
    b_7_1 = createButton('/');
    b_7_1.addClass("enabledButton");
    b_7_1.id('UI');
    b_7_1.style('padding', '1px 8px 1px 8px');
    b_7_1.mousePressed(b_7_1_down);
    b_7_1.parent('canvas_add');
    b_7_1.position(500, -1045, "relative");
    b_7_2 = createButton('A');
    b_7_2.parent('canvas_add');
    b_7_2.position(505, -1045, "relative");
    b_7_2.addClass("disabledButton");
    b_7_2.id('UI');
    b_7_2.mousePressed(b_7_2_down);
    b_7_3 = createButton('B');
    b_7_3.parent('canvas_add');
    b_7_3.id('UI');
    b_7_3.position(510, -1045, "relative");
    b_7_3.addClass("disabledButton");
    b_7_3.mousePressed(b_7_3_down);

    p_8 = createP('Roof, left side');
    p_8.parent('canvas_add');
    p_8.id('UI');
    p_8.addClass("textUI");
    p_8.position(390, -1055, "relative");
    b_8_1 = createButton('/');
    b_8_1.addClass("enabledButton");
    b_8_1.id('UI');
    b_8_1.style('padding', '1px 8px 1px 8px');
    b_8_1.mousePressed(b_8_1_down);
    b_8_1.parent('canvas_add');
    b_8_1.position(500, -1090, "relative");
    b_8_2 = createButton('A');
    b_8_2.parent('canvas_add');
    b_8_2.position(505, -1090, "relative");
    b_8_2.addClass("disabledButton");
    b_8_2.id('UI');
    b_8_2.mousePressed(b_8_2_down);
    b_8_3 = createButton('B');
    b_8_3.parent('canvas_add');
    b_8_3.id('UI');
    b_8_3.position(510, -1090, "relative");
    b_8_3.addClass("disabledButton");
    b_8_3.mousePressed(b_8_3_down);

    p_9 = createP('Roof, right side');
    p_9.parent('canvas_add');
    p_9.id('UI');
    p_9.addClass("textUI");
    p_9.position(382, -1100, "relative");
    b_9_1 = createButton('/');
    b_9_1.addClass("enabledButton");
    b_9_1.id('UI');
    b_9_1.style('padding', '1px 8px 1px 8px');
    b_9_1.mousePressed(b_9_1_down);
    b_9_1.parent('canvas_add');
    b_9_1.position(500, -1135, "relative");
    b_9_2 = createButton('A');
    b_9_2.parent('canvas_add');
    b_9_2.position(505, -1135, "relative");
    b_9_2.addClass("disabledButton");
    b_9_2.id('UI');
    b_9_2.mousePressed(b_9_2_down);
    b_9_3 = createButton('B');
    b_9_3.parent('canvas_add');
    b_9_3.id('UI');
    b_9_3.position(510, -1135, "relative");
    b_9_3.addClass("disabledButton");
    b_9_3.mousePressed(b_9_3_down);
}

function setup() {
  cnv = createCanvas(600,750, WEBGL);
  cnv.parent('canvas_add');
  document.oncontextmenu = ()=>false;
  noStroke();
  makeButtons();
  if (project != 1) {
    document.getElementById("rightMenuUI").style.visibility = "hidden";
    const uiList = document.querySelectorAll('[id=UI]');
      for (let i = 0; i < uiList.length; i++) {
    uiList[i].style.visibility = "hidden";
    } 
  }
  document.getElementById("loading").style.visibility = "hidden";
}

function draw() {
  orbitControl();
  orbitControl(0, 0, 0, {freeRotation: false});

  	push();
  	background(13, 15, 27, 0);
  	lights();
  	translate(0, 125);
    rotateY(-PI / 3);
    rotateZ(PI);
    scale(40);

    if (project != 1) {}
    else if (project == 1) {
  	if (bl1 == 0) {} else if (bl1 == 1) {
      if (textures==true) {texture(img1_m_1);}
    	model(b1_m_1);
    	} else if (bl1 == 2) {
    	if (textures==true) {texture(img1_m_2);}
    	model(b1_m_2);
    	}
    	if (bl2 == 0) {} else if (bl2 == 1) {
  	  if (textures==true) {texture(img1_lr_1);}
    	model(b1_l_1);
    	} else if (bl2 == 2) {
    	if (textures==true) {texture(img1_lr_2);}
    	model(b1_l_2);
    	}
    	if (bl3 == 0) {} else if (bl3 == 1) {
  	  if (textures==true) {texture(img1_lr_1);}
    	model(b1_r_1);
    	} else if (bl3 == 2) {
    	if (textures==true) {texture(img1_lr_2);}
    	model(b1_r_2);
    	}
    	if (bl4 == 0) {} else if (bl4 == 1) {
  	  if (textures==true) {texture(img2_m_1);}
    	model(b2_m_1);
    	} else if (bl4 == 2) {
    	if (textures==true) {texture(img2_m_2);}
    	model(b2_m_2);
    	}
    	if (bl5 == 0) {} else if (bl5 == 1) {
  	  if (textures==true) {texture(img2_lr_1);}
    	model(b2_l_1);
    	} else if (bl5 == 2) {
    	if (textures==true) {texture(img2_lr_2);}
    	model(b2_l_2);
    	}
    	if (bl6 == 0) {} else if (bl6 == 1) {
  	  if (textures==true) {texture(img2_lr_1);}
    	model(b2_r_1);
    	} else if (bl6 == 2) {
    	if (textures==true) {texture(img2_lr_2);}
    	model(b2_r_2);
    	}
      if (bl7 == 0) {} else if (bl7 == 1) {
      if (textures==true) {texture(img3_m_1);}
      model(b3_m_1);
      } else if (bl7 == 2) {
      if (textures==true) {texture(img3_m_2);}
      model(b3_m_2);
      }
      if (bl8 == 0) {} else if (bl8 == 1) {
      if (textures==true) {texture(img3_lr_1);}
      model(b3_l_1);
      } else if (bl8 == 2) {
      if (textures==true) {texture(img3_lr_2);}
      model(b3_l_2);
      }
      if (bl9 == 0) {} else if (bl9 == 1) {
      if (textures==true) {texture(img3_lr_1);}
      model(b3_r_1);
      } else if (bl9 == 2) {
      if (textures==true) {texture(img3_lr_2);}
      model(b3_r_2);
      }

  	pop();
  }
}

function windowResized() {
  centerCanvas();
}

function b_1_1_down() {
  bl1 = 0;
  b_1_1.removeClass('disabledButton');
  b_1_1.addClass('enabledButton');
  b_1_2.addClass('disabledButton');
  b_1_3.addClass('disabledButton');
}

function b_1_2_down() {
  bl1 = 1;
  b_1_2.removeClass('disabledButton');
  b_1_2.addClass('enabledButton');
  b_1_1.addClass('disabledButton');
  b_1_3.addClass('disabledButton');
}

function b_1_3_down() {
  bl1 = 2;
  b_1_3.removeClass('disabledButton');
  b_1_3.addClass('enabledButton');
  b_1_1.addClass('disabledButton');
  b_1_2.addClass('disabledButton');
}

function b_2_1_down() {
  bl2 = 0;
  b_2_1.removeClass('disabledButton');
  b_2_1.addClass('enabledButton');
  b_2_2.addClass('disabledButton');
  b_2_3.addClass('disabledButton');
}

function b_2_2_down() {
  bl2 = 1;
  b_2_2.removeClass('disabledButton');
  b_2_2.addClass('enabledButton');
  b_2_1.addClass('disabledButton');
  b_2_3.addClass('disabledButton');
}

function b_2_3_down() {
  bl2 = 2;
  b_2_3.removeClass('disabledButton');
  b_2_3.addClass('enabledButton');
  b_2_1.addClass('disabledButton');
  b_2_2.addClass('disabledButton');
}

function b_3_1_down() {
  bl3 = 0;
  b_3_1.removeClass('disabledButton');
  b_3_1.addClass('enabledButton');
  b_3_2.addClass('disabledButton');
  b_3_3.addClass('disabledButton');
}

function b_3_2_down() {
  bl3 = 1;
  b_3_2.removeClass('disabledButton');
  b_3_2.addClass('enabledButton');
  b_3_1.addClass('disabledButton');
  b_3_3.addClass('disabledButton');
}

function b_3_3_down() {
  bl3 = 2;
  b_3_3.removeClass('disabledButton');
  b_3_3.addClass('enabledButton');
  b_3_1.addClass('disabledButton');
  b_3_2.addClass('disabledButton');
}

function b_4_1_down() {
  bl4 = 0;
  b_4_1.removeClass('disabledButton');
  b_4_1.addClass('enabledButton');
  b_4_2.addClass('disabledButton');
  b_4_3.addClass('disabledButton');
}

function b_4_2_down() {
  bl4 = 1;
  b_4_2.removeClass('disabledButton');
  b_4_2.addClass('enabledButton');
  b_4_1.addClass('disabledButton');
  b_4_3.addClass('disabledButton');
}

function b_4_3_down() {
  bl4 = 2;
  b_4_3.removeClass('disabledButton');
  b_4_3.addClass('enabledButton');
  b_4_1.addClass('disabledButton');
  b_4_2.addClass('disabledButton');
}

function b_5_1_down() {
  bl5 = 0;
  b_5_1.removeClass('disabledButton');
  b_5_1.addClass('enabledButton');
  b_5_2.addClass('disabledButton');
  b_5_3.addClass('disabledButton');
}

function b_5_2_down() {
  bl5 = 1;
  b_5_2.removeClass('disabledButton');
  b_5_2.addClass('enabledButton');
  b_5_1.addClass('disabledButton');
  b_5_3.addClass('disabledButton');
}

function b_5_3_down() {
  bl5 = 2;
  b_5_3.removeClass('disabledButton');
  b_5_3.addClass('enabledButton');
  b_5_1.addClass('disabledButton');
  b_5_2.addClass('disabledButton');
}

function b_6_1_down() {
  bl6 = 0;
  b_6_1.removeClass('disabledButton');
  b_6_1.addClass('enabledButton');
  b_6_2.addClass('disabledButton');
  b_6_3.addClass('disabledButton');
}

function b_6_2_down() {
  bl6 = 1;
  b_6_2.removeClass('disabledButton');
  b_6_2.addClass('enabledButton');
  b_6_1.addClass('disabledButton');
  b_6_3.addClass('disabledButton');
}

function b_6_3_down() {
  bl6 = 2;
  b_6_3.removeClass('disabledButton');
  b_6_3.addClass('enabledButton');
  b_6_1.addClass('disabledButton');
  b_6_2.addClass('disabledButton');
}

function b_7_1_down() {
  bl7 = 0;
  b_7_1.removeClass('disabledButton');
  b_7_1.addClass('enabledButton');
  b_7_2.addClass('disabledButton');
  b_7_3.addClass('disabledButton');
}

function b_7_2_down() {
  bl7 = 1;
  b_7_2.removeClass('disabledButton');
  b_7_2.addClass('enabledButton');
  b_7_1.addClass('disabledButton');
  b_7_3.addClass('disabledButton');
}

function b_7_3_down() {
  bl7 = 2;
  b_7_3.removeClass('disabledButton');
  b_7_3.addClass('enabledButton');
  b_7_1.addClass('disabledButton');
  b_7_2.addClass('disabledButton');
}

function b_8_1_down() {
  bl8 = 0;
  b_8_1.removeClass('disabledButton');
  b_8_1.addClass('enabledButton');
  b_8_2.addClass('disabledButton');
  b_8_3.addClass('disabledButton');
}

function b_8_2_down() {
  bl8 = 1;
  b_8_2.removeClass('disabledButton');
  b_8_2.addClass('enabledButton');
  b_8_1.addClass('disabledButton');
  b_8_3.addClass('disabledButton');
}

function b_8_3_down() {
  bl8 = 2;
  b_8_3.removeClass('disabledButton');
  b_8_3.addClass('enabledButton');
  b_8_1.addClass('disabledButton');
  b_8_2.addClass('disabledButton');
}

function b_9_1_down() {
  bl9 = 0;
  b_9_1.removeClass('disabledButton');
  b_9_1.addClass('enabledButton');
  b_9_2.addClass('disabledButton');
  b_9_3.addClass('disabledButton');
}

function b_9_2_down() {
  bl9 = 1;
  b_9_2.removeClass('disabledButton');
  b_9_2.addClass('enabledButton');
  b_9_1.addClass('disabledButton');
  b_9_3.addClass('disabledButton');
}

function b_9_3_down() {
  bl9 = 2;
  b_9_3.removeClass('disabledButton');
  b_9_3.addClass('enabledButton');
  b_9_1.addClass('disabledButton');
  b_9_2.addClass('disabledButton');
}

function t_0() {
  document.getElementById("t_0").classList.remove("disabledButton");
  document.getElementById("t_0").classList.add('enabledButton');
  document.getElementById("t_1").classList.add('disabledButton');
  textures = false;
}

function t_1() {
  document.getElementById("t_1").classList.remove("disabledButton");
  document.getElementById("t_1").classList.add('enabledButton');
  document.getElementById("t_0").classList.add('disabledButton');
  textures = true;
}

function u_0() {
  document.getElementById("u_0").classList.remove("disabledButton");
  document.getElementById("u_0").classList.add('enabledButton');
  document.getElementById("u_1").classList.add('disabledButton');
  const uiList = document.querySelectorAll('[id=UI]');
  for (let i = 0; i < uiList.length; i++) {
    uiList[i].style.visibility = "hidden";
  }
}

function u_1() {
  document.getElementById("u_1").classList.remove("disabledButton");
  document.getElementById("u_1").classList.add('enabledButton');
  document.getElementById("u_0").classList.add('disabledButton');
  const uiList = document.querySelectorAll('[id=UI]');
  for (let i = 0; i < uiList.length; i++) {
    uiList[i].style.visibility = "visible";
  }
}

function w_0() {
  document.getElementById("w_0").classList.remove("disabledButton");
  document.getElementById("w_0").classList.add('enabledButton');
  document.getElementById("w_1").classList.add('disabledButton');
  noStroke();
}

function w_1() {
  document.getElementById("w_1").classList.remove("disabledButton");
  document.getElementById("w_1").classList.add('enabledButton');
  document.getElementById("w_0").classList.add('disabledButton');
  stroke();
}

function newSelect() {
  project = document.getElementById("projectSelection").value;
  if (project != 1) {
    document.getElementById("rightMenuUI").style.visibility = "hidden";
    const uiList = document.querySelectorAll('[id=UI]');
      for (let i = 0; i < uiList.length; i++) {
    uiList[i].style.visibility = "hidden";
    } 
  } else if (project == 1) {
      document.getElementById("rightMenuUI").style.visibility = "visible";
      const uiList = document.querySelectorAll('[id=UI]');
      for (let i = 0; i < uiList.length; i++) {
     uiList[i].style.visibility = "visible";
    }
  }
}