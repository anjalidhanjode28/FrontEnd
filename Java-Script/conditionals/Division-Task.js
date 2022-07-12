// Let’s calculate the variablexwhich is equal to the floor of a number you get when32is divided byN(32/N).
// In casexis 0, printToo Low
// In case it is not possible to generate a valid number, print-1
// In all other cases, printx.

let N=4;

let x=Math.floor(32/N);
    
if(x==0){
    console.log("Too Low");
}else if(N == 0){
    console.log("-1");
}else{
    console.log(x);
}