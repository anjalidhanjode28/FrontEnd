// Description
// You are given an integer array arr of size n. This array is queried q times. In each query, an element x is given. For each query, you have to print "YES" if the element exists in the array or "NO" if it doesn't exist

// 5
// 1 2 3 4 5
// 3
// 3 5 7

function AnswerQueries(n,arr,k,temp){
    
    let obj = {};
    
    for(let i=0; i<n; i++){
        
        if(obj[arr[i]]=== undefined){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]] = obj[arr[i]] + 1;
        }
    }
    
    for(let i=0; i<k; i++){
        
        if(obj[temp[i]]=== undefined){
            console.log("NO");
        }else{
            console.log("YES");
        }
    }
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var n = +input[0].trim();
    var arr = input[1].trim().split(" ").map(Number);
    var k = +input[2].trim();
    var temp = input[3].trim().split(" ").map(Number);
    
    // console.log(n,k,arr,temp);
    AnswerQueries(n,arr,k,temp);
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
