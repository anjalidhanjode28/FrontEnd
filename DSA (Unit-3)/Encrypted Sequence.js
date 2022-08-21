// Description
// Jack gave Jill a secret code, a sequence of numbers. Jill decided to encrypt the code. The encryption used by Jill is as follows.
// Lets say the sequence of N numbers is a1, a2, a3, a4, ...... an-1.Jillwill encrypt it to [a1,a3,a5....  a6,a4,a2].
// Jill mistakenly shared encrypted code with Romeo, but she is confident that Romeo won't be able to crack it. Can you help Romeo to get the secret code from the encrypted sequence?

// Input
// First-line contains T, no of test cases.
// First-line contains N, no of numbers in sequence.
// Second-line contains N spaced numbers, Encrypted code (sequence of numbers) by Jill.

let N=5;
let Arr = [1,3,5,4,2];

function encryptedSequence(N,Arr){
    let temp= [];
    
   for(let i=0; i<N/2; i++){
       temp.push(Arr[i]);
       temp.push(Arr[N-i-1]);
   }
   
   
   let flag="";
   for(let i=0; i<N; i++){
       flag=flag+temp[i]+" ";
   }
   console.log(flag);
   
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++){
        var size = +input[line].trim();
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        
        encryptedSequence(size,arr);
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
