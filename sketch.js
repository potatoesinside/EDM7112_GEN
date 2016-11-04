var sizo1, sizo2, sizo3;
var qteDeRectRandom;
var c;
var rectRandom1, rectRandom2, rectRandom3, rectRandom4;
var randWhenReleased1, randWhenReleased2, randWhenReleased3, randWhenReleased4, randWhenReleased5, randWhenReleased6, randWhenReleased7, randWhenReleased8;
var rectGros1;
var rectGros2;
var rectGros3;
var rectGros4;

var rectMoyen1;
var rectMoyen1Stroke;
var rectMoyen2;
var rectMoyen2Stroke;
var rectMoyen3;
var rectMoyen3Stroke;
var rectMoyen4;
var rectMoyen4Stroke;

var rectPetit1;
var rectPetit2;
var rectPetit3;
var rectPetit4;

var rectRose1;
var rectRose2;
var rectRose3;
var rectRose4;

var ecartMouseXWhenClick;
var ecartMouseYWhenClick;
var mouseXWhenClick;
var mouseYWhenClick;

var xTri;
var yTri;

var bgColor;
var momentClick;
var strokeColor;

var textureBleueFoncee = [];
var newClick;

var changeMomentClick;
var distSourisMid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  angleMode(RADIANS);
  rectMode(CENTER);

  sizo1 = random(0.7, 1.3);
  sizo2 = random(0.7, 1.3);
  sizo3 = random(0.5, 2);

  newClick = true;
  randWhenReleased1 = 0;
  randWhenReleased2 = 0;
  randWhenReleased3 = 0;
  randWhenReleased4 = 0;
  randWhenReleased5 = 0;
  randWhenReleased6 = 0;
  randWhenReleased7 = 0;
  randWhenReleased8 = 0;


  rectGros1 = new RectOP();
  rectGros2 = new RectOP();
  rectGros3 = new RectOP();
  rectGros4 = new RectOP();

  rectMoyen1 = new RectBleu();
  rectMoyen1Stroke = new RectBleu();
  rectMoyen2 = new RectBleu();
  rectMoyen2Stroke = new RectBleu();
  rectMoyen3 = new RectBleu();
  rectMoyen3Stroke = new RectBleu();
  rectMoyen4 = new RectBleu();
  rectMoyen4Stroke = new RectBleu();

  rectPetit1 = new RectBrun();
  rectPetit2 = new RectBrun();
  rectPetit3 = new RectBrun();
  rectPetit4 = new RectBrun();

  rectRose1 = new rectRose();
  rectRose2 = new rectRose();
  rectRose3 = new rectRose();
  rectRose4 = new rectRose();
  rectRose5 = new rectRose();

  xTri = 40;
  yTri = 55;


  bgColor = 0;

  changeMomentClick = true;
  strokeColor = 0;

  for (var i = 0; i < 75; i++) {
    textureBleueFoncee[i] = new CarreFonce();
  }

  qteDeRectRandom = random(1, 11);


  background(0);

  frameRate(60);
}


function mouseReleased() {
  xTri = random(0, 50);
  background(0);
  changeMomentClick = true;

}

