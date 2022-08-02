// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"
//P: Will there be capitol letters and special characters?
//R: return the string repeated x num times
//E: 'a', 2 -> 'aa'
//P: use repeat method string.repeat(x num times)
function repeater(string, n){
    return string.repeat(n)
  }

//loop soln
function repeater(string, n){
    let newStr = '';

    for (let i = 0; i < n; ++i) {
        newStr+=string;
    }

    return newStr;
}
