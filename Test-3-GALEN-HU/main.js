const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
let countframe = 0;
let sec = 0;
let gameOver = false;

class Square {
  height;
  width;
  velocity;
  colour;
  x;
  y;

  constructor() {
    this.height = 50;
    this.width = 50;
    // this.speed = Math.random() * 5;
    this.changeColour();
    this.positionRandomly();
    this.velocity = {
      x: Math.random() < 0.5 ? Math.random() * -5 : Math.random() * 5,
      y: Math.random() < 0.5 ? Math.random() * -5 : Math.random() * 5
    };

    console.table(this.velocity);
  }

  drawSquare() {
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.closePath();
    context.fillStyle = `rgba(${this.colours[0]}, ${this.colours[1]}, ${this.colours[2]}, 0.25)`;
    context.fill();
    context.stroke();
  }

  positionRandomly() {
    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = Math.floor(Math.random() * (canvas.height - this.height));
    console.table(this.x, this.y);
  }

  changeColour() {
    this.colours = [
      Math.random() * 255,
      Math.random() * 255,
      Math.random() * 255
    ];
  }

  checkBounds() {
    if (this.x + this.width > canvas.width || this.x < 0) {
      this.eraseSquare();
    }

    if (this.y + this.height > canvas.height || this.y < 0) {
      this.eraseSquare();
    }
  }

  direction() {
    this.direction = Math.random() * 1 + 360;
  }

  update() {
    this.checkBounds();

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.drawSquare();
  }

  changeVelocity() {
    this.velocity = {
      x: Math.random() < 0.5 ? Math.random() * -5 : Math.random() * 5,
      y: Math.random() < 0.5 ? Math.random() * -5 : Math.random() * 5
    };
    console.log("change velocity");
  }

  eraseSquare() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    gameOver = true;
  }
}

let square = new Square();
square.drawSquare();

// canvas.addEventListener("keydown", event => {
//   keys[event.key] = true; // Remember that you can refer to a key in an object by using a string index.
// });

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);

  window.addEventListener("keydown", doKeyDown);
  window.addEventListener("mousedown", mouse);
  square.update();
  timer();
}

function doKeyDown(e) {
  if (e.keyCode == "32") {
    square.changeVelocity();
    console.log("space is press");
  } else console.log("error");
}

function mouse() {
  console.log("change color1");
  square.changeColour();
}

function timer() {
  if (!gameOver) {
    countframe++;
    if (countframe % 60 == 0) {
      sec++;
    }
    document.getElementById("timer").innerHTML = +sec + "s";
  } else {
    document.getElementById("timer").innerHTML = +sec + "s";
  }
}

animate();
