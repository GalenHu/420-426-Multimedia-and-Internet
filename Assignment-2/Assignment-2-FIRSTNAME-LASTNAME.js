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

let pawnPosition = ["b4", "d4", "f4", "c3", "e3", "g5", "d2"];

safePawns(pawnPosition)

function  safePawns(pawnPosition){
    let nbPawn = pawnPosition.length;
    let count=0;
    for(let i = 0; i<nbPawn; i++)
    {
        let workingPawn = pawnPosition[i]

        for(let j = 0 ; j<nbPawn;j++)
        {
            //if pawn have pawn on each side column
            if((workingPawn[0].charCodeAt(0)-1 == pawnPosition[j][0].charCodeAt(0) || workingPawn[0].charCodeAt(0)+1 == pawnPosition[j][0].charCodeAt(0)) && (workingPawn[1] - 1 == pawnPosition[j][1])){
                count++
                break;
            }
                
        }
    }

    console.log(count);
}