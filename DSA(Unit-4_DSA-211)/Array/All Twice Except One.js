// Description
// Given an array A of n elements, every element appears twice in the array except for one element. Find the element that is uniquely present in the array.
// In other words, there is one value that has a frequency of 1 whereas the rest has a frequency of 2. Find that particular element.
// Added Constraint -> Do in O(1) auxiliary space and linear time complexity.

let n = 5;
let arr = [1,2,1,3,2];

function AllTwiceExceptOne(n,arr){
    
    let obj = {};
    let x;
    let y;
    
    for(let i=0; i<n; i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]] = obj[arr[i]] +1;
        }
    }
    
    for(let key in obj){
        if(obj[key] === 1){
            x = obj[key];
            y = key;
        }
    }
    
    console.log(y);
}


function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    
    for(let i=0; i<tc; i++){
        var n = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        
        // console.log(n,arr);
        AllTwiceExceptOne(n,arr);
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
