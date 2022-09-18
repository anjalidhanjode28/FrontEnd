// Description
// Given an array of integers, find if there exists two numbers in the array whose sum is equal to a third number c, which is also present in the array.
// i.e. a + b = c
// If there exist any such triplet in the array output 1 else output 0.
// Note: a,b,c all need to be at different indices, i.e. you cannot use any element twice

let n = 5;
let arr = [1,3,2,4,5];

function tripletSum(n,arr){
    
    let obj = {};
    let temp = [];
    
    for(let i=0; i<n-1; i++){
       for(let j=i+1; j<n; j++){
          let sum = arr[i]+arr[j];
          temp.push(sum);
       }
    }
    
    for(let i=0; i<temp.length; i++){
        for(let j=0; j<n; j++){
            if(temp[i] === arr[j]){
                console.log(1)
                return;
            }
        }
    }
    console.log(0);
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++){
        var n = +input[line].trim();
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        
        //console.log(n,arr);
        tripletSum(n,arr);
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
