// Description
// Given an array A of size n with positive numbers, find the total number of subarrays that have sum < m.
// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) and M as mentioned in the question.
// The second line of the test case contains n integers (1 ≤ Ai ≤ 100).
// Output
// For each test case, print the answer: The number of subarrays.


let tc=1;
let n=5; 
let M=5;
let Arr=[1,5,1,3,2];

function sumOfSubarrays(n,M,Arr){
    let start=0;
    let end=0;
    let count=0;
    sum=Arr[0];
    while(start < n && end < n){
        if(sum < M){
            end++;
            if(start <= end){
                count=count+(end-start);
            }
            if(end < n){
                sum=sum+Arr[end];
            }
        }else{
            sum=sum-Arr[start];
            start++;
        }
    }
    console.log(count);
}

function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    var tc = +input[0];
    var line=1;
    
    for(let i=0; i<tc; i++){
        var x = input[line].trim().split(" ").map(Number);
        var size = x[0];
        var value = x[1];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        
        //console.log(size,value,arr);
        sumOfSubarrays(size,value,arr);
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
