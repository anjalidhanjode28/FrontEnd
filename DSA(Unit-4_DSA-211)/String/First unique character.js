// Description
// You are given a string, You have to print the first non-repeating character of the string if exists, else print "Not Found".
// In the given sample input
// S = "racecars"
// r, a and c appear 2 times, e and s appear 1 time.
// and e is the first non-repeating character.

let str = "racecars";

function firstUniqueCharacter(str){
    
    let obj = {};

    for(let i=0; i<str.length; i++)
    {
       if(obj[str[i]] == undefined)
       {
           obj[str[i]]=1;
       }
       else
       {
           obj[str[i]] = obj[str[i]]+1;
       }
    }
    
    let arr=[];
    
    for(let key in obj)
    {
        if(obj[key] === 1)
        {
            arr.push(key);
        }
    }
    
    if(arr == "")
    {
        console.log("Not Found");
    }
    else
    {
        console.log(arr[0]);
    }
}

function runProgram(input){
    var str = input.trim();
    firstUniqueCharacter(str);
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
