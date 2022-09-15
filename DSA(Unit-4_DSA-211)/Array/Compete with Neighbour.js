// Description
// You are provided an array A which has N elements. Your task is to find the count of such occurrence where the element is larger than its neighbour.

let N = 8;
let arr = [1,2,3,4,2,1,6,5];

function competeWithNeighbour(n,arr){
    
    let count = 0;
    let flag = false;
    let flag2 = false;
    
    for(let i=0; i<n; i++){
        if(arr[i] > arr[i+1] && arr[i] > arr[i-1]){
            count++;
           
        }
        if(arr[0] > arr[1]){
            flag = true;
          
        }
        if(arr[n-1] > arr[n-2]){
            flag2 = true;
          
        }
    }
    
    if(flag === true){
        count++;
    }
    if(flag2===true){
        count++;
    }
    
    console.log(count);
}


function runProgram(input){
    input = input.trim().split("\n");
    var n = +input[0].trim();
    var arr = input[1].trim().split(" ").map(Number);
    
    competeWithNeighbour(n,arr);
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
