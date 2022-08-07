// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.
//P: will there be any negative nums?
//R: return num*num, sum of all, sqrt of result, and divide by 2
//E: see above
//P: multiple all parameters by itself, .reduce all together, take sqrt and then divide by 2

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // Create an array to store the values of the parameter
    let age = [age1, age2, age3, age4, age5, age6, age7, age8]
    // Local variable to store value
    let sum = 0
    // Looping through the age array using the for each method and using the el as a parameter to store each value of the array
    age.forEach( function(el){
      // Multiplying each element in the array by itself and then storing the sum in the variable sum
      sum += el * el
    })
    // returning the the square root of the variable sum, divide by 2, then rounded down
    return Math.floor( Math.sqrt(sum) / 2 )
  }