// Description
// You are given a string stored in a variable with the namestr
// The length of the string is stored in a variable with the nameN
// You have to calculate the power of the string
// The power of the string is given by the formula :5*x + 7*y, wherexis the number of vowels in the string, whileyis the number of consonants
// For example, consider the value stored inN = 6, andstr = ankush. Therefore, the number of vowels = 2, and consonants = 4
// Therefore, the value of the equation becomes :5*2 + 7*4 = 38. Therefore, the required output is38

let N = 6;
let str = 'ankush';


let vowels='aeiou';
	let count=0;
	
	for(let i=0; i<N; i++){
	    for(let j=0; j<vowels.length; j++){
	        if(str[i]==vowels[j]){
	            count++;
	        }
	    }
	}
	let y=N-count;
	let x=count;
	console.log(5*x + 7*y);