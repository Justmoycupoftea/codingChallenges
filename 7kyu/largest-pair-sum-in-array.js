// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

//P: will there be negative nums?
//R:return the two highest nums and sum
//E: 1,2,3 2+3=5
//P: sort the nums and sum the two last numbers from the end that are sorted

function largestPairSum (numbers) {
    //TODO: Write your Code here
    let nums = Array.from(numbers)
    let sorted = nums.sort((a,b)=> a-b)
    return sorted[sorted.length-2] + sorted[sorted.length-1] 
  }
  //other solns
  function largestPairSum(numbers){
    numbers.sort(function(a, b){ return b - a });
    return numbers[0] + numbers[1];
  }