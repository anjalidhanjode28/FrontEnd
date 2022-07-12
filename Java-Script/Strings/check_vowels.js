// You are given a string, whose size is stored in a variable with the nameN
// The string is stored in a variable with the namestr
// You have to printtrue, if the string contains at least one vowel, otherwise printfalse
// For example, consider the value stored inN = 6, and the value stored instr = "nrupul", then the output will betrue, since the string contains the vowelutwice

let str="stvr";
let N=str.length;

let vowels = "aeiou";
  let result = false;
  
  for(let i=0; i<str.length; i++){
      for(let j=0; j<vowels.length; j++){
          if(str[i]==vowels[j]){
              result=true;
          }
      }
  }

  
  if(result==true){
      console.log("true");
  }else{
      console.log("false");
  }