// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type throw a RangeError (JavaScript)

function factorial(n) {
    let result = 1;
    
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
}

//throwing the range
function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
}

//another prob
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string
function reverseLetter(str) {
    //coding and coding..
    return str.split("").reverse().join("").replace(/[^A-Za-z]/g, "")
    
}
//another soln
function reverseLetter(str) {
    return str.split('').reverse().filter(function(el) {
      if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(el) != -1) {
        return el;
      }
    }).join('');
  }