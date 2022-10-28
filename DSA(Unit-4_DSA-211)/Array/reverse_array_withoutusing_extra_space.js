// Description
// You are given an array, such that you have to reverse the array
// Please note that you have to reverse the given array, and using a new array should be avoided
// Also, refrain from printing the elements directly

// Input
// The first line of the input contains the valueN, the size of the array
// The next line containsNspace separated values denoting the values of the array

// 5
// 1 2 3 4 5

function ReverseTheArray(n,arr){
    
    let left = 0;
    let right = n-1;
    let bag = "";
    
    while(left<right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        left++;
        right--;
    }
    for(let i=0; i<n; i++){
        bag += arr[i]+" ";
    }
    console.log(bag);
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    
    // console.log(n,arr);
    ReverseTheArray(n,arr);
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
