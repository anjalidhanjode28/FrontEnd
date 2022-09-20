// Description
// Given an object which contain a key data containing some values
// Implement the following object methods for the given problem
// // Given data array, find the Count of the total Primes in given data array
//                  countPrimes : function() { },
// // Find the sum of all the primes in a given data array
//                  sumOfPrimes : function() { }
// Input
// The first line of the input contains the value N, the number of elements in the data array

// The next line containsNspace separated values, denoting the values of the data array

// Output
// Complete the two function, andprintthe result
// Please note you have to print the result value for each method

// Sample Input 1 
// 9
// 15 17 81 31 21 11 67 57 37

// Sample Output 1
// 5
// 163



obj = {
    data : [], // DO NOT WRITE ANYTHING IN THIS [ Data will be availaible during execution]


   // Count the total Primes in given data array
    countPrimes : function() { 
        var count=0;
            // Part 1 : WRITE CODE HERE
            let add =0;
            
           for(let i=0; i< this.data.length; i++)
           {
               var factore=0;
               for(let j=1; j<=this.data[i]; j++){
                   if(this.data[i]%j==0)
                   {
                       factore++;
                   }
               }
               if(factore==2)
               {
                   count++;
               }
           }
       console.log(count);  
           // console.log the output : count of prime values
    
    },
    
   // Find the sum of all the primes in a given data array
    sumOfPrimes : function() { 
       var sum=0;
            // Part 2 : WRITE CODE HERE
           
            for(let i=0; i < this.data.length; i++)
           {
               var factore=0;
               
               for(let j=1; j<=this.data[i]; j++){
                   if(this.data[i]%j==0)
                   {
                        factore++;
                   }
               }
              
               if(factore==2){
                   sum=sum+this.data[i];
               }
                
           }
           console.log(sum);
           // console.log the output : sum of prime values
    },
}


