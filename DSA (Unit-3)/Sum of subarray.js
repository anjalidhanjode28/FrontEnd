// Description
// You are given an array of N integers and a single integer K. You need to find out if there is a subarray, which has the sum exactly as K.

// Input
// Input Format

// First-line contains T, no of test cases.
// First-line of each test case contains N, the size of the array, and K.
// Second-lineof each test casecontains N spaced integers, elements of an array.

// Output
// For each test case print "Yes", if there exists a subarray with sum K or else print "No".


let N=5;
let K=3;
let Arr = [1,2,1,3,4];


function sumOfSubarrays(N,K,Arr){
    
    let windowSum=0;
    let j=0;
    
    for(i=0; i<N; i++){
        
        while(windowSum < K  &&  j < N){
            windowSum += Arr[j];
            j++;
        }
        
        if(windowSum===K){
            console.log("Yes");
            return;
        }
        windowSum =windowSum - Arr[i];
    }
    console.log("No");
    
    
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
