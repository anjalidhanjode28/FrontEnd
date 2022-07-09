//Given a string swap the case and print the output
//Sample Input - Test
//Sample Output - tEST
//NOTE: Use multiple functions to achieve the result, NOT one single code block

function lowercase(character)
  {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGJIJKLMNOPQRSTUVWXYZ";
    for(i=0; i<lower.length; i++)
    {
      if(character==lower[i])
      {
        return upper[i];
      }
    }
    return false;
  }

function uppercase(character)
  {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGJIJKLMNOPQRSTUVWXYZ";
    for(i=0; i<upper.length; i++)
    {
      if(character==upper[i])
      {
        return lower[i];
      }
    }
    return false;
  }

let input = "Test";
let bucket = "";
for(let i=0; i<input.length; i++)
  {
    let target =lowercase(input[i]);
    if(target==false)
    {
      target=uppercase(input[i]);
    }
    bucket = bucket +target;
  }
console.log(bucket);