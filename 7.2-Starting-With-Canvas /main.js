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
        this.x = x;
        this.y = y;
    }
    draw() {
    /* Code concerning the drawing of the bubble should go here. */
    context.beginPath();
    context.arc(this.x,this.y,20,0,2*Math.PI)
    context.stroke();
    context.closePath();
    
    }
    update() {
    /* Code concerning the manipulation of the bubbles properties should go here. */
    
    canvas.addEventListener('mousemove', event =>{
        this.x = event.clientX;
        this.y = event.clientY;
        this.draw();
    })


    }
   }

   let bubble = new Bubble(100, 100);
   function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    bubble.update();
   }