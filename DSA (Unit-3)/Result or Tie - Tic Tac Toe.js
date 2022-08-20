// Description
// You are given a 3 * 3matrix(2d-array) that represents the final situation of a Tic Tac Toe.
// Your task is to write a program that finds out the winner in case the match ended in a win. If the winner is 'x', printx.
// If the winner is 'o', printo.
// In case the match ended in a tie, printTie.

// Input
// InputFormat
// The input contains 3 lines where each line has 3 space separated characters which represent the final status of tic tac toe

// Constraints
// The input contains either of the 2 alphabets: 'x' and 'o'

let matrix = [
    [x,o,x],
    [o,x,x],
    [o,o,o]
];

if(matrix[0][0]==matrix[0][1] && matrix[0][0]==matrix[0][2])
{
    console.log(matrix[0][0]);
}

else if(matrix[1][0]==matrix[1][1] && matrix[1][0]==matrix[1][2])
{
    console.log(matrix[1][0]);
}

else if(matrix[2][0]==matrix[2][1] && matrix[2][0]==matrix[2][2])
{
    console.log(matrix[2][0]);
}


else if(matrix[0][0]==matrix[1][1] && matrix[0][0]==matrix[2][2])
{
    console.log(matrix[0][0]);
}

else if(matrix[0][2]==matrix[1][1] && matrix[0][2]==matrix[2][0])
{
    console.log(matrix[0][2]);
}

else{
    console.log("Tie");
}