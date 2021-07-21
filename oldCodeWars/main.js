//attempted codewar ladder 8kyu - 7kyu - 6kyu - 7kyu -8kyu

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
    return s.repeat(n);
}

//7kyu 
// Your task is to convert strings to how they would be written by Jaden Smith. 
// Capitalize every word.

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

//6kyu
// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//  The first word within the output should be capitalized only 
//  if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
str = str.split('');
return str.map(function(el, i){
  if(el == '-' || el == '_'){
    el = str[i+1].toUpperCase();
    str.splice(i+1, 1);
  }
  return el;
}).join('');
}

//other soln
function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }

//   Given a list of integers, determine whether the sum of its elements is odd or even.

//   Give your answer as a string matching "odd" or "even".
  
//   If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    let sum = 0;
    
    if (array.length !== 0) {
      sum = array.reduce((x, y) => x + y);
      return sum % 2 === 0 ? 'even' : 'odd';
      
    } else {
      return 'even';
    }
}
//other soln
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }