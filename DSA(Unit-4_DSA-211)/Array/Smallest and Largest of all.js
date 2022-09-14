// Description
// Given an array, A, of N integers, print the smallest and largest element present in the array
// YOU MUST NOT USE ANY BUILT-IN FUNCTION


let n = 4;
let arr = [-2,0,8,4];

function smallestAndLargestOAll(n,arr)
{
    let min = Infinity;
    let max = -Infinity;
    
    for(let i=0; i<n; i++)
    {
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max=arr[i];
        }
    }
    console.log(min);
    console.log(max);
}


function runProgram(input){
    input = input.trim().split("\n");
    var n = +input[0].trim();
    var arr = input[1].trim().split(" ").map(Number);
    smallestAndLargestOAll(n,arr);
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
