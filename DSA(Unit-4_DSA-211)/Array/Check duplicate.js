// Description
// Given an array of integers, check if it contains duplicate element. If present then print YES else print NO.

// 3
// 1
// 1
// 2
// 1 1
// 3
// 1 2 3

function checkDuplicate(n,arr){
    
    let flag=false;
    
    for(let i=0; i<n-1; i++){
        for(let j=i+1; j<n; j++){
            if(arr[i] === arr[j]){
                flag=true;
                break;
            }
        }
    }
    
    if(flag === true){
        console.log("YES");
    }else{
        console.log("NO");
    }
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
        
       // console.log(n,arr);
       checkDuplicate(n,arr);
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
