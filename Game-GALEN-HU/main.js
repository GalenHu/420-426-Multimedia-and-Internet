const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
let countLvl = -2;
let gOver = false;
let dead = false;
let playmusic = false;
let bgmusic = false;
let jscare = false;
let bgsound = new Audio("Skyrim-nighttime.mp3");
let playoncejscare = false;


class Character {
  constructor(x, y) {
    this.xPosition = x;
    this.yPosition = y;
    this.radius = 5;
    this.speed = 5;
    this.xPosition;
    this.yPosition;
    this.up;
    this.down;
    this.left;
    this.right;
    this.color = "red";
  }

  drawChar() {
    //console.log("im a character");
    context.beginPath();
    context.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.closePath();
    context.fill();
    context.stroke();
  }
  update() {
    //key
    this.checkKey();
    //check border
    this.border();
    //touch an obstacle?
    this.contact();
    //draw updated position of character
    this.drawChar();
  }
  checkKey() {
    if (this.up) {
      this.yPosition = this.yPosition - this.speed;
    }
    if (this.down) {
      this.yPosition = this.yPosition + this.speed;
    }
    if (this.left) {
      this.xPosition = this.xPosition - this.speed;
    }
    if (this.right) {
      this.xPosition = this.xPosition + this.speed;
    }
  }
  border() {
    if (this.yPosition < this.radius) {
      this.yPosition = this.radius;
    }
    if (this.yPosition > canvas.height - this.radius) {
      this.yPosition = canvas.height - this.radius;
    }
    if (this.xPosition < this.radius) {
      this.xPosition = this.radius;
    }
    if (this.xPosition > canvas.width - this.radius) {
      this.xPosition = canvas.width - this.radius;
    }
  }

  contact(touch, color) {
    if (touch == true) {
      this.color = color;
    }
    if (touch == false) {
      this.color = color;
    }
  }
}

class Solid {
  constructor(x1, y1, x2, y2, color) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.color = color;
  }

  drawPlat() {
    context.save();
    context.beginPath();
    context.fillStyle = this.color;
    context.rect(this.x1, this.y1, this.x2, this.y2);
    context.closePath();
    context.fill();
    context.restore();
  }

  update() {
    this.drawPlat();
    
  }
}

nextLevel();
animate();
canvas.focus();

function menuStart(){
  //draw character
mychar = new Character(230, 490);
mychar.drawChar();

  context.beginPath();
  context.rect(166,420,129,80)
  context.closePath();
  context.stroke();
  context.font = "24px Arial";
  context.fillText("Click here to start game",170,450,120)
  context.fillText("97.9% of people couldn't pass the last lvl!", 40,115,400)
  context.fillText("Use headphone for best experience",40,160,400)


}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  timer();

  // Check which key was pressed and call the appropriate Car function.
  window.addEventListener("keydown", doKeyDown); //add false parameter?
  window.addEventListener("keyup", doKeyUp, false); //add false parameter?
  document.getElementById("myCanvas").onmousemove = findObjectCoords;

  if (!gOver) {
    switch (countLvl) {
      case -1:
        menuStart();
        break;
      case 0:
        lvl1editor();
        break;
      case 1:
        lvl2editor();
        break;
      case 2:
        lvl3editor();
      case 3:
        lvl4editor();
        context.fillStyle = "black";
        context.fillText("stay on edge and",20,300);
        context.fillText("backstab your enemy",20,330);
      case 4:
        finishscreeneditor();
    }
  }
  if (gOver == true) {
    drawBgImage("awake.jpg");
    if (!dead) {
      gameOverSound();
      dead = true;
      console.log("im dead");
    }
  }
  if(jscare == true){ 
    drawBgImage("curse.jpg");
    if(playoncejscare == false){
      let knock = new Audio("knock.mp3");
      knock.play();
      playoncejscare = true;
      realJump();
      //setTimeout(realJump(),5000);
    }
  }
}

function timer() {
  if (!gOver) {
    countframe++;
    if (countframe % 60 == 0) {
      sec++;
    }
    document.getElementById("timer").innerHTML = +sec + "s";
  } else {
    document.getElementById("timer").innerHTML = +sec + "s game over";
  }
}

function realJump(){
  backgroundmusic(false);
  let scream = new Audio("Hello.mp3")
  scream.play();
  drawBgImage("curse.jpg");
}

