//1

//let tictactoe = 
//            ["X.O",
//            ".XO",
//            "..X"];

//xoReferee(tictactoe);

function xoReferee(tictactoe) {
    let row1 = tictactoe[0]
    let row2 = tictactoe[1]
    let row3 = tictactoe[2]

    //Check horizontal
    if (row1 == "XXX" || row2 == "XXX" || row3 == "XXX") {
        console.log("X")
    }
    else if (row1 == "OOO" || row2 == "OOO" || row3 == "OOO") {
        console.log("O")
    }

    //Check vertical
    else if ((row1[0] == "X" && row2[0] == "X" && row3[0] == "X") || (row1[1] == "X" && row2[1] == "X" && row3[1] == "X") || (row1[2] == "X" && row2[2] == "X" && row3[2] == "X")) {
        console.log("X")
    }
    else if ((row1[0] == "O" && row2[0] == "O" && row3[0] == "O") || (row1[1] == "O" && row2[1] == "O" && row3[1] == "O") || (row1[2] == "O" && row2[2] == "O" && row3[2] == "O")) {
        console.log("O")
    }

    //Check diagonal
    else if (row1[0] == "X" && row2[1] == "X" && row3[2] == "X") {
        console.log("X")
    }
    else if (row1[0] == "O" && row2[1] == "O" && row3[2] == "O") {
        console.log("O")
    }

    else
        console.log("TIE")

}

//End of 1.

//2.

//let pawnPosition = ["b4", "d4", "f4", "c3", "e3", "g5", "d2"];

//safePawns(pawnPosition)

function safePawns(pawnPosition) {
    let nbPawn = pawnPosition.length;
    let count = 0;
    for (let i = 0; i < nbPawn; i++) {
        let workingPawn = pawnPosition[i]
        for (let j = 0; j < nbPawn; j++) {
            //if pawn have pawn on each side column
            if ((workingPawn[0].charCodeAt(0) - 1 == pawnPosition[j][0].charCodeAt(0) || workingPawn[0].charCodeAt(0) + 1 == pawnPosition[j][0].charCodeAt(0)) && (workingPawn[1] - 1 == pawnPosition[j][1])) {
                count++
                break;
            }
        }
    }
    console.log(count);
}

//3

//Limitation: No more than 2 rectangle may intersect at any given location
//Goal #0 Find if two rectabgles intersect... 
//  Check for left and right edges top and bottom being greater thannn or less than one another
//draw diagram rectangle intersecting and those that are not intersecting
//Goeal #1 Find where two rectangles intersect

//let rectangle = [
//    [6, 3, 8, 10],
//    [4, 8, 11, 10],
//    [16, 8, 19, 11],
//    [16, 8, 19, 11]
//]

//rectanglesUnion(rectangle)

function rectanglesUnion(rectangle) {
    let nbOfRect = rectangle.length;
    let arrayOfPolygon = [];
    let arrayOfPoint = [];

    for (let i = 0; i < nbOfRect; i++) {        //i = working rectangle
        for (let j = 0; j < nbOfRect; j++) {    //j = comparing rectangle
            if (i != j) {                     //dont compare with self
                //is i(x1) bigger than j(x1) aka left vertical of rectangle ${i} is inside of rectangle ${j}`
                if (rectangle[i][0] >= rectangle[j][0]) {
                    arrayOfPoint.push(rectangle[i][0])
                    //`right vertical of rectangle ${i} is inside of rectangle ${j}`
                    if (rectangle[i][2] <= rectangle[j][2]) {
                        arrayOfPoint.push(rectangle[i][2])
                    }
                    //`right vertical of rectangle ${j} is inside of rectangle ${i}`
                    else if (rectangle[i][2] >= rectangle[j][2]) {
                        arrayOfPoint.push(rectangle[j][2])

                    }
                }
                //`right vertical of rectangle ${i} is inside of rectangle ${j}`)
                else if (rectangle[i][2] <= rectangle[j][2]) {
                    //`left vertical of rectangle ${i} is inside of rectangle ${j}`)
                    if (rectangle[i][0] <= rectangle[j][0]) {
                        arrayOfPoint.push(rectangle[i][0])
                    }
                    //`left vertical of rectangle ${j} is inside of rectangle ${i}`)
                    else if (rectangle[i][0] >= rectangle[j][0]) {
                        arrayOfPoint.push(rectangle[j][0])
                    }
                }
                //`top horizontal of rectangle ${i} is inside of rectangle ${j}`)
                if (rectangle[i][1] >= rectangle[j][1]) {
                    arrayOfPoint.push(rectangle[i][1]);
                    //(`bottom horizontal of rectangle ${i} is inside of rectangle ${j}`)
                    if (rectangle[i][3] <= rectangle[j][3]) {
                        arrayOfPoint.push(rectangle[i][3])
                    }
                    //bottom horizontal of rectangle ${j} is inside of rectangle ${i}`)
                    else if (rectangle[i][3] <= rectangle[j][3]) {
                        arrayOfPoint.push(rectangle[j][3])
                    }
                }
                //bottom horizontal of rectangle ${i} is inside of rectangle ${j}`)
                else if (rectangle[i][3] <= rectangle[j][3]) {
                    arrayOfPoint.push(rectangle[i][3])
                    //top horizontal of rectangle ${i} is inside of rectangle ${j}`)
                    if (rectangle[i][1] >= rectangle[j][1]) {
                        arrayOfPoint.push(rectangle[i][1])
                    }
                    //top horizontal of rectangle ${j} is inside of rectangle ${i}`)
                    else if (rectangle[i][1] <= rectangle[j][1]) {
                        arrayOfPoint.push(rectangle[j][1])
                    }
                }
                arrayOfPolygon.push(arrayOfPoint)
                arrayOfPoint = [];
            }

        }

    }
    let horizontal
    let vertical
    let intersectedArea = 0
    let potentialIntersect = []
    //Keep potential intersect
    for (let i = 0; i < arrayOfPolygon.length; i++) {
        if (arrayOfPolygon[i].length == 4) {
            potentialIntersect.push(arrayOfPolygon[i])

        }
    }

    //Remove duplicate
    let duplicate
    for (let i = 0; i < potentialIntersect.length; i++) {
        for (let j = 0; j < potentialIntersect.length; j++) {
            if (JSON.stringify(potentialIntersect[i]) == JSON.stringify(potentialIntersect[j]) && i != j) {
                duplicate = potentialIntersect.indexOf(potentialIntersect[j])
                potentialIntersect.splice(duplicate, 1)
            }
        }
    }

    //Calculate the area of intersected area
    for (let i = 0; i < potentialIntersect.length; i++) {

        horizontal = Math.abs(potentialIntersect[i][0] - potentialIntersect[i][1])
        vertical = Math.abs(potentialIntersect[i][2] - potentialIntersect[i][3])
        intersectedArea = intersectedArea + (horizontal * vertical)


    }

    //Calculate the total area
    let singleRectangle = 0;
    let totalArea = 0
    for (let i = 0; i < nbOfRect; i++) {
        singleRectangle = Math.abs((rectangle[i][3] - rectangle[i][1]) * (rectangle[i][2] - rectangle[i][0]))
        totalArea = totalArea + singleRectangle;
        singleRectangle = 0;
    }
    totalArea = totalArea - intersectedArea
    console.log(`total Area of ${totalArea}`);

}

