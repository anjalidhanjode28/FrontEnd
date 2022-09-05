// Description
// You are given an array having N integer values. You are also provided an integer K. You can update every element of the array by incrementing it by 1 in 1 second. Your task is to write a program that calculates the minimum time required (in seconds) to make every element of the array greater than or equal to K.

// Input Format:
// First line of the input contains two integer N and K
// Second line contains N elements separated by space.

let n=3;
let k=4;

let arr=[1,2,5];

function minimumArrayUpdateRequired(n,k,arr){
    
    let temp = [];
    let flag = false;
    
    for(let i=0; i<n; i++)
    {
        if(arr[i] < k){
            
            let count=0;
            
            for(let j=arr[i]; j<k; j++)
            {
                count++;
                flag=true;
            }
            
            temp.push(count);
        }
    }
    
    let max = -Infinity;
    for(let i=0; i<temp.length; i++){
        if(max < temp[i]){
            max = temp[i];
        }
    }
    
    if(flag === true){
        console.log(max);
    }else{
        console.log(0);
    }
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var x = input[0].trim().split(" ").map(Number);
    var n = x[0];
    var k = x[1];
    
    var arr = input[1].trim().split(" ").map(Number);
    minimumArrayUpdateRequired(n,k,arr);
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
