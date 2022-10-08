// Description
// You are given a 0-indexed integer array Arr of length n.
// Arr contains a valid split at index i if the following are true:
// The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
// There is at least one element to the right of i. That is, 0 <= i < n - 1.
// Find the number of valid splits in Arr.

// 1
// 4
// 10 4 -8 7

function ArraySplit(n,arr){
    
    let count = 0;
    let sum1 = 0;
    let sum2 = 0;
    let arr1 = [];
    let arr2 = [];
    
    for(let i=0; i<n-1; i++){
        sum1 += arr[i]
        arr1.push(sum1);
    }
    // console.log(arr1);
    
    for(let i=n-1; i>0; i--){
        sum2 += arr[i]
        arr2.push(sum2);
    }
    
    let left = 0;
    let right = arr2.length-1;
    
    while(left < right){
        let temp = arr2[left];
        arr2[left] = arr2[right];
        arr2[right] = temp;
        
        left++;
        right--;
    }
    // console.log(arr2);
   
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] >= arr2[i]){
            count++;
        }
        // console.log(arr1[i] +"-"+ arr2[i])
    }
    console.log(count);
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    for(let i=0; i<tc; i++){
        var n = +input[line].trim();
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        
        // console.log(n,arr);
        ArraySplit(n,arr);
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
