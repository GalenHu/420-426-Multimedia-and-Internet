const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

// let x = 100;
// function animate() {
//  requestAnimationFrame(animate);
//  context.clearRect(0, 0, canvas.width, canvas.height);
//  context.beginPath();
//  context.arc(x +=3, 100, 50, 0, 2 * Math.PI);
//  context.closePath();
//  context.fillStyle = "red";
//  context.fill()
//  if (x>400){
//      x = -100;
//  }

// }
// animate();

class Bubble {
    constructor(x, y) {
    /* Initialize the bubble's properties. */
    }
    draw() {
    /* Code concerning the drawing of the bubble should go here. */
    }
    update() {
    /* Code concerning the manipulation of the bubbles properties should go here. */
    this.draw();
    }
   }
   let bubble = new Bubble(100, 100);
   function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    bubble.update();
   }