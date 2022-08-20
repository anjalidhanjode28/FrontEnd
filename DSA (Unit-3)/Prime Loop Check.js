// Description
// You are given a number, stored in a variable with the name,num
// Find out all the prime numbers, in the range, [1,num], including the value stored in num, and print each of them on a new line
// Note : 1 is not a prime number


let num = 5;

for(let j=1; j<=num; j++){
       
    let factore=0;
 
     for(let i=1; i<=j; i++){
         if(j%i==0){
             factore++;
         }
     }
     if(factore==2){
         console.log(j);
     }
} 