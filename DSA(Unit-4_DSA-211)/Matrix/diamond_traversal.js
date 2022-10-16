// Description
// Given a square matrix of odd length , print the matrix elements in the order shown in the figure :


// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9



function diamondTraversal(matrix) {
    //Write your code over here
    
    let n = matrix[0].length;
     if(n===1){
         console.log(n);
         return;
     }
    let temp = "";
    
    let i=Math.ceil(n/2)-1;
    let j=n-1;
    while(i>0 && j>0){
        temp += matrix[i][j] + " ";
        i--;
        j--;
    }
    
    i=0;
    j=Math.ceil(n/2)-1;
    while(i<Math.ceil(n/2) && j>0){
        temp += matrix[i][j] + " ";
        i++;
        j--;
    }
    
    i = Math.ceil(n/2)-1;
    j=0;
    while(j<Math.ceil(n/2) && i<n-1){
        temp += matrix[i][j] + " ";
        i++;
        j++;
    }
    
    i=n-1;
    j=Math.ceil(n/2)-1;
    while(j<n && i>=Math.ceil(n/2)){
        temp += matrix[i][j] + " ";
        i--;
        j++;
    }
    console.log(temp);
  }
  