let tictactoe = ["..O",
            "XXX",
            "XOO"]

function xoReferee(tictactoe){
    let row1 = tictactoe[0]
    let row2 = tictactoe[1]
    let row3 = tictactoe[2]

    //Check horizontal
    if(row1 == "XXX" || row2 == "XXX" || row3 == "XXX"){
        console.log("X")
    }
}