// Description
// Your boss has sent you to his kitchen to clean out stuff he doesn't like.
// There are n items on his platform shelf, and are placed in certain order and each item has auniqueindex number.
// He then mentions a list of item indexes that he doesn't like. Your task is to remove all these items and then return to him all the other items in the same given order.


let n = 4;
let arr = [4,1,3,2];
let k = 2;
let dis = [3,1];

function BossAndHisDislikes(n,arr,k,dis){
    
    let obj = {};
    let temp = [];
    let bag = "";
    
    for(let i=0; i<n; i++){
       if(obj[arr[i]] === undefined){
           obj[arr[i]] = 1;
       }else{
           obj[arr[i]] = 1;
       }
    }
    
    for(let i=0; i<k; i++){
       if(obj[dis[i]] !== undefined){
           obj[dis[i]] = "no";
       }
    }
    
    for(let key in obj){
        if(obj[key] !== "no"){
            temp.push(key);
        }
    }
    
    for(let i=0; i<n; i++){
        for(let j=0; j<temp.length; j++){
            if(arr[i] == temp[j]){
                bag += arr[i]+" ";
            }
        }
    }
      console.log(bag);
   
}


function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    
    for(let i=0; i<tc; i++){
        var n = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        var k = +input[line++].trim();
        var dis = input[line++].trim().split(" ").map(Number);
        
        // console.log(n,arr,k,dis);
        BossAndHisDislikes(n,arr,k,dis);
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
