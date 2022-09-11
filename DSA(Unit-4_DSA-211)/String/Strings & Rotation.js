// Description
// Given two strings, find whether one string (s2) can be formed by rotating another string(s1).
// Example:For s1=”carbon”, s2=”boncar”, the output is "Yes" (without quotes)

// Input
// Input Format
// First line of input contains string s1
// Second line of the input contains string s2

let str1 = "carbon";
let str2 = "boncar";

// let str1 = "bucket";
// let str2 = "buckte";

function stringsRotation(str1,str2){
    
    let n = str1.length;
    let temp = "";
    
    for(let i=(n/2); i<n; i++)
    {
        temp += str1[i];
    }
    
    for(let i=0; i<(n/2); i++)
    {
        temp += str1[i];
    }
    
    if(temp === str2)
    {
        console.log("Yes");
    }
    else{
         console.log("No");
    }
}

function runProgram(input)
{
    input = input.trim().split("\n");
    var str1 = input[0].trim();
    var str2 = input[1].trim();
    
    stringsRotation(str1,str2);
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