let dish = ["Paratha", "Masala Dosa", "Noodles", "Spring Rolls", "Samosa"];
let category = ["North Indian", "South Indian", "Chinese", "Chinese", "North Indian"];
let price  = [40, 80, 50, 60, 25];
let data=[];


for(let i=0; i<dish.length; i++)
{
  var obj={};
  if(obj[dish[i]]==undefined)
  {
    obj["name"]=dish[i], obj["category"]=category[i], obj["price"]=price[i];
    data.push(obj);
  }
}
console.log(data);
console.log("***************************************************************************")

function  getDishesNames(data)
{
  for(let i=0; i<data.length; i++)
  {
    console.log(data[i]["name"]);
  }
}
getDishesNames(data);


console.log("***************************************************************************")


function getDishInRange(data, price1, price2)
{
  for(let i=0; i<data.length; i++){
    let price=data[i].price;
    if(price>=price1 && price<=price2){
      console.log(data[i]);
    }
  }
}

getDishInRange(data, 40, 80);


console.log("***************************************************************************")
function getMaxPriceDish(data)
  {
   let max_price=-Infinity;
    for(let i=0; i<data.length; i++)
    {
      let price=data[i].price;
      if(price>max_price)
      {
        max_price=price;
        var jhola=data[i];
      }
    }
    console.log(jhola);
  }
getMaxPriceDish(data);