// Description
// Masai School had hosted a Football tournament. You got hold of a profound description of the final match's process. On the whole, there are n lines in that description each of which described one goal. Every goal was marked with the name of the team that had scored it. Write a program to find the name of the team that won the finals. It is guaranteed that the match did not end in a tie.

// Input
// Input Format
// The first line contains an integer n — the number of lines in the description.
// Then follow n lines — for each goal the names of the teams that scored it.

let obj={};
  
  for(let i=0; i<n; i++){
      if(obj[teamNamesArr[i]]==undefined){
          obj[teamNamesArr[i]]=1;
      }else{
          obj[teamNamesArr[i]]=obj[teamNamesArr[i]]+1;
      }
  }
  
  let max = -Infinity;
  let bag = "";
  
  for(let key in obj){
      if(max<obj[key]){
          max=obj[key];
          bag=bag+key;
      }
  }
  console.log(bag);

