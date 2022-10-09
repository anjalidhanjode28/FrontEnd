// Description
// Given a string s consisting of N lowercase characters, you have to find whether the given string is Near Palindrome or not.
// Near Palindrome- A string is said to be near palindrome if after performing at most k operations string s will become palindromic.
// Operation- In one operation you can change any character of the string to any lower case character.

// 2
// 5 1
// abdca
// 6 2
// abcdef

function NearPalindrome(n,k,str){
    
    let count=0;
    let left = 0;
    let right = n-1;
    while(left < right){
        if(str[left] !== str[right]){
            count++;
        }
        left++;
        right--;
    }
    
    if(count <= k){
        console.log("True");
    }else{
        console.log("False");
    }
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    
    for(let i=0; i<tc; i++){
        var x = input[line].trim().split(" ").map(Number);
        var n = x[0];
        var k = x[1];
        line++;
        var str = input[line].trim();
        line++;
        
        // console.log(n,k,str);
        NearPalindrome(n,k,str);
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
