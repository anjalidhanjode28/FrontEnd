// Description
// You are given an array A of N integers. Your task is to find the maximum number of times an odd number is continuously repeated in the array.

let n = 12;
let arr = [1,1,1,1,2,2,2,2,2,1,1,1];

function longestRepeatedOdd(n,arr){

    let ans = 0;
    let temp=0
    
    for(let i=0; i<n; i++){
        if(arr[i]%2 == 1){
            let j=i;
            var count =0;
            while(arr[j]==arr[i] && j<n){
               count++;
           
               temp = Math.max(temp,count)
                ans = Math.max(ans,j-i);
                i=j;
                j++;
            }
        }
    }
    console.log(temp);
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var n = +input[0].trim();
    var arr = input[1].trim().split(" ").map(Number);
    //console.log(n,arr);
    longestRepeatedOdd(n,arr);
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
