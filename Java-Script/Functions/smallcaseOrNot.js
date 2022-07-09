//Problem 4: Write a function to check if the char is a small case or not.

function check(){
    let char="T";
    let lower="abcdefghijklmnopqrstuvwxyz";
    let ispresent=false;
  
    for(i=0; i<=lower.length-1;i++){
      if(char==lower[i]){
        ispresent=true;
      }
    }
    if(ispresent==true){
      console.log("Lowercare");
    }else{
      console.log("Uppercase");
    }
  }
  check();