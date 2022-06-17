// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

//P:will there be decimal numbers?
//R: return the absolute value of each of number's decimal digits
//E: 10 --> 1 99-->18
//P: sum the nums abs it and return number's decimal digit

// function sumDigits(number) {
//     let nums = number.split()
//     let nums2 = nums.map(x => x/1)
//     return Math.abs(nums + nums2)
// } wtf was i thinking

function sumDigits(number) {
    let arr = Math.abs(number).toString().split('')
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++)
      sum += +arr[i]
    return sum;
}

//other soln
function sumDigits(number) {
    var i = 0;
    var sum = 0;
    number = Math.abs(number)
    while(number != 0)
    {
        sum += number % 10
        number = Math.floor(number/10)
    }
    return sum
}
  