function draw() {
  translate(width / 2, height / 2);
  distSourisMid = dist(width / 2, height / 2, mouseX, mouseY);

  push();
  rotate(PI / 4);
  fill(333, 144, 200);
  noStroke();
  rect(11, 11, 124, 142);
  pop();
  if (mouseIsPressed) {
    //  var distSourisMid = dist(width/2,height/2, mouseX,mouseY);
    rotate(PI / 4 + mouseX * 0.01);
    rotate(random(0.01, map(distSourisMid, 0, width + 100, 0, 0.7)));
    xTri = random(-10, map(distSourisMid, 0, width + 100, 0, 1111));
    if (changeMomentClick) {
      momentClick = millis();
      changeMomentClick = false;
    }
    if (millis() - momentClick > 3000) {
      bgColor = random(0, 40);
      background(bgColor);
      strokeColor = bgColor;
    } else {
      background(0);
      strokeColor = 0;
    }
  } else {
    background(0);
    strokeColor = 0;
  }



  /////////////////////////////ORANGE

  //rect droite
  rectGros1.size = sizo1 + randWhenReleased5 * 0.025;
  rectGros1.xTrans = +165;
  rectGros1.yTrans = +20;
  rectGros1.rotAngle = 5 * PI / 4;
  rectGros1.drawRect();

  //rect gauche
  rectGros2.size = sizo1 + randWhenReleased8 * 0.025;
  rectGros2.xTrans = -165;
  rectGros2.yTrans = -20;
  rectGros2.rotAngle = PI / 4;
  rectGros2.drawRect();

  //rect bot
  rectGros3.size = sizo2 + randWhenReleased6 * 0.025;
  rectGros3.xTrans = -20;
  rectGros3.yTrans = +165;
  rectGros3.rotAngle = 7 * PI / 4;
  rectGros3.drawRect();

  //rect top
  rectGros4.size = sizo2 + randWhenReleased7 * 0.025;
  rectGros4.xTrans = +20;
  rectGros4.yTrans = -165;
  rectGros4.rotAngle = 3 * PI / 4;
  rectGros4.drawRect();


  /////////////////////////////BLEU

  //rect droite
  rectMoyen1.xTrans = +115;
  rectMoyen1.yTrans = -70;
  rectMoyen1.rotAngle = PI / 4;
  rectMoyen1.drawRect();
  push();
  rotate(3 * PI / 2);
  noStroke();
  BlocTextureFoncee();
  pop();
  push();
  rectMoyen1Stroke.xTrans = +115;
  rectMoyen1Stroke.yTrans = -70;
  rectMoyen1Stroke.rotAngle = PI / 4;
  rectMoyen1Stroke.alphaValue = 0;
  rectMoyen1Stroke.drawRect();
  pop();

  //rect gauche
  rectMoyen2.xTrans = -115;
  rectMoyen2.yTrans = +70;
  rectMoyen2.rotAngle = PI / 4;
  rectMoyen2.drawRect();
  push();
  rotate(3 * PI / 6);
  noStroke();
  BlocTextureFoncee();
  pop();
  push();
  rectMoyen2Stroke.xTrans = -115;
  rectMoyen2Stroke.yTrans = +70;
  rectMoyen2Stroke.rotAngle = PI / 4;
  rectMoyen2Stroke.alphaValue = 0;
  rectMoyen2Stroke.drawRect();
  pop();

  //rect bot
  rectMoyen3.xTrans = +70;
  rectMoyen3.yTrans = +115;
  rectMoyen3.rotAngle = 3 * PI / 4;
  rectMoyen3.drawRect();
  push();
  noStroke();
  BlocTextureFoncee();
  pop();
  push();
  rectMoyen3Stroke.xTrans = 70;
  rectMoyen3Stroke.yTrans = 115;
  rectMoyen3Stroke.rotAngle = 3 * PI / 4;
  rectMoyen3Stroke.alphaValue = 0;
  rectMoyen3Stroke.drawRect();
  pop();

  //rect top
  rectMoyen4.size = 0.63;
  rectMoyen4.xTrans = -70;
  rectMoyen4.yTrans = -115;
  rectMoyen4.rotAngle = 3 * PI / 4;
  rectMoyen4.drawRect();
  push();
  noStroke();
  rotate(2 * PI / 2);
  BlocTextureFoncee();
  pop();
  push();
  rectMoyen4Stroke.xTrans = -70;
  rectMoyen4Stroke.yTrans = -115;
  rectMoyen4Stroke.rotAngle = 3 * PI / 4;
  rectMoyen4Stroke.alphaValue = 0;
  rectMoyen4Stroke.drawRect();
  pop();


  /////////////////////////////BRUN

  //rect droite
  rectPetit1.size = 0.42 * sizo1;
  rectPetit1.xTrans = +43 + randWhenReleased1;
  rectPetit1.yTrans = -3 + randWhenReleased2;
  rectPetit1.rotAngle = 3 * PI / 4;
  rectPetit1.drawRect();

  //rect gauche
  rectPetit2.size = 0.42 * sizo2;
  rectPetit2.xTrans = -43 + randWhenReleased1;
  rectPetit2.yTrans = +3 + randWhenReleased4;
  rectPetit2.rotAngle = 3 * PI / 4;
  rectPetit2.drawRect();

  //rect bot
  rectPetit3.size = 0.42 * sizo1;
  rectPetit3.xTrans = +3 + randWhenReleased3;
  rectPetit3.yTrans = +43 + randWhenReleased2;
  rectPetit3.rotAngle = PI / 4;
  rectPetit3.drawRect();

  //rect top
  rectPetit4.size = 0.42 * sizo2;
  rectPetit4.xTrans = -3 + randWhenReleased2;
  rectPetit4.yTrans = -43 + randWhenReleased4;
  rectPetit4.rotAngle = PI / 4;
  rectPetit4.drawRect();


  /////////////////////////////ROSE
  //grosses barres roses
  if (mouseIsPressed) {
    if (millis() - momentClick > 1000) {
      push();
      noStroke();
      fill(14, 80 + 150, 167 - 100);
      shearY(PI / 6 + distSourisMid * 0.01);
      rect(random(0, width), random(0, height), 100, 100);
      pop();
      if (millis() - momentClick > 5000) {
        rotate(random(0, 2 * PI));
        rectRose5.a = random(0, 1);
        rectRose5.size = random(width * 0.002, width * 0.1002);
        rectRose5.xTrans = 0;
        rectRose5.yTrans = 0;
        rectRose5.rotAngle = 3 * PI / 4;
        rectRose5.drawRect();
        if (millis() - momentClick > 7500) {
          rectRose5.size = random(width * 0.002, width * 0.1002);
          rectRose5.xTrans = 0;
          rectRose5.yTrans = 0;
          rectRose5.rotAngle = 3 * PI / 4;
          rectRose5.drawRect();
          rectRose5.size = random(width * 0.002, width * 0.1002);
          rectRose5.xTrans = 0;
          rectRose5.yTrans = 0;
          rectRose5.rotAngle = 3 * PI / 4;
          rectRose5.drawRect();
          if (millis() - momentClick > 10000) {
            blendMode(SCREEN);
            frameRate(4);
          }
        }
      }
      newClick = false;
    }
  } else {
    //    newClick = true;
    blendMode(BLEND);
    frameRate(60);
    momentClick = millis();
  }
  //rect gauche
  rectRose1.size = 1;
  rectRose1.xTrans = -26;
  rectRose1.yTrans = -14;
  rectRose1.rotAngle = 3 * PI / 4;
  rectRose1.drawRect();

  //rect droite
  rectRose2.size = 1;
  rectRose2.xTrans = 26;
  rectRose2.yTrans = 14;
  rectRose2.rotAngle = 3 * PI / 4;
  rectRose2.drawRect();

  //rect bot
  rectRose3.size = 1;
  rectRose3.xTrans = -14;
  rectRose3.yTrans = 26;
  rectRose3.rotAngle = PI / 4;
  rectRose3.drawRect();

  //rect top
  rectRose4.size = 1;
  rectRose4.xTrans = 14;
  rectRose4.yTrans = -26;
  rectRose4.rotAngle = PI / 4;
  rectRose4.drawRect();

  //carre rose mid
  push();
  rotate(PI / 4);
  fill(333, 144, 200);
  noStroke();
  rect(0, 0, 14, 14);
  pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function RectOP() {
  this.size = 1;
  this.drawRect = function() {
    push();
    translate(this.xTrans + randWhenReleased3, this.yTrans + randWhenReleased4);
    rotate(this.rotAngle + randWhenReleased1 * 0.005); //rot on itself
    rotate(distSourisMid * 0.0001);
    fill(14, 80, 167);
    push();
    noStroke();
    rect(0, 0, 97 * this.size, 150 * this.size);
    pop();

    //rect fonce
    push();
    noStroke();
    fill(14, 80 + 150, 167 - 100);
    push();
    rotate(.1);
    shearX(PI / 6);
    shearY(PI / 6 + distSourisMid * 0.01);
    translate(-25, 50);
    rect(0, 0, 100 * this.size * 0.3 * sizo3, 100 * this.size * 0.3 * sizo3);
    pop();
    translate(-20, -72);

    triangle(xTri, yTri, 70, 50, 66, 75);
    triangle(xTri, yTri, -30, 60, -26, 25);
    translate(5, -32);
    rotate(0.1);
    triangle(xTri, yTri, 70, 50, 66, 75);
    triangle(xTri, yTri, -25, 60, -26, 29);
    pop();

    //rect contours
    noFill();
    stroke(strokeColor);
    strokeWeight(12);
    rect(0, 0, 97 * this.size, 150 * this.size);
    pop();
  }
}


function RectBrun() {
  this.size = 1;
  this.drawRect = function() {
    push();
    translate(this.xTrans, this.yTrans);
    rotate(this.rotAngle); //rot on itself
    fill(52, 240, 77);
    push();
    noStroke();
    rect(0, 0, 97 * this.size, 150 * this.size);
    pop();

    //rect contours
    noFill();
    stroke(strokeColor);
    strokeWeight(5);
    rect(0, 0, 97 * this.size, 150 * this.size);
    pop();
  }

}

function RectBleu() {
  this.size = 0.63;
  this.drawRect = function() {
    push();
    translate(this.xTrans, this.yTrans);
    rotate(this.rotAngle); //rot on itself
    fill(200, 240, 113, this.alphaValue);
    stroke(strokeColor);
    strokeWeight(5);
    rect(0, 0, 97 * this.size, 150 * this.size);
    pop();
  }
}

function BlocTextureFoncee() {
  var qteDeCarres = textureBleueFoncee.length;
  for (var i = 0; i < qteDeCarres; i++) {
    var c = textureBleueFoncee[i];
    c.draw();
  }
}

function CarreFonce() {
  this.x = random(40, 100);
  this.y = random(70, 100);
  this.size = random(3, 10);

  this.draw = function() {
    push();
    translate(90, -5);
    rotate(PI / 4);
    if (this.x >= 115) {
      this.x = this.x + random(-2, 0);
    }
    if (this.x < 115) {
      this.x = this.x + random(-1, 1);
    }
    if (this.x <= 25) {
      this.x = this.x + random(0, 2);
    } else this.x = this.x + random(-1, 1);

    if (this.y >= 90) {
      this.y = this.y + random(-2, 0);
    }
    if (this.y < 90) {
      this.y = this.y + random(-1, 1);
    }
    if (this.y <= 72) {
      this.y = this.y + random(0, 2);
    } else this.y = this.y + random(-1, 1);

    //    this.y = this.y + random(-1,1);
    fill(220, 100, 80);
    rect(this.x, this.y, this.size, this.size, 3);
    pop();
  }
}

function rectRose() {
  this.size = 1;
  this.a = 1;
  this.drawRect = function() {
    push();
    translate(this.xTrans + randWhenReleased1, this.yTrans + randWhenReleased2);
    rotate(this.rotAngle); //rot on itself
    fill(333, 140, 200, this.a);
    strokeWeight();
    rect(0, 0, 4 * this.size, 70 * this.size);
    pop();
  }
}

function mouseReleased() {
  randWhenReleased1 = random(-30, 30);
  randWhenReleased2 = random(-30, 30);
  randWhenReleased3 = random(-30, 30);
  randWhenReleased4 = random(-30, 30);
  randWhenReleased5 = random(0, 30);
  randWhenReleased6 = random(0, 30);
  randWhenReleased7 = random(0, 30);
  randWhenReleased8 = random(0, 30);


  momentClick = millis();
}

function autoScale(targetWidth, targetHeight) {
  var aw = windowWidth / targetWidth;
  var ah = windowHeight / targetHeight;
  translate(windowWidth * 0.5, windowHeight * 0.5);

  scale(min(aw, ah));
  translate(-targetWidth * 0.5, -targetHeight * 0.5);

}