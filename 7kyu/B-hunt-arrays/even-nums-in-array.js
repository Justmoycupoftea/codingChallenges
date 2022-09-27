// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
//P:an array of numbers coming in, will there be decimals?
//R:return even numbers from the array and return them in order and how many even numbers that are present in the array
//E:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
//P: use a filter function and filter and return all even nums from array

function evenNumbers(array, number) {
    var EvenNumbers= [];
    
    for(var i=0; i<=array.length; i++)
     {
         if(array[i] % 2 ==0)
           EvenNumbers.push(array[i]);
     }
    
      return EvenNumbers.splice(EvenNumbers.length-number,number);
      
   }
//another soln
const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);
