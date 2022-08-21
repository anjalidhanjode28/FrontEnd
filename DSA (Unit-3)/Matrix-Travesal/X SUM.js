// Description
// You are given a 2D array with N rows and N columns, having positive integers. X is defined as the collection elements of the left diagonal and right diagonal of the array. Print the sum of the largest and smallest element of X.

// Input
// First line: Single integer denoting the value of T - the number of test cases.
// For each test case:
// First line: Single integer denoting the value of N.
// N lines follow:
// Each of the lines consists of N single space-separated integers, denoting a row of a matrix.

let N=2;
let Arr = [
    [1,1],
    [3,4]
];

function sum(N,Arr){
    let array=[];
    
    let i=0;
    let j=N-1;
    
    while(i<N && j>=0){
        array.push(Arr[i][j]);
        i++;
        j--; 
    }
    
    i=0;
    j=0;
    
    while(i<N && j<N){
       array.push(Arr[i][j]);
        i++;
        j++;
    }
    
    let max = -Infinity;
    let min = Infinity;
    
    for(let k=0; k<array.length; k++){
        if(max<array[k]){
            max=array[k];
        }
        if(min>array[k]){
            min=array[k];
        }
    }
    console.log(max+min);
}

function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++){
        var size = +input[line].trim();
        line++;
        array=[];
        
        for(let j=0; j<size; j++){
             var arr = input[line].trim().split(" ").map(Number);
             array.push(arr);
             line++;
        }
       
        //console.log(size,array);
        sum(size,array);
    }
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
