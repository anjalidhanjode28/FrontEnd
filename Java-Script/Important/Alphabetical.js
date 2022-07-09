//Write a function to convert a character to lower case
//Use this function to convert a given word to lower case
//Use that function to convert an array of strings to array of lower case strings
//Sample Input ["MA", "SA", "I", "SCH", "OOL"]
//Sample Output ["ma", "sa", "i", "sch", "ool"]

// function lower_case_conversion(){
//   let arr=["MA", "SA", "I", "SCH", "OOL"];
//   let lower=["abcdefghijklmnopqrstuvwxyz"];

function toUpper(str){

  
    let lower="abcdefghijklmnopqrstuvwxyz";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let bag="";
    
    
    for(i=0; i<str.length; i++)
    {
      for(j=0; j<upper.length; j++)
      {
        if(str[i]==upper[j])
        {
          let x=lower[j];
          bag=bag+x;
        }
      }
    }
   return bag;
  }
  
  
  var new_arr=[];
  let arr=["MA", "SA", "I", "SCH", "OOL"];
  
  
  for(k=0; k<arr.length; k++)
    {
      var new_str="";
      new_str=new_str+toUpper(arr[k]);
      new_arr.push(new_str);
    }
  
  console.log(new_arr);