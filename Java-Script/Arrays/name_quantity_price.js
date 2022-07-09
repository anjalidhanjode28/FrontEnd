//- Given an input of products in the below format (Name Quantity Price)
//- Input

//["Rice", "Dal", "Salt"]
//[2, 3, 1]
//[60, 50, 20]

//- Create an object with the key `data` which is an array of //objects with the format `{name: "Rice", quantity: 2, price: 60}`
//- The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
//- Sample output for the above case `290`

let array=[];
let arr1=["Rice", "Dal", "Salt"];
let arr2=[2, 3, 1];
let arr3=[60, 50, 20];

for(let i=0; i<arr1.length; i++)
{
  var obj={};
  if(obj[arr1[i]]==undefined)
  {
    obj["name"]=arr1[i], obj["quantity"]=arr2[i], obj["price"]=arr3[i];
    array.push(obj);
  }
}

console.log(array);

let total=0;
for(let i=0; i<array.length; i++)
{
  var amount=array[i]["quantity"]*array[i]["price"];
  total=total+amount;
}
console.log(total);