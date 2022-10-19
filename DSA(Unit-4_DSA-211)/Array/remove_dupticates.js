// Description
// Given an array of n integers, the array is sorted. You have to remove the duplicates, print only unique elements, do it in place. i.e O(1) space

// 2
// 3
// 1 1 2
// 4
// 1 1 3 3

function removeDuplicates(n,arr){
   
    arr.sort(function(a,b){
        return a-b;
    });
    
    let count = 0;
    let j = 0;
    
    for(let i=0; i<=n-2; i++){
        if(arr[i] != arr[i+1]){
            arr[j] = arr[i];
            j++;
            count++;
        }
    }
    
    arr[j] = arr[n-1];
    let bag = "";
    
    for(i=0; i<=j; i++){
        bag += arr[i]+" ";
    }
    
    console.log(count+1);
    console.log(bag);
}

function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    for(let i=0; i<tc; i++){
        var n = +input[line].trim();
       
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        // console.log(n,arr);
        removeDuplicates(n,arr);
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