// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
//P:will there be negative numbers?
//R: return all the multiples of 3 & 5
//E: 8 -> (3+5) num % 3 & 5
//P: num is % by 3 % 5, but only return numbers % by 3 || 5 and sum them

// function findSum(n) {
//     let final = n % 5 && n % 3
//     return final % 5 && final % 3 //didnt use a loop to loop through all the numbers
//   }

//correct soln
function findSum(n) {
    let result = 0; //start at 0
    for (let i = 0; i <= n; i += 1) { //looping 1+1 until we find numbers divisble by 3 or 5
      if (i % 3 === 0 || i % 5 === 0) result += i //return the num % by 3 or 5 then sum up the nums to result
    }
    return result
  }