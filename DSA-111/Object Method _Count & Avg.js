// Description
// Given an object which contain a key data containing some values
// Implement the following object methods for the given problem
// Given data array, find the count of even number present in data array
                //  countEven : function() { },

// Given data array, find the sum of odd number present in the data array
                //  sumOdd : function() { },
// Find the average of all the numbers present in data array
                //   average : function() { },
// Note : For Average take the ceil value

let N = 13;
let arr = [27, 31, 42, 78, 62, 12, 34, 89 ,51, 41, 31, 38, 40];

obj = {
    data : [], // DO NOT WRITE ANYTHING IN THIS [ Data will be automatically availaible during execution]
   

    countEven : function() { 
       // Part 1 : Write Code Here
       var count=0;
       
       for(let i=0; i<this.data.length; i++){
           if(this.data[i]%2==0){
               count++;
           }
       }
       console.log(count);

    },

    countOdd : function() { 
        // Part 2 : Write Code Here
        
       var count=0;
       
       for(let i=0; i<this.data.length; i++){
           if(this.data[i]%2==1){
               count++;
           }
       }
       console.log(count);
       
      
    },



    average : function() { 
    
        // Part 3 : Write Code Here
       var count=0;
       var sum=0;
       
       for(let i=0; i<this.data.length; i++){
           sum=sum+this.data[i];
           count++;
       }
       console.log(Math.floor(sum/count));
       
    },
}