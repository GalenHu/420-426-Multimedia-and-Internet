var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

class Character {
  radius = 5;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  drawChar() {
    console.log("im a character");
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.closePath();
    context.stroke();
    context.fill();
  }

  update() {
    this.drawChar();
  }

  xPosition;
  yPosition;
}

mychar = new Character(300, 75);
mychar.drawChar();

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Check which key was pressed and call the appropriate Car function.
  document.onekeydown = checkKey;

  mychar.update();
}

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38" || e.keyCode == "87") {
    // up arrow
  } else if (e.keyCode == "40" || e.keyCode == "83") {
    // down arrow
  } else if (e.keyCode == "37" || e.keyCode == "65") {
    // left arrow
  } else if (e.keyCode == "39" || e.keyCode == "68") {
    // right arrow
  }
}
animate();

canvas.focus();

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
}
document.getElementById("myCanvas").onmousemove = findObjectCoords;