function drawBgImage(source){
  // console.log("drawing image");
  let img = document.createElement("img");
  img.src = source;
  context.drawImage(img, 0, 0, 500, 500);
}

function gameOverSound() {
  backgroundmusic(false);
  let deathsound = new Audio("omae.mp3");
  deathsound.play();
}

function intersect(character, obstacle, AreUGood, AreUJumpscare) {
  myLeft = character.xPosition - character.radius;
  myRight = character.xPosition + character.radius;
  myTop = character.yPosition - character.radius;
  myBottom = character.yPosition + character.radius;
  if (
    myRight > obstacle.x1 &&
    myLeft < obstacle.x1 + obstacle.x2 &&
    myBottom > obstacle.y1 &&
    myTop < obstacle.y1 + obstacle.y2
  ) {
    console.log(
      obstacle.x1,
      obstacle.y1,
      obstacle.x1 + obstacle.x2,
      obstacle.y1 + obstacle.y2,
      "game Over"
    );
    if (AreUGood == false && AreUJumpscare == undefined) {
      gOver = true
    }
    if (AreUGood == true) {
      console.log("Next Level");
      nextLevel();
    }
    if(AreUJumpscare == true){
      console.log("PIKABOO");
      jscare = true
    }
  } else {
    character.contact(false, "red");
    character.speed = 5;
  }
}

function doKeyDown(e) {
  // console.log("test");
  if (e.keyCode == "38" || e.keyCode == "87") {
    // up arrow
    mychar.up = true;
  } else if (e.keyCode == "40" || e.keyCode == "83") {
    // down arrow
    mychar.down = true;
  } else if (e.keyCode == "37" || e.keyCode == "65") {
    // left arrow
    mychar.left = true;
  } else if (e.keyCode == "39" || e.keyCode == "68") {
    // right arrow
    mychar.right = true;
  }
}

function doKeyUp(e) {
  if (e.keyCode == "38" || e.keyCode == "87") {
    // up arrow
    mychar.up = false;
  } else if (e.keyCode == "40" || e.keyCode == "83") {
    // down arrow
    mychar.down = false;
  } else if (e.keyCode == "37" || e.keyCode == "65") {
    // left arrow
    mychar.left = false;
  } else if (e.keyCode == "39" || e.keyCode == "68") {
    // right arrow
    mychar.right = false;
  }
}

function findObjectCoords(mouseEvent) {
  var obj = document.getElementById("myCanvas");
  var obj_left = 0;
  var obj_top = 0;
  var xpos;
  var ypos;
  while (obj.offsetParent) {
    obj_left += obj.offsetLeft;
    obj_top += obj.offsetTop;
    obj = obj.offsetParent;
  }
  if (mouseEvent) {
    //FireFox
    xpos = mouseEvent.pageX;
    ypos = mouseEvent.pageY;
  } else {
    //IE
    xpos = window.event.x + document.body.scrollLeft - 2;
    ypos = window.event.y + document.body.scrollTop - 2;
  }
  xpos -= obj_left;
  ypos -= obj_top;
  document.getElementById("objectCoords").innerHTML = xpos + ", " + ypos;
  console.log(xpos + ", " + ypos);
  mychar.xPosition = xpos;
  mychar.yPosition = ypos

  if(xpos > 166 && xpos < 166+129 && ypos > 420 && ypos < 420+80){
    canvas.addEventListener('click', function(){
      console.log("music start to play");
      if(bgmusic == false){
        backgroundmusic(true);
        bgmusic = true
      }
      if(countLvl == -1)
        nextLevel();
    })
  }
}
function backgroundmusic(playit){
  if(playit){
    bgsound.play();
  }
  else
    bgsound.pause();
}

function nextLevel() {
  countLvl++;
  switch (countLvl) {
    case -1:
      menuStart();
      break;
    case 0:
      document.getElementById("myCanvas").style.cursor = "none";
      lvl1();
      break;
    case 1:
      lvl2();
      break;
    case 2:
      lvl3();
      break;
    case 3:
      lvl4();
      break;
    case 4:
      finishscreen();
  }
}
// #region lvl1
function lvl1() {
  //draw obstacle
  obs1 = new Solid(0, 0, 160, 500, "teal");
  obs2 = new Solid(300, 55, 500, 500, "teal");
  obs3 = new Solid(160, 0, 500, 10, "teal");
  obs1.drawPlat();
  obs2.drawPlat();
  obs3.drawPlat();



  goal1 = new Solid(450, 10, 500, 55, "gold");
}

