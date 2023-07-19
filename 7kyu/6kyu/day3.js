// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
    // Convert the first three digits to a string enclosed in parentheses
    var areaCode = numbers.slice(0, 3).join('');
    // Convert the next three digits to a string
    var firstPart = numbers.slice(3, 6).join('');
    // Convert the last four digits to a string
    var secondPart = numbers.slice(6).join('');
  
    // Return the phone number in the desired format
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }
  
  var phoneNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  console.log(phoneNumber); // Output: "(123) 456-7890"

//   In this JavaScript version, the createPhoneNumber function takes an array of 10 integers as input. It uses the slice method to extract the necessary parts of the phone number and the join method to convert each part into a string. Finally, it combines the parts into a single string using template literals (${...}) with the desired format and returns it.

function createPhoneNumber(numbers) {
    // Convert the first three digits to a string enclosed in parentheses
    var areaCode = numbers.slice(0, 3).join('');
    // Convert the next three digits to a string
    var firstPart = numbers.slice(3, 6).join('');
    // Convert the last four digits to a string
    var secondPart = numbers.slice(6).join('');
  
    // Return the phone number in the desired format
    return `(${areaCode}) ${firstPart}-${secondPart}`;
}

function createPhoneNumber(numbers){

    let areaCode = numbers.slice(0, 3).join('')
    let first = numbers.slice(3,6).join('')
    let second = numbers.slice(6).join('')

    return `(${areaCode} - ${first} - ${second})`;
}

function createP(numbers){
    let areaCode = numbers.slice(0,3).join('')
    let first = numbers.slice(3,6).join('')
    let end = numbers.slice(6).join('')

    return `${areaCode} - ${first} - ${end}`;
}
  

//loop version

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }