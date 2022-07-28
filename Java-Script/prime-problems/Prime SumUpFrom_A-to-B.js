//You are given two numbers, stored in a variable with the name A and B. Find out the sum of all prime numbers in the range of [A to B], including the value stored in A and B
let A=1;
let B=5;

let j=0;
let sum=0;

for(let i=A+j; i<=B; i++){

    let factore=0;
    for(let k=1; k<=i; k++){
        if(i%k==0){
            factore++;
        }
    }
    j++;
    
    
    if(factore==2){
        sum=sum+i;
    }
}
   
console.log(sum);