//palindrome problem

function Palindrome(str) { 
    for (let i = 0; i < str.length / 2; i++){
      if (str.charAt(i) != str.charAt(str.length - i - 1)){
        return false
      }
    }
   
    return true; 
  
  }
     
  // keep this function call here 
  console.log(Palindrome(readline()));
  console.log(Palindrome('mom'));
  console.log(Palindrome('shoes'));
  console.log(Palindrome('dad'));
  console.log(Palindrome('wow'));
  console.log(Palindrome('skygen'));

//another method

function isPalindrome(str) {
  //set reverse variable split the string
  //reverse the string
  //join the string
  //return the string if equal to reverse variable
    let reversed = str.split("").reverse().join("");
    return str === reversed;
  }

  function ispalidrome(str) {
    let reversed = str.split("").reverse().join("")
    return str === reversed;
  }

  
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false
  