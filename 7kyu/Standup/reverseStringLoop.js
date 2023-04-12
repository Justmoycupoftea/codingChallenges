function reverseString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }
  
  let str = "Hello, world!";
  let reversedStr = reverseString(str);
  
console.log(reversedStr); // Output: !dlrow ,olleH

//   n this code, we define a function called reverseString that takes a string as an argument. We then create an empty string called reversedString to store the reversed string. We loop through the string in reverse order using a for loop that starts at the index of the last character and decrements down to the first character. Inside the loop, we concatenate each character to the reversedString variable using the bracket notation to access the character at each index.

//   Finally, we return the reversedString. When we call the reverseString function with the string "Hello, world!", it returns the reversed string "!dlrow ,olleH".