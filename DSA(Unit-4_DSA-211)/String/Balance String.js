// Description
// You are given a string s of length n consisting of characters a and/or b.
// Let AB(s) be the count of occurrences of string ab in s as a substring. Analogically, BA(s) is the count of occurrences of ba in s as a substring.
// In one step, you can choose any index i and replace s[i] with the character a or b.
// What is the minimum number of steps you need to make to achieve AB(s) = BA(s)?


let tc = 4;
// let k =1;
// let str = "b";
// let k =9;
// let str ="aabbbabaa";
// let k = 4;
// let str = "abbb";
let k=6;
let str = "abbaab";

function balanceString(n,str){
    
    let count=0;
    let count2=0;
    
  for(let i=0; i<n-1; i++){
        if(str[i]==="a" && str[i+1]==="b"){
            count++;
        }
  }
  for(let i=0; i<n-1; i++){
       if(str[i]==="b" && str[i+1]==="a"){
            count2++;
        }
  }
  
  let diff = count-count2;
  
  if(diff == 0){
        console.log(diff);
  }
  else if(diff < 0){
        let x = -1*diff;
        console.log(x);
  }
  else{
        console.log(diff);
  }
}


function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    
    for(let i=0; i<tc; i++){
        var n = +input[line].trim();
        line++;
        var str = input[line].trim();
        line++;
        
        balanceString(n,str);
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
