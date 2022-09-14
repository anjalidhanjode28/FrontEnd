// Description
// You are given a number stored in a variable with the namenum
// Check if the number is a prime number or not
// If the value stored innum, is a prime number printYes, else printNo
// Note : A prime number is a number, that is divisible by only 1 and the number itself

let num = 13;

let factorial=0;
for(i=0;i<=num;i++){
    if(num%i==0){
        factorial++;
    }
}
if(factorial==2){
    console.log("Yes");
}else{
    console.log("No");
}