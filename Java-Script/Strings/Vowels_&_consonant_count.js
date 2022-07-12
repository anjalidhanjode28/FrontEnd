// You are given a string, stored in a variable with the name,str
// The size of the string is stored in another variable with the nameN
// You have to find the count of vowels, and consonants in the string, and print it
// For example, consider the value stored instr = "nrupul", and the value stored inN = 6, then the vowels, in the string isu, which is present twice. Therefore, the count of vowels becomes 2, and the rest of the characters are consonants, so the count of consonants becomes 4. Therefore, the required output will be

let str = "ankush";
let N=str.length;

  let vowel=0;
  let vowels = "aeiou";
  let result=false;
  
  for(let i=0; i<str.length; i++)
  {
      for(let j=0; j<vowels.length; j++)
      {
          if(str[i]==vowels[j])
          {
            vowel++;
          }
      }
  }
  
  let consonant=str.length-vowel;
  console.log(vowel,consonant);