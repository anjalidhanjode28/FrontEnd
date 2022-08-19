// Description
// The vaccine for corona virus is in short supply, therefore, the Scientists at the University of Masai, came up with certain number of chemical compounds which on combining can make an alternative medicine for Corona Virus
// But, all these chemical compounds have different reactive power, and for the vaccine to be effective, two chemical compounds need to be mixed such that the sum of total reactivity of the two compounds is equal toK.
// The compounds are kept strictly increasing order of their reactivity. You have to find out if there are two compounds whose combine reactivity is equal toKor not.

// Input
// The first line of the input containsT, the number of test cases.
// The first line of each test case, containsN, the number of compounds, andKis the required reactivity
// The next line containsNspace separated integers, indicating the reactivity of individual compounds

//Output
// For each test case, printPossible, if there are two compounds for whom the sum of individual reactivity isK, else printImpossible, on a new line.

let N=5; 
let K=7;
let Arr= [1,2,3,4,5];


function medicineOfLife(N,K,Arr){
    
    var sum;
    let result= false;
    for(let i=0; i<N-1; i++){
        for(let j=i+1; j<N; j++){
            sum=Arr[i]+Arr[j];
            if(sum===K){
                console.log("Possible");
                result=true;
                return; 
            }
        }
    }
    if(result==false){
        console.log("Impossible");
    }
}

function runProgram(input){
    //Input Taking Here
    
    input = input.trim().split("\n");
    
    var tc = +input[0].trim();
    var line=1;
    
    for(let i=0; i<tc; i++){
        var x = input[line].trim().split(" ").map(Number);
        var size = x[0];
        var value = x[1];
        line++;
        var arr = input[line].trim().split(" ").map(Number);
        line++;
       
        medicineOfLife(size,value,arr);
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
