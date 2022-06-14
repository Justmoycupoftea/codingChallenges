// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
//P: will there be negative or decimal numbers?
//R: return add 2 nums and return binary
//E: 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
//P: sum the two num and parseint?
function addBinary(a,b) {
    return (a+b).toString(2)
}
//toString has an optional argument 'base', which takes an integer argument. Binary is base 2; thus n.toString(2) converts n into a string containing the binary number. 
//First I just summed the numbers and after that I just converted it to string with a 2 parameter so it would only be 0 and 1 (binary code)

//another soln
function addBinary(a,b){
    return Number(a + b).toString(2);
 }
  