// Description
// Given an array on N integers , sort the array in increasing order of the squares* of the elements.
// If two elements have same values of squares,then the integer which comes first in the given array remains first in the sorted array.
// Square of a number x is defined as x^2

// 1
// 5
// -2 3 1 -4 6

function squareSorting(n,arr){
    
    let bag = "";
    let array = [];
    
    for(let i=0; i<n; i++){
        array.push(arr[i]*arr[i]);
    }
    
    
     for(let i=0; i<n-1; i++)
    {
        for(let j=0; j<n-i-1; j++)
        {
            if(array[j] > array[j+1])
            {
                swap(array,arr, j, j+1);
            }
        }
    }
    
    function swap(array,arr,A,B){
        let temp1 = array[A]
        array[A] = array[B];
        array[B] = temp1;
        
         let temp2 = arr[A]
        arr[A] = arr[B];
        arr[B] = temp2;
    }
   
    for(let i=0; i<n; i++){
       
       bag += arr[i]+" ";
    }
    console.log(bag);
}

function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line =1;
    for(let i=0; i<tc; i++){
        var n = +input[line].trim();
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        
        // console.log(n,arr);
        squareSorting(n,arr);
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
