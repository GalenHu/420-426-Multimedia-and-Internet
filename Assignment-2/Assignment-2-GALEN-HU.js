//1

// let tictactoe = 
//             ["X.O",
//             ".XO",
//             "..X"];

// xoReferee(tictactoe);

// function xoReferee(tictactoe){
//     let row1 = tictactoe[0]
//     let row2 = tictactoe[1]
//     let row3 = tictactoe[2]

//     //Check horizontal
//     if(row1 == "XXX" || row2 == "XXX" || row3 == "XXX"){
//         console.log("X")
//     }
//     else if(row1 == "OOO" || row2 == "OOO" || row3 == "OOO"){
//         console.log("O")
//     }

//     //Check vertical
//     else if((row1[0] == "X" && row2[0] == "X" && row3[0] == "X" ) || (row1[1] == "X" && row2[1] == "X" && row3[1] == "X" ) || (row1[2] == "X" && row2[2] == "X" && row3[2] == "X" )){
//         console.log("X")
//     }
//     else if((row1[0] == "O" && row2[0] == "O" && row3[0] == "O" ) || (row1[1] == "O" && row2[1] == "O" && row3[1] == "O" ) || (row1[2] == "O" && row2[2] == "O" && row3[2] == "O" )){
//         console.log("O")
//     }

//     //Check diagonal
//     else if(row1[0] == "X" && row2[1] == "X" && row3[2] == "X"){
//         console.log("X")
//     }
//     else if(row1[0] == "O" && row2[1] == "O" && row3[2] == "O"){
//         console.log("O")
//     }

//     else
//         console.log("TIE")

// }

//End of 1.

//2.

// let pawnPosition = ["b4", "d4", "f4", "c3", "e3", "g5", "d2"];

// safePawns(pawnPosition)

// function  safePawns(pawnPosition){
//     let nbPawn = pawnPosition.length;
//     let count=0;
//     for(let i = 0; i<nbPawn; i++)
//     {
//         let workingPawn = pawnPosition[i]
//         for(let j = 0 ; j<nbPawn;j++)
//         {
//             //if pawn have pawn on each side column
//             if((workingPawn[0].charCodeAt(0)-1 == pawnPosition[j][0].charCodeAt(0) || workingPawn[0].charCodeAt(0)+1 == pawnPosition[j][0].charCodeAt(0)) && (workingPawn[1] - 1 == pawnPosition[j][1])){
//                 count++
//                 break;
//             }
//         }
//     }
//     console.log(count);
// }

//3

//Limitation: No more than 2 rectangle may intersect at any given location
//Goal #0 Find if two rectabgles intersect... 
//  Check for left and right edges top and bottom being greater thannn or less than one another
//draw diagram rectangle intersecting and those that are not intersecting
//Goeal #1 Find where two rectangles intersect
let rectangle = [
    [6, 3, 8, 10],
    [4, 8, 11, 10],
    [16, 8, 19, 11],
    [16, 8, 19, 19]
]

rectanglesUnion(rectangle)

