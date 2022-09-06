// Description
// You are given a 2D array with N rows and M columns, having positive integers. X is defined as the collection of unique positive integers of the left diagonal and right diagonal of the array. What can be the maximum absolute difference between any two elements of X?
// Note -If no such X exists print -1.

// Input
// First line: Single integer denoting the value of T - the number of test cases.
// For each test case:
// First line: Two single space-separated integers denoting the value of N and M.
// N lines follow:
// Each of the lines consists of M single space-separated integers, denoting a row of a matrix.

// 2
// 2 2
// 1 1
// 3 4
// 2 3
// 1 2 3
// 4 5 6

function differenceOfX(N,M,matrix)
{
    if(N==M){

        let arr = [];
        let i=0;
        let j=N-1;

        while(i<N && j>=0)
        {
            arr.push(matrix[i][j]);
            i++;
            j--;
        }
        
        i=0;
        j=0;
        
        while(i<N && j<N)
        {
            arr.push(matrix[i][j]);
            i++;
            j++;
        }
        
        let max = -Infinity;
        let min = Infinity;
        
        for(let k=0; k<arr.length; k++)
        {
            if(max < arr[k]){
                max =arr[k];
            }
            if(min > arr[k]){
                min = arr[k];
            }
        }
        
        console.log(max-min);
    }
    else {
        console.log(-1);
    }
}


function runProgram(input){
    
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++){
        var x = input[line].trim().split(" ").map(Number);
        var row = x[0];
        var col = x[1];
        var mat = [];
        line++;
        
        for(let j=0; j<row; j++){
            var arr = input[line].trim().split(" ").map(Number);
            mat.push(arr);
            line++;
        }
        //console.log(tc,row,col,mat);
        differenceOfX(row,col,mat);
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
