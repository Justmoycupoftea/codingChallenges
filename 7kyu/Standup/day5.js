// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

//will there be any special characters, whole nums, neg nums
//retuurn is a sum that is a num
//use examples
//

function repeats(arr){
    //take arr and filter arr to find single values -> filter single values -> reduce
    //index of num is last index of num
    return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a,c) => a + c, 0) 
    //filters out single of indvidual values
    //first array will give out 7 and 8 
}

Test.assertEquals(repeats([4,5,7,5,4,8]),15);
Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);

console.log(([4,5,7,5,4,8]),15)
console.log([9, 10, 19, 13, 19, 13]),19

//using a loop
function repeats(arr) {
    let seen = new Set();
    let sum = 0;
    
    for (let v of arr) {
      if (!seen.has(v)) {
        seen.add(v);
        sum += v;
      } else {
        sum -= v;
      }
    }
    
    return sum;
  };