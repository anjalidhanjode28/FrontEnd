// Description
// Harry and John want to do a competition of weightlifting in which they can lift as many weights as they want. There are N weights numbered from 1 to N where ith weight has a value weight[i]. We have to find the total weight lifted by both of them separately after the competition ends.
// Competition ends when all the weights have been lifted by them. The rules of the game are as follows-
// Harry will lift the weight from left to right and John will lift the weight from right to left.
// Harry will start the game and in the first move he can only lift one weight i.e. weight[0].
// After the first move, the players will play alternatively i.e. after the first move the John will lift, then again Harry boy and so on…..
// The boy will lift the least possible weight just greater than the weight lifted by the other boy in the previous move i.e. if one boy lifts weight equal to 8 in the previous turn, then the other boy has to lift a weight greater than 8 (using one or more weights).

// 1
// 11
// 3 1 4 1 5 9 2 6 5 3 5

function Weightlifting(n,arr){
    
    let left=0;
    let right = n-1;
    let harry_total_weight = 0;
    let john_total_weight = 0;
    let hlw = 0;
    let jlw = 0;
    
    while(left <= right){
        
        hlw = 0;
        
        while(hlw <= jlw && left <= right){
            hlw += arr[left];
            left++;
        }
        
        harry_total_weight += hlw;
        
        jlw = 0;
        
        while(jlw <= hlw && left <= right){
            jlw += arr[right];
            right--;
        }
        
        john_total_weight += jlw;
    }
    
    console.log(harry_total_weight,john_total_weight);
}


function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    
    for(let i=0; i<tc; i++){
        var n = +input[line++].trim();
        var arr = input[line++].trim().split(" ").map(Number);
        
        // console.log(n,arr);
        Weightlifting(n,arr);
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