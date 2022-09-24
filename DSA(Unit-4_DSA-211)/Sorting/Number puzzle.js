// Description
// You are given an array of positive integers. You can append all the integers present in the array in any order to form one single integer. Your task is to make the final integer as large as possible.

// Input
// The first line of input contains a single integer T denoting the number of test cases.
// The first if each test case contains a single positive integer N denoting the size of the array.
// The second line of each test case contains N space-separated integers denoting the elements of the array.

//Output
//The single line of output should contain the largest possible integer obtained by appending all the elements of the array.

let n = 2;
let arr = [80,8];

function numberPuzzle(n,arr){
    
    let count=0;
    
    for(let i=0; i<n; i++)
    {
        if(arr[i] === "0")
        {
            count++;
        }
    }
    if(count === n)
    {
        console.log(0);
        return;
    }
    
    for(let i=0; i<n; i++)
    {
        for(let j=0; j<n-i-1; j++)
        {
            let sum1 = arr[j]+arr[j+1];
            let sum2 = arr[j+1]+arr[j];
            
            if(sum2 > sum1)
            {
                swap(arr,j,j+1);
            }
        }
    }
    
    function swap(arr,A,B){
        let temp = arr[A];
        arr[A] = arr[B];
        arr[B] = temp;
    }
    console.log(arr.join(""));
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    
    for(let i=0; i<tc; i++)
    {
        var n = +input[line].trim();
        line++;
        var arr = input[line].trim().split(" ");
        line++;
        
        numberPuzzle(n,arr);
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
