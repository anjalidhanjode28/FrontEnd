// Description
// You are given a string S. Find if the string, can be converted into a palindrome.
// You are free to rearrange the string in any way you want. Rearrangement refers to the fact that the characters can be arranged in any way in the string.
// Deletion or addition of characters is not allowed.

// Input
// The first line contains T, the number of test cases.
// The first line of each test case contains N, the length of the string.
// The next line contains the string.

// 2
// 6
// aabbcc
// 5
// aabcd

function detectPalindrome(n,str){
    
    let obj = {};
    let count = 0;
    
    for(let i=0; i<n; i++)
    {
        if(obj[str[i]] === undefined)
        {
            obj[str[i]]=1;
        }
        else{
            obj[str[i]]++;
        }
    }
    
    for(let key in obj){
        if(obj[key]%2 !== 0){
            count++;
        }
    }
    
    if(count > 1){
        console.log("Not Possible!");
    }else{
        console.log("Possible!");
    }
}


function runProgram(input){
  
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    
    for(let i=0; i<tc; i++){
        var size = +input[line].trim();
        line++;
        var str = input[line].trim();
        line++;
        
        detectPalindrome(size,str);
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