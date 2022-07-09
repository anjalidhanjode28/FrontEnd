let array=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
];


let max=-Infinity;

for(let i=0; i<array.length; i++)
{
  for(let j=0; j<array[i]["students"].length; j++)
  {
    var sum=0;
    for(let k=0; k<array[i]["students"][j]["marks"].length; k++)
      {
         sum=sum+array[i]["students"][j]["marks"][k];
      }
      if(max<sum){
        max=sum;
    }
    if(sum==max){
      var result=array[i]["grade"]+"-"+array[i]["students"][j]["name"];
    }
  }
    console.log(result+"-"+sum);
}