function lvl1editor() {
  //Check intersection
  intersect(mychar, obs1, false);
  intersect(mychar, obs2, false);
  intersect(mychar, obs3, false);
  intersect(mychar, goal1, true);

  //Check position
  goal1.update();
  obs1.update();
  obs2.update();
  obs3.update();
  mychar.update();
}
// #endregion

// #region lvl2
function lvl2() {
  console.log("This is lvl 2");
  obs1 = new Solid(100, 0, 300, 400, "tomato");
  goal1 = new Solid(0, 0, 100, 100, "gold");
  obs1.drawPlat();
}

function lvl2editor() {
  intersect(mychar, obs1, false);
  intersect(mychar, goal1, true);
  obs1.update();
  goal1.update();
  mychar.update();
}
// #endregion

// #region lvl3

function lvl3() {
  console.log("This is lvl3");
  obs1 = new Solid(100, 0, 50, 450, "slateblue");
  obs2 = new Solid(200, 50, 50, 450, "slateblue");
  obs3 = new Solid(300, 0, 50, 450, "slateblue");
  obs4 = new Solid(400, 50, 50, 450, "slateblue");

  obs1.drawPlat();
  obs2.drawPlat();
  obs3.drawPlat();
  obs4.drawPlat();

  goal1 = new Solid(450,450,50,50,"gold");
}

function lvl3editor() {
  intersect(mychar, obs1, false);
  intersect(mychar, obs2, false);
  intersect(mychar, obs3, false);
  intersect(mychar, obs4, false);
  intersect(mychar, goal1, true);

  obs1.update();
  obs2.update();
  obs3.update();
  obs4.update();
  goal1.update();

  mychar.update();
}

// #endregion

// #region lvl4

function lvl4(){
  obs1 = new Solid(100, 380,389,50,"gray");
  obs2 = new Solid(0, 270, 300,90,"gray");
  obs3 = new Solid(330,319,200,30,"gray");
  obs4 = new Solid(477,354,20,20,"white");
  obs5 = new Solid(300,270,150,20,"gray");
  //left border
  obs6 = new Solid(0,0,10,500,"gray");
  //top border
  obs7 = new Solid(0,0,500,10,"gray");
  //right border
  obs8 = new Solid(490,0,10,320,"gray");
  //tricky block
  obs9 = new Solid(240,65,20,15,"gold");
  obs10 = new Solid(242,64,16,1,"white");
  //invisible middle block
  obs11 = new Solid(190,80,110,103,"rgba(248, 248, 255,0.42)");
  //more wall
  obs12 = new Solid(0,200,182,100,"gray");
  obs13 = new Solid(0,0,174,200,"gray");
  obs14 = new Solid(0,0,500,48,"gray");
  obs15 = new Solid(320,48,180,192,"gray");
  obs16 = new Solid(220,200,100,40,"gray");
}

function lvl4editor(){
  intersect(mychar,obs1,false);
  intersect(mychar,obs2,false);
  intersect(mychar,obs3,false);
  intersect(mychar,obs4,false,true);
  intersect(mychar,obs5,false);
  intersect(mychar,obs6,false,true);
  intersect(mychar,obs7,false);
  intersect(mychar,obs8,false,true);
  intersect(mychar,obs9,false,true);
  intersect(mychar,obs10,true);
  intersect(mychar,obs11,false,true);
  intersect(mychar,obs12,false);
  intersect(mychar,obs13,false);
  intersect(mychar,obs14,false);
  intersect(mychar,obs15,false);
  intersect(mychar,obs16,false);

  
  obs1.update();
  obs2.update();
  obs3.update();
  obs4.update();
  obs5.update();
  obs6.update();
  obs7.update();
  obs8.update();
  obs9.update();
  obs10.update();
  obs11.update();
  obs12.update();
  obs13.update();
  obs14.update();
  obs15.update();
  obs16.update();
  mychar.update();
}
// #endregion

function finishscreen(){

}

function finishscreeneditor(){

}