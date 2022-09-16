// Description
// Pat decided to visit his friend Stan. It turned out that the Pat's house is located at point 0 and his friend's house is located at point x (x > 0) of the coordinate line. In one step the Pat can move 1, 2, 3, 4 or 5 positions forward.
// Determine, what is the minimum number of steps he need to make in order to reach his friend's house.

let num = 26;

function patAndStan(num)
{
    if(num%5===0){
        console.log(num/5);
    }else{
         console.log(Math.floor(num/5)+1);
    }
}

function runProgram(input){
    var num = +input.trim();
    patAndStan(num);
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
