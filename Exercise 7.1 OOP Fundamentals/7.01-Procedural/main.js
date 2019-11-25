let shapes = [];

shapes[0] = {type:"circle", colour:"red", size:{radius:3}}
shapes[1] = {type:"rectangle", colour:"blue", size:{height:3, width:4}}
shapes[2] = {type:"triangle", colour:"green", size:{base:2, height:5}}

shapes.forEach(shape => {
    if(shape.type == "circle")
        console.log(`The area of the circle is ${Math.PI*Math.pow(shape.size.radius,2)}`);
    else if(shape.type == "rectangle")
        console.log(`The area of the ${shape.type} is ${shape.size.height*shape.size.width}`);
    else if(shape.type == "triangle")
    console.log(`The area of the ${shape.type} is ${(shape.size.base*shape.size.height)/2}`);
});