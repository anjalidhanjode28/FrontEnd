//Problem 2: Use the above function to print the Primes from 2 to a given limit

function check_prime(a){
    let factorial=0;
    for(i=1;i<=a;i++){
      if(a%i==0){
        factorial++;
      }
    }
    if(factorial==2){
      return true;
    }else{
      return false;
    }
  }
  
  for(let i=2; i<=15; i++){
    let x=check_prime(i);
    if(x==true){
      console.log(i,"is a prime");
    }else{
      console.log(i,"is a not prime");
    }
  }