// Description
// Given an array of n elements, print the element which occurs more than floor(n/2) times. if no such element then print -1.

// 3
// 3
// 1 1 2
// 4
// 1 1 1 2
// 2
// 1 2

function majorElements(n,arr){
    
    let obj={};
    let flag = false;
    let x;
    
    for(let i=0; i<n; i++)
    {
        if(obj[arr[i]] === undefined)
        {
            obj[arr[i]]=1;
        }else{
            obj[arr[i]]=obj[arr[i]]+1;
        }
    }
    
    for(let key in obj){
        if(Math.floor(n/2) < obj[key]){
            flag = true;
            x = key;
        }
    }
    
    if(flag === true){
        console.log(x);
    }else{
        console.log(-1);
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
        
        majorElements(n,arr);
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