function rectanglesUnion(rectangle) {
    let nbOfRect = rectangle.length;
    let intersect1 = [];
    let intersect2 = [];
    let intersect3 = [];

    for (let i = 0; i < nbOfRect; i++) {        //i = working rectangle
        for (let j = 0; j < nbOfRect; j++) {    //j = comparing rectangle
            if (i != j) {                     //dont compare with self
                if (rectangle[i][0] >= rectangle[j][0]) {      //is i(x1) bigger than j(x1) 
                    intersect1.push(rectangle[i][0]);
                    intersect3.push(rectangle[i][0])
                    console.log(`left vertical of rectangle ${i} is inside of rectangle ${j}`)
                    if (rectangle[i][2] <= rectangle[j][2]) {
                        intersect3.push(rectangle[i][2])
                        console.log(`right vertical of rectangle ${i} is inside of rectangle ${j}`)
                    }
                    else if (rectangle[i][2] >= rectangle[j][2]) {
                        intersect3.push(rectangle[j][2])
                        console.log(`right vertical of rectangle ${j} is inside of rectangle ${i}`)
                    }
                }
                else if (rectangle[i][2] <= rectangle[j][2]) {
                    intersect1.push(rectangle[i][2]);
                    console.log(`right vertical of rectangle ${i} is inside of rectangle ${j}`)
                    if (rectangle[i][0] <= rectangle[j][0]) {
                        intersect3.push(rectangle[i][0])
                        console.log(`left vertical of rectangle ${i} is inside of rectangle ${j}`)
                    }
                    else if (rectangle[i][0] >= rectangle[j][0]) {
                        intersect3.push(rectangle[j][0])
                        console.log(`left vertical of rectangle ${j} is inside of rectangle ${i}`)
                    }
                }
                if (rectangle[i][1] >= rectangle[j][1]) {
                    intersect1.push(rectangle[i][1]);
                    intersect3.push(rectangle[i][1]);
                    console.log(`top horizontal of rectangle ${i} is inside of rectangle ${j}`)
                    if (rectangle[i][3] <= rectangle[j][3]) {
                        intersect3.push(rectangle[i][3])
                        console.log(`bottom horizontal of rectangle ${i} is inside of rectangle ${j}`)
                    }
                    else if (rectangle[i][3] <= rectangle[j][3]) {
                        intersect3.push(rectangle[j][3])
                        console.log(`bottom horizontal of rectangle ${j} is inside of rectangle ${i}`)
                    }
                }
                else if (rectangle[i][3] <= rectangle[j][3]) {
                    intersect1.push(rectangle[i][3]);
                    intersect3.push(rectangle[i][3])
                    console.log(`bottom horizontal of rectangle ${i} is inside of rectangle ${j}`)
                    if (rectangle[i][1] >= rectangle[j][1]) {
                        intersect3.push(rectangle[i][1])
                        console.log(`top horizontal of rectangle ${i} is inside of rectangle ${j}`)
                    }
                    else if (rectangle[i][1] <= rectangle[j][1]) {
                        intersect3.push(rectangle[j][1])
                        console.log(`top horizontal of rectangle ${j} is inside of rectangle ${i}`)
                    }
                }
                console.log("");
                intersect2.push(intersect3)
                intersect1 = [];
                intersect3 = [];
            }

        }

    }
    console.log(intersect2)
    let horizontal
    let vertical
    let intersectedArea = 0
    let intersect4 = []
    //Keep potential intersect
<<<<<<< HEAD
    for(let i = 0; i<intersect2.length; i++){
=======
    for (let i = 0; i < intersect2.length; i++) {
>>>>>>> master
        console.log(intersect2[i].length)
        if (intersect2[i].length == 4) {
            intersect4.push(intersect2[i])

        }
    }

    console.log(intersect4)
    //Remove duplicate
    // intersect4 = new Set(intersect4)
<<<<<<< HEAD
    // console.log(intersect4)
// let duplicate
//     for (let i=0; i<intersect4.length; i++){
//         for(let j=0; j<intersect4.length; j++){
//             if(intersect4[i] == intersect4[j] && i!= j){
//                 duplicate = intersect4.indexOf(intersect4[i])
//                 intersect4.splice(duplicate)
//             }
//         }
//     }

console.log(removeDuplicates(intersect4))
    console.log(intersect4)

    for(let i = 0; i<intersect4.length; i++){

        horizontal = Math.abs(intersect4[i][0] -intersect4[i][1])
        vertical = Math.abs(intersect4[i][2] - intersect4[i][3])
        intersectedArea = intersectedArea + (horizontal*vertical)
        

    }


    
=======
    console.log(intersect4)
    let duplicate
    for (let i = 0; i < intersect4.length; i++) {
        for (let j = 0; j < intersect4.length; j++) {
            if (JSON.stringify(intersect4[i]) == JSON.stringify(intersect4[j]) && i != j) {
                duplicate = intersect4.indexOf(intersect4[j])
                intersect4.splice(duplicate, 1)
            }
        }
    }

    console.log(intersect4)

    for (let i = 0; i < intersect4.length; i++) {

        horizontal = Math.abs(intersect4[i][0] - intersect4[i][1])
        vertical = Math.abs(intersect4[i][2] - intersect4[i][3])
        intersectedArea = intersectedArea + (horizontal * vertical)


    }

>>>>>>> master
    console.log(intersectedArea)
    let singleRectangle = 0;
    let totalArea = 0
    for (let i = 0; i < nbOfRect; i++) {
        singleRectangle = Math.abs((rectangle[i][3] - rectangle[i][1]) * (rectangle[i][2] - rectangle[i][0]))
        totalArea = totalArea + singleRectangle;
        singleRectangle = 0;
    }
    totalArea = totalArea - intersectedArea
    console.log(totalArea);

    function removeDuplicates(arr){
        let unique_array = []
        for(let i = 0;i < arr.length; i++){
            if(unique_array.indexOf(arr[i]) == -1){
                unique_array.push(arr[i])
            }
        }
        return unique_array
    }
}

