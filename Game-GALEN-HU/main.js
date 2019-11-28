const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
let countLvl = 0;

class Character {
  radius = 5;
  speed = 5;
  xPosition;
  yPosition;
  up;
  down;
  left;
  right;
  color = "red";

  constructor(x, y) {
    this.xPosition = x;
    this.yPosition = y;
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
  x1;
  x2;
  y1;
  y2;
  color;

  constructor(x1, y1, x2, y2, color) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.color = color;
  }

  drawPlat() {
    context.beginPath();
    context.fillStyle = this.color;
    context.rect(this.x1, this.y1, this.x2, this.y2);
    context.closePath();
    context.fill();
    context.stroke();
  }

  update() {
    this.drawPlat();
  }
}

lvl1();

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Check which key was pressed and call the appropriate Car function.
  window.addEventListener("keydown", doKeyDown); //add false parameter?
  window.addEventListener("keyup", doKeyUp, false); //add false parameter?
  document.getElementById("myCanvas").onmousemove = findObjectCoords;

  switch (countLvl) {
    case 0:
      lvl1editor();
      break;
  }
}

animate();

canvas.focus();

function intersect(character, obstacle, AreUGood) {
  myLeft = character.xPosition - character.radius;
  myRight = character.xPosition + character.radius;
  myTop = character.yPosition - character.radius;
  myBottom = character.yPosition + character.radius;
  if (
    myRight > obstacle.x1 &&
    myLeft < obstacle.x2 &&
    myBottom > obstacle.y1 &&
    myTop < obstacle.y2
  ) {
    // console.log(true);
    character.contact(true, "blue");
    character.speed = 1;
    if (AreUGood == false) {
      gameOver();
    }
    if (AreUGood == true) {
      console.log("Next Level");
      nextLevel();
    }
  } else {
    character.contact(false, "red");
    character.speed = 5;
  }
}

function gameOver() {
  console.log("Game Over");

  let img = document.createElement("img");
  img.src = "awake.jpg";
  context.drawImage(img, 0, 0, 500, 500);
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
  mychar.yPosition = ypos;
}

function nextLevel() {
  countLvl++;
  switch (countLvl) {
    case 1:
      lvl2();
      break;
  }
}

function lvl1() {
  //draw obstacle
  obs1 = new Solid(0, 0, 160, 500, "teal");
  obs2 = new Solid(300, 55, 500, 500, "teal");
  obs3 = new Solid(160, 0, 500, 10, "teal");
  obs1.drawPlat();
  obs2.drawPlat();
  obs3.drawPlat();

  //draw character
  mychar = new Character(230, 490);
  mychar.drawChar();

  goal1 = new Solid(450, 10, 500, 55, "yellow");
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

function lvl2() {
  console.log("This is lvl 2");
}
