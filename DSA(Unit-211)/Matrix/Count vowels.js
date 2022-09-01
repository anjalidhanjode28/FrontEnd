// Description
// Given a 2D array with N rows and M columns containing lowercase alphabets. Given a pattern containing the array elements in V shape, starting from the top right corner and ending up at the bottom right corner as given below:

// Calculate the number of vowels that are contained in the V shape.
// Note - Assume 1-based indexing.

// Input
// First line: Single integer denoting the value of T - the number of test cases.
// For each test case:
// First line: Two single space-separated integers denoting the value of N and M.
// N lines follow:

let n = 7;
let m = 4;

let mat = [
  ['t','o','z','z'],
  ['s','b','s','n'],
  ['e','f','y','c'],
  ['l','v','m','p'],
  ['v','z','f','k'],
  ['u','m','e','p'],
  ['a','w','l','b']
];


if(Math.ceil(n/2) == m){
        
        let vowels = "aeiou";
        let temp="";
        let count = 0;
        let i=0;
        let j=m-1;
        
        while(i<Math.ceil(n/2)-1 && j>=0)
        {  
            temp=temp+mat[i][j]+" ";
            for(let k=0; k<vowels.length; k++)
            {
              
                if(mat[i][j] == vowels[k])
                {   
                  
                  count++;
                }
            }
            i++;
            j--;
        }
        
        i=Math.floor(n/2);
        j=0;
        while(i<n && j<m)
        {   
            temp=temp+mat[i][j]+" ";
            for(let k=0; k<vowels.length; k++)
            {
              
                if(mat[i][j] == vowels[k])
                {                
                  
                  count++;
                }
            }
            i++;
            j++;
        }
         console.log(count);
  console.log(temp);

  
}else{
    console.log(-1);
}
   