// Description
// You are given a square matrix of size n. Rows are indexed 1 to n from top to bottom and columns are indexed 1 to n form left to right. Matrix consists of only '*' and '.'. You need to check whether matrix is symmetric or not. if it is, check it is symmetric about vertical axis or horizontal axis or both.
// A matrix is said to be symmetric about horizontal axis if 1st row is identical to n-th row, 2nd is identical to (n-1)th row and so on.
// A matrix is said to be symmetric about vertical axis if 1ST column is identical to nth column, 2nd identical to (n-1)th and so on for all columns.

// Input
// Input Format :
// First line contains t,the number of test cases. First line of each test case contains n the size of matrix. Each of next n lines contain n characters.


let n=4;
let matrix=[
    ['*','.','*','.'],
    ['.','*','.','*'],
    ['*','.','*','.'],
    ['.','*','.','*']
];

function checkForSymmetry(n, matrix) {
    //write code here
    //console n,matrix and check the input response
   
   let left = true;
   let right = true;
   
   for(i=0; i<n; i++)
   {
       for(let j=0; j<n; j++)
       {
           if(matrix[i][j] !== matrix[i][n-1-j])
           {
               right = false;
           }
           if(matrix[j][i] !== matrix[n-1-j][i])
           {
               left = false;
           }
       }
   }
   
  if(left && right){
      console.log("BOTH");
  }
  else if(left && !right){
      console.log("HORIZONTAL");
  }
  else if(right && !left){
      console.log("VERTICAL");
  }
  else{
      console.log("NO");
  }
}