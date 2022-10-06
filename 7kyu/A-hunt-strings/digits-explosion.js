// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"
//P:
//R:
//E:
//P:
function explode(s) {
  return s.split("").map((e) => e.repeat(+e)).join("");
}

function explode(s) {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    for (let num = s[i]; num > 0; num--) {
      newStr += s[i]
    }
  }
  return newStr
}

// First I splitted the first string into an array and mapped it, then I made a variable "y" that contained an empty string.

// function explode(s) {
// return s.split('').map(d=>{
// let y = '';

// Then I added a for loop that would continue iterating until the i varible is higher than the digit that is being mapped.
// Inside of this loop I just added the digit string to the "y" variable, and at the end of this loop I just returned y

// Input Digit: '4'
// Output String: '4444'

// at the end I would end up with an array of strings like this ones:

// Input String: '4213'
// Output String: ['4444', '22', '1', '333']

// So at the end I just joined the result array so I get something like this.

// Input string: ['4444', '22', '1', '333']
// Output String: '4444221333'

