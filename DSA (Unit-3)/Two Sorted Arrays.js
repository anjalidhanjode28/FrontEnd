// Description
// You are given two arraysAandB, each of size N.
// The first array A, is sorted in ascending order, while the second array is sorted in descending order.
// You have to find the number of elements common in both the arrays.
// Try to solve this without using any extra space.

// Input
// The first line of the input containsT, the number of test cases.
// The first line of each test case, contains N, the number of elements in the arrayAandB
// The next line of the test case, containsNspace separated integers, denoting the number of elements of the arrayA
// The next line containsNspace separated integers, denoting elements of the arrayB.


let N=6;
let A=[1,2,2,3,4,5];
let B=[4,4,3,2,1,1];

function twoSortedArrays(N,A,B){
    
    let left=0;
    let right=N-1;
    let count = 0;
    
    while(left < N && right >=0){
        if(A[left]==B[right]){
            count++;
            left++;
            right--;
        }
        else if(A[left]>B[right]){
            right--;
        }
        else{
            left++;
        }
    }
   
    console.log(count);
}


function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++){
        var size = +input[line].trim();
        line++;
        var A = input[line].trim().split(" ").map(Number);
        line++;
        var B = input[line].trim().split(" ").map(Number);
        line++;
        twoSortedArrays(size,A,B);
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
