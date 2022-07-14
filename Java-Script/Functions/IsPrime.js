function isPrime(X){

    let factor=0;
    for(i=1; i<=X; i++){
      if(X%i==0){
         factor++;
      }
    }
    if(factor==2)
    {
      return X;
    }else{
      let b="no";
      return b;
    }
  }
  
  let y=13;
  for(i=1; i<=y; i++){
    console.log(isPrime(i));
  }
  