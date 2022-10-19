// Description
// Phulera is a peaceful place, where everyone lives in harmony. The gram panchayat consists of Pradhan Ji, Up-Pradhan Ji, Sachiv Ji, and Vikas(The friendly helper). The Panchayat is preparing for the ceremony on Independence day. According to the tradition of the village, sweets are distributed to every family in the village.
// There are two types of sweets available, and Pradhan Ji decides that all the families who have even number of members will get sweets ofType 1, and all the families who have odd number of members, will get sweets ofType 2. So, he assigns Sachiv Ji, the task of assigning the sweets.
// Since, Sachiv Ji, has to study for his CAT exam, he asks you to distribute the sweets for him. There are N families in the village, and the number of members in each family, is given in the form of an array. According to Sachiv Ji's plan, if the sweets ofType 1are ready first, then the families with even number of members need to distributed the sweets first, then the families with odd number of members. Similarly, if the sweets ofType 2are ready first, then the families with odd number of members will be distributed the sweets first, then the families with even number of members.
// Also, Sachiv Ji does not wants chaos, so he wants the odd and even families to be sorted among themselves in increasing order of their sizes.

// 2
// 6
// 1 3 5 2 7 4
// 1
// 6 
// 1 3 5 2 7 4
// 2

function seperationOfOddEven(N, fieldSize,Q) {
    //write code here
    
    let temp1 = [];
    let temp2 = [];
    let bag = "";
    
      for(let i=0; i<N; i++){
          if(fieldSize[i]%2 === 0){
             temp1.push(fieldSize[i]);
          }else{
             temp2.push(fieldSize[i]);
          }
      }
    
      temp1.sort(function(a,b){
          return a-b;
      });
      
      temp2.sort(function(a,b){
          return a-b;
      });
    
    if(Q === 1){
          for(let i=0; i<temp1.length; i++){
              bag += temp1[i]+" ";
          }
          for(let i=0; i<temp2.length; i++){
              bag += temp2[i]+" ";
          }
    }
    
    if(Q === 2){
        for(let i=0; i<temp2.length; i++){
            bag += temp2[i]+" ";
        }
        for(let i=0; i<temp1.length; i++){
            bag += temp1[i]+" ";
        }
    }
    console.log(bag);
  }
  