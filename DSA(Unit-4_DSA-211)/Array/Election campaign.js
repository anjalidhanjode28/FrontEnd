// Description
// Elections are close and you are a party worker of a political party and you have been assigned a task.
// The task is it to put up a poster on the side of a highway. There are n poles and you have to choose any two poles to put up the poster. Say you choose two poles of height h1 and h2 then the poster will be put up of height which is minimum of the two.
// And the width would be the distance between them. You have to put up the poster of maximum area to make your boss happy.
// What is the maximum area of the poster you can fit using the given poles. The n consecutive poles are separated by a unit distance.

// 2
// 4
// 1 2 3 4
// 5
// 5 5 5 5 5

function electionCampaign(N,Arr){
    
    let max_area = 0;
    
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(i!=j){
                
                let x = Math.min(Arr[j],Arr[i]);
                let y = Math.abs(j-i);
                let z = x*y;
                if(z > max_area){
                    max_area = z;
                }
            }
        }
    }
    
    console.log(max_area);
}


function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line=1;
    for (let i=0; i<tc; i++){
        var n = +input[line].trim();
        line++;
        var temp = input[line].trim().split(" ").map(Number);
        line++;
        
        //console.log(n,temp);
        electionCampaign(n,temp);
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
