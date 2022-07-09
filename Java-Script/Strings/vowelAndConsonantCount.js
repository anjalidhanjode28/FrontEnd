let str = "ankush";
  
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