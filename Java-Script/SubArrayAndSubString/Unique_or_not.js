// You are given a string S. Your task is to write a program that comments if it has all unique character or not (no repeated character).
// If it has just unique character, output "Unique"
// Else in all other cases, output "No"

let S="masai";
let obj={};
  
  for(let i=0; i<S.length; i++){
      if(obj[S[i]]==undefined){
          obj[S[i]]=1;
      }else{
          obj[S[i]]=obj[S[i]]+1;
      }
  }
  
  let count=0;
  for(let key in obj){
      if(obj[key]==1){
          count++;
      }
  }

  
  if(count==S.length){
      console.log("Unique");
  }else{
      console.log("No");
  }