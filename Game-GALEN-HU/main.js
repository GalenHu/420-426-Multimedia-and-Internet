var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

class Character {
  radius = 5;
  xPosition;
  yPosition;
  up;
  down;
  left;
  right;
  constructor(x, y) {
    this.xPosition = x;
    this.yPosition = y;
  }

  drawChar() {
    console.log("im a character");
    context.beginPath();
    context.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.closePath();
    context.stroke();
    context.fill();
  }

  update() {
    if(this.up == true){
      this.yPosition = this.yPosition - 10;
    }
    if(this.down == true){
      this.yPosition = this.yPosition + 10;
    }
    if(this.left == true){
      this.xPosition = this.xPosition - 10;
    }
    if(this.right == true){
      this.xPosition = this.xPosition + 10;
    }
    
    this.drawChar();
  }

}

mychar = new Character(300, 75);
mychar.drawChar();

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Check which key was pressed and call the appropriate Car function.
  window.addEventListener("keydown", doKeyDown); //add false parameter?
  window.addEventListener("keyup", doKeyUp, false); //add false parameter?
  document.getElementById("myCanvas").onmousemove = findObjectCoords;
  mychar.update();
}

animate();

canvas.focus();

function doKeyDown(e) {
  console.log("test");
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
