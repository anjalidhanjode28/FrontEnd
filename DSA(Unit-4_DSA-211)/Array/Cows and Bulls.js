// Description
// You are playing the Cows and Bulls game with your friend.
// You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:
// The number of "bulls", which are digits in the guess that are in the correct position.
// The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
// Given the secret number secret and your friend's guess guess, print the hint for your friend's guess.
// The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.


// Sample Input 1 
// 1
// 4
// 1817
// 8710

// Sample Output 1
// 1A2B


function CowsAndBulls(n,secret,guess){
    
    let obj = {};
    let A = 0;
    let B = 0;
    
    for(let i=0; i<n; i++){
        let char = secret[i];
        
        if(obj[char]){
            obj[char] = obj[char]+1;
        }
        else{
            obj[char] = 1;
        }
    }
    
    
     for(let i=0; i<n; i++){
        let char = guess[i];
        
        if(obj[char]){
            A = A + 1;
            obj[char] = obj[char]-1;
        }
        if(secret[i] == guess[i]){
            B = B + 1;
        }
    }
    console.log(B+"A"+(A-B)+"B");
    
}


function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    var tc = +input[0];
    let line = 1;
    
    for(let i=0; i<tc; i++){
        var n = +input[line].trim();
        line++;
        var secret = input[line];
        line++;
        var guess = input[line];
        line++;
        //console.log(n,secret,guess);
        CowsAndBulls(n,secret,guess);
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
