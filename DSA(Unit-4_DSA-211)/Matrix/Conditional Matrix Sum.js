// Description
// You are given a matrix(2 dimensional array) of integers of n rows and m columns. Your task is to write a program that calculates sum of all such integers present in the matrix which are divisible by 3.

// Input
// Input Format
// First line contains n and m.
// In the next n lines, there are m integers in each line which makes up elements of matrix.

let n = 2;
let m = 3;
let mat = [
    [3,1,8],
    [2,6,0]
];

function conditionalMatrixSum(n,m,mat){
    
    let sum = 0;
    
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(mat[i][j]%3 == 0){
                sum += mat[i][j];
            }
        }
    }
    console.log(sum);
}

function runProgram(input){
  
    input = input.trim().split("\n");
    var x = input[0].trim().split(" ").map(Number);
    var n = x[0];
    var m = x[1];
    var line = 1;
    var mat = [];
    
    for(let i=0; i<n; i++){
        var temp = input[line].trim().split(" ").map(Number);
        mat.push(temp);
        line++;
    }
   
    conditionalMatrixSum(n,m,mat);
    
}
if(process.env.USER===""){
    runProgram('');
}else{
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read="";
    process.stdin.on("data",function(input){
        read+=input;
    });
    process.stdin.on("end",function(){
        read=read.replace(/\n$/,"");
        read=read.replace(/\n$/,'');
        runProgram(read);
    });
    process.on('SIGINT',function(){
        read=read.replace(/\n$/,"");
        runProgram(read);
        process.exit(0);
    });
}