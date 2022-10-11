// Description
// Given an n x n binary matrix, flip the matrix horizontally, then invert it, and print the resulting matrix.
// To flip the matrix horizontally means that each row of the matrix is reversed.
// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert the matrix means that each 0 is replaced by 1, and each 1 is replaced by 0.
// For example, inverting [0,1,1] results in [1,0,0].

// 3 
// 1 1 0
// 1 0 1
// 0 0 0

function FlipMatrix(n,mat){
    
    let obj = {};
    let temp = "";
    let x=[];
    
    for(let i=0; i<n; i++){
        let temp = "";
        for(let j=n-1; j>=0; j--){
            if(mat[i][j] === 0){
                mat[i][j] = 1;
            }else{
                mat[i][j] = 0;
            }
            
           temp += mat[i][j]+" ";
        }
        console.log(temp);
    }
    
}


function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var n = +input[0].trim();
    var line = 1;
    var mat = [];
    
    for(let i=0; i<n; i++){
        var arr = input[line++].trim().split(" ").map(Number);
        mat.push(arr);
    }
    // console.log(n,mat);
    FlipMatrix(n,mat);
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
