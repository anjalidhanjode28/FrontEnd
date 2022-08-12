// You are given a sorted arrayAof sizeN, and another integerK
// You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
// If such a pair exists, printYes, else printNo

// Input
// The first line of the input containsT, the number of test cases.

// The first line of each test case contains N and K, the size of the array and the value of K.

// The next line contains N space separated integers denoting the elements of the array


let N=5; 
let k=3;
let Arr=[1,2,3,4,5];

function diferenceOfValue(N,K,Arr){
    
    var diff;
    let result= false;
    for(let i=0; i<N-1; i++){
        for(let j=i+1; j<N; j++){
            diff=Math.abs(Arr[i]-Arr[j]);
            if(diff===K){
                console.log("Yes");
                result=true;
                return; 
            }
        }
    }
    if(result==false){
        console.log("No");
    }
}



function runProgram(input){
   
    input = input.trim().split("\n");
    
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++){
        var x = input[line].trim().split(" ").map(Number);
        var size = x[0];
        var value = x[1];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
       
        diferenceOfValue(size,value,arr);
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
