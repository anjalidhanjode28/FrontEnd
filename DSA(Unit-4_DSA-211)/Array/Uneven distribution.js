// You like uneven distribution. You have k friends and n chocolates.
// You have to distribute these n chocolates among your k friends in such a way that:
// Each of your friend gets atleast 1 chocolate
// No two friends get the same number of chocolates
// Determine if it is possible to do so.

// TC = 4;
// [3,4] -  NO
// [30,3] -  YES
// [2,2] -  NO
// [1,1] -  YES

function Unevendistribution(n,k){
    
    let obj = {};
    let sum = 0;
    
    for(let i=0; i<k; i++){
        sum += i+1;
    }
    
    
    if(sum <= n){
        console.log("YES");
    }else{
        console.log("NO");
    }
}


function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    
    for(let i=0; i<tc; i++){
        var temp = input[line++].trim().split(" ").map(Number);
        var n = temp[0];
        var k = temp[1];
        
        // console.log(n,k);
        Unevendistribution(n,k);
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
