//- Given a list of user data with name and age, create a list of key-value pairs from the input
//- From the generated data, print the users whose age is more than 30

let arr1=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let arr2=[32, 30, 26, 28, 44];

let array=[];

for(let i=0; i<arr1.length; i++)
{
  var obj={};
  if(obj[arr1[i]]==undefined)
  {
    obj["name"]=arr1[i], obj["age"]=arr2[i];
    array.push(obj);
  }
}

console.log(array);

let bag="";
for(let i=0; i<array.length; i++)
{
  var age=array[i]["age"];
  
  if(age>30)
  {
    bag=bag+array[i]["name"]+" ";
  }
}
console.log(bag);