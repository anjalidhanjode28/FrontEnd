// You are given a matrix(2 dimensional array) of integers of n rows and m columns. Your task is to write a program that calculates sum of all such integers present in the matrix which are divisible by 3.
// Input
// Input Format
// First line contains n and m.
// In the next n lines, there are m integers in each line which makes up elements of matrix.
// Constraints
// n<100
// m<100
// Output
// Output Format
// Output one number which is the sum of all such integers which are divisible by 3.

let N=2; 
let M=3;
let Arr = [
    [3,1,8],
    [2,6,0]
];

function sumOfIntegers(N,M,Arr){
    
    let sum=0;
    
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            if(Arr[i][j]%3===0){
                sum=sum+Arr[i][j];
            }
        }
    }
    
    console.log(sum);
}

function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    var x = input[0].trim().split(" ").map(Number);
    var n = x[0];
    var m = x[1];
    var line=1;
    var arr = [];
    
    for(let i=0; i<n; i++){
        var temp = input[line].trim().split(" ").map(Number);
        line++;
        arr.push(temp);
    }
    //console.log(n,m,arr);
    sumOfIntegers(n,m,arr);
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
