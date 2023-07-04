// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function sumMultiples(num) {
    if (num < 0) {
      return 0;
    }
  
    let sum = 0;
    for (let i = 3; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  // Testing the function with the example case
  const number = 10;
  const result = sumMultiples(number);
  console.log(result);  // Output: 23
  
//   In this solution, we first check if the given number is negative. If it is, we return 0 as per the requirements. Otherwise, we initialize a variable sum to keep track of the running sum of multiples.

//   Then, we iterate over all the numbers starting from 3 (since multiples of 3 and 5 below 3 do not exist) up to the given number (excluding it). For each number, we check if it is divisible by 3 or 5 using the modulo operator (%). If it is, we add it to the sum variable.
  
//   Finally, we return the computed sum.

//another soln

function solution(number){
    return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
  }