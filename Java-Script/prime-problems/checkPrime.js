//Problem 1: Create a function to check if a number is Prime or Not

let num=14;

function check_prime(){
  let factorial=0;
  for(i=1; i<=num; i++){
    if(num%i==0){
      factorial++;
    }
  }
  if(factorial==2){
    console.log("prime");
  }else{
    console.log("No prime");
  }
}

check_prime();