// Description
// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.
// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// 6 4
// give me one grand today night
// give one grand today

function RansomNote(n1,n2,arr1,arr2){
    
    let obj1={};
    let obj2={};
    
    for(let i=0; i<n1; i++){
        if(obj1[arr1[i]] === undefined){
            obj1[arr1[i]] = 1;
        }else{
             obj1[arr1[i]] =  obj1[arr1[i]] + 1;
        }
    }
   
    for(let i=0; i<n2; i++){
        
        if(obj2[arr2[i]] === undefined){
            obj2[arr2[i]] = 1;
        }else{
             obj2[arr2[i]] =  obj2[arr2[i]] + 1;
        }
    }
   
   
   for(let key1 in obj1){
       for(let key2 in obj2){
           if(obj1[key1] !== obj2[key2] || key1 !== key2){
              console.log("No");
              return;
           }
       }
   }
    
    console.log("Yes");
    
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
   
    var x = input[0].trim().split(" ").map(Number);
    var n1 = x[0];
    var n2 = x[1];
   
    var arr1 = input[1].trim().split(" ");
    var arr2 = input[2].trim().split(" ");
   
    // console.log(n1,n2,arr1,arr2);
    RansomNote(n1,n2,arr1,arr2);
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