// You are given a integer num.
// You need to print Yes if that integer is a palindrome or else print No.
// A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward, such as madam or racecar.

let num = 1221;

   let rev=0;
   let number = num;
   
   while(num !=0)
   {
       let remainder = num%10;
       rev = rev*10+remainder;
       num = Math.floor(num/10);
   }

if(number == rev){
    console.log("Yes");
}else{
    console.log("No");
}