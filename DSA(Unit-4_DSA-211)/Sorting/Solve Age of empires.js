// Description
// You are playing the popular game of "Age of Empires". You are the king of the empire where you have 2N workers.
// All workers will be grouped in the association with size 2, so a total of N associations have to be formed.
// The building speed of the i-th worker is A[i].
// To make an association, you pick up 2 workers. Let the minimum building speed between both workers be x, then the association has the resultant building speed x.
// You have to print the maximum value possible of the sum of building speeds of N associations if you make the associations optimally.

// Input
// First line contains an integer N, representing the number of associations to be made.
// Next line contains 2N space separated integers, denoting the building speeds of 2N workers.

// Output
// Print the maximum value possible of the sum of building speeds of all the associations.

let k = 2;
let arr = [1,3,1,2];

function solveAgeOfEmpires(k,arr){
    
    let N = arr.length;
    
    for(let i=0; i<N-1; i++)
    {
        for(let j=0; j<N-i-1; j++)
        {
            if(arr[j] > arr[j+1])
            {
                swap(arr, j, j+1);
            }
        }
    }
    
    function swap(arr,A,B)
    {
        let temp = arr[A];
        arr[A] = arr[B];
        arr[B] = temp;
    }
    
    let sum = 0;
    for(let i=0; i<N; i++)
    {
       if(i%2 === 0)
       {
         let x = Math.min(arr[i],arr[i+1]);
         sum += x;
       }
    }
    console.log(sum);
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var k = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    solveAgeOfEmpires(k,arr);
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
