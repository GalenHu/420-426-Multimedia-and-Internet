var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

class Character {
  radius = 5;
  xPosition;
  yPosition;
  constructor(x, y) {
    this.xPosition = x;
    this.yPosition = y;
  }

  drawChar() {
    context.beginPath();
    context.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.closePath();
    context.stroke();
    context.fill();
  }

  update() {
    this.drawChar();
  }

  arrowUp() {
    this.yPosition -= 1;
    console.log("i am up");
  }

  arrowDown() {
    this.yPosition += 1;
    console.log("i am down");
  }

  arrowLeft() {
    this.xPosition -= 1;
    console.log("i am left");
  }

  arrowRight() {
    this.xPosition += 1;
    console.log("i am right");
  }
}

mychar = new Character(300, 75);
mychar.drawChar();

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Check which key was pressed and call the appropriate Car function.
  // document.onekeydown = checkKey;
  window.addEventListener("keydown", doKeyDown); //add false parameter?
  // window.addEventListener("keyup", doKeyUp); //add false parameter?
  //document.getElementById("myCanvas").onmousemove = findObjectCoords;
  mychar.update();
}

animate();

canvas.focus();

function doKeyDown(e) {
  console.log("test");
  if (e.keyCode == "38" || e.keyCode == "87") {
    // up arrow
    mychar.arrowUp();
  } else if (e.keyCode == "40" || e.keyCode == "83") {
    // down arrow
    mychar.arrowDown();
  } else if (e.keyCode == "37" || e.keyCode == "65") {
    // left arrow
    mychar.arrowLeft();
  } else if (e.keyCode == "39" || e.keyCode == "68") {
    // right arrow
    mychar.arrowRight();
  }
}

// function checkKey(e) {
//   e = e || window.event;
//   console.log("lol");

//   if (e.keyCode == "38" || e.keyCode == "87") {
//     // up arrow
//     mychar.arrowUp();
//   } else if (e.keyCode == "40" || e.keyCode == "83") {
//     // down arrow
//     arrowDown();
//   } else if (e.keyCode == "37" || e.keyCode == "65") {
//     // left arrow
//     arrowLeft();
//   } else if (e.keyCode == "39" || e.keyCode == "68") {
//     // right arrow
//     arrowRight();
//   }
// }
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
