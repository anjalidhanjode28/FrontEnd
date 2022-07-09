//Problem 5: Write a function to replace spaces in a given string with - .

function replace_space()
{
  let name="The quick brown for jumps over the lazy dog";
  let new_name="";
  
  for(i=0; i<=name.length-1; i++)
  {
      if(name[i]==" ")
      {
        new_name+="-";
      }
    else{
      new_name+=name[i];
    }
  }
  console.log(new_name);
}
replace_space();