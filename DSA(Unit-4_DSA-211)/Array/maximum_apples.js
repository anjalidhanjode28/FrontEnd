// Description
// You have some apples and a basket that can carry up to W units of weight.
// Given an integer array weight of size N where weight[i] is the weight of the ith apple, return the maximum number of apples you can put in the basket.

// 4 20
// 3 10 4 4 

function maximumApples(N,w,apples){
    
    apples.sort(function(a,b){
        return a-b;    
    });
    
    var sum = 0;
    let count = 0;
    
    for(let i=0; i<N; i++){
       
        sum += apples[i];
        count++;
        
        if(sum === w){
            break;
        }
        
        
        if(sum > w){
            sum -= apples[i];
            count -= 1;
            break;
        }
    }
    
    console.log(count);
    
}


function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var x = input[0].trim().split(" ").map(Number);
    var N = x[0];
    var w = x[1];
    
    var apples = input[1].trim().split(" ").map(Number);
       
    // console.log(N,w,apples);
    maximumApples(N,w,apples);
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