import { isNullOrUndefined } from "util";

//1.
/*
function multiplyTwoNumbers( numA,  numB)
{
    return numA*numB;
}

let numA = prompt('What is the first multiplicator');
let numB = prompt('What is the second multiplicator');

let result = multiplyTwoNumbers(numA,numB);

alert(`The answer is ${result}`);
*/
//End of 1.

//2.
/*
let name=prompt(`What is your name`)
let age=prompt(`How old are you`)
sayHi()
function sayHi()
{
    alert(`Hi. My name is ${name} and I'm ${age} years old`)
}
*/
//End of 2.

//3
/*
let array = [1,2,3,4,5]
position = prompt(`Which one do you want to power`)
indexPower()

function indexPower()
{
if(position >=0 && position <=4)
{
    alert(`${array[position]*array[position]}`)
}
else
    alert("-1")
}
*/
//End of 3.

//4
/*
let number=prompt(`Enter a number`)
fizzBuzz(number)

function fizzBuzz(number)
{
    if(number%3==0&&number%5==0)
        alert('Fizz Buzz');
    else if(number%3==0)
        alert('Fizz');
    else if(number%5==0)
        alert('Buzz');
    else
        alert(`${number}`)

}
*/
//End of 4.

//5.
/*
let bigNumber = prompt(`Enter a positive number`)
let digit = bigNumber.split("")

multiplyDigits(digit)

function multiplyDigits(bigNumber)
{
    let result=1;
    for(let i =0; i<digit.length;i++){
        if(digit[i]==0)
            digit[i] = 1

    }
    for(let i =0; i<digit.length;i++){
        result = result*digit[i]
    }
    alert(result)
}
*/
//End of 5.

//6.
/*
let message = prompt("What is your love message onii-chan");
findMessage(message);

function findMessage(message){
    let character = message.split('');
    let loveletter = '';
    for(let i=0;i<character.length;i++){
        if(character[i] == character[i].toUpperCase() )
            loveletter = loveletter.concat(character[i]);
    }
    loveletter=loveletter.replace(/\s/g,'');  
    alert(loveletter);
}
*/
//End of 6.

//7
// let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// mostFrequent(arr1)

// function mostFrequent(arr1){
//     let mf = 1;
//     let m = 0;
//     let item;
//     for (let i=0; i<arr1.length; i++)
//     {
//             for (let j=i; j<arr1.length; j++)
//             {
//                     if (arr1[i] == arr1[j])
//                     m++;
//                     if (mf<m)
//                     {
//                     mf=m; 
//                     item = arr1[i];
//                     }
//             }
//             m=0;
//     }
//     alert(item+" ( " +mf +" times ) ") ;
// }
// End of 7

//8
// let array = [1,1,1,1,1,12]
// nonUniqueElements(array)

// function nonUniqueElements(array){
//     let count = 0;
//     let frequentNumber = []
//     for(let i = 0; i< array.length; i++){
//         for(let j=0; j<array.length; j++){
//             if(array[i] == array[j])
//                 count++;
//             if(count > 1){
//                 frequentNumber.push(`${array[i]}`)
//                 break;
//             }
            
//         }
//         count = 0;
//     }
//     alert(frequentNumber)
// }
//End of 8.

//9.
let grid = [5]
//row = col
grid[0] = [1,0,0,1,0]
grid[1] = [0,1,0,0,0]
grid[2] = [0,0,1,0,1]
grid[3] = [1,0,0,0,0]
grid[4] = [0,0,1,0,0]

let row = 2
let col = 1

countNeighbours(grid, row, col)

function countNeighbours(grid, row, col){
    let count = 0;

    for(let i = -1; i < 2; i++){
        for(let j = -1; j < 2; j++){

            if(grid[row+i][col+j] == 1 && grid[row][col] != 1)
            {
                count++;
            }
                
        }
    }
    console.log(count);
    
}