//### Problem 1 : **Users Gender**

//- Create an Object that has the `name` and `gender` (M/F) of the users in an array with the key called `data`
///- Create a method for that object which takes the gender as a //parameter and returns the no of users for the provided gender
//- Create a method for that object which takes the name as a parameter and returns that gender of that particular user if the user is not found it returns "NA"

let name=["Ashish","Alka","Razaa","Nitya","Shanu","Abhinav","Muskan","Lokesh"];
let gender=["M","F","M","F","M","M","F","M"];



let object={
       data: [],

       addItem: function(name, gender)
       {
            let obj={};
            obj["name"]=name;
            obj["gender"]=gender;

            this.data.push(obj);
       },

       no_of_users: function(gender)
       {
           var count=0;
           for(let i=0; i<this.data.length; i++)
           {
             if(gender==this.data[i].gender){
               count++;
             }
           }
         return count;
       },
  
       checkGender: function(name)
       {
            var result=false;
            for(let i=0; i<this.data.length; i++)
            {
              if(this.data[i].name==name)
              {
                result=true;
                return this.data[i].gender;
              }
            }
            if(result==false){
                var x= "NA";
                return x;
            }
       },
  
}     

for(let i=0; i<name.length; i++)
{
  object.addItem(name[i], gender[i]);
}
console.log(object.data);

console.log(object.checkGender("Mus"));

console.log(object.no_of_users("F"));