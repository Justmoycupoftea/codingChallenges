function reverseString(str) {
    let charMap = new Map();
    let reversedString = "";
  
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      charMap.set(i, char);
    }
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += charMap.get(i);
    }
  
    return reversedString;
  }
  
  let str = "Hello, world!";
  let reversedStr = reverseString(str);
  
console.log(reversedStr); // Output: !dlrow ,olleH

// In this code, we define a function called reverseString that takes a string as an argument. We then create a new Map object called charMap to store the characters in the string. We loop through the string and use the set() method to add each character to charMap with its corresponding index as the key.

// We then loop through the string in reverse order and use the get() method to retrieve each character from charMap using its index as the key. We concatenate these characters to a new string called reversedString. Finally, we return reversedString.

// When we call the reverseString function with the string "Hello, world!", it returns the reversed string "!dlrow ,olleH".
  