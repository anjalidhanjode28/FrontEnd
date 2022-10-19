// Description
// Given a stringsand a characterc, return the percentage of characters insthat equalcrounded down to the nearest whole percent.

// Input Format
// The input consists of multiple testcases.
// The first line contains an integer t - the number of testcases.
// The next2*tlines contain the description of thettestcases.
// The first line of each testcase contains an integern- the size of the string.
// The second line consists of a stringsfollowed by the letterc.

// 2
// 6
// foobar o
// 4
// jjjj k

function PercentCount(n,str,char){
    
    let obj = {};
    
    for(let i=0; i<n; i++){
       
        if(obj[str[i]] === undefined){
            obj[str[i]] = 1;
        }else{
            obj[str[i]] = obj[str[i]] +1;
        }
    }
    
    let x = 0;
    
    for(let key in obj){
        if(key == char){
            x = obj[key];
        }
    }
    
    let y = Math.floor((x/n)*100);
    console.log(y);
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++){
        var n = +input[line++].trim();
        var arr = input[line++].trim().split(" ");
        var str = arr[0];
        var char = arr[1];
        
        // console.log(n,str,char);
        PercentCount(n,str,char);
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
