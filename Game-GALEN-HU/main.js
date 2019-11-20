var canvas = document.getElementById("myCanvas");
var context = c.getContext("2d");

// context.beginPath();
// context.arc(100, 75, 50, 0, 2 * Math.PI);
// context.stroke();


class Character{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    drawChar(x,y){
        context.beginPath();
        context.arc(x, y, 50, 0, 2 * Math.PI);
        context.stroke();
    }
}

yo = new Character(100,75);
yo.drawChar;