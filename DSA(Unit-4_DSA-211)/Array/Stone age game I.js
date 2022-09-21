// Description
// 2 players ram and shyam are playing a game where in they both stand opposite each other and and there are n boxes between them.
// Each box contains some number of stones in it. They can move in these boxes only in one direction, i.e. ram can move only towards shyam and shyam only towards ram, also they cannot cross each other.
// As and when they step foot in a box they collect all the stones in their bag and then they can decide whether to move forward or not.
// The task is that at the end of the game the total number of stones in both the bags should be same. They cannot cross each other and cannot stand in the same box as well.
// Find the maximum no of stones each can collect so that they both have same number of stones after covering x1 and x2 boxes respectively (x1+x2<=n).
// If they cannot have equal number of stones then output 0. If there exists some number of stones they can collect so that they have equal stone then they are said to win the game.

// 2
// 5
// 100 8 97 2 1
// 5
// 100 9 96 2 1

function stoneAgeGameI(n,arr){
    
    let i=0;
    let j=n-1;
    let ram = arr[i];
    let shyam = arr[j];
    let max = 0;
    
    while(i<j){
        
        if(ram < shyam){
            i++;
            ram += arr[i];
        }

        else if(shyam < ram){
            j--;
            shyam += arr[j];
        }

        else{
            if(ram > max)
            {
                max = ram;
            }
        
            i++;
            j--;
            ram += arr[i];
            shyam += arr[j];
        }
    }
    
    console.log(max);
    
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++){
        var n = +input[line].trim();
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
        
        // console.log(n,arr);
        stoneAgeGameI(n,arr);
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
