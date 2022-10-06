// Description
// Kaleen bhaiya has a business of carpet in Mirzapur. His factory manufactures N carpets daily of different sizes.
// But he has a belief that if the sum of the sizes of 2 of the carpets is exactly equal to K, then his business will be successful.
// Given an Array A of N carpets, he has to find out if there are two carpets, whose sum of sizes is equal to K or not.
// The carpets have been kept in strictly increasing order of size.
// For each test case, print Yes, if there are two capets whose sum of sizes is K, else print No.

// Input
// The first line of the input containsT, the number of test cases.
// The first line of each test case, containsN, the number of Carpets, andKis the required sum
// The next line containsNspace separated integers, indicating the sizes of N carpets

// 2
// 5 31
// 10 11 13 17 21
// 5 44
// 10 11 13 17 21

function carpetKing(n,m,arr){
    
    arr.sort(function(a,b){
        return a-b;
    });
    
    // console.log(arr);
    let left = 0;
    let right = n-1;
    
    while(left<right){
        let sum = (arr[left] + arr[right]);
        
       if(sum === m){
           console.log("Yes");
           return;
       }
       if(sum < m){
           left++;
       }
       else{
           right--;
       }
    }
    console.log("No");
    
}

function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    for(let i=0; i<tc; i++){
        var x = input[line].trim().split(" ").map(Number);
        var n = x[0];
        var m = x[1];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        // console.log(n,m,arr);
        carpetKing(n,m,arr);
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
