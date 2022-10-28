// Description
// You brought virtual reality glasses. There is only one game installed to it called “The Abandoned City”
// You are lost in an abandoned city. In order to escape you have to pay at least thetargetnumber of golden coins. So you decide to collect the gold in the houses of that city. The city contains N houses aligned in a straight line. Each house contains a number of gold coins.
// You need to find out the shortest distance you have to walk until you collect the needed amount of golden coins to get out.
// You can start from any house i and continue (i+1)th or (i-1)th house but you can’t change your direction and stop at any house.
// Notethat if it's not possible to collect at least the target number of gold coins then, in that case, you will ultimately lose the game and you must print -1.

// 1
// 5 7
// 1 2 3 4 5

function Abandonedcity(n,k,arr){
    let j=0; 
    let i=0;
    let possible_min = 0;
    let min = Infinity;
    let window_sum = 0;
    let flag = false;
    
    for(let j=0; j<n; j++){
        
        window_sum += arr[j];
        
        while(window_sum >= k){
            possible_min = j-i+1;
            min = Math.min(min, possible_min);
            window_sum -= arr[i];
            i++;
            flag = true;
        }
    }
    
    
    if(flag === true){
        console.log(min);
    }else{
        console.log(-1);
    }
    
}


function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line = 1;
    for(let i=0; i<tc; i++){
        var x = input[line].trim().split(" ").map(Number);
        var n = x[0];
        var k = x[1];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        // console.log(n,k,arr);
        Abandonedcity(n,k,arr);
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