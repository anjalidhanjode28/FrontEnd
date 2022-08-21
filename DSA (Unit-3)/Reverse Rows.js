// Description
// You will be given an n by n matrix. You'll have to reverse the elements of each row of the matrix

// Input Format
// First line will contain the number of rows n (same as the number of columns)
// After that next n lines will n rows of the matrix.

let N=4;
let Arr = [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
];


function reverseRowOperation(N,Arr){
    
    for(let i=0; i<N; i++){
        let bag="";
        for(let j=N-1; j>=0; j--){
            bag=bag+Arr[i][j]+" ";
        }
        console.log(bag);
    }
    
}


function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var size = input[0];
    var arr = [];
    var line=1;
    for(let i=0; i<size; i++){
        var temp = input[line].trim().split(" ").map(Number);
        arr.push(temp);
        line++;
    }
    //console.log(size, arr);
    reverseRowOperation(size,arr);
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

