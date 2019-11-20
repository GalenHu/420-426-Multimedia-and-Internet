var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// context.beginPath();
// context.arc(100, 75, 50, 0, 2 * Math.PI);
// context.stroke();

class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  drawChar() {
    console.log("asdf");
    context.beginPath();
    context.arc(this.x, this.y, 50, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
  }
}

yo = new Character(100, 75);
yo.drawChar();
