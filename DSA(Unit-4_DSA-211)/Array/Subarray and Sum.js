// Description
// Given an array of integers of length n and a positive integer K, the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K.

let n = 4;
let k = 3;
let arr = [2,3,4,6];

function SubarrayAndSum(n,k,arr){
    
    var count=0
    var left = -1
    var right = 0
    var sum = 0;
    
    
    for(i = 0;i<n;i++)
    {
        if(arr[i] % k !== 0)
        {
            if(left == -1)
            {
             left = i
            }
            right=i
        sum += arr[i]
        }
    }

    if(sum % k !== 0) 
    {
        return console.log(1)
    }

    if(left == -1)
    {
        return console.log(0)
    }

    left = left + 1
    right = n - right
    var x = n - min(left,right)
    var sum1 = 0;
    
    for (var j=0; j<x; j++)
    {
        sum1=sum1+arr[j]
    }

    if(sum1%k!==0)
    {
        count++
    }
    var left1=0
    var right2=x
    for(var l=x;l<n;l++)
    {
        sum1=sum1-arr[left1]
        sum1=sum1+arr[right2]
        left1++
        right2++
        if(sum1%k!==0)
        {
            count++
        }
    }
    console.log(count)
}

function min(left,right)
{
    if(left>right)
    {
        return right
    }
    else
    {
        return left
    }
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var x = input[0].trim().split(" ").map(Number);
    var n = x[0];
    var k = x[1];
    
    var arr = input[1].trim().split(" ").map(Number);
    //console.log(n,k, arr);
    SubarrayAndSum(n,k,arr);
    
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