//End of No3

//No4
//[distance,speedLimit]
//let rail = [[5,5],[4,2]];   //(1,2,2,2,1,1)
//let eztrain = [[9, 5]];
//let eztrain2 = [[4, 3]];
//fastTrain(rail);

function fastTrain(rail) {
    const distanceIndex = 0
    const speedIndex = 1

    let distance;
    let totalDistance = 0;
    let time = 0;
    let startSpeed = 0
    let speed = startSpeed
    let topSpeedReach = false;
    let speedLimit;
    let endSpeed
    let theoricalSpeedLimit
    let traveledDis = 0;
    let localTravDis = 0
    let trackNb = 0

    for (var i = 0; i < rail.length; i++) {
        totalDistance = totalDistance + rail[i][distanceIndex]  //total distance of the entire trail
    }

    while (trackNb < rail.length) {      //when havent travel all the trail yet

        distance = rail[trackNb][distanceIndex];      //distance of the rail
        speedLimit = rail[trackNb][speedIndex];       //local speedLimit
        theoricalSpeedLimit = Math.trunc(Math.sqrt(distance));
        if (theoricalSpeedLimit < speedLimit)
            speedLimit = theoricalSpeedLimit



        //Determine Start Speed
        if (trackNb == 0)
            startSpeed = 0;
        else if (trackNb > 0)
            startSpeed = theoricalSpeedLimit

        //Determine the last speed
        if (trackNb + 1 == rail.length)  //if its the last array, set the last speed at 1
            endSpeed = 1;
        //current speedLimit is higher than next track speedLimit
        else if (speedLimit > rail[trackNb + 1][speedIndex])
            endSpeed = rail[trackNb + 1][speedIndex];
        //current speedLimit is lower than next track speedLimit
        else if (speed <= rail[trackNb + 1][speedIndex])
            endSpeed = speedLimit



        while (localTravDis < distance) {


            if (speed < speedLimit && !topSpeedReach) {
                speed++
                time++
            }
            else if (speed >= speedLimit || topSpeedReach) {
                topSpeedReach = true;
                //if(Math.sqrt(distance)%Math.sqrt(distance) == 0)
                //{
                //    speed--;
                //}
                let distanceLeft = distance - localTravDis     //n = distance left

                if (distanceLeft <= ((speed * (speed + 1)) / 2) && speed != endSpeed) {
                    speed--;
                }
                //if (n >= (n*(n + 1)) / 2) {
                //    speed--;
                //}

                time++
                //if (traveledDis == distance)
                //    break
            }
            traveledDis = traveledDis + speed;
            localTravDis = localTravDis + speed;
        }
        localTravDis = 0;
        distance = 0;
        trackNb++;
    }

    console.log(`${time} minutes`);
}

module.exports = {
    xoReferee: xoReferee,
    safePawns: safePawns,
    rectanglesUnion: rectanglesUnion,
    fastTrain: fastTrain
};