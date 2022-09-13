// Description
// You are given a string, remove all the duplicates and print the unique string.

let S ="aaaabbbbbcccccdddd";

function makeItUnique(S){
    
    let obj = {};
    
   for(let i=0; i<S.length; i++)
   {
        if(S[i] !== ' ')
        {
           if(obj[S[i]] === undefined)
           {
               obj[S[i]]=1;
           }
           else
           {
               obj[S[i]]=obj[S[i]]+1;
           }
        }
   }
   let temp="";
   
   for(let key in obj)
   {
       temp += key;
   }
   console.log(temp);
}

function runProgram(input){
    var arr = input.trim();
    makeItUnique(arr);
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
