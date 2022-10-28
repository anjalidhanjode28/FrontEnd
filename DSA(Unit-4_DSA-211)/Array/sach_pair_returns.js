// Description
// For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).

// 1
// 5 2
// 3 4 0 2 7

function suchpairreturns(n,k,arr){
    
    arr.sort(function(a,b){
        return a-b;
    });
    
    let left = 0;
    let right = n-1;
    
    while(left < right){
        
        let sum = arr[left] + arr[right];
        
        if(sum === k){
            console.log(1);
            return;
        }
        else if(sum < k){
            left++;
        }
        else{
            right--;
        }
    }
    console.log(-1);
}


function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    for(let i=0; i<tc; i++){
        var x = input[line].trim().split(" ").map(Number);
        var n = x[0];
        var k = x[1];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        // console.log(n,k,arr);
        suchpairreturns(n,k,arr);
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