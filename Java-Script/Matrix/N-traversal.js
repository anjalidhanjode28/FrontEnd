//You are given a matrix of size n x n. Find the N traversal of the matrix. Refer the following figure for better understanding.

let matrix=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let n=matrix.length;
let bag="";
  
let j=0;
for(let i=n-1; i>0; i--){
    
    bag=bag+matrix[i][j]+" ";
}

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(i==j){
            
            bag=bag+matrix[i][j]+" ";
        }
    }
}
    
j=n-1;
for(let i=n-2; i>=0; i--){
    
    bag=bag+matrix[i][j]+" ";
}
console.log(bag);


