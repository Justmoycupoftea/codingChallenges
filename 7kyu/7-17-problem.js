// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
function solution(digits){
    let s = [];
    for (var i = 0; i < digits.length - 4; i++){
        s.push(digits.substr(i,5));
    };
    return Math.max(...s);
}

//another soln
// questions:
//   • what is the minimum number of digits it can have?
// 
// considerations:
//   • Look out for BigO notation
//
// approaches
//   • use linear search
// 
// sudo code
//   return digits if less or equal than 5
//   save first 5 digits
//   loop with i starting as 0
//     get digit from i to i + 4
//     is current digits greater than previous?
//       replace greatest number with current digit
//     else, increment i and keep looking


function solution(digits){
    if (digits.length <= 5) return digits;
    
    let largestFiveDigitNumber = digits.slice(0, 5);
    for (let i = 5; i < digits.length; i++) {
      let currentFiveDigitNumber = digits.slice(i, i + 5);
      if (currentFiveDigitNumber > largestFiveDigitNumber) {
        largestFiveDigitNumber = currentFiveDigitNumber; 
      }
    }
    return Number(largestFiveDigitNumber);
  }
  