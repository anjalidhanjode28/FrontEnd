// Description
// You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.
// Your task is to find the minimum number of required deletions.

// Input
// Input Format
// The input consists of multiple testcases.
// The first line contains an integer t - the number of testcases.
// Each of the next t lines contains a string s.

// Constraints
// 1 <= t <= 10
// 1 <= length of s <= 10^5

// Output
// Output Format
// For each testcase print the minimum number of deletions required.

//tc = 5;
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB

function alternatingCharacters(str){
    
    let temp = "";
    let j=0;
    let count = 0;
    let flag=false;
    let N = str.length;
    
    for(let i=0; i<N; i++)
    {
        if(str[i] == str[i+1])
        {
            count++;
            flag=true;
        }
        else{
            str[j]=str[i];
            j++;
        }
    }
    console.log(count);
}


function runProgram(input){
    
    input = input.trim().split("\n");
    var tc = +input[0];
    var line=1;
    
    for(let i=0; i<tc; i++){
        var temp = input[line].trim();
        line++;
        alternatingCharacters(temp);
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