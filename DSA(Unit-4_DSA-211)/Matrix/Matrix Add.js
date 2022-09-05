// Description
// Given 2 matrix , find and print the matrix which is the sum of both the matrix. If they cannot be added together output -1

// Note: 2 matrix can only be added if both of them have same number of rows and same number of columns

// Input
// The first line of input will contain 4 integers denoting R1, C1, R2, C2, which is the number of rows of matrix 1, the number columns of matrix 1,the number of rows of matrix 2, number columns of matrix 2 respectively.
// Next R1 lines will contain C1 integers, which are the matrix elements.
// Next R2 lines will contain C2 integers, which are the matrix elements.

let R1 = 2;
let C1 = 2;
let R2 = 2;
let C2 = 2;
let mat1 = [
    [1,2],
    [3,4]
];

let mat2 = [
    [2,3],
    [4,5]
];

function matrixAdd(R1,C1,mat1,R2,C2,mat2){
    
    if(R1 === R2 && C1 === C2){
        for(let i=0; i<R1; i++){
            let temp = "";
            for(let j=0; j<C1; j++){
                temp += (mat1[i][j]+mat2[i][j])+" ";
            }
            console.log(temp);
        }

    }else{
        console.log(-1);
    }
}


function runProgram(input){
   
    input = input.trim().split("\n");
    var x = input[0].trim().split(" ").map(Number);
    var r1 = x[0];
    var c1 = x[1];
    var r2 = x[2];
    var c2 = x[3];
    var mat1 = []
    var mat2 = [];
    var line=1;
    for(let i=0; i<r1; i++){
        var arr1 = input[line].trim().split(" ").map(Number);
        mat1.push(arr1);
        line++;
    }
    
    for(let i=0; i<r2; i++){
        var arr2 = input[line].trim().split(" ").map(Number);
        mat2.push(arr2);
        line++;
    }
   
    matrixAdd(r1,c1,mat1,r2,c2,mat2);
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
