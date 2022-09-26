// Description
// Given an array A of size N, find if the array is misbehaving or not. An array is said to be misbehaving if there are three consecutive elements in the array, which are odd.

// 2
// 6
// 1 3 3 4 5 6     Misbehave!
// 5
// 1 2 3 4 5       Behave!

function ArrayBehaviour(n,arr){
    
    for(let i=0; i<n-2; i++)
    {
        if(arr[i]%2 === 1 && arr[i+1]%2 === 1 && arr[i+2]%2 === 1)
        {
             console.log("Misbehave!");
             return;
        }
    }
    console.log("Behave!");
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line =1;
     for(let i=0; i<tc; i++){
         var n = +input[line];
         line++;
         var temp = input[line].trim().split(" ").map(Number);
         line++;
         //console.log(n,temp);
        ArrayBehaviour(n,temp);
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
