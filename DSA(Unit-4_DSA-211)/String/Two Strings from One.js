// Description
// You are given a string, stored in a variable with the namestr. The size of the string is stored in a variable with the nameN
// You have to make two strings out of the given string, such that the first string contains all the vowels present instr, in the same order as instr
// The second string contains all the consonants present instr, again in the same order as in the original stringstr

// For example, consider the value stored inN = 6, str = "nrupul", then all the vowels in the string areu,u, and the consonants aren,r,p,l. Therefore, the required output becomes

// uu
// nrpl

// Please note the order of consonants and the vowels in the two strings is same as in the original string. The string with the vowels should be printed first, and the string with the consonants should be printed on the next line

// Note : The string contains only lower case English Alphabets

// Input
// The first line of the input contains the value stored inN
// The next line contains the value stored instr

let N = 6;
let str = "nrupul";

let temp1 = "";
  var temp2 = "";
  
  
  for(let i=0; i<N; i++){
      
      if(str[i] == "a"){
          temp1 += str[i];
      }
      else if(str[i] == "e"){
          temp1 += str[i];
      }
      else if(str[i] == "i"){
          temp1 += str[i];
      }
      else if(str[i] == "o"){
          temp1 += str[i];
      }
      else if(str[i] == "u"){
          temp1 += str[i];
      }
      else{
          temp2 += str[i];
      }
  }
  
  console.log(temp1);
  console.log(temp2);