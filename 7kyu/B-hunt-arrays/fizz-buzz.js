// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]
//P: nums 1 - n will be coming in, will there be negative nums? will there be decimals?
//n will never be less than 1, so no negatives
//R: return multiples of 3 and 5
//E: 3/3 = fizz 5/5 = buzz 15/3 || 15/5 = fizzbuzz
//P: loop through problem finds nums divisible by 3 or 5 and 3/5, % 3 && 5 to find num then log
//condtionals use if and else if statements

// Return an array
function fizzbuzz(n)
{
    let arr = []
  for(let i = 1; i <= n; i++)
  if (i % 5 == 0 && i % 3 == 0){
     (arr.push('FizzBuzz')) }
  else if (i % 3 == 0) {
    (arr.push('Fizz')); }
    else if (i % 5 == 0) {
        (arr.push('Buzz')) }
    else {
         (arr.push(i)); }
    return arr
}


  

  


